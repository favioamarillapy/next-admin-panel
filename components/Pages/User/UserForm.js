import { useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";


export default function UserForm() {

    const [fullName, setFullName] = useState('Favio Amarilla Miño')
    const [username, setUsername] = useState('favioamarillapy')
    const [password, setPassword] = useState('123456789')

    const router = useRouter();
    const id = router.query['id'];


    const handleUserSave = () => {
        router.push('/users')
    }


    return (
        <Grid container spacing={2}
            sx={{
                background: '#fff',
                pr: 2,
                pb: 2,
                borderRadius: 2
            }}>

            <Grid item xs={8}>
                <Typography variant="h5">
                    Users / Add
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Divider light />
            </Grid>



            <Grid item md={6} sm={12}>

                {
                    id && (
                        <TextField
                            label="ID"
                            type="number"
                            margin="normal"
                            fullWidth
                            color="secondary"
                            name="id"
                            value={id}
                            disabled={true}
                        />
                    )
                }
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

                <Grid md={3} sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleUserSave}
                    >
                        Accept
                    </Button>

                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleUserSave}
                    >
                        Cancel
                    </Button>
                </Grid>

            </Grid>

        </Grid >
    )

}