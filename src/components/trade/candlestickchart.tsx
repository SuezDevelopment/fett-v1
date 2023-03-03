import React, { useEffect, useRef } from 'react';
import styles from "@/styles/trade.module.css"
import { ColorType, createChart, CrosshairMode, IChartApi, LineStyle, PriceScaleMode } from 'lightweight-charts';
// import type {TimeScaleType} from "lightweight-charts"

interface CandlestickChartProps {
    data: {
      time: string;
      open: number;
      high: number;
      low: number;
      close: number;
    }[];
}


export const CandlestickChartComponent: React.FC<CandlestickChartProps> = ({ data }) => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartApiRef = useRef<IChartApi | null>(null);
    const getRandomPrice = () =>{
        return 10 + Math.round(Math.random() * 10000) / 100;
    }

    useEffect(() => {
        if (!chartApiRef.current && chartContainerRef.current) {
            chartApiRef.current = createChart(chartContainerRef.current, {
                width: 1000,
                height: 600,
                layout: {
                textColor: '#fff',
                background: {color: '#000'},
                },
                crosshair: {
                    mode: CrosshairMode.Normal,
                },
                grid: {
                    vertLines: {
                      color: '#f1f1f1',
                    },
                    horzLines: {
                      color: '#575454',
                      style: LineStyle.LargeDashed
                    },
                },
                rightPriceScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
                overlayPriceScales: {
                    mode: PriceScaleMode.Normal,
                    borderColor: '#2e2e2e',
                },
                timeScale: {
                    timeVisible: true,
                    visible: true,
                    secondsVisible: false,
                    borderColor: '#2e2e2e',
                    tickMarkFormatter: (time: number, tickMarkType: any, locale: any) => {
                      const date = new Date(time * 1000);
                      return `${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
                    },
                  },
            });
        }
        if (chartApiRef.current) {
            const candlestickSeries = chartApiRef.current.addCandlestickSeries({
                upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
            })
            chartApiRef.current.timeScale().fitContent();
            chartApiRef.current.options

            var lastClose = data[data.length - 1].close;
            var lastIndex = data.length - 1;

            var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
            var targetPrice = getRandomPrice();

            var currentIndex = lastIndex + 1;
            var currentBusinessDay = { day: 29, month: 5, year: 2019 };
            var ticksInCurrentBar = 0;
            var currentBar = {
                open: data[1].open,
                high: data[2].high,
                low: data[3].low,
                close: data[4].close,
                time: currentBusinessDay,
            };

            const mergeTickToBar = (price: any) => {
                if (currentBar.open === null) {
                    currentBar.open = price;
                    currentBar.high = price;
                    currentBar.low = price;
                    currentBar.close = price;
                } else {
                    currentBar.close = price;
                    currentBar.high = Math.max(currentBar.high, price);
                    currentBar.low = Math.min(currentBar.low, price);
                }
                candlestickSeries.update(currentBar);
            }

            const reset = () => {
                candlestickSeries.setData(data);
                lastClose = data[data.length - 1].close;
                lastIndex = data.length - 1;
        
                targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
                targetPrice = getRandomPrice();
        
                currentIndex = lastIndex + 1;
                currentBusinessDay = { day: 29, month: 5, year: 2019 };
                ticksInCurrentBar = 0;
            }

            const nextBusinessDay = (time: any) => {
                var d = new Date();
                d.setUTCFullYear(time.year);
                d.setUTCMonth(time.month - 1);
                d.setUTCDate(time.day + 1);
                d.setUTCHours(0, 0, 0, 0);
                return {
                    year: d.getUTCFullYear(),
                    month: d.getUTCMonth() + 1,
                    day: d.getUTCDate(),
                };
            }

            setInterval(function() {
                var deltaY = targetPrice - lastClose;
                var deltaX = targetIndex - lastIndex;
                var angle = deltaY / deltaX;
                var basePrice = lastClose + (currentIndex - lastIndex) * angle;
                var noise = (0.1 - Math.random() * 0.2) + 1.0;
                var noisedPrice = basePrice * noise;
                mergeTickToBar(noisedPrice);
        
                
                if (++ticksInCurrentBar === 5) {
                    // move to next bar
                    currentIndex++;
                    currentBusinessDay = nextBusinessDay(currentBusinessDay);
                    currentBar = {
                        open: data[1].open,
                        high: data[2].high,
                        low: data[3].low,
                        close: data[4].close,
                        time: currentBusinessDay,
                    };
                    ticksInCurrentBar = 0;
                    if (currentIndex === 5000) {
                        reset();
                        return;
                    }
                    if (currentIndex === targetIndex) {
                        // change trend
                        lastClose = noisedPrice;
                        lastIndex = currentIndex;
                        targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
                        targetPrice = getRandomPrice();
                    }
                }
            }, 1000);
        }
        
    }, [data])

    return  <div ref={chartContainerRef} />
}