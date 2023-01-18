import React from 'react';
import PropTypes from 'prop-types';
import { Countervalue, PositivePers } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, countTotal, countPositive }) => (
    <>
        <Countervalue>good: {good}</Countervalue>
        <Countervalue>neutral: {neutral}</Countervalue>
        <Countervalue>bad: {bad}</Countervalue>
        <h3>Total: {countTotal}</h3> 
        <PositivePers>Positive feedback: {countPositive}%</PositivePers>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotal: PropTypes.number.isRequired,
    countPositive: PropTypes.number.isRequired,
};

export default Statistics;