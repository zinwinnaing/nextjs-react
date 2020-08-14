import classNames from 'classnames';

const Button = ({ onClick, title, className }) => {
  return (
    <button
      className={classNames('button-background', { className })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Button;
