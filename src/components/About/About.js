import React from 'react';
import {
Wrapper , 
Row, 
TitleContainer,
PictureContainer,
CoverLetterContainer,
SkillsCard} from './AboutStyles';

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
                        <img src={PictureCover} alt="Alejandro Mejias"/>
                    </div>
                </PictureContainer>
                <CoverLetterContainer
                    className={ 'col-12 col-sm-12 col-md-8' }
                >
                    <p>
                    Hola, mi nombre es Alejandro Mejias y me contento saber que llegaste hasta este punto. Soy un apasionado, autodidacta y comprometido desarrollador web que hoy día se dedica más al desarrollo Front End. El área de programación es nueva para mí ya que me sumergí en ella hace un poco más de dos años, y si bien puede parecer mucho tiempo, no me canso de aprender y sentirme contento con los avances que frecuentemente obtengo.
                    </p>
                    <p>
                    Actualmente no he podido desempeñar un rol Front End dentro de una empresa, pero eso para mí no ha sido una excusa para no estudiar y capacitarme por mi cuenta. Me mantengo construyendo pequeñas aplicaciones web y siguiendo un plan propio de estudios que a la larga me permita poner en práctica los conocimientos que vengo adquiriendo.
                    </p>
                    <p>
                    Mi objetivo es poder encontrar un lugar que confié en mi talento y junto con la oportunidad para capacitarme en nuevas herramientas, me permitan integrar y plasmar los conocimientos adquiridos en las tareas que se me asignen trayendo consigo resultados positivos. 
                    </p>
                </CoverLetterContainer>
            </Row>
            <h2>Mis Aptitudes</h2>
            <Row
                className={ 'row mt-3 p-3' }
                themeMode = { themeMode }
            >
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>HTML</span>
                    <img src={htmlIcon} alt="HTML" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>CSS</span>
                    <img src={cssIcon} alt="CSS" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>JAVASCRIPT</span>
                    <img src={javascriptIcon} alt="JAVASCRIPT" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>REACT</span>
                    <img src={reactIcon} alt="REACT" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>jQuery</span>
                    <img src={jqueryIcon} alt="jQuery" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>SASS</span>
                    <img src={sassIcon} alt="SASS" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>GIT</span>
                    <img src={gitIcon} alt="GIT" />
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>NPM</span>
                    <img src={npmIcon} alt="NPM" /> 
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>BOOTSTRAP</span>
                    <img src={bootstrapIcon} alt="BOOTSTRAP" /> 
                </SkillsCard>
                <SkillsCard
                    className={ 'col-12 col-sm-3 col-md-2' }
                    themeMode = { themeMode }
                >
                    <span>POSTMAN</span>
                    <img src={postmanIcon} alt="POSTMAN" /> 
                </SkillsCard>
            </Row>
        </Wrapper>
    );
}
export default About;