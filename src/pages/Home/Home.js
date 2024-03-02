import Card from "../../components/Card";
import Footerr from "../../components/Footer";
import Bar from "./Bar";
import Landing from "./Landing";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <Landing />
      <Bar />
      <Card />
      <Footerr />
    </div>
  );
}
