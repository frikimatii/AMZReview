
import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavBarra } from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {ContainerExample} from "./Banner";
import {NavProducto} from "./NavProductos";
import { Acordeon} from "./Acordeon"
import {Footer} from "./Footer"
import {BtnUp} from "./BtnUp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <NavBarra/>
    <BtnUp/>
    <ContainerExample /> 
    <NavProducto/>
    <Acordeon/>
    <Footer/>
    </>
);



