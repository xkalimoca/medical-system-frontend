import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

    const onfinishHandler = async (values) => {
        try {
            const res = await axios.post("/api/v1/user/register", values);
            if (res.data.success) {
              message.success("Registro Correcto!");
              navigate("/login");
            } else {
              message.error(res.data.message);
            }
          } catch (error) {
            console.log(error);
            message.error("Algo salio mal!");
          }
      };
  return (
    <div>
        <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler} className="register-form"
        >
            <h3 className="text-center">Registro</h3>
            <Form.Item label="Correo electrónico" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Nombre de Usuario" name="username">
            <Input type="username" required />
          </Form.Item>
          <Form.Item label="Contraseña" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to= "/login" className="ms-2">
            Iniciar Sesion
            </Link>
          <button className="btn btn-primary" type="submit">
            Registrar
          </button>
        </Form>
      </div>
    </div>
  )
}
export default Register