import styled from "styled-components";

export const TextAndIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  span {
    line-height: 130%;
    color: ${({ theme }) => theme["gray-500"]};
  }
`;
