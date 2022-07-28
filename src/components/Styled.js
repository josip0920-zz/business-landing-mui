import React from "react";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export const HeaderButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.active,
    fontFamily: 'Poppins',
    textDecoration: 'none',
    fontSize: theme.fontSize.A1
}))