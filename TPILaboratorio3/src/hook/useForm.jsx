import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: false
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
        setErrors({});
    };

    return {
        ...formState,
        formState,
        errors,
        onInputChange,
        onResetForm,
        setErrors 
    };
};
