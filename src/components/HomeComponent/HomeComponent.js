import '../../../node_modules/antd/dist/antd.min.css';
import '../../index.css';
import { withRouter } from "react-router";
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const HomeComponent = (props) => {
    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            description: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            description: 'London, Park Lane no. 1',
        },
    ]);
    const [count, setCount] = useState(2);

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    useEffect(() => {


    });

    const defaultColumns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            editable: true,
        },
        {
            title: 'description',
            dataIndex: 'description',
            width: '50%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            width: '20%',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <div>
                        <Button style={{ borderWidth: 2, borderColor: 'orange', borderRadius: 10 }} onClick={() => navToDetail(record.key)} >Detail</Button>
                        <Button style={{ borderWidth: 2, borderColor: 'green', borderRadius: 10, margin: 5, visibility: 'visible' }}>Update</Button>
                        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)} >
                            <Button style={{ borderWidth: 2, borderColor: 'red', borderRadius: 10 }}>Delete</Button>
                        </Popconfirm>
                    </div>
                ) : null,
        },
    ];

    const handleAdd = () => {
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: '32',
            description: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    const navToDetail = (id) => {
        props.history.push(`department/${id}`)
        console.log(id)
        document.location.reload()
    }
    return (
        <div style={{ padding: 10 }}>
            <p style={{ fontWeight: 'bold', fontSize: 35 }}>Department</p>
            <Button
                style={{ display: 'flex', flexDirection: 'column-reverse', marginBottom: 10, borderRadius: 10, background: 'green', color: 'white' }}
                onClick={handleAdd}
            >
                Add Department
            </Button>

            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
};

export default withRouter(HomeComponent)