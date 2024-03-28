import { useEffect, useState } from 'react';
import './App.css'
import Home from './component/home'
import Nav from './component/nav'
import data from './data'
import AddBook from './component/addBook';
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Details from './component/detail.jsx'

function App() {
  const [bookList,setBookList] = useState([])
  useEffect(()=>{
    setBookList(data)
  },[])

  return (
    <div className="container">
      <BrowserRouter>
    {/* <Nav/> */}
     <Routes>
     
      <Route path='/' element={<Home bookList={bookList} setBookList={setBookList}/>}/>
      <Route path='/addbook' element={<AddBook bookList={bookList} setBookList={setBookList}/>}/>
      <Route path='/book/:id' element={<Details/>}/>
     </Routes>
     

    </BrowserRouter>
      
    </div>
  )
}

export default App
