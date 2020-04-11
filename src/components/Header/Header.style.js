import styled from "styled-components";

import { mediaMin } from "../../utils/mixins/mixMediaQuery";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;

const HeaderTitle = styled.h1`
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  font-weight: normal;

  ${mediaMin.WIDTH_2} {
    padding: 2rem;
    font-size: 2rem;
  }
`;

export const Styled = {
  Header,
  HeaderTitle,
};
