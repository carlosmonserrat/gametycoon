import React, {FC} from "react";
import CSS from "csstype";

interface TimeBarProps {
    current: number,
    expensesMonth: number,
    nextMonthMoney: number
}

const BalanceSheet: FC<TimeBarProps> = ({current, expensesMonth, nextMonthMoney}): JSX.Element => {
    const paperRotate: CSS.Properties = {
        'transform': 'rotate(-4deg)'
    }

    const balanceSheetTitle: CSS.Properties = {
        'fontWeight': '400',
        'fontSize': '12px',
        'textAlign': 'center',
        'backgroundColor': '#2C77C2',
        'color': 'white',
        'padding': '8px'
    }

    const balanceSheetColorRow: CSS.Properties = {
        'backgroundColor': '#2C77C2',
        'color': 'white',
        'padding': '5px',
        'fontSize': '14px',
    }

    const balanceSheetRow: CSS.Properties = {
        'padding': '5px',
        'fontSize': '14px',
    }

    return (
        <svg width="280" height="320" viewBox="0 0 199 249" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M170.575 32.3094L25.3904 32.73C22.6359 32.7379 20.4066 34.9722 20.4049 37.7267L20.2841 227.584C20.2823 230.35 22.5273 232.592 25.2938 232.587L171.948 232.303C174.72 232.298 176.958 230.039 176.938 227.268L175.589 37.2739C175.569 34.5207 173.328 32.3014 170.575 32.3094Z"
                fill="#244E78"/>
            <path
                d="M166.221 38.6041L29.5413 38.7631C26.7814 38.7663 24.5461 41.0051 24.5471 43.765L24.6138 221.589C24.6149 224.363 26.8737 226.605 29.6475 226.587L168.385 225.651C171.156 225.633 173.384 223.363 173.35 220.591L171.227 43.5441C171.194 40.804 168.961 38.6009 166.221 38.6041Z"
                fill="#333E49"/>
            <g filter="url(#filter0_d_38_26)">
                <path d="M42.9167 207.821L41.5009 52.4479L163.087 50.3803L164.774 208.383L42.9167 207.821Z"
                      fill="#F9F8F6"/>
            </g>
            <g filter="url(#filter1_d_38_26)">
                <path d="M33.0202 216.01L31.6044 60.6372L153.191 58.5696L154.877 216.572L33.0202 216.01Z"
                      fill="#F9F8F6"/>
            </g>
            <g filter="url(#filter2_d_38_26)">
                <path d="M38.7028 200.115L36.272 54.0873L158.776 52.9299L161.496 201.432L38.7028 200.115Z"
                      fill="#F9F8F6"/>
            </g>
            <g filter="url(#filter3_d_38_26)">
                <path
                    d="M97.296 29.4556C97.4446 40.7467 97.7225 63.5353 97.6446 64.3607L46.6498 64.2315C46.7182 57.9922 49.6872 54.1086 52.7536 49.1933C55.82 44.2779 75.6183 44.0648 79.3756 42.858C83.1329 41.6512 80.3495 32.5403 80.593 29.9609C80.7762 28.0204 86.5801 28.2981 89.975 28.7376C89.6874 28.1433 89.3355 26.7661 88.9643 23.9849C88.2326 18.5028 94.4757 16.3509 97.464 15.939L97.1718 19.0343C95.543 19.748 91.8805 21.7618 92.0595 24.277C92.2385 26.7922 95.6251 28.7774 97.296 29.4556Z"
                    fill="#9A9AA2"/>
                <path
                    d="M97.2298 29.4494C97.0963 40.7407 97.4994 63.5292 97.5784 64.3545L148.288 64.5592C148.211 58.32 145.237 54.4404 142.164 49.5291C139.091 44.6179 119.292 44.4314 115.533 43.2297C111.774 42.028 114.545 32.9134 114.298 30.3343C114.113 28.394 108.309 28.6795 104.915 29.1236C105.201 28.5289 105.551 27.1512 105.919 24.3695C106.643 18.8864 100.453 16.3469 97.4641 15.939L97.1719 19.0343C98.8016 19.7458 103 22.1504 102.824 24.6658C102.649 27.1812 98.8998 28.7689 97.2298 29.4494Z"
                    fill="#C2C2CA"/>
            </g>
            <foreignObject x="45" y="70" width="105" height="200">
                <div>
                    <div style={balanceSheetTitle}>
                        BALANCE SHEET
                    </div>
                    <div style={balanceSheetRow}>
                        current: {current}
                    </div>
                    <div style={balanceSheetColorRow}>
                        e/m: {expensesMonth}
                    </div>
                    <div style={balanceSheetRow}>
                        n/m: {nextMonthMoney}
                    </div>
                </div>
            </foreignObject>
            <defs>
                <filter id="filter0_d_38_26" x="37.5009" y="50.3803" width="131.273" height="166.003"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_26"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_26" result="shape"/>
                </filter>
                <filter id="filter1_d_38_26" x="27.6044" y="58.5696" width="131.273" height="166.003"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_26"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_26" result="shape"/>
                </filter>
                <filter id="filter2_d_38_26" x="32.272" y="52.9299" width="133.224" height="156.502"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_26"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_26" result="shape"/>
                </filter>
                <filter id="filter3_d_38_26" x="43.6498" y="12.939" width="105.638" height="52.6202"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-1" dy="-1"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_26"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_26" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
export default BalanceSheet