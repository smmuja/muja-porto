import { Button } from "components/base";
import { useNavigate } from "react-router-dom";

export function ButtonViewProject() {
  const navigate = useNavigate();

  const projectButtonHandler = () => {
    navigate("/project");
  };
  return <Button onClick={projectButtonHandler}>View Project</Button>;
}
