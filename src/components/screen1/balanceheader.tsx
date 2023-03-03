import styles from '@/styles/Home.module.css'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

export function BalanceHeader(){
     return(
        <>
            <div className={styles.balance_header}>
                <div className="balance_text">
                    <p>your balance</p>
                    <h1>$1234.56</h1>
                </div>
                <div className={styles.balance_btn}>
                    <CIcon icon={icon.cilPlus} size="xl"/>
                </div>
            </div>
        </>
     )
}