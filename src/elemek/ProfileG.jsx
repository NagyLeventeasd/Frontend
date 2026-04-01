import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../kinezetek/test.css'
import Gomb from "./GombE";


export default function Dropdown({user, onLogout}) {
    const [open, setOpen] = useState(false);
    const isAdmin = user?.role === 'admin'

    return (
        <div className="drop">
            <button className="felsoGomobok felsoGI GH felsoGIK" onClick={() => setOpen(!open)}>
                Profile
            </button>

            {open && (
                <ul className="dropdown">
                    
                    {isAdmin && <li><Link to="/deposit" ><Gomb content="Admin"/></Link></li>}

                    <li><Link to="/deposit" ><Gomb content="Deposit"/></Link></li>

                    <li><Gomb content="Log out" buttonClass="dropGomb" onClick={onLogout}/></li>

                   

                </ul>
            )}
        </div>
    );
}
