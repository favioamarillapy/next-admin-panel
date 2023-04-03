import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material"


export default function AuthLayout({ children, title, subTitle }) {

    const [isMobile, setIsMobile] = useState(false)

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
                <Typography variant="h5" color={'#534F5A'} fontWeight={600}>{title}</Typography>
                <Typography variant="p" color={'#3a354199'} marginBottom={4} fontWeight={400}> {subTitle} </Typography>

                {children}

            </Box>
        </Box>
    )
}