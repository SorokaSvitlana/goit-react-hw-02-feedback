export const Statistic = ({ good, neutral, bad, total, positivePercentage}) => {
return (
<section>
    <ul>
        <li>Good:{good} </li>
        <li>Neutral: {neutral}</li>
        <li>Bad:{bad} </li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </ul>
</section>) }