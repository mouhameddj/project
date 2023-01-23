import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Header from './components/header'

import Kanban from './kanban'


// Import other React Component

import StudentList from 
"./features/auth/Studentlist";


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
       
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<StudentList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/kanban' element={<Kanban />} />
      
          </Routes>
        </div>
      </Router>
     
    </>
  )
}

export default App