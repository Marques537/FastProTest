import { Link } from 'react-router-dom'
import { useState } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents'


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <LayoutComponents>
         <form className="login-form">
           <span className="login-title">Bem Vindo</span>

           <div className="wrap-input">
             <input className={email !== ""? 'has-val input': 'input'} type="email" 
             value={email} 
             onChange={e => setEmail(e.target.value)}/>
             <span className="focus-input" data-placeholder="E-mail"></span>
           </div>

           <div className="wrap-input">
             <input className={password !== ""? 'has-val input': 'input'} type="password"
             value={password} 
             onChange={e => setPassword(e.target.value)}/>
             <span className="focus-input" data-placeholder="Senha"></span>
           </div>

           <div className="container-login-form-btn">
             <button className="login-form-btn">LOGIN</button>
           </div>

           <div className="text-center">
             <span className="text1">Não possui conta?</span>

             <Link className="text2" to="/register">Cadastrar</Link>
           </div>

         </form>
    </LayoutComponents>
  );
}