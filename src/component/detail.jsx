import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Details() {
    const [detailItem, setDetailItem] = useState([])
    const navigate = useNavigate()

    const backBtnHandler = ()=>{
       localStorage.removeItem("book")
       navigate('/')
    }
    useEffect(()=>{
        let obj = localStorage.getItem("book")
        let jsObj = JSON.parse(obj)
        console.log("detail item is ", jsObj);
        setDetailItem([jsObj])      
    },[])
    return detailItem.map((item,idx) => <div key={idx} className="detail-container">
        <img  src={item.picture} alt="" />
        <h3>{item.title}</h3>
        <p>{item.author}</p>
        <div className="btnContainer">
            <button className="back" onClick={backBtnHandler}>Back</button>
        </div>
    </div>
    )
}