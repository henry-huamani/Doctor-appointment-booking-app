import { Button, Form, Input, Col, Row } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form-register card p-3">
        <h1 className="card-title">Regístrate en MediSync</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Nombres"
                name="firstName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Nombres" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Apellidos"
                name="lastName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Apellidos" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Teléfono"
                name="phoneNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Teléfono" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Documento de Identidad"
                name="identityDocument"
                rules={[{ required: true }]}
              >
                <Input placeholder="Documento de Identidad" />
              </Form.Item>
            </Col>
          </Row>
          <hr />
          {/* <Form.Item label="Nombres" name="firstName">
            <Input placeholder="Nombres" />
          </Form.Item>
          <Form.Item label="Apellidos" name="lastName">
            <Input placeholder="Apellidos" />
          </Form.Item>
          <Form.Item label="Teléfono" name="phoneNumber">
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item label="Documento de Identidad" name="identityDocument">
            <Input placeholder="Documento de Identidad" />
          </Form.Item> */}
          {/* <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Contraseña" name="password">
            <Input placeholder="Contraseña" type="password" />
          </Form.Item> */}
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Email"
                name="email"
                rules={[{ required: true }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Contraseña"
                name="password"
                rules={[{ required: true }]}
              >
                <Input placeholder="Contraseña" type="password" />
              </Form.Item>
            </Col>
          </Row>

          {/* <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            REGISTRARSE
          </Button> */}
          <div className="d-flex justify-content-center">
            <Button className="primary-button" htmlType="submit">
              REGISTRARSE
            </Button>
          </div>

          <Link to="/login" className="anchor mt-2">
            CLIC AQUI PARA INGRESAR
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
