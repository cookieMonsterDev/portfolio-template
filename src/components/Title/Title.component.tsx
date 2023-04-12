import { useInView } from "react-intersection-observer";
import { TitleProps } from "./Title.types";
import { Heading } from "./Title.styled";

export const TitleComponent: React.FC<TitleProps> = ({ children, animation }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Heading inView={inView} animation={animation} ref={ref}>
      {children}
    </Heading>
  );
};
