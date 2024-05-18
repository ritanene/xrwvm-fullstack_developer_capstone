import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");


    const gohome = () => {
        window.location.href = window.location.origin;
    }

    const register = async (e) => {
        e.preventDefault();

        let register_url = window.location.origin + "/djangoapp/register";

        const res = await fetch(register_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "userName": userName,
                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "email": email
            }),
        });

        const json = await res.json();
        if (json.status) {
            sessionStorage.setItem('username', json.userName);
            window.location.href = window.location.origin;
        }
        else if (json.error === "Already Registered") {
            alert("The user with same username is already registered");
            window.location.href = window.location.origin;
        }
    };

    return (
        <div className="register_container" style={{ width: "50%" }}>
            <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <span className="text" style={{ flexGrow: "1" }}>SignUp</span>
                <div style={{ display: "flex", flexDirection: "row", justifySelf: "end", alignSelf: "start" }}>
                    <a href="/" onClick={() => { gohome() }} style={{ justifyContent: "space-between", alignItems: "flex-end" }}>
                        <img style={{ width: "1cm" }} src={'https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg'} alt="X" />
                    </a>
                </div>
                <hr />
            </div>

            <form onSubmit={register}>
                <div className="inputs">
                    <div className="input">
                        <img src={'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'} className="img_icon" alt='Username' />
                        <input type="text" name="username" placeholder="Username" className="input_field" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <img src={'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'} className="img_icon" alt='First Name' />
                        <input type="text" name="first_name" placeholder="First Name" className="input_field" onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div>
                        <img src={'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'} className="img_icon" alt='Last Name' />
                        <input type="text" name="last_name" placeholder="Last Name" className="input_field" onChange={(e) => setlastName(e.target.value)} />
                    </div>

                    <div>
                        <img src={'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png'} className="img_icon" alt='Email' />
                        <input type="email" name="email" placeholder="email" className="input_field" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input">
                        <img src={'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/password-512.png'} className="img_icon" alt='password' />
                        <input name="psw" type="password" placeholder="Password" className="input_field" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                </div>
                <div className="submit_panel">
                    <input className="submit" type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register;