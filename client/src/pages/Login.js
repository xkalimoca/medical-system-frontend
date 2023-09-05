import React from 'react'
import '../styles/RegisterStyles.css';
import { Form, Input, message } from "antd";
import {Link} from 'react-router-dom'
const Login = () => {
    const onfinishHandler = (values) => {
        console.log(values)
      };
  return (
    <div>
        <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler} className="register-form"
        >
            <h3 className="text-center">Iniciar Sesion</h3>
            <Form.Item label="Correo electrónico" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Contraseña" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to= "/register" className="ms-2">
            Registrarse aquí
            </Link>
          <button className="btn btn-primary" type="submit">
            Iniciar Sesion
          </button>
        </Form>
      </div>
    </div>
  )
}
export default Login