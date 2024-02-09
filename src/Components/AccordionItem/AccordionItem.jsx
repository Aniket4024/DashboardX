import {  AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import styles from "./AccordionItem.module.scss"

const AccordionMenu  = ({name,menus,icon,class1})=>{
    // console.log(menus)

    return <AccordionItem className={class1=== "ComponentLibrary" ? styles.ComponentLibrary : styles.AccordionItem}>

            <AccordionButton className={styles.AccordionButton}>
                <Box as="span" flex='1'className={styles.Box}>
                    {icon} {name}
                </Box>
                <AccordionIcon fontSize={"20px"} />
            </AccordionButton>
            <AccordionPanel pb={4}>
               {
                    menus.map((e,i)=><div className={styles.menu} key={i}>
                        {e}
                    </div>)
               }
            </AccordionPanel>
        </AccordionItem>
}

export default AccordionMenu