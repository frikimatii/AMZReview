import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { dataAireLibre } from "./ListaAireLibre";
import { BtnLike } from "./BtnLike";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { Nav, Dropdown } from "react-bootstrap";

export function AutoLayoutExample2() {
  const [ ,setSelectedProduct3] = useState(null);

  const handleProductSelect3 = (productId) => {
    setSelectedProduct3(productId);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic2">
          Lista de Productos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {dataAireLibre.map((x, i) => (
            <Nav.Link
              href={`#${x.linkAfiliado}`}
              key={i}
              onClick={() => handleProductSelect3(x.linkAfiliado)}
            >
              {x.titulo}
            </Nav.Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        {dataAireLibre.map((x, i) => (
          <Container fluid style={{ width: "95%" }} key={i} id={x.linkAfiliado}>
            <Row>
              <div className="col-sm">
                <MDBCard fluid style={{ width: "95%" }} key={x.id} id={x.linkAfiliado}>
                  <MDBRow className="g-0 m-4">
                    <MDBCol md="4">
                      <MDBCardImage
                        src={x.img}
                        alt={x.titulo}
                        fluid
                        className="p-4 m-2"
                      />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody>
                        <MDBCardTitle className="fw-bold text-center">
                          {x.producto}
                        </MDBCardTitle>
                        <MDBCardText className="fst-italic fs-6">
                          {x.info}
                        </MDBCardText>
                        <MDBCardText>
                          <div className="btn btn-success fs-5 float-end animate__animated animate__bounceInLeft animate__delay-3s">
                            <a
                              href={x.linkAfiliado}
                              target={x.linkAfiliado}
                              className="text-reset"
                            >
                              {" "}
                              <ShoppingCartIcon /> Comprar
                            </a>
                          </div>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>

                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <p className="fw-bold fs-4 m-2">
                        ReView Sos el producto
                        <KeyboardDoubleArrowDownIcon className="animate__animated animate__bounce animate__infinite animate__delay-1s	" />
                        <KeyboardDoubleArrowDownIcon className="animate__animated animate__bounce animate__infinite animate__delay-2s	" />
                        <KeyboardDoubleArrowDownIcon className="animate__animated animate__bounce animate__infinite animate__delay-3s	" />
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="m-2 ">{x.review}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <Col className="col-sm">
                <Row>
                  <Col className="col lh-sm fs-6">
                    <p className="fs-2 text-success ">
                      Pro: <ArrowUpwardIcon />
                    </p>
                    <p>{x.pro}</p>
                  </Col>
                  <Col className="col lh-sm fs-6">
                    <p className="fs-2 text-danger">
                      Contra: <ArrowDownwardIcon />
                    </p>
                    <p>{x.contra}</p>
                  </Col>
                  <Row>
                    <h5 className="text-center p-2">Resumen: </h5>
                    <p className="text-center border p-2 m-4">{x.resumen}</p>
                    <BtnLike className="m-4" />
                  </Row>
                </Row>
              </Col>
            </Row>
            <Col>
              <Row>
                <div
                  className="separador m-3"
                  style={{
                    height: "20px",
                    backgroundColor: "#511171",
                    width: "96%",
                  }}
                ></div>
              </Row>
            </Col>
            
          </Container>
        ))}
      </div>
    </>
  );
}
