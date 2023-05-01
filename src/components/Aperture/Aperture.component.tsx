import { Blade, Aperture, Container, Img } from "./Aperture.styled";
import { ApertureProps } from "./Aperture.types";

export const ApertureComponent: React.FC<ApertureProps> = ( { image } ) => {
  const blades = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Container>
      <Aperture>
        {blades.map((e) => (
          <Blade key={e} deg={36 * e} />
        ))}
        <Img src={image} />
      </Aperture>
    </Container>
  );
};
