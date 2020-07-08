import React from 'react'

const Addresses = (props) => {
    const Continue = e => {
        e.preventDefault();
        props.nextStep();
    };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const { values, inputChange } = props;
    return (
        <div className="form-container w-50">
            <button className="btn btn-outline-dark"> Step2</button>
            <h1 className="mb-5">Enter Address</h1>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" name="address" onChange={inputChange} value={values.address} />
            </div>
            <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" className="form-control" name="zipcode" onChange={inputChange} value={values.zipcode} />
            </div>
            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input type="text" className="form-control" name="street" onChange={inputChange} value={values.street} />
            </div>
            <div className="form-group">
                <label htmlFor="states">State</label>
                <input type="text" className="form-control" name="states" onChange={inputChange} value={values.states} />
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

export default Addresses
