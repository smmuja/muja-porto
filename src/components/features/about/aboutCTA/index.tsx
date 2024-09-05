import { Link } from "react-router-dom";
import { projectUrl } from "config";

export function AboutCTA() {
  return (
    <div className="mt-3">
      <p>
        See my{" "}
        <Link to={projectUrl} className="text-blue-700 font-semibold">
          Project
        </Link>{" "}
        section.
      </p>
    </div>
  );
}
