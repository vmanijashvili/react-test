import React, {useEffect, useState} from "react";
import Input from "../../components/input/input";
import "./login.scss";
import {isValidDateValue} from "@testing-library/user-event/dist/utils";

const Login = (props) => {

    const [data, setData] = useState({
        username: 'koka',
        password: '123'
    });

    const [valid, setValid] = useState(false);
    const [test, setTest] = useState('');

    const loginHandle = () => {
        if (isValid) {
            props.onLogin();
        } else {
            alert('error');
        }
    }

    const setValue = (key, value) => {
        setData(data => {
            return {
                ...data,
                [key]: value
            };
        })
    }

    const isValid = () => {

        const result = (data.username == 'koka' && data.password == '123');

        setValid(result)
        return result;
    }


    useEffect(() => {
        isValid();
    }, [data])

    return (<form className='login-form'>
        <img src='http://ini.ge/gui/img/logo.png' alt='logo' />
        {valid ? <span>success</span> : <span>error</span>}
        <Input title='username'
               name='user'
               value={data.username || ''}
               onChange={event => setValue('username', event.target.value)} />

        <Input title='password'
               type='password'
               name='password'
               value={data.password || ''}
               onChange={event => setValue('password', event.target.value)} />

        <button type='button' onClick={loginHandle} >შესვლა</button>



    </form>);


}


export default Login;