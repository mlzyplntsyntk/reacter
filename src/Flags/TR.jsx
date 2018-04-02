import React from 'react';

class TR extends React.Component {
  render() {
    return (
      <g className={"path-country" + (this.props.visibility === "hidden" ? " _hide" : " _show")}>
        <defs>
          <path id="SVGID_1_" d="M1154.665,309.072c6.201,0,11.228,5.027,11.228,11.228s-5.026,11.228-11.228,11.228
            s-11.228-5.027-11.228-11.227C1143.438,314.099,1148.464,309.072,1154.665,309.072L1154.665,309.072z"/>
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_"  overflow="visible"/>
        </clipPath>
        <g clip-path="url(#SVGID_2_)">
          <polygon fill="#F90805" points="1139.873,309.075 1173.556,309.075 1173.556,331.53 1139.873,331.53 1139.873,309.075 		"/>
          <path fill="#FFFFFF" d="M1151,314.419c2.019-0.001,3.896,1.034,4.974,2.74c-1.735-1.935-4.712-2.096-6.646-0.36
            s-2.096,4.712-0.359,6.647c1.736,1.935,4.712,2.096,6.646,0.36c0.126-0.113,0.247-0.233,0.359-0.36
            c-1.735,2.747-5.37,3.566-8.116,1.83c-2.748-1.735-3.567-5.37-1.832-8.117C1147.105,315.454,1148.982,314.419,1151,314.419z
             M1161.293,322.032l-2.032-0.661l-1.256,1.729v-2.138l-2.033-0.66l2.033-0.661v-2.137l1.256,1.729l2.032-0.661l-1.256,1.729
            L1161.293,322.032z"/>
        </g>
      </g>
    )
  }
}

module.exports = TR;
