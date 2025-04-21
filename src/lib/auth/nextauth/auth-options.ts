import { ensureUser } from "@/lib/repositories/user-repository";
import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email } = user;
      if (!email) return false;

      await ensureUser(email);
      return true;
    },
    async jwt({ token }) {
      // Persist the OAuth access_token to the token right after signin
      //if (account) {
      //  token.accessToken = account.access_token
      //}
      return token
    },
    async session({ session }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken
      return session
    }
  }
}
