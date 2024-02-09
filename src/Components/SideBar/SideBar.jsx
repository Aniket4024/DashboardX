import React, { useEffect, useRef } from "react"
import styles from "./SideBar.module.scss"
import logo from "../../Media/logo.svg"
import SideArrowIcons from "../../Media/sideArrowsIcon.svg"
import profilePhoto from "../../Media/ProfilePhoto.png"
import AccordionList, { MenuData } from "../AccordionList/AccordionList";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_SIDEBAR } from "../../Redux/SideBar/action";
import faviconLogo from "../../Media/Favicon.svg"



const SideBar = ()=>{

    const SearchBox = useRef(null)

    const InputSearchFocus = ()=>{
        SearchBox.current.style.outline = "1px solid #5e65e1"
    }
    
    const InputSearchMouseLeave = ()=>{
        SearchBox.current.style.outline = "1px solid #343b4f"
    }

    const dispatch = useDispatch()
    const sidebarStatus = useSelector((store)=>store.SideBarReducer.open);
    

    const CloseStyle = {
        width:"63px",
        borderRight:"1px solid #37446b",
        // boxShadow: "none",
    }

    const CloseIconStyle = {
        margin:"20px 0px",
        borderBottom:"1px solid #37446b",
        borderTop:"1px solid #37446b",
        width:"100%",
        height:"90px",
    }

    return <div
        id={styles.SideBar}
        style={sidebarStatus ? {} : CloseStyle}
    >
        {
            sidebarStatus ?
            <>
                <div 
                    id={styles.SideBarP1}
                >
                    <img 
                        src={logo} 
                        alt="Logo" 
                    />
                    <img 
                        src={SideArrowIcons} 
                        style={{
                            cursor:"pointer"
                        }} 
                        alt="" 
                        onClick={()=>dispatch(OPEN_SIDEBAR())} 
                    />
                </div>
                <div 
                    id={styles.SearchBox}
                    ref={SearchBox}
                >
                    <BiSearch color="#aeb9e1" style={{marginTop:"-4px"}}/>
                    <input 
                        type="search"
                        id={styles.InputSearchSideBar} 
                        placeholder="Search for..."
                        results="2"
                        onFocus={InputSearchFocus}
                        onMouseEnter={InputSearchFocus}
                        onMouseLeave={InputSearchMouseLeave}
                        onChange={InputSearchFocus}
                    />
                </div>
            

                <AccordionList/>
            </>

            :

            <>
                <div id={styles.closeLogo}>
                    <img 
                        style={{
                            cursor:"pointer"
                        }} 
                        width={"25px"} 
                        src={faviconLogo} 
                        alt="logo" 
                        onClick={()=>dispatch(OPEN_SIDEBAR())}
                    />
                </div>
                <div id={styles.CloseIcons}>
                    {
                        MenuData.map((e)=><div
                            id={styles.CloseIconStyle}
                         style={e.id===7?CloseIconStyle:{}} >
                            {e.icon}
                        </div>)
                    }
                    <div
                        id={styles.CloseIconStyle}
                    >
                        <img 
                            style={{
                                width:"30px",
                                height:"30px",
                                border:"3px solid #5e65e1",
                                borderRadius:"100%",
                                marginTop:"40px"
                            }} 
                            src={profilePhoto} 
                            alt="ProfilePhoto"  
                        />
                    </div>
                </div>
            </>
        }
    </div>
    
}

export default SideBar