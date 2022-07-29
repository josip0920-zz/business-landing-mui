import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardB_info } from "../../config";
import { CardA } from "../../components/Card";

const ActiveStorage = () => {
    return (
        <Stack
            sx={{
                p: 10,
                backgroundImage: `url(${require('../../assets/imgs/bg/Rectangle_8.png').default})`,
                backgroundSize: '100% 100%'
            }}
            spacing={8}
        >
            <Stack alignItems='center' spacing={1}>
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.xl,
                        color: theme => theme.colors.white,
                        fontWeight: 600,
                    }}
                >Active Listing Self Storages</Typography>
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.md,
                        color: theme => theme.colors.white,
                        textAlign: 'center',
                        fontWeight: 400,
                        width: '60%',
                    }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare</Typography>

            </Stack>
            <Stack
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    gap: 3,
                }}
                direction='row'
            >
                {
                    CardB_info.map((item, index) => (
                        <Stack
                            key={index}
                            sx={{
                                width: 'calc(100% / 3 - 16px)'
                            }}
                        >
                            <CardA data={item} />
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default ActiveStorage;