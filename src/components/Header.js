import React from "react";
import Stack from "@mui/material/Stack";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as HeaderIcon } from '../assets/imgs/header_icon.svg';
import { HeaderButton } from "./Styled";

const Header = () => {
    return (
        <Stack>
            <AppBar
                position="static"
                sx={{
                    background: 'transparent',
                    '& > div': {
                        px: 15,
                        py: 5
                    }
                }}
            >
                <Toolbar>
                    <Stack sx={{ flexGrow: 1 }} direction='row' spacing={1}>
                        <HeaderIcon />
                        <Typography sx={{ fontSize: theme => theme.fontSize.A1, fontWeight: 600, fontFamily: 'Inter' }}>
                            StorageConnect
                        </Typography>
                    </Stack>
                    <HeaderButton>Active Listings</HeaderButton>
                    <HeaderButton>Sell your Self Storage</HeaderButton>
                    <HeaderButton>Free Evaluation</HeaderButton>
                    <HeaderButton>Learn</HeaderButton>
                    <HeaderButton>Contact</HeaderButton>
                </Toolbar>
            </AppBar>
        </Stack>
    )
}

export default Header;