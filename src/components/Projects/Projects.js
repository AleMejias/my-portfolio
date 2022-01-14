import React from 'react';
import { 
CardContainer,
Row, 
Wrapper,
CardBody,
LinksContainer } from './ProjectsStyles';

import { IoArrowRedo } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';

import Gif__image from '../../assets/projects/my-gif.png';
import Itech__image from '../../assets/projects/itech.png';
import Todo__image from '../../assets/projects/to-do.png';
import Blackjack__image from '../../assets/projects/blackjack.png';
import Deccgarden__image from '../../assets/projects/deccgarden.png';

const Projects  = ({themeMode}) => {
    return(
        <Wrapper
            className={ 'container mt-4' }
            themeMode = { themeMode }
        >
            <h2>Mis Proyectos</h2>
            <Row
                className = { 'row' }
            >
                <CardContainer 
                    className="card col-12 col-md-5 col-lg-5 col-xl-5  mt-3"
                    themeMode = { themeMode }
                >
                    <img src={ Gif__image } className="card-img-top" alt="..."/>
                    <CardBody 
                        className={'card-body'}
                        themeMode = { themeMode }
                    >
                        <h5 className="card-title">My Gif App</h5>
                        <p className="card-text">Construida con la finalidad de poder tener disponible en todo momento los memes mas relevantes para alegrarte el día.</p>
                        <LinksContainer
                            themeMode = { themeMode }
                        >
                            <a href="https://practical-benz-67413b.netlify.app/" className="btn btn rounded" title='Visitar Página'>
                                <IoArrowRedo></IoArrowRedo>
                            </a>
                            <a href="https://github.com/AleMejias/my-gif-app" className="btn btn rounded" title='Ver código'>
                                <BsGithub></BsGithub>
                            </a>

                        </LinksContainer>
                    </CardBody>
                </CardContainer>
                <CardContainer 
                    className="card col-12 col-md-5 col-lg-5 col-xl-5  mt-3"
                    themeMode = { themeMode }
                >
                    <img src={ Itech__image } className="card-img-top" alt="..."/>
                    <CardBody 
                        className={'card-body'}
                        themeMode = { themeMode }
                    >
                        <h5 className="card-title">ITech</h5>
                        <p className="card-text">Tienda de celulares ficticia creada para presentar como proyecto final en el curso de JavaScript dictado por Coderhouse.</p>
                        <LinksContainer
                            themeMode = { themeMode }
                        >
                            <a href="https://alemejias.github.io/ITech/" className="btn btn rounded" title='Visitar Página'>
                                <IoArrowRedo></IoArrowRedo>
                            </a>
                            <a href="https://github.com/AleMejias/ITech" className="btn btn rounded" title='Ver código'>
                                <BsGithub></BsGithub>
                            </a>

                        </LinksContainer>
                    </CardBody>
                </CardContainer>
                <CardContainer 
                    className="card col-12 col-md-5 col-lg-5 col-xl-5  mt-3"
                    themeMode = { themeMode }
                >
                    <img src={ Todo__image } className="card-img-top" alt="..."/>
                    <CardBody 
                        className={'card-body'}
                        themeMode = { themeMode }
                    >
                        <h5 className="card-title">To Do App</h5>
                        <p className="card-text">Esta pequeña aplicación te permite poder organizar tus tareas diarias y al mismo tiempo poder interactuar con su estado.</p>
                        <LinksContainer
                            themeMode = { themeMode }
                        >
                            <a href="https://nostalgic-jackson-68d4e7.netlify.app/" className="btn btn rounded" title='Visitar Página'>
                                <IoArrowRedo></IoArrowRedo>
                            </a>
                            <a href="https://github.com/AleMejias/to-do-app" className="btn btn rounded" title='Ver código'>
                                <BsGithub></BsGithub>
                            </a>

                        </LinksContainer>
                    </CardBody>
                </CardContainer>
                <CardContainer 
                    className="card col-12 col-md-5 col-lg-5 col-xl-5  mt-3"
                    themeMode = { themeMode }
                >
                    <img src={ Blackjack__image } className="card-img-top" alt="..."/>
                    <CardBody 
                        className={'card-body'}
                        themeMode = { themeMode }
                    >
                        <h5 className="card-title">Casino Webjias</h5>
                        <p className="card-text">Con el fin de recrear uno de mis juegos favoritos de infancia y practicar un poco de código, ahora puedes probar tu suerte vs la computadora.</p>
                        <LinksContainer
                            themeMode = { themeMode }
                        >
                            <a href="https://alemejias.github.io/blackjack.github.io/" className="btn btn rounded" title='Visitar Página'>
                                <IoArrowRedo></IoArrowRedo>
                            </a>
                            <a href="https://github.com/AleMejias/blackjack.github.io" className="btn btn rounded" title='Ver código'>
                                <BsGithub></BsGithub>
                            </a>

                        </LinksContainer>
                    </CardBody>
                </CardContainer>
                <CardContainer 
                    className="card col-12 col-md-5 col-lg-5 col-xl-5  mt-3"
                    themeMode = { themeMode }
                >
                    <img src={ Deccgarden__image } className="card-img-top" alt="..."/>
                    <CardBody 
                        className={'card-body'}
                        themeMode = { themeMode }
                    >
                        <h5 className="card-title">DeccGarden</h5>
                        <p className="card-text">Representa una tienda online ficticia de productos para el hogar creada para presentar como proyecto final en el curso de Desarrollo Web dictado por Coderhouse.</p>
                        <LinksContainer
                            themeMode = { themeMode }
                        >
                            <a href="https://alemejias.github.io/DeccGarden_Alejandro/" className="btn rounded" title='Visitar Página'>
                                <IoArrowRedo></IoArrowRedo>
                            </a>
                            <a href="https://github.com/AleMejias/DeccGarden_Alejandro" className="btn rounded" title='Ver código'>
                                <BsGithub></BsGithub>
                            </a>

                        </LinksContainer>
                    </CardBody>
                </CardContainer>
            </Row>
        </Wrapper>
    );
}

export default Projects;