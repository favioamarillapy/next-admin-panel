import { useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { signIn } from 'next-auth/react'
import AuthLayout from "@/components/Layout/AuthLayout"
import { useRouter } from "next/router"


export default function LoginPage() {

    const router = useRouter()
    const [username, setUsername] = useState('adminGanadera')
    const [password, setPassword] = useState('ganacom2017')


    const login = async () => {
        const { ok, status } = await signIn("login", {
            username,
            password,
            redirect: false,
        });

        if (ok && status == 200) {
            router.push('/')
        }
    }

    return (
        <AuthLayout
            title={'Welcome to Admin Panel 👋🏻'}
            subTitle={'Please sign-in to your account'}
        >

            <Box
                sx={{
                    width: '100%'
                }}
            >
                <TextField
                    label="Username"
                    type="text"
                    margin="normal"
                    fullWidth
                    color="secondary"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    fullWidth
                    color="secondary"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Typography
                    variant="p"
                    color='secondary'
                    marginBottom={4}
                    fontWeight={400}
                    sx={{ float: 'right' }}
                >
                    Forgot Password?
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={login}
                >
                    LOGIN
                </Button>
            </Box>

        </AuthLayout>

    )
}