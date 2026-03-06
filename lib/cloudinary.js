import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default cloudinary

// Helper: Upload buffer to Cloudinary
export async function uploadToCloudinary(buffer, folder = 'bloom', resourceType = 'auto') {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        quality: 'auto',
        fetch_format: 'auto',
      },
      (error, result) => {
        if (error) reject(error)
        else resolve(result)
      }
    ).end(buffer)
  })
}

// Helper: Delete from Cloudinary
export async function deleteFromCloudinary(publicId, resourceType = 'image') {
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType })
}

// Helper: Get folder contents
export async function getFolderMedia(folder) {
  const result = await cloudinary.search
    .expression(`folder:bloom/${folder}`)
    .sort_by('created_at', 'desc')
    .max_results(100)
    .execute()
  return result.resources
}
