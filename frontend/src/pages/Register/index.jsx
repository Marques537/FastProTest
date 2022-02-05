import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents';
import { alignProperty } from '@mui/material/styles/cssUtils';

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  
  function validateFields(){
    if(password !== repeatPassword){
      alert('Error message: the password are different');
      return false;
    }
    if (!name || !email || !phoneNumber || !password || !password || !repeatPassword){
      alert('Error message: fill in all fields')
      return false;
    }
  return true;
  }
  
  function onSubmit(event){
    event.preventDefault();

    const init = {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({name, email, phoneNumber, password})
    }
    if (validateFields()){
      fetch('http://localhost:3333/cadastro', init).then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(init);
        if (response.user_id){
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
          setRepeatPassword("");
          alert("Register Sucessful");
        }
      });
    }

  }
  return (
    <LayoutComponents>
      <form onSubmit={onSubmit}className="login-form">
        <span className="login-title">Register</span>

        <div className="wrap-input">
          <input className={name !== "" ? 'has-val input' : 'input'} type="text"
            value={name}
            onChange={e => setName(e.target.value)} />
          <span className="focus-input" data-placeholder="Name"></span>
        </div>

        <div className="wrap-input">
          <input className={email !== "" ? 'has-val input' : 'input'} type="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <span className="focus-input" data-placeholder="E-mail"></span>
        </div>

        <div className="wrap-input">
          <input className={phoneNumber !== "" ? 'has-val input' : 'input'} type="text"
            value={phoneNumber}
            onChange={e => setPhone(e.target.value)} />
          <span className="focus-input" data-placeholder="Phone Number"></span>
        </div>

        <div className="wrap-input">
          <input className={password !== "" ? 'has-val input' : 'input'} type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="wrap-input">
          <input className={repeatPassword !== "" ? 'has-val input' : 'input'} type="password"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)} />
          <span className="focus-input" data-placeholder="Repeat Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">CREATE ACCOUNT</button>
        </div>

        <div className="text-center">
          <span className="text1">Already registered?</span>
          <Link className="text2" to="/login">Login</Link>
        </div>
      </form>
    </LayoutComponents>
  )
}