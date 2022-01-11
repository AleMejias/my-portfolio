import React from 'react';
import { ImageContainer, Row, TitleContainer, Wrapper } from '../Home/HomeStyles';
import HomeImage  from '../../assets/image-background.png';
import Resume from '../../assets/CV_MejiasAlejandro.pdf';

const Home = ( { themeMode , mobileView , widthScreen} ) => {
    return (
        <Wrapper
        themeMode = { themeMode }
        mobileView = { mobileView }
        className={'container mt-5'}
        >
            <Row
                className = {'row'}
            >
                <TitleContainer
                    className = {`col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mt-3 
                    animate__animated ${widthScreen < 768 ? 'animate__backInDown' : 'animate__backInLeft'}`}
                >
                    <div>
                        <h1>Front End Developer</h1>
                        <h4>Con pasión en aprender</h4>
                    </div>
                    <div>
                    <a 
                        href={Resume} 
                        download="CV_MejiasAlejandro.pdf"
                        title="Descargar CV"
                        >
                            Descargar CV
                    </a>
                    </div>

                </TitleContainer>
                <ImageContainer
                    className = {'col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 mt-4'}
                >
                    <img src={HomeImage} alt = "Me encantan las Tecnologías"/>

                </ImageContainer>
            </Row>
        </Wrapper>
    );
}

export default Home;