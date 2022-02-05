import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents'
import StoreContext from '../../components/Store/Context';
import { createSession } from '../../services/api';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const execLogin = async () => {
    const response = await createSession({email,password});

    setToken(response.data.token);
    if (response.data.token) {
      setEmail('');
      setPassword('');
      return navigate('/');
     }
    console.log('local storage',token)
    alert('user or password invalid');
  }  
  function onSubmit(event){
    event.preventDefault();
    execLogin()

  }
  return (
    <LayoutComponents>
      <form onSubmit={onSubmit}className="login-form">
        <span className="login-title">Welcome</span>

        <div className="wrap-input">
          <input className={email !== "" ? 'has-val input' : 'input'} type="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <span className="focus-input" data-placeholder="E-mail"></span>
        </div>

        <div className="wrap-input">
          <input className={password !== "" ? 'has-val input' : 'input'} type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">LOGIN</button>
        </div>

        <div className="text-center">
          <span className="text1">Create new account</span>

          <Link className="text2" to="/register">Create new</Link>
        </div>

      </form>
    </LayoutComponents>
  );
}