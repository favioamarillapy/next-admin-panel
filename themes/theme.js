const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
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