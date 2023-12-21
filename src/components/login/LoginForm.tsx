import React from "react";
import { Card, Button, Form, Input } from "antd";
import { LoginUserDto } from "../../models/apiModels";
import "./loginForm.css";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const LoginForm: React.FC = () => {
  return (
    <Card className="card-body">
      <h2 className="card-title">Sad Dog</h2>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<LoginUserDto>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input className="from-inp" placeholder="email" />
        </Form.Item>

        <Form.Item<LoginUserDto>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="from-inp" placeholder="password" />
        </Form.Item>

        <Form.Item>
          <Button className="from-btn" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
