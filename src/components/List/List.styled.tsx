import styled from "@emotion/styled";
import { PrimaryButton } from "@styles/common";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
`;

export const ListButton = styled(PrimaryButton)`
  margin: 3rem;
`;

export const TheLink = styled(Link)`
  margin: 2rem;
`;
