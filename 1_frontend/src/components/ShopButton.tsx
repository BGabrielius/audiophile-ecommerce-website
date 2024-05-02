interface Props {
  text: string;
  action: () => void;
}

const ShopButton: React.FC<Props> = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};

export default ShopButton;
