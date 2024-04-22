import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h4>
        {err.status}: {err.statusText}
      </h4>
      <h1>{err.error.message}</h1>
      <h2>
        Sorry, the page you are looking for could not be found or has been
        removed.{" "}
      </h2>
    </div>
  );
};

export default Error;
