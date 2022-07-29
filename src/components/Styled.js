import React from "react";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export const HeaderButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    fontSize: theme.fontSize.lg,
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
    fontSize: theme.fontSize.lg,
    fontWeight: 500,
    height: 60,
    '&:hover': {
        background: theme.colors.yellow
    }
}))

export const MButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    background: theme.colors.blue,
    fontSize: theme.fontSize.sm,
    fontWeight: 500,
    height: 50,
    width: '80%',
    '&:hover': {
        background: theme.colors.blue
    }
}))