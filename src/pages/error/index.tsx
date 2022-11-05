import { useRouteError } from "react-router-dom";
import Layout from "../../components/layout";

export default function ErrorPage() {
  const error = useRouteError() as Response;

  return (
    <Layout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText}</i>
        </p>
      </div>
    </Layout>
  );
}
