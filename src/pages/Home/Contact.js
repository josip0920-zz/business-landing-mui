import React from "react";
import Stack from "@mui/material/Stack";
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
import { XButton } from "../../components/Styled";

const Contact = () => {
    return (
        <Stack
            sx={{
                background: theme => theme.colors.sellBg,
                backgroundImage: `url(${require('../../assets/imgs/bg/pngwing_5.png').default})`,
                backgroundSize: '100% 100%',

            }}
            alignItems='center'
        >
            <Stack
                alignItems='center'
                direction='row'
                spacing={12}
                sx={{
                    background: theme => theme.colors.white,
                    boxShadow: '0px 30px 40px rgba(24, 73, 198, 0.1)',
                    width: 'fit-content',
                    p: 12,
                    borderRadius: '12px'
                }}
            >
                <Stack spacing={1}>
                    <Typography
                        sx={{
                            fontSize: theme => theme.fontSize.xl,
                            color: theme => theme.colors.darkBlue,
                            fontWeight: 700
                        }}
                    >
                        Any Queries? Reach Out to Us
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: theme => theme.fontSize.md,
                            color: theme => theme.colors.gray,
                        }}
                    >
                        Feel free to write to us, we are happy to help you
                    </Typography>
                </Stack>
                <Stack>
                    <XButton
                        sx={{
                            color: theme => theme.colors.white,
                            background: theme => theme.colors.blue,
                            width: 'fit-content !important',
                            fontSize: theme => theme.fontSize.md,
                            '&:hover': {
                                background: theme => theme.colors.blue
                            }
                        }}
                        endIcon={
                            <SendIcon />
                        }
                    >
                        Write to Us
                    </XButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Contact;