import ScrollUpButton from 'react-scroll-up';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const ScrollUp = () => (
  <div>
    <ScrollUpButton
      showUnder={160}
      style={{
        backgroundColor: '#ff8a44',
        color: '#fff',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '4px',
        bottom: '95px',
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </ScrollUpButton>
  </div>
);

export default ScrollUp;
