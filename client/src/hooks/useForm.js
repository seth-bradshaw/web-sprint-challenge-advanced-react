import React, { useState } from 'react'
import CheckoutForm from '../components/CheckoutForm'

const useForm = (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const onChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, onChanges, onSubmit, showSuccessMessage]
}
export default useForm
