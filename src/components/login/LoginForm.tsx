import React from "react";
import { Card, Button, Form, Input } from "antd";
import { LoginUserDto, LoginFormProps } from "../../models/apiModels";
import "./loginForm.css";

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Card className="card-body">
      <h2 className="card-title">Sad Dog</h2>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<LoginUserDto>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input className="form-inp" placeholder="email" />
        </Form.Item>

        <Form.Item<LoginUserDto>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="form-inp" placeholder="password" />
        </Form.Item>

        <Form.Item>
          <Button className="form-btn" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
