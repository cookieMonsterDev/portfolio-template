import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  a {
    text-decoration: none;
  }
`;

export const Info = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-family: "Roboto Mono", monospace;
  color: var(--primary);

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: var(--primary);
  }

  &:hover {
    color: var(--neon);

    svg {
      fill: var(--neon);
    }
  }

  @media only screen and (max-width: 56rem) {
    padding-bottom: 0.8rem;
  }
`;

export const Stats = styled.span`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    margin: 0 0.5rem;
  }
`;
