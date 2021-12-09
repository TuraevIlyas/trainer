import React from 'react'
import moment from 'moment'
import { Table, Modal, Popover } from 'antd'
import "antd/dist/antd.css"
import { DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons'

export default function Trainings() {

    const [trainings, setTrainings] = React.useState([])

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
            sortDirections: ['descend', 'ascend'],
            render: (datetime)=>moment(datetime).format('DD.MM.YYYY HH:mm'),
        },
        {
            title: 'Duration(min)',
            dataIndex: 'duration',
            sorter: (a, b) => a.duration - b.duration,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Activity',
            dataIndex: 'activity',
            sorter: (a, b) => a.activity.length - b.activity.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            render: (record) => {
                if (record !== null) {               
                    const content = (
                        <div>
                            <p>First Name: {record.firstname}</p>
                            <p>Last Name: {record.lastname}</p>
                            <p>Address: {record.streetaddress}</p>
                            <p>Postcode: {record.postcode}</p>
                            <p>City: {record.city}</p>
                            <p>Email: {record.email}</p>
                            <p>Phone: {record.phone}</p>
                        </div>
                    )
                return (
                    <>
                        <Popover content={content} title='Customer Info'>
                            <InfoCircleOutlined style={{ color: 'blue' }}/> 
                        </Popover>
                    </>
                )
                }
            }
        },
        {
            render: (record) => {
                return (
                <Popover content='Delete Training'>
                    <DeleteOutlined 
                        style={{ color: 'red' }} 
                        onClick={ () => {
                            deleteTrainings(record.id)
                        }}
                    />
                </Popover>
                )
            } 
        },
    ]

    React.useEffect(() => {
        fetchTrainings()
    }, [])

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error("err"))
    }

    const deleteTrainings = id => {
        Modal.confirm({
            title: 'Remember! Sport — Important',
            okText: 'Sport is Trash, I leave',
            cancelText: 'Change Mind',
            cancelType: 'primary',
            okType: 'danger',  
            onOk: () => {
                fetch (`https://customerrest.herokuapp.com/api/trainings/${id}`, {method: 'DELETE'})
                .then(response => {
                if (response.ok) {
                    fetchTrainings() 
                }
                else {
                    alert('Smth bad man')
                }
            })
            .catch(err => console.error(err))
            }
        })
    }

return (
    <div>
        <Table
            columns={columns}
            dataSource={trainings}
        >
        </Table>
    </div>
)
}