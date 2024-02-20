import React, { useState } from 'react';

const NameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        }
    };

    return (
        <form>
            <label>
                First name:
                <input type="text" name="firstName" value={firstName} onChange={handleChange} />
            </label>
            <label>
                Last name:
                <input type="text" name="lastName" value={lastName} onChange={handleChange} />
            </label>
            <p>
                Hello, {firstName} {lastName}
            </p>
        </form>
    );
};

export default NameForm;
