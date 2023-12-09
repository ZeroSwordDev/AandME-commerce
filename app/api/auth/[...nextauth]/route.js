import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId:
        "385925683575-30v55s382u5ol5np7vf5gt8olvnp8hv9.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
