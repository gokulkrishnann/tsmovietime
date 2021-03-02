import { useType } from "../../contexts/AppContext";
import { NavLinks } from "./links";
import "./styles.css";

const Navigation = () => {
  const { type, setType } = useType();

  return (
    <nav className="nav">
      {NavLinks.map(({ key, name }) => (
        <h2
          className={type === key ? "active" : ""}
          onClick={() => setType(key)}
          key={key}
        >
          {name}
        </h2>
      ))}
    </nav>
  );
};

export default Navigation;
