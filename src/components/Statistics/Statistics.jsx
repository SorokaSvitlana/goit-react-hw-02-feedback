import PropTypes from 'prop-types';
import { StatItem, StatList, StatValue } from './Statistics.Styled';
export const Statistic = ({ good, neutral, bad, total, positivePercentage}) => {
return (
<section>
    <StatList>
    <StatItem><StatValue type="good">Good: {good}</StatValue> </StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem><StatValue type="negative">Bad: {bad}</StatValue> </StatItem>
        <StatItem>Total: {total()}</StatItem>
        <StatItem>Positive feedback: {positivePercentage()}%</StatItem>
    </StatList>
</section>) }
Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
  };
