import React from 'react'

import '../../../node_modules/antd/dist/antd.min.css';
import "../../index.css";
import {
    Form,
    Input,
    Button,
} from "antd";
import { withRouter } from "react-router";


class RegisterComponent extends React.Component {

    navToLogin = () => {
        this.props.history.push('/login')
        document.location.reload()
    }

    render() {
        return (
            <div className='register'>
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
                        paddingTop: 100
                    }}
                >
                    <Form.Item label="Fullname" name="Fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mobile" name="Mobile"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your mobile!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Address" name="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Username"
                        name="Username"
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

                    {/* <Form.Item label="Role">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item> */}
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
                    <p name="register" className='login'
                        style={{ paddingRight: 70, color: '#1caeed', paddingBottom: 100 }}
                        onClick={() => this.navToLogin()}

                    >Already have an acount</p>
                </Form>
            </div >
        );
    };
}

export default withRouter(RegisterComponent)