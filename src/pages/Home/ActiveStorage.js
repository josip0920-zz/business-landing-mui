import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { CardD } from "../../components/Card";
import { XLButton } from "../../components/Styled";
import { CardB_info } from "../../config";

const ActiveStorage = () => {
    const tablet = useMediaQuery('(min-width:1400px)');
    return (
        <Stack
            sx={{
                p: '0px !important'
            }}
        >
            <Stack
                sx={{
                    backgroundImage: `url(${require('../../assets/imgs/bg/Rectangle_8.png').default})`,
                    backgroundSize: '100% 100%',
                }}
            >
                <Stack
                    sx={{
                        background: theme => theme.colors.white,
                        pl: 10,
                        mr: 20,
                        pb: 6
                    }}
                    spacing={tablet ? 15 : 10}
                >
                    <Stack alignItems='center' spacing={1}>
                        <Typography
                            sx={{
                                fontSize: theme => theme.fontSize.xl,
                                color: theme => theme.colors.black,
                                fontWeight: 600,
                            }}
                        >Active Listing Self Storages</Typography>
                        <Typography
                            sx={{
                                fontSize: theme => theme.fontSize.md,
                                color: theme => theme.colors.gray,
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
                                    <CardD data={item} />
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                alignItems='center'
                sx={{
                    background: theme => theme.colors.sellBg,
                    pt: 5,
                    pb: 10
                }}
            >
                <XLButton>View More Listings</XLButton>
            </Stack>
        </Stack>
    )
}

export default ActiveStorage;