import styled from "styled-components";

export const NavStyles = styled.div`
  .bigger-brand {
    font-size: 2.5rem;
  }

  .nav-item-adjust {
  }
  .nav-link-adjust {
    &:hover {
        text-decoration: none;
    }
  }
  .navbar .nav-item .nav-link {
    display: flex;
}
.dropdown-toggle::after {
  margin-top: 15px;
}
.nav-item:hover {
  background-color: #ececec;
  transition: 0.3s;
  border-radius: 5px;
}
.nav-item {
  transition: 0.3s;
}
`;

export const CarouselStyles = styled.div`
  .text-visible {
    color: black;
  }

  .border-round {
    border-radius: 10px;
  }
`;

export const NewsStyles = styled.div`
  .underlined {
    text-decoration: underline;
  }
  .border-round {
    border-radius: 25px;
    border: 0.5px solid #dcdcdc !important;
  }
`;

export const TextBlockStyles = styled.div`
  .header-center {
    text-align: center;
  }
  .para-styled {
    font-size: 18px;
    font-weight: 350;
  }
`
export const MapStyles = styled.div`
.map-cont {
  width: '200px' !important;
  height: '150px' !important;
  border-radius: '25px'
}
.map-page {
  width: 100%;
}
`

export const JumbStyles = styled.div`
    @media only screen and (max-width: 400px) {
      .img-fluid {
            width: 100%;
            height: 200px;
        }
    }
`

