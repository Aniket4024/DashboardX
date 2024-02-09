import styles from "../PageCard/PageCard.module.scss"



const PageCard = ({price,priceReturn})=>{

    const price22 = 22;
    priceReturn(price22)

    return <div>
        {price}
    </div>

}

export default PageCard