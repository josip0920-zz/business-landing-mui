import React from "react";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export const HeaderButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    fontFamily: 'Poppins',
    textDecoration: 'none',
    fontSize: theme.fontSize.xl,
    fontWeight: 400,
    '&:hover': {
        color: theme.colors.black,
        background: theme.colors.yellow
    }
}))

export const XButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.black,
    background: theme.colors.yellow,
    fontFamily: 'Poppins',
    textDecoration: 'none',
    fontSize: theme.fontSize.xl,
    fontWeight: 500,
    height: 60,
    '&:hover': {
        background: theme.colors.yellow
    }
}))