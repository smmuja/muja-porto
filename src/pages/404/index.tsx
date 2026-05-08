import { Error404 } from "components";
import { Helmet } from "react-helmet-async";

export function Error404Page() {
  // Get titte from the actie route's handle

  const pageTitle = "404 - Page Not Found";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
      </Helmet>
      <Error404 />;
    </>
  );
}
