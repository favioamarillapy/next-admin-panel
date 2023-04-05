import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
            id: 'login',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                // const res = await fetch("your-backend-login-url", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()

                // if (res.ok && user) {
                //     return user
                // }

                return {
                    "mensaje": "Acceso concedido",
                    "error": false,
                    "data": {
                        "id": 2205332,
                        "nombre": "admin",
                        "username": "admin",
                        "idEmpresa": 2205317,
                        "nombreEmpresa": "admin",
                        "nombreRol": "Administrador",
                        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkdhbmFkZXJhIiwiaWF0IjoxNjgwNzA2MTE3LCJleHAiOjE2ODA3MDk3MTd9.udDoKxi66eBZ5s4b2av1QZ_59OCa7PZbiMwXGlnDOO5qUMlE3i6L5MKQ0DOc44rE1hdLLwbpn2S44r25arPFdg",
                        "permisions": [
                            "Administrador"
                        ],
                        "password": ""
                    }
                }
            }
        })
    ],

    callbacks: {

        async jwt({ token, account, user }) {

            if (account) {
                token.accessToken = user.data.token;

                if (account.provider === 'login') {
                    token.user = user.data;
                }
            }

            return token;
        },

        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
            session.user = token.user;

            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/login',
        error: '/login',
    }


});