import styled from 'styled-components';

interface Props {
  text: string;
  action: () => void;
  type: 'primary' | 'secondary';
}

const StyledButton = styled.button`
  height: 48px;
  padding: 15px 2.43em;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: bold;
`;

const Button: React.FC<Props> = ({ text, action, type }) => {
  return (
    <StyledButton
      onClick={action}
      className={`${
        type === 'primary'
          ? 'bg-orange-clay text-white hover:bg-orange-peach'
          : 'border border-black border-solid hover:bg-black hover:text-white'
      }`}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
