import React from 'react';
import {
Wrapper , 
Row, 
TitleContainer,
PictureContainer,
CoverLetterContainer} from './AboutStyles';

import PictureCover from '../../assets/Ale.jpg';


const About = (  {themeMode} )  => {
    return(
        <Wrapper
            className = { 'container-fluid' }
        >
            <Row
                className={ 'row mt-5' }
            >
                <TitleContainer
                    className = {'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'}
                    themeMode = { themeMode }
                >
                    <h2>Sobre Mí</h2>
                </TitleContainer>
            </Row>
            <Row
                className={ 'row mt-3 p-3' }
            >
                <PictureContainer
                    className={ 'col-md-4' }
                >
                    <div>
                        <img src={PictureCover} alt="Alejandro Mejias"/>
                    </div>
                </PictureContainer>
                <CoverLetterContainer
                    className={ 'col-md-8' }
                >

                </CoverLetterContainer>
            </Row>
        </Wrapper>
    );
}
export default About;