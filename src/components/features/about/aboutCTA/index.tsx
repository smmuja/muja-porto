import { Link } from "react-router-dom";
import { serviceUrl } from "config";

export function AboutCTA() {
  return (
    <div className="mt-3">
      <p>
        See my{" "}
        <Link to={serviceUrl} className="text-blue-700 font-semibold">
          Service
        </Link>{" "}
        section.
      </p>
    </div>
  );
}
