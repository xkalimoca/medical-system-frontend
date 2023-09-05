import React from 'react'
import '../styles/RegisterStyles.css';
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Inicio de sesion correcto!!!");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Algo salió mal!");
    }
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