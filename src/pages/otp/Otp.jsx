import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import OtpInput from '../../components/signUp/OtpInput';

const Otp = () => {

  const onOtpSubmit = () => {
    console.log("first")
  }
  
  
  
  // const onFinish = (values) => {
  //   console.log('Received values', values);
  //   message.success("Welcome to Our School home page")
  //   window.location = "/home"
  // };
  return (
    <div style={{width:"40vw",paddingInline:"1rem"}}>
<h6 className='hover:text-red-400 text-3xl'>verify otp</h6>
<h6>you can verify otp</h6>

<div>
  <OtpInput onOtpSubmit={onOtpSubmit} length={6}/>
</div>

{/* <Form name="login-form" onFinish={onFinish}>
        <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Please input your username!' },
        ]}
      >
        <Input
        multiple
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Button type="dashed" htmlType="submit">
          Verify Otp
        </Button>
      </Form.Item>
      </Form> */}
      </div>
  )
}

export default Otp