import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"



export default NextAuth({

  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },


  providers: [
    CredentialsProvider({ 
      name: "Credentials",  

      credentials: {
        email: {email: true, label: "Email", type: "text"},
        password: {label: "Password", type: "password"}
      },
     
      async authorize(credentials) {
        console.log( "credentials from authorize", credentials);
        
        const {email, password} = credentials as {email: string, password: string}

        const res = await fetch("http://localhost:4444/auth/login", {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data.message || 'Something went wrong!')
        }
        return data
      }
    })
  ],

  pages: {
    signIn: '/auth/login',

  },

})