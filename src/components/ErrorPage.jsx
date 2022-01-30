const ErrorPage = (props) => {
  const { error } = props;
  console.log(props);
  if (error) {
    return (
      <div className="error">
        <h3>Oops an error has occurred</h3>
        <ul>
          <li id="statusCode">Status Code: {error.response.status}</li>
          <li id="errorMessage">{error.response.data.msg}</li>
        </ul>
        <p>
          Please use the navigation bar to move to a different page or refresh
          the page and try again
        </p>
      </div>
    );
  }
};

export default ErrorPage;
