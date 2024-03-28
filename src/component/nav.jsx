import { Link } from "react-router-dom"

export default function Nav(){
    
    return <>
    <div className="nav">
        <ul>
          <li><Link className="link" to={'/'}>Home</Link></li>
            <li><Link className="link" to={'/addbook'}>Add Book</Link></li>
        </ul>
    </div>
    </>
}