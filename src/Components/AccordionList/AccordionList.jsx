import styles from "../AccordionList/AccordionList.module.scss"
import { BiRightArrowAlt, BiRupee,BiSolidBell,BiSolidDashboard,BiSolidHelpCircle,BiSolidStar,BiSolidUser, BiSupport } from "react-icons/bi";   
import { RiHomeFill } from "react-icons/ri";   
import { IoExtensionPuzzle } from "react-icons/io5";   
import { IoMdSettings } from "react-icons/io";   
import { TbBrandWebflow } from "react-icons/tb";   
import { FaCube } from "react-icons/fa";   
import AccordionMenu from "../AccordionItem/AccordionItem";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import ItemStyle from "../AccordionItem/AccordionItem.module.scss"
import { FiLogOut } from "react-icons/fi";
import ProfilePhoto from "../../Media/ProfilePhoto.png"
import GetButton from "../GetButton/GetButton";



export const MenuData = [
    {
        id:1,
        name:"Demo Pages",
        menus:["Reports","Products","Pricing"],
        icon:<BiSolidDashboard  className={styles.MenuIcon}/>,
    },
    {
        id:2,
        name:"Dashboard",
        menus:["All pages","Reports","Products","Tasks"],
        icon:<RiHomeFill  className={styles.MenuIcon}/>,
    },
    {
        id:3,
        name:"Features",
        menus:["All pages","Contacts","Compaines","Projects","Tasks","Board","Table","Crypto"],
        icon:<BiSolidStar  className={styles.MenuIcon}/>,
    },
    {
        id:4,
        name:"Users",
        menus:["All pages","Profile V1","Profile V2","Profile V3"],
        icon:<BiSolidUser  className={styles.MenuIcon}/>,
    },
    {
        id:5,
        name:"Pricing",
        menus:["All pages","Profile V1","Profile V2","Profile V3","Pricing Single"],
        icon:<BiRupee  className={styles.MenuIcon}/>,
    },
    {
        id:6,
        name:"Intergrations",
        menus:["All pages","Profile V1","Profile V2","Profile V3","Pricing Single"],
        icon:<IoExtensionPuzzle  className={styles.MenuIcon}/>,
    },
    {
        id:7,
        name:"Component Library",
        menus:["All pages","Profile V1","Profile V2","Profile V3","Pricing Single"],
        icon:<FaCube  className={styles.MenuIcon}/>,
        class1:"ComponentLibrary"
    },
    {
        id:8,
        name:"Settings",
        menus:["All pages","Settings V1","Settings V2","Settings V3"],
        icon:<IoMdSettings  className={styles.MenuIcon}/>,
    },
    {
        id:9,
        name:"Template pages",
        menus:["All pages","Start here","Licenses","Changelog"],
        icon:<TbBrandWebflow  className={styles.MenuIcon}/>,
    }
]

const AccordionList = ()=>{

    return <Accordion allowToggle id={styles.MenusList}>
        {
            MenuData.map((e)=><AccordionMenu
                name={e.name} 
                menus={e.menus}
                icon={e.icon}
                class1={e?.class1}
                key={e.id}
            />)
        }
        <AccordionItem className={ItemStyle.AccordionItem}>
            <AccordionButton className={ItemStyle.AccordionButton}>
                <Box as="span" flex='1' textAlign='left'className={styles.Box}>
                    <img src={ProfilePhoto} alt="" />
                    <div>
                        <h3>Aniket Zade</h3>
                        <p>Account settings</p>
                    </div>
                </Box>
                <AccordionIcon fontSize={"20px"} />
            </AccordionButton>
            <AccordionPanel pb={4} className={styles.AccordionPanel}>
                <p><BiSolidUser/> View profile</p>
                <p><IoMdSettings/> Profile setting</p>
                <p><BiSolidBell/> Notifications</p>
                <hr />
                <p><BiSolidHelpCircle/> Help center</p>
                <p><BiSupport/> Support</p>
                <p
                    style={{color:"red",fontWeight:"700"}}
                >
                    <FiLogOut/> Log out
                </p>
            </AccordionPanel>
            {/* <button id={styles.GetButn}>
                Get template <BiRightArrowAlt/>
            </button> */}
            <GetButton style1={{margin:"50px auto 30px auto",width:"235px"}}/>
        </AccordionItem>
    </Accordion>

}

export default AccordionList