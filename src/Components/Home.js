import React from 'react'
import './Home.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container" >
            <h1>Welcome to Anime Quote <br/> App</h1>
            <Link to="/quote" style={{ textDecoration: 'none', color:"#0e0f2d" }}>
            <PlayCircleOutlineIcon  style={{fontSize:"8rem" ,cursor:"pointer" }} /> </Link>

            
        </div>
    )
}
