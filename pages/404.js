export default () => {
  return (
    <div className="d-flex justify-content-center align-items-center not-found-404-container">
      <div className="not-found-404-div">
        <h1 className="m-0 not-found-404-text">404</h1>
        <h2 className="not-found-404-text2">Oops! Page not found.</h2>
        <h4 className="not-found-404-text2">
          Sorry, make sure the URL you typed is correct!
        </h4>
        <a href="/">
          <button className="not-found-404-btn">Go Home</button>
        </a>
      </div>
    </div>
  );
};
