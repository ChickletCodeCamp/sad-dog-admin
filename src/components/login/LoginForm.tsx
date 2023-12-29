import React from 'react';
import { Card, Button, Form, Input } from 'antd';
import { LoginUserDto, LoginFormProps } from '../../models/apiModels';
import styles from './loginForm.module.css';

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Card className={styles.cardBody}>
      <h2 className={styles.cardTitle}>Sad Dog</h2>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<LoginUserDto>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input className={styles.formInp} placeholder="email" />
        </Form.Item>

        <Form.Item<LoginUserDto>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className={styles.formInp} placeholder="password" />
        </Form.Item>

        <Form.Item>
          <Button className={styles.formBtn} htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
