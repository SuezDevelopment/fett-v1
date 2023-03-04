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
    const middleIndex = Math.ceil(data.length / 2);
    const firstHalf = data.splice(0, middleIndex);   
    const secondHalf = data.splice(-middleIndex);
    return(
        <>
            <Marquee direction="left" pauseOnClick={true} className={styles.scroll_btns}>
                {firstHalf.map((btn, ndx) => (
                    <div key={ndx} className={styles.crypto_bnt}>
                        <Link href={`/trade?crypto=${btn.coin_id}`}>
                  
                            <Image 
                                src={btn.coin_logo}
                                alt={btn.coin_name}
                                sizes={`20px`}
                            />
                            <h5>{btn.coin_name}</h5>
        
                        </Link>
                    </div>
                ))}
            </Marquee>
            <Marquee direction="right" pauseOnClick={true} className={styles.scroll_btns}>
                {secondHalf.map((btn, ndx) => (
                    <div key={ndx} className={styles.crypto_bnt}>
                        <Link href={`/trade?crypto=${btn.coin_id}`}>
                            <Image 
                                src={btn.coin_logo}
                                alt={btn.coin_name}
                                sizes={`20px`}
                            />
                            <h5>{btn.coin_name}</h5>
                        </Link>
                    </div>
                ))}
            </Marquee>
        </>
    )
}