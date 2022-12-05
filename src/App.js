import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Main from './Components/Main/Main.tsx';
import Vdata from './Components/vdata/Vdata.tsx';
import Create from './Components/Create/Create.tsx';
import ApiPage from './Components/ApiPage/ApiPage.tsx';
import DataPage from './Components/DataPage/DataPage.tsx';
import Detail from './Components/detail/Detail.tsx';
import Edit from './Components/Edit/Edit.tsx';
import DeletePage from './Components/DeletePage/DeletePage.tsx';

function App() {
  return (
    <div className="App">
        <Router>
        <Header />
          <Routes>
            <Route  path="/" element={<Main/>}></Route>
            <Route  path='/create' element={<Create/>}></Route>
            <Route  path='/list' element={<Vdata/>}></Route>
            <Route  path='/api' element={<ApiPage/>}></Route>
            <Route  path='/data' element={<DataPage/>}></Route>
            <Route  path='/list/view/:id' element={<Detail/>}></Route>
            <Route  path='/list/edit/:id' element={<Edit/>}></Route>
            <Route  path='/list/delete/:id' element={<DeletePage/>}></Route>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
