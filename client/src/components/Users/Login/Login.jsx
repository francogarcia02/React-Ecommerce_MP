import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { usuariosDB } from '../../../helpers/get_users.js';
import { checker } from '../../../helpers/check_login.js';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';



const Login = () =>{
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(<></>);
    const [inputClass, setInputClass] = useState('login-subcont__input')
    const {userExist, log_user} = useContext(UserContext)

    const exist = userExist()

    const enviar = (data) =>{
        const band = checker(usuariosDB, data)
        console.log(band)
        if(band !== false){
            log_user(band)
        }
        else{
            setInputClass('input__error')
            setError(
            <div className="errores">
                <h3 className="errores__title">Errores</h3>
                <h5>El correo electrionico o la contraseña no coinciden</h5>
            </div>
            )
        }
    }

    if(exist){
        return(
        <div className='Justifier'>
            <div className="">
                <h1 className="Bienvenida">Inicio de sesion exitoso</h1>
            </div>
        </div>
        )
    }

    return(
        <div className="container-login">
            {error}
            <form className="login__form" onSubmit={handleSubmit(enviar)}>
                <h1 className="login-form__title">Iniciar sesion</h1>
                <div className="login-form__subcont">
                    <p className="login-subcont__title">Email:</p>
                    <input className={inputClass} type="text" placeholder="ingresar e-mail" {...register("email")} />
                </div>
                <div className="login-form__subcont">
                    <p className="login-subcont__title">Contraseña:</p>
                    <input className={inputClass} type="password" placeholder="ingresar contraseña" {...register("contraseña")} />
                </div>
                <button className="login-form__button" type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login