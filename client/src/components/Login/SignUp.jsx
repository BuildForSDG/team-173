import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
const PaddingH2 =  styled.h2`
    padding-bottom: 7%;
    font-size: 2rem;
`
const StyleDiv =  styled.div`
  width: 94%;  
  padding-left: 2%;
  margin-top: 5%;
  margin-right: 2%;
  span{
      font-weight: 400;
      font-size:1.2rem;
  }
  .center {
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const SignUp =()=>{
    return(
        <StyleDiv>
           
        <Form layout='vertical' >
                <PaddingH2>Create An Account</PaddingH2>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                style={{marginBottom: '12%'}}
            > <span>Username:  </span>
                <Input placeholder="Username" style={{ width:'68%', marginLeft:'2%', borderRadius:'7px'}} />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
                    style={{ marginBottom: '12%' }}
            > <span>Email:  </span>
                    <Input placeholder="Email" style={{ width: '70%', marginLeft: '2%', borderRadius: '7px' }}  />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                    style={{ marginBottom: '12%' }}
            >  <span>Password:  </span> 
                <Input
                    type="password"
                    placeholder="Password"
                        style={{ width: '70%', marginLeft: '2%', borderRadius: '7px' }}
                />
            </Form.Item>
            <Form.Item
                name="location"
                rules={[
                    {
                        required: true,
                        message: 'Please input your location!',
                    },
                ]}
                    style={{ marginBottom: '12%' }}
            > <span>Location:  </span>
                    <Input placeholder="Location" style={{ width: '70%', marginLeft: '2%', borderRadius: '7px' }}  />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <div className='center'>
                    <Button
                        type="primary"
                        htmlType="submit"
                            style={{ background: '#593F62', borderRadius: '7px', textAlign:'center' , width: '40%', paddingBottom:'12%'}}
                    >
                        Sign Up
                    </Button>
                        </div>
                )}
            </Form.Item>

        </Form>
        </StyleDiv>
    )
}
export default SignUp;