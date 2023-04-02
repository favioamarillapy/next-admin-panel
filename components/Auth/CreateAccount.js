import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CreateAccount() {

    return (
        <>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 2 }}
            >
                <Typography
                    variant="p"
                    marginBottom={4}
                    fontWeight={400}
                    color={'#3a354199'}
                >
                    New on our platform? &nbsp;&nbsp;
                </Typography>

                <Typography
                    variant="a"
                    color='secondary'
                    marginBottom={4}
                    fontWeight={400}
                >
                    <Link href='/users'>
                        Create an account
                    </Link>
                </Typography>
            </Box>



            <Divider
                sx={{}}
            >
                <Typography
                    variant="p"
                    color={'#3a354199'}
                    marginBottom={4}
                    fontWeight={400}
                >
                    Or
                </Typography>
            </Divider>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingLeft: 15,
                paddingRight: 15
            }}>
                <FacebookIcon />
                <TwitterIcon />
                <GoogleIcon />
                <GitHubIcon />
            </Box>
        </>
    )
}