import { message, Input, Button, Modal, DatePicker, Select, TimePicker, Form, Popover } from 'antd'
import  React  from 'react'
import { PlusCircleOutlined } from '@ant-design/icons'
import moment from 'moment'

export default function AddingTraining (props) 
{
    const { Option } = Select
    const [form] = Form.useForm()
    const disabledDates = ["2021-12-27", "2021-12-28", "2021-12-29"];

    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [training, setTraining] = React.useState({
        date: null,
        duration: null,
        activity: '',
        customer: '',
    })

    const [forDate, setForDate] = React.useState('')
    const [forTime, setForTime] = React.useState('')

    const showModal = () => {
        setIsModalVisible(true)
        setTraining({...training, customer: props.link.links[0].href})
    }

    const handleCancel = () => {
        form.resetFields()
        setIsModalVisible(false)
    }

    const handleSave = () => {
        addTraining(training)
        handleCancel()
        message.info('Look forward to your visiting')
    }

    const inputChanged = (value) => {
        setTraining({...training, duration: value})
    }

    const inputChange = (value) => { 
        setTraining({...training, activity: value})
    }
    
    const onChange = (date, dateString) => {
        setForDate(dateString)
        if (forTime !== '') setTraining({...training, date: moment(`${dateString} ${forTime}`, 'YYYY-MM-DD HH:mm').toISOString()})
    }

    const onChanged = (time, timeString) => {
        setForTime(timeString)
        if (forDate !== '') setTraining({...training, date: moment(`${forDate} ${timeString}`, 'YYYY-MM-DD HH:mm').toISOString()})
    }

    const disabledDate = (current) => {
        return (
          moment(current).day() === 0 ||
          moment(current).day() === 6 ||
          current < moment().endOf('day') ||
          disabledDates.find(date => date === moment(current).format("YYYY-MM-DD"))
        )
    }

    const disabledHours = () => {
        let hours = []
        for (let i=0; i<24; i++){
            if (i<10 || i>20) hours.push(i)
        }
        return hours
    }
    
    const disabledMinutes = () => {
        let minutes= []
        for (let i=0; i < 60; i++){
            if ((i !== 0) && (i !== 15) && (i !== 30) && (i !== 45)) minutes.push(i)
        }
        return minutes
    }

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTraining(data))
        .catch(err => console.error(err))
    }

    const addTraining = train => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(train)
        })
        .then(response => fetchTrainings())
        .catch(err => console.error(err))
    }

    return (
        <div>
            <Popover content='Add Training for This Customer'>
                <PlusCircleOutlined
                    style={{ color: 'black'}}
                    onClick= {showModal} 
            />
            </Popover>

            <Form form={form}>
                <Modal 
                title="Add Train For Person" 
                visible={isModalVisible} 
                onCancel={handleCancel}
                footer={[
                    <Button 
                    key='submit' 
                    onClick={handleSave}
                    >
                    Let's Workout
                </Button>
                ]}
                >
                    <Form.Item name='datetime'>
                        <DatePicker
                        placeholder='Friday 13th bad day'
                        showToday={false}
                        onChange={onChange}
                        disabledDate={disabledDate}
                        style={{ width: 150, marginLeft: 150 }}
                        />
                    </Form.Item>

                    <Form.Item name='time'>
                        <TimePicker
                        onChange={onChanged}
                        showNow={false}
                        format={'HH:mm'}
                        disabledHours={disabledHours}
                        disabledMinutes={disabledMinutes}
                        style={{ width: 150, marginLeft: 150 }}
                        />
                    </Form.Item>

                    <Form.Item name='duration'>
                        <Input.Group>
                            <Select
                            defaultValue='Duration'
                            onSelect={inputChanged}
                            dropdownClassName='duration'
                            style={{ width: 150, marginLeft: 150 }}
                            >
                                <Option value="30">30 minutes</Option>
                                <Option value="60">60 minutse</Option>
                                <Option value="90">90 minutes</Option>
                                <Option value="120">120 minutes</Option>
                            </Select>
                        </Input.Group>
                    </Form.Item> 

                    <Form.Item name='activity'>
                        <Input.Group>
                            <Select 
                            defaultValue='Activity'
                            onSelect={inputChange}
                            dropdownClassName='activity'
                            style={{ width: 150, marginLeft: 150}}
                            >
                                <Option value='Boxing'>Boxing</Option>
                                <Option value='Fitness'>Fitness</Option>
                                <Option value='Wrestling'>Wrestling</Option>
                                <Option value='Basketball'>Basketball</Option>
                                <Option value='Gym'>Gym</Option>
                                <Option value='Crossfit'>Crossfit</Option>
                            </Select>
                        </Input.Group> 
                    </Form.Item>
                </Modal>
            </Form>
        </div>
    )

}