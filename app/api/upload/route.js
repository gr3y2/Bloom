import { NextResponse } from 'next/server'
import { uploadToCloudinary, deleteFromCloudinary } from '@/lib/cloudinary'
import dbConnect from '@/lib/mongodb'
import Media from '@/models/Media'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// POST: Upload media (admin only)
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file')
    const page = formData.get('page') || 'general'
    const section = formData.get('section') || 'gallery'
    const title = formData.get('title') || ''
    const description = formData.get('description') || ''

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const resourceType = file.type.startsWith('video/') ? 'video' : 'image'
    const folder = `bloom/${page}/${section}`

    const uploadResult = await uploadToCloudinary(buffer, folder, resourceType)

    await dbConnect()

    const media = await Media.create({
      page,
      section,
      publicId: uploadResult.public_id,
      url: uploadResult.secure_url,
      thumbnailUrl: resourceType === 'video' ? uploadResult.secure_url.replace('.mp4', '.jpg') : uploadResult.secure_url,
      type: resourceType,
      title,
      description,
    })

    return NextResponse.json({ success: true, data: media })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// GET: Fetch media for a page
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')
    const section = searchParams.get('section')
    const type = searchParams.get('type')

    await dbConnect()

    const query = {}
    if (page) query.page = page
    if (section) query.section = section
    if (type) query.type = type

    const media = await Media.find(query).sort({ uploadedAt: -1 })

    return NextResponse.json({ success: true, data: media })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// DELETE: Remove media (admin only)
export async function DELETE(request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const { publicId, mediaId, type } = await request.json()

    // Delete from Cloudinary
    await deleteFromCloudinary(publicId, type || 'image')

    // Delete from DB
    await dbConnect()
    await Media.findByIdAndDelete(mediaId)

    return NextResponse.json({ success: true, message: 'Media deleted successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
