const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#4b4561',
        },
        secondary: {
            main: '#9155FD'
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
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        },
    }
});