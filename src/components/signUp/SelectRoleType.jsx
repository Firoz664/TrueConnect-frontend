import { Card, Input, Radio, Space } from 'antd'
import React from 'react'
import { useState } from 'react';

const SelectRoleType = () => {
    const [value, setValue] = useState("influencer");

    const onChange = (e) => {
      console.log("radio-checked", e.target.value);
      setValue(e.target.value);
    };
  return (
   <Card>
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={"Management"}>School Management</Radio>
        <Radio value={"Teacher"}>Student</Radio>
      </Space>
    </Radio.Group>
   </Card>
  )
}

export default SelectRoleType