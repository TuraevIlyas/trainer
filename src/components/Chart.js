import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'

var output = []

export default function Chart() {

    const _ = require('lodash')
    const [trainInfo, setTrainInfo] = React.useState([])
    const [flag, setFlag] = React.useState(false)

    React.useEffect(() => {
        fetchChart()
        setFlag(true)
    }, [])
    
    const fetchChart = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainInfo(data))
        .catch(err => console.error(err))
    }

    if (flag) {    
        trainInfo.forEach(function(v){ delete v.date
                                       delete v.customer 
                                       delete v.id})

        output=_(trainInfo)
        .groupBy('activity')
        .map((objs, key) => ({
            'activity': key,
            'duration': _.sumBy(objs, 'duration') }))
        .value()
        }

    return(
        <div>
            <BarChart width={700} height={550} data={output}> 
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='activity'/>
                <YAxis/>
                <Bar dataKey="duration" fill="#8884d8" />
            </BarChart>
        </div>
    )
}