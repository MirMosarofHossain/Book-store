// import React, { useEffect, useState } from 'react'
// import {BrowserRouter, Route, Routes,} from 'react-router-dom'
// import Nav from './component/nav.jsx'
// import Home from './component/home.jsx'
// import AddBook from './component/addBook.jsx'
// import data from './data.js'
// import Details from './component/detail.jsx'


// export default function RouterComponent(){
// const [bookList,setBookList] = useState([])
// useEffect(()=>{
//   setBookList(data)
// },[])
//   return (
//     <BrowserRouter>
//     <Nav/>
//      <Routes>
//       <Route path='/' element={<Home bookList={bookList} setBookList={setBookList}/>}/>
//       <Route path='/addbook' element={<AddBook bookList={bookList} setBookList={setBookList}/>}/>
//       <Route path='/book/:id' element={<Details/>}/>
//      </Routes>
     

//     </BrowserRouter>
//   )
// }