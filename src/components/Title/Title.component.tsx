import { useInView } from "react-intersection-observer";
import { TitleProps } from "./Title.types";
import { Heading } from "./Title.styled";

export const TitleComponent: React.FC<TitleProps> = ({ children, animation, textAlign = 'left' }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-10px',
    triggerOnce: true,
  });

  return (
    <Heading inView={inView} animation={animation} textAlign={textAlign} ref={ref}>
      {children}
    </Heading>
  );
};
