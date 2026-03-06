import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials

        // Check username
        if (username !== process.env.ADMIN_USERNAME) {
          throw new Error('Invalid credentials')
        }

        // Check password against bcrypt hash
        const isValid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)

        if (!isValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: '1',
          name: 'Bloom Admin',
          email: 'admin@bloom.ng',
          role: 'admin',
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
