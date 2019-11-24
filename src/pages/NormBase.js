import React, {Component} from 'react'
import {services} from "../libs/services"
import {
  MDBContainer,
  MDBCollapse,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader
} from "mdbreact";
class NormBase extends Component {
  state = {
    collapseID: 'collapse1'
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    return (<div className="p-5">
      {services.map((elem, i) => (<MDBContainer key={i} className="accordion md-accordion accordion-1">
          <MDBCardHeader
            onClick={this.toggleCollapse(`collapse${i + 1}`)}
            tag="h4"
            className="d-flex justify-content-between align-items-center"
          >
            {elem.name}
            <MDBIcon
              icon={
                this.state.collapseID === `collapse${i + 1}`
                  ? "angle-up"
                  : "angle-down"
              }
              className="grey-text pl-2"
              size="2x"
            />
          </MDBCardHeader>
          <MDBCollapse id={`collapse${i + 1}`} isOpen={this.state.collapseID}>
            <MDBCardBody className="pt-3">
              <ul>
                {elem.list.map((service,i) => (<li key={i}><a href={service.adress}>{service.name}</a></li>))}
              </ul>
            </MDBCardBody>
          </MDBCollapse>
      </MDBContainer>))}
    </div>);
};
}
export default NormBase;
