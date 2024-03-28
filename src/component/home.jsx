import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data"
import { useEffect } from "react";
import Nav from "./nav";
export default function Home({bookList,setBookList}) {

    const searchField = useRef()
    const titleElm = useRef()
    const authorElm = useRef()
    const navigate = useNavigate()
const [show,setShow]= useState(false)
    const [editIndex,setEditIndex]=useState(null)

    const [editItem,setEditItem] = useState({
        title:"",
        author:"",
        picture:''
    })
    console.log('edit item is : ', editItem);

    const deleteBtnHandler = (idx) => {
        let newList = [...bookList];
        newList.splice(idx, 1);
        setBookList(newList);
    }
    const searchChangeHandler = ()=>{
        
        if(searchField.current.value==""){
            setBookList(data)
        }
        else{
        console.log('serch');
       let newList = bookList.filter((elm)=>((elm.author).toUpperCase()).includes((searchField.current.value.trim()).toUpperCase() )|| ((elm.title).toUpperCase()).includes((searchField.current.value.trim()).toUpperCase()))
       if(newList.length==0){
        alert('no result found')
       }
       else{
        setBookList(newList)
       }
       }
    }

    const editBtnHandler = (idx)=>{
        let obj = bookList[idx]       
        setEditItem(obj)  
        setEditIndex(idx)
        setShow(true)     
    }

    const saveBtnHandler =()=>{
        if (titleElm.current.value.trim()=="" || authorElm.current.value.trim()=="") {
            alert("input field can not be empty")
        }
        else{
            let editObj = bookList[editIndex]
        let newObj = {...editObj,title:titleElm.current.value,author:authorElm.current.value}
        let newBookList = [...bookList]
        newBookList.splice(editIndex,1,newObj)
        setBookList(newBookList)
        setShow(false)
        }
        
    }

    const detailBtnHandler = (idx)=>{
         let detailItem = bookList[idx]
         localStorage.setItem("book",JSON.stringify(detailItem))
        navigate(`/book/${idx+1}`)
    }


    return <div className="home">
        <Nav></Nav>
        <div className="search">
            <input onChange={searchChangeHandler} ref={searchField} placeholder="search by author or book name" type="text" />
            {/* <button onClick={searchBtnHandler}>Search</button> */}
        </div>
        <div className="card-container">
          
        {
            bookList.map((item, idx) => <div key={idx} className="card">
                <img className="img" src={item.picture} alt="" />
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <div className="btnContainer">
                    <button onClick={() => { deleteBtnHandler(idx) }}>Delete</button>
                    <button onClick={()=>{editBtnHandler(idx)}}>Edit</button>
                    <button onClick={()=>{detailBtnHandler(idx)}}>Details</button>
                </div>

            </div>
            )
        }

        </div>
        {show?(<div className="edit-container">

<form action="">
    <label htmlFor="">Title</label>
    <br/>
    <input ref={titleElm} value={editItem.title}  onChange={(e)=>{setEditItem({...editItem,title:e.target.value})}} placeholder="tiltle" type="text" />
    <br />
    <label htmlFor="">Author</label><br />
    <input value={editItem.author}  onChange={(e)=>{setEditItem({...editItem,author:e.target.value})}} ref={authorElm} placeholder="Author name" type="text" />
    <br />
    <button onClick={saveBtnHandler} className="add" type="button">save</button>
</form>

</div>):null}

        

    </div>
}