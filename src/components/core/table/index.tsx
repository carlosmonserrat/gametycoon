import React, {ReactNode} from "react";

type Props = {
    computer?: ReactNode;
    chair?: ReactNode;
    notes?: ReactNode;
}

const TableObject = ({computer, chair, notes}: Props): JSX.Element => {

    return (
        <svg width="140" height="95" viewBox="0 0 140 95" fill="none" xmlns="http://www.w3.org/2000/svg">

            <foreignObject x="-70" y="50" width="305" height="400">
                {chair}
            </foreignObject>

            <g filter="url(#filter0_d_236_10)">
                <path d="M22.7588 78.3276L18 57.7764L40.8649 70.3639L43.7074 91.6752L22.7588 78.3276Z" fill="#404040"/>
            </g>
            <path d="M47.2756 88.1727L43.7073 91.6752L40.997 71.3552L44.367 66.3658L47.2756 88.1727Z" fill="#494949"/>
            <path d="M120.798 23.2022L120.798 41.5L117.297 44.1792L116.06 28.8613L120.798 23.2022Z" fill="#6A6A6A"/>
            <path
                d="M117.282 44.1802C114.311 41.3865 107.343 37.1108 107.157 37.33C107.155 37.3808 107.154 37.3867 107.153 37.3418C107.153 37.337 107.154 37.333 107.157 37.33C107.185 36.5302 107.341 24.6108 107.341 24.6108L117.094 29.5077L117.282 44.1802Z"
                fill="#363636"/>
            <path d="M8.21501 57.7056L96.9341 1.57138L129.049 21.1736L40.3295 77.3078L8.21501 57.7056Z" fill="#2E2E2E"/>
            <path d="M9.09626 63.1518L8.21484 57.7057L40.3293 77.3078L41.1306 82.2589L9.09626 63.1518Z" fill="#888888"/>
            <path d="M129.049 21.1736L40.3297 77.3078L41.131 82.2589L129.93 26.6197L129.049 21.1736Z" fill="#4D4D4D"/>

            <foreignObject x="40" y="20" width="50" height="43">
                {computer}
            </foreignObject>

            <foreignObject x="80" y="10" width="29" height="22">
                {notes}
            </foreignObject>

            <defs>
                <filter id="filter0_d_236_10" x="17" y="49.7764" width="35.7073" height="43.8988"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="4" dy="-3"/>
                    <feGaussianBlur stdDeviation="2.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_236_10"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_236_10" result="shape"/>
                </filter>
            </defs>
        </svg>

    )
}
export default TableObject