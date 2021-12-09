import { message, Input, Button, Modal, Popover } from 'antd'
import  React  from 'react'
import { EditOutlined } from '@ant-design/icons'

export default function EditingCustomer (props) 
{
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [customer, setCustomer] = React.useState({
    })

    const showModal = () => {
        setCustomer({
            firstname: props.row.firstname,
            lastname: props.row.lastname,
            streetaddress: props.row.streetaddress,
            postcode: props.row.postcode,
            city: props.row.city,
            email: props.row.email,
            phone: props.row.phone,
        })
        setIsModalVisible(true)        
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleSave = () => {
        props.editCustomer(props.row.links[0].href, customer)
        handleCancel()
        message.info('Information in database')
    }

    const inputChanged = e => {
        setCustomer({...customer,[e.target.id]: e.target.value})
    }

    return (
        <div>
            <Popover content='Edit Customer'>
                <EditOutlined
                    style={{ color: 'green'}}
                    onClick= {showModal} 
            />
            </Popover> 
            
            <Modal 
            title="Editing Customer" 
            visible={isModalVisible} 
            onCancel={handleCancel}
            footer={[
            <Button key='submit' onClick={handleSave}>
                Change
            </Button>
            ]}
            >
                <Input
                onChange={inputChanged}
                id='firstname'
                value={customer.firstname}
                style={{ width: 250, marginLeft: 125 }} 
                />

                <Input
                onChange={inputChanged}
                id='lastname'
                value={customer.lastname}
                style={{ width: 250, marginLeft: 125 }}  
                />

                <Input 
                onChange={inputChanged}
                id='streetaddress'
                value={customer.streetaddress}
                style={{ width: 250, marginLeft: 125 }} 
                />

                <Input
                onChange={inputChanged}
                id='postcode'
                value={customer.postcode}
                style={{ width: 250, marginLeft: 125 }}  
                />

                <Input
                onChange={inputChanged}
                id='city'
                value={customer.city}
                style={{ width: 250, marginLeft: 125 }}  
                />

                <Input
                onChange={inputChanged}
                id='email'
                value={customer.email}
                style={{ width: 250, marginLeft: 125 }}  
                />

                <Input
                onChange={inputChanged}
                id='phone'
                value={customer.phone}
                style={{ width: 250, marginLeft: 125 }}  
                />            
            </Modal>
        </div>
    )

}
