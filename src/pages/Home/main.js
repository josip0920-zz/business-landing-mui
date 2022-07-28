import React from "react";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";

const Main = () => {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${require('../../assets/imgs/mainBg.png').default})`
            }}
        >
            <Header />
        </Stack>
    )
}

export default Main;