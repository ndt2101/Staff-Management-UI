import React from "react";
import { withRouter } from "react-router";
import { Select, Form, Button, Input } from 'antd';
import '../../../node_modules/antd/dist/antd.min.css';
import '../../index.css';

class UpdateEmployeeComponent extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: 30 }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: 30, marginLeft: 400, marginRight: 400, borderWidth: 5, borderColor: '#e8eaed', borderStyle: 'solid' }}>
                    <p style={{ fontSize: 24, fontFamily: 'bold', }}>Update employee</p>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 7,
                        }}
                        wrapperCol={{
                            span: 10,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Code"
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee code!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mobile"
                            name="mobile"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee mobile!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Role"
                            name="role"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select employee role!',
                                },
                            ]}
                        >
                            <Select>
                                <Select.Option value="admin">ADMIN</Select.Option>
                                <Select.Option value="employee">EMPLOYEE</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Salary"
                            name="salary"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee salary!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Avatar url"
                            name="avatar"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input employee avatar url!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item labelCol={{
                            span: 10,
                        }}
                            wrapperCol={{
                                offset: 0,
                            }}>
                            <Button htmlType="submit" style={{ margin: 10, background: 'green', color: 'white', borderRadius: 10 }} >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        )
    }
}

export default withRouter(UpdateEmployeeComponent)