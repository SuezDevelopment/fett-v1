import styles from "@/styles/trade.module.css"
// import * as Icon from "cryptocurrency-icons"
export function SellBuyBtns(){
    return(
        <>
            <div className={styles.sell_buy_btns}>
                <div className={styles.sell_btn}>
                    <h2>sell</h2>
                </div>
                <div className={styles.buy_btn}>
                    <h2>buy</h2>                
                </div>
            </div>
        </>
    )
}