import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidatior = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});



    useEffect(() => {

        createValidators()


    }, [formState])

    useEffect(() => {
        setFormState(initialForm)
    }, [initialForm])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation])

    const onResetForm = () => {
        setFormState(initialForm);
    }


    const createValidators = () => {
        const formCheckValues = {};

        for (const formField of Object.keys(formValidatior)) {
            const [fn, errorMessage = 'Este campo es requerido'] = formValidatior[formField];

            formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }

        setFormValidation(formCheckValues);


    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}