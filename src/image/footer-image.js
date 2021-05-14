import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FooterImage(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 8.11l-.309-.684a.75.75 0 00-.441.684h.75zm14.027-6.335l-.309-.684.309.684zm7.509 8.335v10.676h1.5V10.11h-1.5zm-1.25 11.926H3.5v1.5h18.286v-1.5zM2.25 20.786V8.11H.75v12.676h1.5zM1.809 8.793L15.836 2.46l-.618-1.368L1.191 7.426l.618 1.367zM1.5 8.86h16.85v-1.5H1.5v1.5zm16.85 0h3.436v-1.5H18.35v1.5zm-.75-5.262V8.11h1.5V3.598h-1.5zm-1.764-1.14a1.25 1.25 0 011.764 1.14h1.5c0-1.997-2.062-3.329-3.882-2.507l.618 1.368zM3.5 22.037c-.69 0-1.25-.56-1.25-1.25H.75a2.75 2.75 0 002.75 2.75v-1.5zm19.536-1.25c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 002.75-2.75h-1.5zm1.5-10.676a2.75 2.75 0 00-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25h1.5z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={1.5}
          y1={11.742}
          x2={23.786}
          y2={11.742}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A384F3" />
          <Stop offset={1} stopColor="#94DDF4" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FooterImage