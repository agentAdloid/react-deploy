import React, { Component } from "react";
import XRay from "./Xray/Xray";
import img1 from "../Assets/Images/img11.png";
import img2 from "../Assets/Images/img12.png";

class XrayConfigurator extends Component {
  render() {
    return (
      <XRay
        images={[img1, img2]}
        beyond={true}
        diameter={200}
        cursor={true}
        responsive={true}
        type={"circle"}
        backgroundColor={"#00AAFF"}
      />
    );
  }
}

export default XrayConfigurator;
