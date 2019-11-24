import React from "react";
import {
  MDBView,
  MDBMask,
} from "mdbreact";
import { JumbStyles } from "../stylesheets/style";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import url from '../libs/url.json'
const Jumbo = () => {
  const {pathname} = useLocation();
  const jumb1 = require(`../images/Jumbo-${Math.ceil(Math.random() * 3)}.jpg`);
  return (
    <JumbStyles>
      <MDBView>
        <img src={jumb1} className="img-fluid imaged" alt=""/>
        <MDBMask overlay="black-light" className="flex-center">
            <div className=" white-text text-center">
              <h1 className="h1-responsive">
              {url[pathname]}
                </h1>
            </div>
        </MDBMask>
      </MDBView>
    </JumbStyles>
  );
};

export default Jumbo;
