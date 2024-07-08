import React from 'react';
import { useState } from "react";
import { Card } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
// import Checkout from "./checkout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function Login() {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return (
        <>
            <Card style={{width:'800px'}} className="mx-auto mt-5">
                <Card.Header className="pb-4">
                    {!login ?
                    <h1>Sign In</h1>
                    : <h1>Check Out</h1>
                    } 
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {!login && 
                        <React.Fragment>
                            <h3>Please login using one of the following:</h3>
                            <LoginForm />
                            <FacebookLogin 
                                appId="548758106599895"
                                autoLoad={false}
                                fields="name,email,picture"
                                scope="public_profile,user_friends"
                                callback={responseFacebook}
                                icon="fa-facebook"
                            />
                        </React.Fragment>
                        }
                        {login &&
                            <Checkout fbpic={picture} fbdata={data} />
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

function LoginForm() {
    return(
        <form className="d-flex flex-column border mt-3 mb-5 p-3 bg-white">
            <label className="m-2">Name:</label>
            <input type="text" name="text" placeholder="Your name" />
            <label className="m-2">Email:</label>
            <input type="email" name="email" placeholder="Your Email" />
            <input type="submit" value="Login" className="btn bg-success text-white my-3" />
        </form>
    )
}

function Checkout({fbpic,fbdata}) {
    return(
       <React.Fragment>
           <img src={fbpic} alt={fbdata.name} />
           <h3 className="d-inline text-success mx-2">
               Welcome back {fbdata.name}!
           </h3>
           <p className="my-5">Time to check out?</p>
       </React.Fragment>
    )
}