import React, { useState, useEffect } from 'react'; 
import { API } from '../api-service';
import { useCookies } from 'react-cookie'

function Auth(){

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoginView, setIsLoginView] = useState(true);
    const [ error, setError ] = useState(null);

    const [token, setToken] = useCookies(['mr-token'])

    useEffect( () =>{
        console.log(token);
        if (token['mr-token']) window.location.href= '/movies'
    }, [token])


    const loginClicked = () => {
        setError(null);
        API.loginUser({username, password})
            .then( resp => {
                if (resp.token) {
                    setToken('mr-token',resp.token);
                } else {
                    setError("username or password doesnot match")
                }
                })
            .catch ( error => setError("username or password doesnot match"));
    }

    const registerClicked  = () => {
        setError(null);
        API.registerUser({username, password})
            .then( resp => loginClicked())
            .catch(error => setError("registration Failed"))

    }

    const isDisabled= username.length === 0 || password.length === 0;


    return (
        <div className="App">
        <header className="App-header">
            { isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
        </header>
            
            <div className="login-container">
                {error && <p>{error}</p> }

                <label htmlFor="username">Username</label><br/>
                <input id ="username" type="text" placeholder="username" value={username}
                    onChange={ evt => setUsername(evt.target.value)}/>
                <br/>

            
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password"
                    value={password}
                    onChange={ evt => setPassword(evt.target.value)}/><br/>

                {isLoginView ? <button onClick= {loginClicked} disabled={isDisabled} >Login</button>  : 
                    <button onClick= {registerClicked} disabled={isDisabled} >Register</button>
                }


                { isLoginView ? 
                    <p onClick={() => setIsLoginView(false)}>You dont have an account! Register Here!</p> : 
                    <p onClick={() => setIsLoginView(true)}>You already have an account!!! Login Here!</p>
                }

            </div>
                    
        </div>
    )
}


export default Auth;