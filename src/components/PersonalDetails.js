import React from 'react'

const PersonalDetails = (props) => {
    const Continue = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const { values, inputChange } = props;

    return (

        <div className="form-container w-50">
            <button className="btn btn-outline-dark"> Step1</button>
            <h1 className="mb-5">Personal Details</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" onChange={inputChange} value={values.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" onChange={inputChange} value={values.email} />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="number" className="form-control" name="phone" onChange={inputChange} value={values.phone} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" onChange={inputChange} value={values.password} />
            </div>

            <br />

            <div className="text-right">
                <button className="btn btn-primary" onClick={Continue}>Next</button>
            </div>
        </div >
    )
}

export default PersonalDetails
