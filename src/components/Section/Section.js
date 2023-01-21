import React from 'react';
import PropTypes from 'prop-types';
import { ContainerSection, Title } from './Section.styled';

const Section = ( {title, children} ) => {
    return (
        <ContainerSection>
            <Title>{title}</Title>
            {children}
        </ContainerSection>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};


export default Section;