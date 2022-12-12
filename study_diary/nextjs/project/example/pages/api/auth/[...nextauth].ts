import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export default NextAuth({
  //** Provider
  providers: [
    NaverProvider({
      clientId: String(process.env.NEXT_PUBLIC_NAVER_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET),
    }),
    KakaoProvider({
      clientId: String(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET),
    }),
  ],

  //** Session
  session: {
    strategy: 'jwt',
  },

  //** JWT Options
  jwt: {
    async encode({ token, secret }) {
      return jwt.sign(token!, secret, { algorithm: 'HS256' });
    },
    async decode({ token, secret }) {
      return jwt.verify(token as string, secret, {
        algorithms: ['HS256'],
      }) as JWT;
    },
  },

  //** Callback
  callbacks: {
    async jwt({ token, profile }) {
      return {
        ...token,
      };
    },

    async session({ token, session }) {
      const secretKey = String(process.env.NEXTAUTH_SECRET_KEY);

      const encodedToken = jwt.sign(token!, secretKey, {
        algorithm: 'HS256',
      });

      session.id = token.sub;
      session.token = encodedToken;

      return session;
    },
  },
});
