const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY
const PAYSTACK_BASE = 'https://api.paystack.co'

// Initialize a Paystack transaction
export async function initializeTransaction({ email, amount, metadata = {} }) {
  const response = await fetch(`${PAYSTACK_BASE}/transaction/initialize`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      amount: amount * 100, // Paystack uses kobo (1 Naira = 100 kobo)
      metadata,
      currency: 'NGN',
      callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/donate/verify`,
    }),
  })
  const data = await response.json()
  return data
}

// Verify a Paystack transaction
export async function verifyTransaction(reference) {
  const response = await fetch(`${PAYSTACK_BASE}/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
    },
  })
  const data = await response.json()
  return data
}
