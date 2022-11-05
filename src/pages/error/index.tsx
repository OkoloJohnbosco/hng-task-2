import { Link, useRouteError } from "react-router-dom";
import Layout from "../../components/layout";
import style from "./error.module.css";

export default function ErrorPage() {
  const error = useRouteError() as Response;

  return (
    <Layout>
      <div id="error-page" className={style.error_container}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText}</i> | <Link to="/">Home</Link>
        </p>
      </div>
    </Layout>
  );
}
