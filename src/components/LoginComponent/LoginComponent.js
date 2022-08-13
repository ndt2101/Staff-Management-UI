import React from 'react'

import '../../../node_modules/antd/dist/antd.min.css';
import '../../index.css';
import { withRouter } from "react-router";
import { Button, Form, Input } from 'antd';

class LoginComponent extends React.Component {



    navToRegister = () => {
        this.props.history.push('/register')

        document.location.reload()
    }

    render() {
        return (
            <div className='login'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 9,
                    }}
                    wrapperCol={{
                        span: 5,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    style={{
                        paddingTop: 200
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 7,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                    <p className='register' style={{ marginRight: 65, color: '#1caeed' }} onClick={() => this.navToRegister()}>Register</p>
                </Form>
            </div >
        );
    };
}

export default withRouter(LoginComponent)