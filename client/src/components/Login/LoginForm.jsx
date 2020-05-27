import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const LoginForm =()=>{
    return(
        <Form layout='inline' name="horizontal_login" style = {{paddingTop: '18px'}}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Link to='/home'>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ background: '#593F62', borderRadius: '7px'}}
                    >
                        Log in
                    </Button>
                    </Link>
                )}
            </Form.Item>

        </Form>
    )
}
export default LoginForm;