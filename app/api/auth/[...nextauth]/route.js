
import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import mongoose from 'mongoose'
import User from '@/models/User'
import payment from '@/models/Payment'
import connectDb from '@/app/db/connectDb'


export const authoptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDb()
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          //create a new user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })        
        }
        return true
      }
    },
    async session({session, user, token}){
      const dbUser=await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      return session
    },
  }
})

export { authoptions as GET, authoptions as POST }