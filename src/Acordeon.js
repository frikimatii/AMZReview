import Accordion from 'react-bootstrap/Accordion';
import {AutoLayoutExample} from "./CardProduc"
import {AutoLayoutExample1} from "./CardProduc1"
import {AutoLayoutExample2} from "./CardProduc2"
import {AutoLayoutExample3} from "./CardProduc3"
import {AutoLayoutExample4} from "./CardProduc4"



export function Acordeon() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" id='acordeon1'>
        <Accordion.Header className="p-3 ">Informatica</Accordion.Header>
        <Accordion.Body>
            <AutoLayoutExample/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id='acordeon2'>
        <Accordion.Header className="p-3 ">Mascotas</Accordion.Header>
        <Accordion.Body>
          <AutoLayoutExample1/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" id='acordeon3'>
        <Accordion.Header className="p-3 ">Aire Libre</Accordion.Header>
        <Accordion.Body>
          <AutoLayoutExample2/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" id='acordeon4'>
        <Accordion.Header className="p-3 ">Hogar</Accordion.Header>
        <Accordion.Body>
            <AutoLayoutExample3/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" id='acordeon5'>
        <Accordion.Header className="p-3 ">Belleza</Accordion.Header>
        <Accordion.Body>
            <AutoLayoutExample4/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
