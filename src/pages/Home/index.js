import React from "react";
import Stack from "@mui/material/Stack";

import Main from "./main";
import Sell from "./Sell";
import Slider from "./Slider";
import ActiveStorage from "./ActiveStorage";

import './index.css';

const Home = () => {
    return (
        <Stack
            sx={{
                '& > div': {
                    p: theme => theme.custom.containerPadding
                }
            }}
        >
            <Main />
            <Slider />
            <ActiveStorage />
            <Sell />
        </Stack>
    )
}

export default Home;