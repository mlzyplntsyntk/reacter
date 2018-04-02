import React from 'React';

class DE extends React.Component {
  render() {
    return (
      <g id="DE" className={"path-country" + (this.props.visibility === "hidden" ? " _hide" : " _show")} onClick={this.props.onClick}>
        <defs>
          <path id="SVGID_3_" d="M1024.499,237.982c5.092,0,9.219,4.127,9.219,9.218c0,5.091-4.127,9.218-9.219,9.218
            c-5.091,0-9.217-4.127-9.218-9.218C1015.281,242.109,1019.408,237.982,1024.499,237.982L1024.499,237.982z"/>
        </defs>
        <clipPath id="SVGID_4_">
          <use xlinkHref="#SVGID_3_"  overflow="visible"/>
        </clipPath>
        <g clipPath="url(#SVGID_4_)">
          <polygon fill="#030303" points="1010.672,244.021 1038.327,244.021 1038.327,237.875 1010.672,237.875 1010.672,244.021 		"/>
          <polygon fill="#F90805" points="1010.672,250.167 1038.327,250.167 1038.327,244.021 1010.672,244.021 1010.672,250.167 		"/>
          <polygon fill="#FED447" points="1010.672,256.312 1038.327,256.312 1038.327,250.167 1010.672,250.167 1010.672,256.312 		"/>
        </g>
      </g>
    )
  }
}

module.exports = DE;
