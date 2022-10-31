import React, { useState } from "react";

import "./App.css";
import { userLogin } from "./services/service";
import { control, encrypt } from "./util";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);


  const sendFnc = (evt:React.FormEvent) => {
    evt.preventDefault()
    if ( email === '' ) {
        alert('E-mail Empty!')
    }else if ( password === '' ) {
        alert('Password Empty!')
    }else {
        userLogin(email, password).then( res => {
            if ( res.status === 200 ) {
                const dt = res.data
                sessionStorage.setItem('mail', dt.result.username)
                const stData = JSON.stringify(dt)
                sessionStorage.setItem('user', encrypt(stData))
                // remember control
                if ( remember === true ) {
                    localStorage.setItem('user', encrypt(stData) )
                }
                
                // redirect
                //navigate('/dashboard')
                // window.location.href = '/dashboard'
                console.log(res.data)
                if(control()?.result.authorities[0].authority=="ROLE_admin"){
                  window.location.href = '/dashbord'
                }else if(control()?.result.authorities[0].authority=="ROLE_user"){
                  window.location.href = '/products'
                }
                
                
                else{
                  window.location.href = '/product'
                }
            }else {
                alert("Username or Password Fail!")
            }

        }).catch( err => {
            alert( err.message )
        })
    }
  }

  return (
    <div className="App">
      <>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <h3>User Login</h3>
            <form onSubmit={sendFnc} method="post">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  onClick={(evt) => setRemember(!remember)}
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-person"></i> Login
              </button>
            </form>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </>
    </div>
  );
}

export default App;
