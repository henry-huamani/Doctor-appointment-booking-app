import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";

function DoctorForm({ onFinish, initivalValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initivalValues,
        ...(initivalValues && {
          timings: [
            moment(initivalValues?.timings[0], "HH:mm"),
            moment(initivalValues?.timings[1], "HH:mm"),
          ],
        }),
      }}
    >
      <h1 className="card-title mt-3">Información Personal</h1>
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
      <h1 className="card-title mt-3">Información Profesional</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Especialidad"
            name="speciality"
            rules={[{ required: true }]}
          >
            <Input placeholder="Especialidad" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Experiencia"
            name="experience"
            rules={[{ required: true }]}
          >
            <Input placeholder="Experiencia" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Número de Colegiado"
            name="collegiateNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Número de Colegiado" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Horario"
            name="timings"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Credenciales</h1>
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

      <div className="d-flex justify-content-end">
        <Button className="primary-button" htmlType="submit">
          AGREGAR
        </Button>
      </div>
    </Form>
  );
}

export default DoctorForm;
