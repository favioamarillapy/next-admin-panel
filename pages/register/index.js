import { useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import AuthLayout from "@/components/Layout/AuthLayout"


export default function LoginPage() {

    const [fullName, setFullName] = useState('Favio Amarilla Miño')
    const [username, setUsername] = useState('favioamarillapy')
    const [password, setPassword] = useState('123456789')

    return (
        <AuthLayout
            title={'Adventure starts here 🚀'}
            subTitle={'Make your app management easy'}
        >
            <Box
                sx={{
                    width: '100%'
                }}
            >
                <TextField
                    label="Full Name"
                    type="text"
                    margin="normal"
                    fullWidth
                    color="secondary"
                    name="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
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
                >
                    LOGIN
                </Button>
            </Box>
        </AuthLayout>
    )
}