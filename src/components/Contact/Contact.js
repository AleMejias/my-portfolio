import React from 'react';
import { 
Footer,
Row,
IconContainer } from './ContactStyles';

import {GoMail} from 'react-icons/go';
import {FaLinkedinIn} from 'react-icons/fa';

const Contact = ({themeMode}) => {
    return(
        <Footer
            className = { 'container mt-5' }
            themeMode = { themeMode }
        >
            <Row
                className={ 'row' }
            >
                <IconContainer
                    className={ 'col-md-12' }
                    themeMode = { themeMode } 
                >
                    <a href="mailto:alejandro20452@gmail.com" alt= "Enviar Email" title='Correo electrónico'>
                        <GoMail />
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-mejias/" alt= "Enviar Email" title='LinkedIn'>
                        <FaLinkedinIn />
                    </a>
                </IconContainer>
            </Row>
        </Footer>
    );
}

export default Contact;