import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import CreateAccount from "@/components/Auth/CreateAccount"


export default function LoginPage() {

    const [isMobile, setIsMobile] = useState(false)

    const [fullName, setFullName] = useState('Favio Amarilla Miño')
    const [username, setUsername] = useState('favioamarillapy')
    const [password, setPassword] = useState('123456789')



    useEffect(() => {
        setIsMobile(window.innerWidth < 900);

        window.addEventListener('resize', setIsMobile(window.innerWidth < 900))
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
                <Typography variant="h5" color={'#534F5A'} fontWeight={600}>Adventure starts here 🚀</Typography>
                <Typography variant="p" color={'#3a354199'} marginBottom={4} fontWeight={400}> Make your app management easy</Typography>

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

                    <CreateAccount />

                </Box>
            </Box>
        </Box>
    )
}