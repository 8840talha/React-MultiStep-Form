import React, { Component } from 'react'

const PaymentDetails = (props) => {
    const Continue = e => {
        e.preventDefault();
        props.nextStep();
    };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const { values, inputChange } = props;
    console.log(values)

  
    return (
        <div className="form-container w-50">
            <button className="btn btn-outline-dark"> Step3</button>
            <h1 className="mb-5">PaymentDetails</h1>
            <div className="form-group">
                <label htmlFor="cardNum">Card Number</label>
                <input type="text" className="form-control" name="cardNum" onChange={inputChange} value={values.cardNum} />
            </div>
            <div className="form-group">
                <label htmlFor="dateFrom">Valid From</label>
                <input type="date" className="form-control" name="dateFrom" onChange={inputChange} value={values.dateFrom} />
            </div>
            <div className="form-group">
                <label htmlFor="dateTo">Valid Till</label>
                <input type="date" className="form-control" name="dateTo" onChange={inputChange} value={values.dateTo} />
            </div>
            <div className="form-group">
                <label htmlFor="cvv">Cvv Number</label>
                <input type="password" className="form-control" name="cvv" onChange={inputChange} value={values.cvv} />
            </div>

            <br />

            <div className="row">
                <div className="col-6">
                    <button className="btn btn-danger" onClick={back}>Previous</button>
                </div>
                <div className="col-6 text-right">
                    <button className="btn btn-primary" onClick={Continue}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails
