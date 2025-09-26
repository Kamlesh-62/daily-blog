import React from 'react';
import TextField from '@mui/material/TextField';

// The props your component will accept, designed to work with Formik
type InputFieldProps = {
    label: string;
    type: 'email' | 'password' | 'text';
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
    error?: string;
    touched?: boolean; 
};

export function InputField({ 
    label,
    type, 
    name, 
    value, 
    onChange, 
    onBlur, 
    error, 
    touched 
}: InputFieldProps) {

    const hasError = touched && Boolean(error);

    return (
        <TextField 
            size='small'
            fullWidth
            variant="outlined"
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={hasError}
            helperText={hasError ? error : ' '}
        />
    );
}