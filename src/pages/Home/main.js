import React from "react";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";
import { Typography } from "@mui/material";
import { XButton } from "../../components/Styled";

const Main = () => {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${require('../../assets/imgs/mainBg.png').default})`,
                backgroundSize: '100% 100%'
            }}
        >
            <Header />
            <Stack
                sx={{
                    py: 15
                }}
                alignItems='center'
                spacing={2}
            >
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.xxl,
                        color: theme => theme.colors.white,
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        fontWeight: 800,
                    }}
                >
                    Self Storage Business<br />Buy. Sell. Learn.
                </Typography>
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.xl,
                        color: theme => theme.colors.white,
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        fontWeight: 500,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit<br />sagittis, aliquam non tortor blandit lobortis. blandit
                </Typography>
                <Stack direction="row" spacing={2.5} sx={{ pt: 6 }}>
                    <XButton>Sell Your Self Storage</XButton>
                    <XButton
                        sx={{
                            color: theme => theme.colors.gray,
                            background: theme => theme.colors.white,
                            '&:hover': {
                                background: theme => theme.colors.white
                            }
                        }}
                    >
                        Active Self Storage Listings
                    </XButton>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Main;