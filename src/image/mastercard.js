import * as React from 'react';
import Svg, { Path, G, Circle } from "react-native-svg"

export default function Mastercard () {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={20}
      fill="none"
      fillRule={'evenodd'}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#grey"
      viewBox="0 0 51 19"
    >
      <Path fill="#FF7C60" d="M12.701 2.011h9.409v14.814h-9.409z" />
      <Path
        fill="#F24155"
        d="M12.915 9.418A9.442 9.442 0 0116.5 2.014 9.414 9.414 0 001.27 9.418a9.414 9.414 0 0015.23 7.404 9.403 9.403 0 01-3.585-7.404z"
      />
      <Path
        fill="#FBD090"
        d="M31.73 9.418a9.414 9.414 0 01-15.23 7.404 9.403 9.403 0 003.585-7.404A9.442 9.442 0 0016.5 2.014 9.365 9.365 0 0122.31 0c5.208 0 9.42 4.238 9.42 9.418z"
      />
      <G fill="#fff" opacity={0.7}>
        <Circle cx={45} cy={10.001} r={2} />
        <Circle cx={39} cy={10.001} r={2} />
      </G>
    </Svg>
  );
}