import React from 'react'
import { Form, Input, message } from "antd";
const Register = () => {

    const onfinishHandler = (values) => {
        console.log(values)
      };
  return (
    <div>
         <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
        >
            <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </div>
  )
}
export default Register