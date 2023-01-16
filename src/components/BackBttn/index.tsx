import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

type Props = {
    handleOnClick: VoidFunction
}

export const BackBttn = ({ handleOnClick }: Props) => {
    return (

        <IconButton>
            <ArrowBackIcon style={{ color: 'black', fontSize: 60 }} onClick={handleOnClick} />
        </IconButton>


    )
}

export default BackBttn;