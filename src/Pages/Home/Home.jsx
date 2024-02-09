import styles from "./Home.module.scss"
import WebFlowDevLink from "../../Media/WebFlowDevLink.svg"
import GetButton from "../../Components/GetButton/GetButton"
import { useSelector } from "react-redux"
import layerImageFront from "../../Media/layerImageFront.png"
import layerImageBack from "../../Media/layerImageBack.png"
import { useEffect, useRef, useState } from "react"
import PageCard from "../../Components/PageCard/PageCard"


const Home = ()=>{

    const SideBarStatus = useSelector(store=>store.SideBarReducer.open)

    const FrontImage = useRef(null);
    const BackImage = useRef(null);

    const [marginLeft , setMarginLeft] = useState(0)
    const [marginRight , setMarginRight] = useState(0)
    const [marginTop , setMarginTop] = useState(0)
    const [marginBottom , setMarginBottom] = useState(0)

    useEffect(()=>{

        let lastScrollTop =document.documentElement.scrollTop;

        window.addEventListener('scroll',function handleScroll() {
            
            const scrollTopPosition = document.documentElement.scrollTop;

            if (scrollTopPosition > lastScrollTop ) {
                
                setMarginTop(prev=>prev+0.003)
                BackImage.current.style.marginTop = `${marginTop}px`
                setMarginRight(prev=>prev+0.003)
                BackImage.current.style.marginRight = `-${marginRight}px`
                
            } else if (scrollTopPosition < lastScrollTop) {
                setMarginTop(prev=>prev+0.003)
                BackImage.current.style.marginTop = `-${marginTop}px`
                setMarginRight(prev=>prev+0.003)
                BackImage.current.style.marginRight = `${marginRight}px`
            }
            lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
        },false);

        window.onscrollend = ()=>{
            // setMarginTop(0)
            // setMarginLeft(0)
            // setMarginBottom(0)
            // setMarginRight(0)
        }


    },[marginBottom,marginLeft,marginRight,marginTop])



    const priceReturn = (a)=>{
        console.log(a)
    }

    const price = 10;


    

    return <div 
        id={styles.home}
        style={{
            marginLeft:SideBarStatus?"301px":"63px"
        }}
    >

        <div 
            id={styles.Part1}
        >
            <div
                id={styles.part1Top}
            >
                <img src={WebFlowDevLink} alt="" />
                <h1>
                    Bring the power of Webflow to React JS using Dashdark X Webflow Template
                </h1>
                <p>
                    Presenting Dashdark X, the ultimate dark mode dashboard Webflow Template.
                </p>
                <GetButton style1={{width:"170px",margin:"10px auto 0px auto"}}/>
            </div>
            <div
                id={styles.Part1Bottom}
            >
                <img 
                    src={layerImageBack} 
                    alt="Back Image" 
                    id={styles.BackImage}
                    ref={BackImage}
                    />
                <img 
                    src={layerImageFront} 
                    alt="Front Image" 
                    id={styles.FrontImage}
                    ref={FrontImage}
                />
            </div>
        </div>
        <div 
            id={styles.Part2}
        >
            <h1>
                3 Pages included and more on its way
            </h1>
            <div>
                <PageCard price={price} priceReturn={priceReturn}  />
            </div>
        </div>

    </div>

}

export default Home