import React from 'react'
import { Table, Input, Button, Modal, Popover } from 'antd'
import "antd/dist/antd.css"
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons'
import AddingCustomer from './AddingCustomer'
import EditingCustomer from './EditingCustomer'
import AddingTraining from './AddingTraining'
import './addStyle.css'

export default function Customers(props)
{    

    const [customers, setCustomers] = React.useState([])   
    
    const [flag, setFlag] = React.useState(false)
    if (flag) props.forInfo(customers) //For PARENT<—CHILD, Trigger Parent's Func 

    const columns = [
        //#region First Name Column
        {
            title: 'First Name',
            dataIndex: 'firstname',
            sorter: (a, b) => a.firstname.length - b.firstname.length,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.firstname.toLowerCase().includes(value.toLowerCase())
            },
        }, 
        //#endregion First Name Column
        //#region Last Name Column
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            sorter: (a, b) => a.lastname.length - b.lastname.length,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.lastname.toLowerCase().includes(value.toLowerCase())
            },
        },
        //#endregion
        //#region Address Column
        {
            title: 'Address',
            dataIndex: 'streetaddress',
            sorter: (a, b) => a.streetaddress.length - b.streetaddress.length,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.streetaddress.toLowerCase().includes(value.toLowerCase())
            },
        },
        //#endregion
        //#region Postcode Column
        {
            title: 'Postcode',
            dataIndex: 'postcode',
            sorter: (a, b) => a.postcode - b.postcode,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.postcode.toLowerCase().includes(value.toLowerCase())
            },
        },
        //#endregion
        //#region City Column
        {
            title: 'City',
            dataIndex: 'city',
            sorter: (a, b) => a.city.length - b.city.length,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.city.toLowerCase().includes(value.toLowerCase())
            },
        },
        //#endregion
        //#region Email Column
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.email.toLowerCase().includes(value.toLowerCase())
            },
        },
        //#endregion
        //#region Phone Column
        {
            title: 'Phone',
            dataIndex: 'phone',
            sorter: (a, b) => a.phone.length - b.phone.length,
            sortDirections: ['descend', 'ascend'],
            filterDropdown:({selectedKeys, setSelectedKeys, confirm, clearFilters}) => {
                return( 
                <>

                <Input 
                autoFocus 
                placeholder='What you want'
                value={selectedKeys[0]} 
                onChange={(e) => { 
                    setSelectedKeys(e.target.value?[e.target.value]:[]) 
                    confirm( { closeDropdown: false })
                }}
                onPressEnter={() => { confirm() }}
                onBlur={() => { confirm() }}> 
                </Input>
                
                <Button type='danger' 
                onClick={() => {clearFilters()}}>
                Reset
                </Button>

                </>
                )
            },
            filterIcon:() => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.phone.toLowerCase().includes(value.toLowerCase())
            },
        },
        //#endregion
        //#region Edit Column
        {
            fixed: 'right',
            width: 50,
            render: (record) => {
                    return (
                            <EditingCustomer editCustomer={editCustomer} row={record}/> 
                    )
            }
        },
        //#endregion
        //#region Delete Column
        {
            fixed: 'right',
            width: 50,
            render: (record) => {
                return (
                <Popover content='Delete Customer'>
                    <DeleteOutlined 
                        style={{ color: 'red' }} 
                        onClick={ () => {
                            deleteCustomer(record.links[0].href)
                        }}
                    />
                </Popover> 
                )
            } 
        },
        //#endregion
        //#region Add Training Column
        {
            fixed: 'right',
            width: 50,
            render: (record) => {
                return (
                <>
                    <AddingTraining link={record}/>
                </>
                )
            } 
        },
        //#endregion
    
    ]

    React.useEffect(() => {
        fetchCustomers()
    }, [])
    
    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => { setCustomers(data.content)
                        setFlag(true)
                    })
        .catch(err => console.error(err))
    }

    const addCustomer = customer => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => fetchCustomers())
        .catch(err => console.error(err))
    }


    const editCustomer = (link, updatedCustomer) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedCustomer)
        })
        .then(response => {
            fetchCustomers()
        })
        .catch(err => console.error(err))
    }

    const deleteCustomer = url => {
        Modal.confirm({
            title: 'Choose wisely',
            okText: 'Delete this all',
            cancelText: 'Cancel',
            cancelType: 'primary',
            okType: 'danger',  
            onOk: () => {
                fetch (url, {method: 'DELETE'})
                .then(response => {
                if (response.ok) {
                    fetchCustomers() 
                }
                else {
                    alert('Smth bad man')
                }
            })
            .catch(err => console.error(err))
            }
        })
    }

return(
    <div className='addStyle'>
                 
        <Table
            style={{ width: 1010, margin: 10 }}
            columns={columns}
            dataSource={customers}
            scroll={{ x: 400 }}
        >
        </Table>

        <AddingCustomer addCustomer={addCustomer}/>
      
    </div>
)
}