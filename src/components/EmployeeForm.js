import React, { useState } from "react";

const initialState = {
    name: "",
    phone: "",
    email: "",
    address: ""
};

const EmployeeForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [displayData, updateDisplayData] = useState(initialState);
    const updateFormData = (event) =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    const handleSubmit = (event) => {
        event.preventDefault();
        updateDisplayData({ ...formData });
        setFormData(initialState);
    };

    const { name, phone, email, address } = formData;

    return (
        <React.Fragment>
            <div className="form">
                <div className="top">
                    <form onSubmit={handleSubmit}>
                        <input
                            value={name}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Name"
                            type="text"
                            name="name"
                            required
                        />
                        <input
                            value={phone}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Phone Number"
                            type="number"
                            name="phone"
                            required
                        />
                        <input
                            value={email}
                            onChange={(e) => updateFormData(e)}
                            placeholder="Email address"
                            type="email"
                            name="email"
                            required
                        />
                        <input
                            value={address}
                            onChange={(e) => updateFormData(e)}
                            placeholder="address"
                            type="address"
                            name="address"
                            required
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="bottom">
                    Name : {displayData.name}
                    <br />
          Phone : {displayData.phone}
                    <br />
          Email : {displayData.email}
                    <br />
          Address : {displayData.address}
                    <br />
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmployeeForm;
