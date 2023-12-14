// src/App.tsx
import { WechatOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './login.css'
import React from 'react';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => (
  <div className='login-box'>
    <h1 className='title'>EASY-NOTE</h1>
    <Form
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      style={{ width: '100%' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label=""
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item<FieldType>
        label=""
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password size='large' />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          size='large'
          disabled
        >
          登录
        </Button>
      </Form.Item>
    </Form>
    <span className='forget'>忘记密码</span>
    <div className='or'>
      <span>或</span>
    </div>
    <Button
      className='btn-grren'
      type="primary"
      block
      size='large'
      icon={<WechatOutlined />}
    >使用微信登录</Button>
  </div>
);

export default Login;
