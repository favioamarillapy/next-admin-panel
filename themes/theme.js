const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#4b4561',
        },
        secondary: {
            main: '#585c41'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: '#fff',
                    color: '#000',
                    boxShadow: 'none'
                }
            }
        }
    }
});