import classNames from 'classnames';

const Card = ({ children, className, style }) => (
  <div style={style} className={classNames(className, 'card-content')}>
    {children}
  </div>
);

export default Card;
