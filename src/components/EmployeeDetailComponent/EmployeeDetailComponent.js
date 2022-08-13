import React from 'react'

import '../../../node_modules/antd/dist/antd.min.css';
import '../../index.css';
import { withRouter } from "react-router";
import { Button, Avatar, Popconfirm } from 'antd';

class EmpolyeeDetailComponent extends React.Component {


    navToUpdateEmployee(id) {
        this.props.history.push(`/employee/update/${id}`)
        document.location.reload()
    }

    handleDelete = (key) => {
        // const newData = dataSource.filter((item) => item.key !== key);
        // setDataSource(newData);
    };

    render() {
        return (
            <div >
                <div style={{ display: 'flex', flexDirection: 'column', padding: 30 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '50%' }}>
                            <p style={{ fontSize: 20, color: 'gray', marginLeft: 5 }}>Avatar</p>
                            <Avatar
                                style={{ borderRadius: 10, width: 170, height: 170, marginTop: -15 }}
                                src="https://image.thanhnien.vn/w2048/Uploaded/2022/tnabtw/2021_12_09/ta03-7305.jpg"
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', padding: 50 }}>
                            <Button style={{ width: 100, alignSelf: 'center', margin: 10, background: 'green', color: 'white', borderRadius: 20 }} onClick={() => this.navToUpdateEmployee(1)}>Edit</Button>
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(1)} >
                                <Button style={{ width: 100, alignSelf: 'center', margin: 10, background: 'red', color: 'white', borderRadius: 20 }}>Delete</Button>
                            </Popconfirm>
                        </div>
                    </div>
                    <p style={{ fontSize: 20, color: 'gray', marginLeft: 5, marginTop: 40 }}>Employee details</p>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, margin: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Username</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>user 1</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, marginTop: 10, marginLeft: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Code</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>111</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, marginTop: 10, marginLeft: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Mobile</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>0789266255</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, marginTop: 10, marginLeft: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Email</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>nguyendinhtuan@gmail.com</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, marginTop: 10, marginLeft: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Address</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>Le Duc Tho-Ha Noi</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, marginTop: 10, marginLeft: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Role</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>Employee</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: 5, height: 50, marginTop: 10, marginLeft: 5, background: '#f5f8fc', borderRadius: 10 }}>
                        <p style={{ fontSize: 13, color: 'gray' }}>Salary</p>
                        <p style={{ fontSize: 15, marginTop: -15 }}>10000</p>
                    </div>
                </div>
            </div >
        );
    };
}

export default withRouter(EmpolyeeDetailComponent)