import { CandlestickChartComponent } from "@/components/trade/candlestickchart";
import { TradeHeader } from "@/components/trade/nameheader";
import { PriceTag } from "@/components/trade/price";
import { SellBuyBtns } from "@/components/trade/sell_buy_btns";
import { price_data } from "../api/crypto_data";
export default function Trade(){
    return(
        <>
            <TradeHeader />
            <PriceTag />
            <CandlestickChartComponent data={price_data} />
            <SellBuyBtns />
        </>
    )
}