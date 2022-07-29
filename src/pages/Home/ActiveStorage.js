import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { CardA } from "../../components/Card";
import { XLButton } from "../../components/Styled";
import { CardB_info } from "../../config";

const ActiveStorage = () => {
    const tablet = useMediaQuery('(min-width:1400px)');
    return (
        <Stack
            sx={{
                backgroundImage: `url(${require('../../assets/imgs/bg/Rectangle_8.png').default})`,
                backgroundSize: '100% 100%'
            }}
            spacing={tablet ? 15 : 10}
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
            <Stack alignItems='center'>
                <XLButton>View More Listings</XLButton>
            </Stack>
            <img width={80} height={172} src={require('../../assets/imgs/circles/Ellipse1.png').default} style={{ position: 'absolute', right: 0, marginTop: 300 }} />
            <img width={70} height={200} src={require('../../assets/imgs/circles/Ellipse2.png').default} style={{ position: 'absolute', left: 0, marginTop: 1000 }} />
        </Stack>
    )
}

export default ActiveStorage;