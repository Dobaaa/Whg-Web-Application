import "./Search.css";
export default function Search() {
  return (
    <div className="container">
      <div className="search">
        <input type="search" placeholder=" Photographer, decor, makeup" />
        <i className="fa-solid fa-calendar-days"></i>
        <i className="fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
}
