import React from 'react';

import {
Wrapper , 
Row, 
TitleContainer,
PictureContainer,
CoverLetterContainer,
SkillsCard,
CertificationContainer} from './AboutStyles';

import { BsBoxArrowUpRight } from 'react-icons/bs';

import PictureCover from '../../assets/Ale.jpg';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css3.png';
import javascriptIcon from '../../assets/icons/javascript.png';
import reactIcon from '../../assets/icons/react.png';
import jqueryIcon from '../../assets/icons/jquery.png';
import sassIcon from '../../assets/icons/sass.png';
import gitIcon from '../../assets/icons/git.png';
import npmIcon from '../../assets/icons/npm.png';
import bootstrapIcon from '../../assets/icons/bootstrap.png';
import postmanIcon from '../../assets/icons/postman.png';

const About = (  {themeMode} )  => {
    return(
        <Wrapper
            className = { 'container-fluid mt-5' }
            themeMode = { themeMode }
        >
            <h2>Sobre Mí</h2>
            <Row
                className={ 'row' }
            >
                <TitleContainer
                    className = {'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'}
                    themeMode = { themeMode }
                >
                </TitleContainer>
            </Row>
            <Row
                className={ 'row mt-3 p-3 figure' }
                themeMode = { themeMode }
            >
                <PictureContainer
                    className={ 'col-12 col-sm-12 col-md-4' }
                >
                    <div>
                        <img 
                            src={ PictureCover } 
                            alt="Alejandro Mejias"
                        />
                    </div>
                </PictureContainer>
                <CoverLetterContainer
                    className={ 'col-12 col-sm-12 col-md-8' }
                >
                    <p>
                        Hola, mi nombre es Alejandro Mejias y me contenta saber que llegaste hasta este punto. Soy un apasionado, autodidacta y comprometido desarrollador web que hoy día se dedica más al desarrollo Front End. El área de programación es nueva para mí ya que me sumergí en ella hace un poco más de dos años, y si bien puede parecer mucho o poco tiempo, no me canso de aprender y tampoco de sentirme contento con los avances que frecuentemente obtengo.
                    </p>
                    <p>
                        Actualmente no he podido desempeñar un rol Front End a nivel laboral, pero eso para mí no ha sido una excusa para no estudiar y capacitarme por mi cuenta. Me mantengo construyendo pequeñas aplicaciones web y siguiendo un plan propio de estudios, que a la larga me permita poner en práctica los conocimientos que vengo adquiriendo.
                    </p>
                    <p>
                        Mi objetivo es poder encontrar un lugar que confíe en mis capacidades y me ofrezca la oportunidad para capacitarme en nuevas herramientas para de esta manera poder integrar los conocimientos adquiridos en las tareas que se me asignen diariamente. 
                    </p>
                </CoverLetterContainer>
            </Row>
            <h2>Mis Aptitudes</h2>
            <Row
                className={ 'row mt-3 p-3' }
                themeMode = { themeMode }
            >
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>HTML</span>
                    <img 
                        src={ htmlIcon } 
                        alt="HTML" 
                    />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>CSS</span>
                    <img 
                        src={ cssIcon } 
                        alt="CSS" 
                    />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>JAVASCRIPT</span>
                    <img src={ javascriptIcon } 
                    alt="JAVASCRIPT" 
                />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>REACT</span>
                    <img 
                        src={ reactIcon } 
                        alt="REACT" 
                    />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>jQuery</span>
                    <img 
                        src={ jqueryIcon } 
                        alt="jQuery" 
                    />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>SASS</span>
                    <img 
                        src={ sassIcon } 
                        alt="SASS" 
                    />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>GIT</span>
                    <img 
                        src={ gitIcon } 
                        alt="GIT" 
                    />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>NPM</span>
                    <img 
                        src={ npmIcon } 
                        alt="NPM" 
                    /> 
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>BOOTSTRAP</span>
                    <img 
                        src={ bootstrapIcon } 
                        alt="BOOTSTRAP" 
                    /> 
                </SkillsCard>
                <SkillsCard
                    className={ 'col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2' }
                    themeMode = { themeMode }
                >
                    <span>POSTMAN</span>
                    <img 
                        src={ postmanIcon } 
                        alt="POSTMAN" 
                    /> 
                </SkillsCard>
            </Row>
            <h2>Certificaciones</h2>
            <Row
                className={ 'row mt-3 p-3 certification' }
            >
                <CertificationContainer
                    className={ 'col-8 col-sm-4 col-md-3' }
                    themeMode = { themeMode }
                >
                    <p>Desarrollo Web</p>
                    <a 
                        href='https://www.coderhouse.com/certificados/6081aff117669c00967843f3'
                        target='blank'
                        title='Certificado en Desarrollo Web'
                    >
                        <BsBoxArrowUpRight></BsBoxArrowUpRight>
                    </a>
                </CertificationContainer>
                <CertificationContainer
                    className={ 'col-8 col-sm-4 col-md-3' }
                    themeMode = { themeMode }
                >
                    <p>Javascript</p>
                    <a 
                        href='https://www.coderhouse.com/certificados/60d4d4290b602e0010f9b0d6'
                        target='blank'
                        title='Certificado en JavaScript'    
                    >
                        <BsBoxArrowUpRight></BsBoxArrowUpRight>
                    </a>
                </CertificationContainer>
                <CertificationContainer
                    className={ 'col-8 col-sm-4 col-md-3' }
                    themeMode = { themeMode }
                >   
                    <p>React Js</p>
                    <a 
                        href='https://www.coderhouse.com/certificados/6143cebcffd1ec004e6aea87'
                        target='blank'
                        title='Certificado en React Js'
                    >
                        <BsBoxArrowUpRight></BsBoxArrowUpRight>
                    </a>
                </CertificationContainer>
            </Row>
        </Wrapper>
    );
}
export default About;