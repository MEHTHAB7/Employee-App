import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmoloyee';
import SearchEmployee from './components/SearchEmployee';
import ViewAllEmployee from './components/ViewAllEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>

<Route path='/' element={<AddEmployee />}/>
<Route path='/Search' element={<SearchEmployee />}/>
<Route path='/delete' element={<DeleteEmployee />}/>
<Route path='/view' element={<ViewAllEmployee />} />

     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
