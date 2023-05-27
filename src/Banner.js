import Image from "react-bootstrap/Image";
import ImgBaner from "./img/Recurso 5.png";
import ImgbanerDown from "./img/Recurso 6.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./img/logo Amazon Review_Mesa de trabajo 1.jpg";
import "./Banner.css";
import {GrStatusWarningSmall} from "react-icons/gr"
import 'animate.css';




export function ContainerExample() {


  return (
    <Container fluid  >
      <div className="card text-light border border-0" id="banner">
        <Image src={ImgBaner} className="img" alt="banner" />
      </div>
      <div className=" display-1 ">
        <h1 className=" text-center fs-1 fw-bold animate__animated animate__jackInTheBox animate__delay-1s" id="titulo">
          AMZ Review
        </h1>
      </div>
      <Container >
        <h2 className="text-center text-black m-4 fw-bold subtitulo animate__animated animate__fadeInRightBig animate__delay-2s">
          Descubre los mejores productos de Amazon con nuestras reseñas
        </h2>
        <Row style={{backgroundColor: "#fff"}}>
          <Col className="col-sm ">
            <p className="card-text fw-bold lh-sm text-black p-3 animate__animated animate__fadeInLeft animate__delay-2s">
              AMZ Rewins es tu fuente confiable para obtener reseñas detalladas
              y precisas de los productos más populares en Amazon. Nuestro
              equipo de expertos investiga, prueba y evalúa una amplia variedad
              de productos para brindarte la información más actualizada y útil.
              Nos tomamos el tiempo para comparar los productos y ofrecerte
              nuestras recomendaciones para que puedas tomar una decisión de
              compra informada. Desde productos tecnológicos hasta productos
              para el hogar, nuestra misión es ayudarte a encontrar los mejores
              productos en Amazon. Con AMZ Rewins, no tienes que preocuparte por
              comprar algo que no cumpla con tus expectativas. ¡Únete a nuestra
              comunidad y encuentra el producto perfecto para ti hoy mismo!
            </p>
            <p className="card-text text-black">
              <small>@frikimatii <GrStatusWarningSmall/> </small>
            </p>
          </Col>
          <div className="col-sm">
            <div className="text-center Logo animate__animated animate__swing  animate__repeat-4 animate__infinite">
              <Image
                src={Logo}
                className=" rounded justify-content-between" 
                alt="logo"
                height="250px"
              />
            </div>
          </div>
        </Row>
      </Container>
      <div className="card text-light border border-0">
        <Image src={ImgbanerDown} className="img" alt="banner" />
      </div>
    </Container>
  );
}

