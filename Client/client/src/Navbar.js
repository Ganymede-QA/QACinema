import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
    
export default class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar" style={{backgroundColor: "black"}} >
                <a className="navbar-brand" href="#" style={{color: "white", fontSize: "30px", paddingRight: "100px"}}><Link to="/"><img src="../media/logo.png" style={{width: "230px", height: "100px"}}/></Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color: "white"}}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={{color: "white", fontSize: "20px" , paddingRight: "30px"}}>Info<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color: "white", fontSize: "20px" , paddingRight: "30px"}}>Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }   
}

