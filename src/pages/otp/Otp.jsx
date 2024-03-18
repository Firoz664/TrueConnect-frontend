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

<body className="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900">
  <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
    <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
    <p className="text-gray-600 text-center mb-4">Code sent to +880-123456789</p>
    <div className="grid grid-cols-5 gap-x-4 my-2">
      <div contenteditable="true"  className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span className="text-gray-700 dark:text-gray-400">1</span>
      </div>
      <div contenteditable="true"  className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span className="text-gray-700 dark:text-gray-400">9</span>
      </div>
      <div contenteditable="true"  className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span className="text-gray-700 dark:text-gray-400">6</span>
      </div>
      <div contenteditable="true"  className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span className="text-gray-700 dark:text-gray-400">4</span>
      </div>
      <div contenteditable="true"  className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span className="text-gray-700 dark:text-gray-400">3</span>
      </div>
    </div>
    <div className="flex items-center flex-col justify-between mb-6">
      <p className="text-gray-600 text-sm">Didn't receive code?</p>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">Request via Call</button>
        <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">Request Again (00:00:36)</button>
      </div>
    </div>
    <button className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Verify</button>
  </div>
</body>
      </div>
  )
}

export default Otp