import styled from 'styled-components';
import spinnerImgUrl from '../assets/spinner.jpeg';

const StyledImg = styled.img`
  width: 10rem;
  border-radius: 50%;
  object-fit: contain;
  animation: skin 1s linear infinite;

  @keyframes skin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = () => <StyledImg src={spinnerImgUrl} alt="Loading..." />;
