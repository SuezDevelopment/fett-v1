import React, { useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

interface NftCardProps {
    data: {
      id: number;
      nft_image: string;
      bid_price: number;
      bid_countdown: string;
    }[];
}
export const  NftCards: React.FC<NftCardProps>  = ({data}) => {
    return(
        <>
            {data.map(nft_card => (
                <div className={styles.nft_cards} key={nft_card.id}>
                    <Link href={`/bid?nft=${nft_card.id}`}>
                        <div className={styles.nft_card}>
                    
                        </div>
                    </Link>
                    <div className={styles.nft_card_bottom}>
                        <div>
                            <h1>{`ETH ${nft_card.bid_price}`}</h1>
                        </div>
                        <div>
                            <h2>{nft_card.bid_countdown}</h2>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}