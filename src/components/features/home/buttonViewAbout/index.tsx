import { Button } from "components/base";
import { useNavigate } from "react-router-dom";

export function ButtonViewAbout() {
  const navigate = useNavigate();

  const aboutButtonHandler = () => {
    navigate("/about");
  };
  return <Button onClick={aboutButtonHandler}>View About</Button>;
}
