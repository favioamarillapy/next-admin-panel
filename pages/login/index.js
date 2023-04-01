import NextJsIcon from "@/components/Icons/NextJs";
import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import CreateAccount from "./CreateAccount";


export default function LoginPage() {

    return (
        <Box sx={{
            minHeight: '100vh',
            overflowX: 'hidden',
            display: 'flex',
        }}>
            <Box
                sx={{
                    height: '100vh',
                    width: '70%',
                    backgroundImage: 'url(/assets/images/bg-login.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}
            >
                <Box sx={{ marginLeft: 3 }}>
                    <NextJsIcon width={100} />
                </Box>
            </Box>

            <Box
                sx={{
                    height: '100vh',
                    width: '30%',
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 7
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
        </Box >
    )
}