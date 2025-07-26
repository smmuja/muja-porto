import { Button } from "components/base";

export function ButtonViewMyService() {
  const projectButtonHandler = () => {
    window.open("https://www.webdevcustom.com", "_blank");
  };

  return <Button onClick={projectButtonHandler}>View My Service</Button>;
}
