import React from "react";
import Layout from "./../components/Layout";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.tiempo[0]).format("HH:mm"),
            moment(values.tiempo[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Algo salió mal ");
    }
  };
  return (
    <Layout>
      <h1 className="text-center">Aplicar para Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Detalle Personales : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Nombre"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="tu nombre" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Apellido"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="tu apellido" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Telefono"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="tu numero de telefono" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Correo Electronico"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="tu correo electronico" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Detalles Profesionales :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Especialidad"
              name="especialidad"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Tu especialidad" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Clinica"
              name="clinica"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Clinica a trabajar" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Horario" name="tiempo" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Aplicar
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
