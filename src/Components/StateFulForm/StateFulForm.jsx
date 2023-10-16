import { useState } from "react";

const StateFulForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(email);
        console.log(password)
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordChange = e =>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" />
                <br />
                <input onChange={emailChange} type="email" name="email" />
                <br />
                <input onChange={passwordChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFulForm;
