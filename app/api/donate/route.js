import { NextResponse } from 'next/server'
import { initializeTransaction, verifyTransaction } from '@/lib/paystack'

// POST: Initialize donation
export async function POST(request) {
  try {
    const { email, amount, name } = await request.json()

    if (!email || !amount) {
      return NextResponse.json(
        { success: false, error: 'Email and amount are required' },
        { status: 400 }
      )
    }

    if (amount < 100) {
      return NextResponse.json(
        { success: false, error: 'Minimum donation is ₦100' },
        { status: 400 }
      )
    }

    const transaction = await initializeTransaction({
      email,
      amount,
      metadata: {
        name,
        custom_fields: [
          {
            display_name: 'Donor Name',
            variable_name: 'donor_name',
            value: name,
          },
          {
            display_name: 'Purpose',
            variable_name: 'purpose',
            value: 'Bloom Stage Arts Donation',
          },
        ],
      },
    })

    if (!transaction.status) {
      return NextResponse.json(
        { success: false, error: 'Failed to initialize payment' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        authorizationUrl: transaction.data.authorization_url,
        reference: transaction.data.reference,
      },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// GET: Verify donation after redirect
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get('reference')

    if (!reference) {
      return NextResponse.redirect(new URL('/drama?payment=failed', request.url))
    }

    const verification = await verifyTransaction(reference)

    if (verification.data?.status === 'success') {
      return NextResponse.redirect(
        new URL(`/drama?payment=success&ref=${reference}`, request.url)
      )
    }

    return NextResponse.redirect(new URL('/drama?payment=failed', request.url))
  } catch (error) {
    return NextResponse.redirect(new URL('/drama?payment=failed', request.url))
  }
}
