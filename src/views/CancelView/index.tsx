import React from 'react'
import BackBttn from '../../components/BackBttn';
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select';
import { useState } from 'react';
import './style.css'
import { Button } from '@mui/material';

interface Option {
    label: string;
    value: string;
}

interface ArrayObjectSelectState {
    selectedOption: Option | null;
}

const options: Option[] = [
    { label: 'Select a reason', value: '' },
    { label: 'option1', value: 'option1' },
    { label: 'option2', value: 'option2' },
    { label: 'option3', value: 'option3' },
]


export const CancelView = () => {
    const { handleSubmit, control } = useForm();
    const [state, setState] = useState<ArrayObjectSelectState>({
        selectedOption: null
    });



    const handleOnBack = () => {
        console.log("back!");

    }


    return (
        <div className='body'>
            <header className='header'>
                <div className='BkbttnContainer'><BackBttn handleOnClick={handleOnBack} /></div>
            </header>
            <main className='main'>
                <div className='CancelContainer'>
                    <h1>Select a reason</h1>
                    <form onSubmit={handleSubmit((data) => console.log(data.Options.value))}>
                        <Controller
                            defaultValue={options[0]}
                            control={control}
                            name="Options"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <Select
                                    className='Select'
                                    // classNames={{
                                    //     control: (state) =>
                                    //         // state.isFocused ? bac,

                                    // }}
                                    defaultValue={options[0]}
                                    options={options}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Button type='submit' className='SubmitBttn'> Send </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default CancelView;