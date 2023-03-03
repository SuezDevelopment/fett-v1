import styles from "@/styles/bid.module.css"

export function NftCardHeader() {
    return(
        <>
            <div className={styles.nft_card_header}>

            </div>
            <div className={styles.nft_card_title}>
                <h1>infinity #88</h1>
            </div>
            <div className={styles.nft_creator}>
                <div className="col1">
                    <p>creator</p>
                    <h2>@realy</h2>
                </div>
                <div className={styles.add_btn_col2}>

                </div>
            </div>
            <div className={styles.time_price}>
                <div className={styles.time}>
                    13 : 27 : 45
                </div>
                <div className={styles.price}>
                    <h4>1.24</h4>
                </div>
            </div>

            <div className={styles.place_bid_btn}>
                <h2>place a bid</h2>
            </div>
        </>
    )
}