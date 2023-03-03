import styles from "@/styles/trade.module.css"

export function PriceTag() {
    return(
        <>
            <div className={styles.price_tag}>
                <h1>
                    $ 1579.88 
                </h1>
                &nbsp;&nbsp; <sub>{`+11.62(0.74%)`}</sub>
            </div>
        </>
    )
}