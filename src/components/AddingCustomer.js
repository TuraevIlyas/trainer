import { message, Input, Button, Form } from 'antd'
import  React  from 'react'

export default function AddingCustomer (props) 
{
    const [customer, setCustomer] = React.useState({})
    
    const [form] = Form.useForm()

    const clickSubmit = () => {
        form.resetFields()
        props.addCustomer(customer)
        message.info('Person in the list')
    }

    const inputChanged = e => { 
        setCustomer({...customer,[e.target.id]: e.target.value})
    }

    return (
        <div style={{ position: 'fixed', top: 80, right: 20 }}>
            
            <Form form={form}>

            <h3>Adding Customer</h3> 

            <Form.Item name='firstName'>        
                <Input
                    addonBefore='First Name' 
                    onChange={inputChanged}
                    id='firstname'
                    placeholder='Enter smth'
                />
            </Form.Item>

            <Form.Item name='lastName'>
                <Input
                    addonBefore='Last Name' 
                    onChange={inputChanged}
                    id='lastname' 
                    placeholder='Come on'
                />
            </Form.Item>

            <Form.Item name='streetAddress'>
                <Input
                    addonBefore='Address' 
                    onChange={inputChanged}
                    id='streetaddress'
                    placeholder='I wait'
                />
            </Form.Item>

            <Form.Item name='postcode'>
                <Input
                    addonBefore='Postcode' 
                    onChange={inputChanged}
                    id='postcode'
                    placeholder='Faster'
                />
            </Form.Item>

            <Form.Item name='city'>
                <Input
                    addonBefore='City' 
                    onChange={inputChanged}
                    id='city'
                    placeholder='Well'
                />
            </Form.Item>

            <Form.Item name='email'>
                <Input
                    addonBefore='Email' 
                    onChange={inputChanged}
                    id='email'
                    placeholder='Here here'
                />
            </Form.Item>

            <Form.Item name='phone'>
                <Input
                    addonBefore='Phone' 
                    onChange={inputChanged}
                    id='phone'
                    placeholder='Lets start'
                />
            </Form.Item>     

            <Form.Item>
                <Button 
                    type='primary'
                    htmlType='button'
                    onClick={clickSubmit}
                >
                    Add
                </Button>
            </Form.Item>
            
            </Form>
        </div>
    )

}