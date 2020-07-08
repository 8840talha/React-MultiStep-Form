import React, { useState, useReducer } from 'react';
import Success from './Success';
import PaymentDetails from './PaymentDetails';
import PersonalDetails from './PersonalDetails'
import Addresses from './Addresses';
import Confirm from './Confirm';
function stepper(step, currentValues, setStep, handleChange) {

    const nextStep = () => {
        setStep(step + 1)
    };

    const prevStep = () => {
        setStep(step - 1)
    };
    switch (step) {
        case 1:
            return (
                <PersonalDetails
                    nextStep={nextStep}
                    inputChange={handleChange}
                    values={currentValues}
                />
            );
        case 2:
            return (
                <Addresses
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputChange={handleChange}
                    values={currentValues}

                />
            );
        case 3:
            return (
                <PaymentDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputChange={handleChange}
                    values={currentValues}

                />
            );
        case 4:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputChange={handleChange}
                    values={currentValues} />
            );
        case 5:
            return (
                <Success />
            );
    }
}



const Form = () => {
    const [step, setStep] = useState(1)
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            zipcode: '',
            street: '',
            states: '',
            cardNum: '',
            dateTo: '',
            dateFrom: '',
            cvv: '',
            gender: ''
        }
    );
    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    }



    const { gender, name, email, phone, password, address, zipcode, street, states, cardNum, dateTo, dateFrom, cvv } = userInput;

    const values = {
        gender, name, email, phone, password, address, zipcode, street, states, cardNum, dateTo, dateFrom, cvv,
    };

    return <div>

        {stepper(step, values, setStep, handleChange)}
    </div>


}

export default Form
