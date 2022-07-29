import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { MButton } from "./Styled";

export const CardA = ({ data }) => {

    return (
        <Stack
            sx={{
                background: theme => theme.colors.cardBg,
                p: '22px',
                borderRadius: '10px',
                width: '100%',
                '& .cardImg': {
                    height: theme => theme.isTablet ? 280 : 400,
                    width: '100%',
                    borderRadius: 4
                }
            }}
            spacing={5}
        >
            <img className="cardImg" src={require(`../assets/imgs/cards/${data.photo}`).default} />
            <Typography sx={{ fontSize: theme => theme.fontSize.lxl, fontWeight: 600 }}>{data.name}</Typography>
            <Stack direction='row'>
                <Stack flexGrow={1} spacing={2}>
                    <Stack direction='row' alignItems="center" spacing={1}>
                        <img width='22' height='22' src={require(`../assets/imgs/icons/location.svg`).default} />
                        <Typography sx={{ fontSize: theme => theme.fontSize.sm }}>{data.location}</Typography>
                    </Stack>
                    <Stack direction='row' alignItems="center" spacing={1}>
                        <img width='18' height='18' src={require(`../assets/imgs/icons/size.svg`).default} />
                        <Typography sx={{ fontSize: theme => theme.fontSize.sm }}>Size: {data.size}</Typography>
                    </Stack>
                </Stack>
                <Stack flexGrow={1} spacing={2} >
                    <Stack direction='row' alignItems="center" spacing={1}>
                        <img width='20' height='20' src={require(`../assets/imgs/icons/office.svg`).default} />
                        <Typography sx={{ fontSize: theme => theme.fontSize.sm }}>Total Units: {data.uints}</Typography>
                    </Stack>
                    <Stack direction='row' alignItems="center" spacing={1}>
                        <img width='22' height='22' src={require(`../assets/imgs/icons/occ.svg`).default} />
                        <Typography sx={{ fontSize: theme => theme.fontSize.sm }}>Occupancy: {data.occupancy}%</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack alignItems='center'>
                <MButton>View More Detail</MButton>
            </Stack>
        </Stack>
    )
}