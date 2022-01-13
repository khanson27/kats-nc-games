const ErrorPage = (props) => {
  if (props.hasOwnProperty("error")) {
    return (
      <div className="error">
        <h3>Oops an error has occurred</h3>
        <ul>
          <li id="statusCode">Status Code: {props.error.response.status}</li>
          <li id="errorMessage">{props.error.response.data.msg}</li>
        </ul>
        <p>
          Please use the navigation bar to move to a different page or refresh
          the page and try again
        </p>
      </div>
    );
  } else {
    return (
      <div className="error">
        <h1>Sorry this doesn't exist! But here's a picture of a cat 😊 </h1>
        <img
          src="https://imtopic.com/media/upload/images/202004/1c641a641ec0f18375115da3c5aca139.jpeg"
          alt="a cat with a hat"
        />
      </div>
    );
  }
};

export default ErrorPage;
