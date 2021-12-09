import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function Calendars() { 
    
    const localizer = momentLocalizer(moment)
    const [trainInfo, setTrainInfo] = React.useState([])

    React.useEffect(() => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainInfo(data))
        .catch(err => console.error(err))
    }, [])

    const events = trainInfo.map((train)=>{
      return {
        title: train.activity,
        start: new Date(train.date),
        end: new Date(moment(train.date).add(train.duration, 'minutes').toISOString()),
        allDay: false
      }
    })

    return(
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
    )
}