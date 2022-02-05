import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents'
import StoreContext from '../../components/Store/Context';

function login({user, password}) {
  //request para a api retornando o token
  return {token: '1234'};
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate();


  function onSubmit(event){
    event.preventDefault();
    const { token } = login({email,password});

    if (token) {
      setToken(token);
      console.log(token)
      return navigate('/');
    }

    setEmail('');
    setPassword('');
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