import Card from "../../components/Card";
import Footerr from "../../components/Footer";
import Navs from "../../components/Nav";
import Landing from "../LAnding/Landing";
import Bar from "./Bar";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <Navs />
      <Landing />
      <Bar />
      <Card />
      <Footerr />
    </div>
  );
}
