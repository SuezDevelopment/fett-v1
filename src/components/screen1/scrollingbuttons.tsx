import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import Icons from "next/"

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
            <div>
                <ul>
                    {data.map((btn, ndx) => (
                        <li key={btn.coin_id}>
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
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}