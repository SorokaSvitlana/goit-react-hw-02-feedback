import PropTypes from 'prop-types';
import { Button, Feedbacklist } from './FeedbackOptions.Styled';
export const FeedbackOptions = ( {options, onLeaveFeedback}) => {
   return ( <Feedbacklist>
    {options.map(name => (
      <li key={name}>
        <Button key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </Button>
      </li>
    ))}
  </Feedbacklist>)
}
FeedbackOptions.propTypes = {
  options:PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
}
