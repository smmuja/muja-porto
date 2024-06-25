import { IconProps } from "./type";

export function Icon(props: IconProps) {
  const { imgSrc } = props;

  return <img src={imgSrc} alt="" className="w-7 m-1 inline-block" />;
}
