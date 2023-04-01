import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import CreateAccount from "./CreateAccount"


export default function LoginPage() {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            const userAgent =
                typeof window.navigator === "undefined" ? "" : navigator.userAgent;
            const mobile = Boolean(
                userAgent
                    .match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
            );
            setIsMobile(mobile);
        }

        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'linear-gradient(0deg, #4b4561 10%, #9155FD 90%)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: isMobile ? '100vh' : '70vh',
                    width: isMobile ? '100%' : '30%',
                    background: '#fff',
                    borderRadius: isMobile ? 0 : 10,
                    padding: isMobile ? 2 : 7
                }}
            >
                <Typography variant="h5" color={'#534F5A'} fontWeight={600}>Welcome to Admin Panel 👋🏻</Typography>
                <Typography variant="p" color={'#3a354199'} marginBottom={4} fontWeight={400}>Please sign-in to your account </Typography>

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
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        color="secondary"
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

                    <CreateAccount />

                </Box>
            </Box>
        </Box>
    )
}