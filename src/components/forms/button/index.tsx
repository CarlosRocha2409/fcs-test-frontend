import "./index.styles.scss";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}
export default function RickButton({ children, onClick }: IProps) {
  return (
    <button className="rick-btn" onClick={onClick}>
      {children}
    </button>
  );
}
