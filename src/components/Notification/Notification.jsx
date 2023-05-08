import PropTypes from 'prop-types';
import { NotificationWrapper } from './Notification.Styled';
export const Notification  =({ message }) => {
    return <NotificationWrapper>{message}</NotificationWrapper>;
  };
  
  Notification.propTypes = {
    message: PropTypes.string,
  };