import React, { Component } from 'react'

const Confirm = (props) => {
    const Continue = e => {
        e.preventDefault();
        props.nextStep();
    };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const { name, email, phone, password, address, gender, zipcode, street, states, cardNum, dateTo, dateFrom, cvv }
        = props.values;

    return (
        <div className="form-container" style={{ width: '100vw' }}>
            <button className="btn btn-outline-dark"> Step4</button>
            <h1 className="mb-5">Confirm</h1>
            <div style={{ display: 'flex' }}>
                <ul class="list-group" style={{ width: '50vw' }}>
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Phone Number: {phone}</li>
                    <li class="list-group-item">Password: {password}</li>
                    <li class="list-group-item">Address:{address}</li>
                    <li class="list-group-item">Zipcode:{zipcode}</li>
                </ul>
                <ul class="list-group" style={{ width: '50vw' }}>
                    <li class="list-group-item">Street:{street}</li>
                    <li class="list-group-item">State:{states}</li>
                    <li class="list-group-item">Card Number:{cardNum}</li>
                    <li class="list-group-item">ValidFrom:{dateFrom}</li>
                    <li class="list-group-item">Card Number:{cardNum}</li>
                    <li class="list-group-item">ValidTill:{dateTo}</li>
                    <li class="list-group-item">Cvv:{cvv}</li>
                </ul>
            </div>
            <br /><br />
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

export default Confirm
