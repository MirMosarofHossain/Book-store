import { useRef } from "react"
import {useNavigate} from "react-router-dom"

export default function AddBook({bookList,setBookList}){
    const navigate = useNavigate()
    const titleElm = useRef()
    const authorElm = useRef()
    const imageElm = useRef()
    const addBtnHandler = ()=>{
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        const valid = urlRegex.test(imageElm.current.value);
        if(titleElm.current.value.trim()=="" ||authorElm.current.value.trim()==""||imageElm.current.value.trim()==""){
            alert('fill all input')
        }
         else if(!valid ){
            alert("URL is not valid")

        }
        else{
            let obj = {
                title:titleElm.current.value,
                author:authorElm.current.value,
                picture:imageElm.current.value
            }
            titleElm.current.value="";
            authorElm.current.value="";
           imageElm.current.value="";
            let newBookList = [...bookList,obj]
            console.log(newBookList);
            setBookList(newBookList)
            navigate('/')
        }
        
    }
    return <div className="form-container">
        <button onClick={()=>{navigate('/')}}>back</button>
        <h1>Add New Book</h1>
        <form action="">
            <label htmlFor="">Title</label>
            <br/>
            <input ref={titleElm} placeholder="tiltle" type="text" />
            <br />
            <label htmlFor="">Author</label><br />
            <input ref={authorElm} placeholder="Author name" type="text" />
            <br />
            <label htmlFor="">Cover image</label><br />
            <input ref={imageElm} placeholder="https://cover-image" type="link" /> <br />
            <button onClick={addBtnHandler} className="add" type="button">Add</button>
        </form>
    </div>
}