import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icons from "next/"

interface CoinBtns {
    coin_name: string
    coin_logo: string
    coin_id: string
}

const btns: CoinBtns[] = [

]

export function ScrollingBnts() {
    return(
        <>
            <div>
                <ul>
                    {btns.map(btn => (
                        <li key={btn.coin_id}>
                            <Link href={`/trade/${btn.coin_id}`}>
                                <a>
                                    <Image 
                                        src={btn.coin_logo}
                                        alt={btn.coin_name}
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