// Importaciones de bibliotecas
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importaciones de estilos
import './App.css';
// Importaciones de imágenes
import LogoFlammas from './recursos/Recurso 6.png'; 
// Importaciones Componentes
import { ComponenteFlammas1, ComponenteFlammas2, ComponenteFlammas3 } from './componentes';

function App() {
    return (
        <div className="App">
            <Router>
                    <Navbar expand="md" id="navbar">
                        <Navbar.Brand href="/flammas1">
                            <img className="h-100 m-2" src={LogoFlammas} alt="Logo Flammas" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="barra-nav">
                                <Nav.Link as={Link} to="/flammas1"> Flammas 1 </Nav.Link>
                                <Nav.Link as={Link} to="/flammas2"> Flammas 2 </Nav.Link>
                                <Nav.Link as={Link} to="/flammas3"> Flammas 3 </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Routes>
                        <Route index path="/producto-flammas" element={<Navigate to="/flammas1" />} />
                        <Route path="/flammas1" element={<ComponenteFlammas1 />} />
                        <Route path="/flammas2" element={<ComponenteFlammas2 />} />
                        <Route path="/flammas3" element={<ComponenteFlammas3 />} />
                    </Routes>
            </Router>
        </div>
    );
}

export default App;
