import { ReactComponent as Header1 } from "../../resources/images/header1.svg";
import { ReactComponent as Header2 } from "../../resources/images/header2.svg";
import { ReactComponent as Header3 } from "../../resources/images/header3.svg";
import { ReactComponent as Header4 } from "../../resources/images/header4.svg";
import { ReactComponent as Header5 } from "../../resources/images/header5.svg";
import { ReactComponent as Header6 } from "../../resources/images/header6.svg";
import "./styles.css";
const headerList = [
  { headerName: "Home", headerElement: <Header1 /> },
  { headerName: "Trending", headerElement: <Header2 /> },
  { headerName: "My Stuff", headerElement: <Header3 /> },
  { headerName: "Collection", headerElement: <Header4 /> },
  { headerName: "Search", headerElement: <Header5 /> },
  { headerName: "Account", headerElement: <Header6 /> },
];
const Header = () => {
  return (
    <header className="header">
      {headerList.map((header, index) => (
        <div className="header__icon" key={`${header}-${index}`}>
          {header.headerElement}
          <p>{header.headerName}</p>
        </div>
      ))}

      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Movietime.svg/1200px-Movietime.svg.png"
        alt="movietime"
      />
    </header>
  );
};

export default Header;
