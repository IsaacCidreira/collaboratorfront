import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.backgroundSeundary};
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  div {
    position: relative;

    h1 {
      padding-top: 32px;
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

export const Close = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 33px;
    right: 35px;
  }

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
  }
`;

export const BodyModal = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EdiCollaborator = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 300px;
    max-width: 100%;
    border-radius: 10px;
  }
  input {
    background-color: ${({ theme }) => theme.colors.background};
    width: 300px;
  }
  button {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-bottom: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export const ButtonContainerRemoveUser = styled.div`
  padding-bottom: 20px;
  button {
    width: 100%;
    background-color: #ff0066;

    &:hover {
      color: #ff0066;
    }
  }
`;
