import React, {useState} from "react";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.length === 0 || pass.length === 0)
        {
            setError(true);
        }
        if (email&&pass)
        {
            console.log("Email: ",email,"\nPassword: ",pass)
        }
        if (email === "marthur@gmail.com" && pass === "abc123")
        {
            alert("Login Succussfully");
            setLoggedIn(true);
        }
        else{
            alert("Error Login");
        }

        console.log(email);
    }

    if (!loggedIn){
        return(
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                    <lable htmlfor="email">Email</lable>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="abc@email.com"/>
                    </div>
                    {
                        error&&email.length<=0 ? <label>Email cannot be empty.</label>:""
                    }
                    <div className="inputs">
                    <lable htmlfor="password">Password</lable>
                    <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" id="pw" name="pw" placeholder="**********"/>
                    </div>
                    {
                        error&&pass.length<=0 ? <label>Password cannot be empty.</label>:""
                    }
                    <button type="submit" id="Loginbtn" name="Loginbtn">Login</button>
                </form>
                <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        );
            }

   return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>You are now logged in.</p>
    </div>

    );

}