import { Link, Navigate, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './Navbar.css'
import { useState } from "react";
export const Navbar = () =>{
    const [Search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!Search) return

        navigate(`/search?q=${Search}`)
        setSearch("")
    }

    return(
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie />MoviesLib</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Busque um filme" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={Search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
}