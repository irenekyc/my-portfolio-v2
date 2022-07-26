import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleMenu} from '../actions/modal'

const NavBar = ()=>{
    const dispatch = useDispatch()
    const isOpen = useSelector(state=> state.modal.menu)


    let btnClass = ""
    if (isOpen){
        btnClass="active"
    }else {
        btnClass= ""
    }
    return(
            <nav>
                <h1> Irene K. </h1>
                <div className="btn-hamburger-outer" >
                    <label for="toggle-menu" className={`btn-hamburger ${btnClass}`} >
                        <input type="checkbox" value="open" id="toggle-menu" onChange={()=>dispatch(toggleMenu(isOpen))}/>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                    </label>
                </div>
            </nav>

)
}


export default NavBar