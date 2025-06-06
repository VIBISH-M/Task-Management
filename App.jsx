import Task from './components/Task';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
function App() {
 
  return(
    <Routes>
     <Route path="/" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/task" element={<Task/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App;
