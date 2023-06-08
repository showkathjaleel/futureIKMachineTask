
import {Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Signin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Login/> } />
      <Route path='/signup' element={ <Signup/> } />
      <Route path='/dashboard' element={ <Dashboard/> } />
    </Routes>
    // <div className="flex">
    //   <div className='flex col-span-1'>
    //  <Sidebar/ >
    //   </div>
    //   <div className='flex col-span-11'>
    //    < MainContainer />
    //   </div>
 
    // </div>
  );
}

export default App;
