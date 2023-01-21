import React from 'react';
import PropTypes from 'prop-types';
import { Button, ContainerButton } from './FeedbackOptions.styled';

const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
    return (
        <ContainerButton>
            {options.map(option => (
                <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
                </Button>
            ))}
        </ContainerButton>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;