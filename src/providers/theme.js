import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import "../assets/scss/index.scss";

// ** Declare Theme Provider
const MaterialThemeProvider = ({ children }) => {

    const themeConfig = {
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: 10
                    }
                }
            },
        },
        fontSize: {
            A1: 20
        },
        colors: {
            white: 'ffffff',
            black: '000000',
            yellow: '#FFCE31'
        }
    }

    const theme = createTheme(themeConfig);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MaterialThemeProvider;
