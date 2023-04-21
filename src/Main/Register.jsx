import React, {useState} from "react";
export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <lable htmlfor="name">Full Name</lable>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="John Snow"/>
                <lable htmlfor="email">Email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="abc@email.com"/>
                <lable htmlfor="password">Password</lable>
                <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" id="pw" name="pw" placeholder="**********"/>
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </>
    );
}