import React from "react";
import {
  MDBView,
  MDBMask,
} from "mdbreact";
import { JumbStyles } from "../stylesheets/style";
const Jumbo = () => {
  const jumb1 = require(`../images/Jumbo-${Math.ceil(Math.random() * 3)}.jpg`);
  return (
    <JumbStyles>
      <MDBView>
        <img src={jumb1} className="img-fluid imaged" alt=""/>
        <MDBMask overlay="black-light" className="flex-center">
            <div className=" white-text text-center">
              <h3 className="h3-responsive">
              Трейд Енерго Ресурс
                </h3>
            </div>
        </MDBMask>
      </MDBView>
    </JumbStyles>
  );
};

export default Jumbo;
