import './App.css'
import Customers from './components/Customers'
import MenuBar from './components/MenuBar'
import Trainings from './components/Trainings'
import Calendar from './components/Calendar'
import Chart from './components/Chart'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DownloadOutlined } from '@ant-design/icons'
import { CSVLink } from 'react-csv'

export default function App() {
  
  const csvLink = React.useRef() //CSV Reference for Button Click

  const [info, setInfo] = React.useState([])//VAR for Passing PARENT <— CHILD
  const forInfo = info => {
    setInfo(info)
  } //FUNC for Passing PARENT <— CHILDREN
  //On customer page I got 2 components: Customer and Menubar, which has download button. So I have to pass data about customers from one to other.
  //I could call API but I decide to pass data via callback function Customer—>App then MenuBar—>App

  const download = () => {
    csvLink.current.link.click()
  } 

  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path='/trainings' element={<> <MenuBar param={'List of Trainings'}/> <Trainings /> </>}/>
          <Route path='/*' element={<> <MenuBar param={'List of Customers'} load={<DownloadOutlined onClick={download} style={{ fontSize: 30, marginLeft: 950 }}/>}/> <Customers forInfo={forInfo}/> </>}/>
          <Route path='/calendar' element={<> <MenuBar param={'Calendar'}/> <Calendar /> </>}/>
          <Route path='/chart' element={<> <MenuBar param={'Information Chart'}/> <Chart /> </>}/>
        </Routes>

        <CSVLink
         data={info}
         filename='Customers.csv'
         className='hidden'
         ref={csvLink}
         target='_blank'
      />
    </div>
    </Router>
  )
}