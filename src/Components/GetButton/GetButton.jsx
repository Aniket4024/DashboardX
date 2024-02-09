import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./GetButton.module.scss"


const GetButton = ({title,style1})=>{
    return <button id={styles.GetButn} style={style1}>
                Get template <BiRightArrowAlt/>
            </button>
}

export default GetButton;