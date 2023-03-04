import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css'

interface CoinBtns {
    data:{
        coin_name: string
        coin_logo: string
        coin_id: number
    }[];
}


export const ScrollingBnts: React.FC<CoinBtns> = ({data}) => {
    return(
        <>
            <Marquee className={styles.scroll_btns}>
                {data.map((btn, ndx) => (
                    <div key={btn.coin_id} className={styles.crypto_bnt}>
                        <Link href={`/trade/${btn.coin_id}`}>
                            <a>
                                <Image 
                                    src={btn.coin_logo}
                                    alt={btn.coin_name}
                                    sizes={`20px`}
                                />
                                <h5>{btn.coin_name}</h5>
                            </a>
                        </Link>
                    </div>
                ))}
            </Marquee>
        </>
    )
}