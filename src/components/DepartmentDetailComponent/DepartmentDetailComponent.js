import React from "react";
import { withRouter } from "react-router";
import { Card, Button, List } from 'antd';
import '../../../node_modules/antd/dist/antd.min.css';
import '../../index.css';

class DepartmentDetailComponent extends React.Component {


    data = [
        {
            data: 'testUser 1',
        },
        {
            data: 'testUser 2',
        },
        {
            data: 'testUser 3',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        }, {
            data: 'testUser 1',
        },
        {
            data: 'testUser 2',
        },
        {
            data: 'testUser 3',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
        {
            data: 'testUser 4',
        },
    ];

    navtoEmployeeDetail(id) {
        this.props.history.push(`/employee/detail/${id}`)
        document.location.reload()
    }

    navToCreateEmployee() {
        this.props.history.push('/employee/create')
        document.location.reload()
    }

    render() {
        return (
            <div>
                <Button style={{ alignSelf: 'center', margin: 10, background: 'green', color: 'white', borderRadius: 20 }}
                    onClick={() => this.navToCreateEmployee()}
                >Add Employee</Button>
                <List
                    style={{ margin: 30 }}
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    dataSource={this.data}
                    renderItem={(item) => (
                        <List.Item >
                            <Card style={{ borderWidth: 5, borderRadius: 15, borderColor: 'orange' }} onClick={() => this.navtoEmployeeDetail(item.data)}>{item.data}</Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default withRouter(DepartmentDetailComponent)




