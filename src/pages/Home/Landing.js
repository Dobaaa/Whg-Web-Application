import { useState, useRef } from "react";
import { useEffect } from "react";
import landing from "./../../Asests/landing1.png";
import ONe from "./../../Asests/landing2.png";
import TWO from "./../../Asests/landing3.png";
import THRE from "./../../Asests/landing4.png";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Search from "../../components/Search";

export default function Landing() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  var images = [landing, THRE, ONe, TWO, THRE];
  var index = 0;

  function change() {
    document.getElementById("mainPhoto").src = images[index];
    if (index === 2) {
      index = 0;
    } else {
      index++;
    }
  }

  useEffect(() => {
    const intervalId = setInterval(change, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    change();
  };

  return (
    <>
      <div className="landing pb-5  col-sm pt-5 ">
        <div className=" container d-flex  justify-content-center pt-5 ">
          <div className="row d-flex   align-items-center">
            <div className="col-md-7 ">
              <div className="head">
                <h2>
                  When your <i className="fa-solid fa-heart"></i>
                </h2>
              </div>
              <h1>Dream Wedding come true</h1>
              <p>
                “ Once in a while, right in the middle of an <br />
                ordinary life, love gives us a fairy tale. ”
              </p>
              <Search />
              <div className="row info pt-4 pb-4">
                <div className="col-md-6 d-flex align-items-center gap-2 col-sm pb-2">
                  <i className="fa-solid fa-swatchbook"></i>
                  <span>Invitation Design</span>
                </div>
                <div className="col-md-6  d-flex align-items-center gap-2">
                  <i className="fa-solid fa-utensils"></i>
                  <span>Cakes and Catering</span>
                </div>
              </div>
              <div className="row info ">
                <div className="col-md-6  d-flex align-items-center gap-2 col-sm pb-2">
                  <i className="fa-solid fa-cloud-bolt"></i>
                  <span>Rain Charmer</span>
                </div>
                <div className="col-md-6  d-flex align-items-center gap-2">
                  <i className="fa-solid fa-tablet-screen-button"></i>
                  <span>Other services</span>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-12">
                  <div className="scrol pt-5">
                    <label htmlFor="scrol">Scroll Down</label>
                    <input id="scrol" type="button" value={"-----"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="img-section d-flex justify-content-end">
                <img src={landing} className="land-img" id="mainPhoto" />
                <div
                  onClick={handleClick}
                  className={`paly d-flex justify-content-center align-items-center ${
                    isVisible ? "" : "hidden"
                  }`}
                >
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <div className="slide-color d-flex gap-3 justify-content-end pt-3 pb-3">
                <div className="red">
                  <div className="circle"></div>
                </div>
                <div className="blue">
                  <div className="circle"></div>
                </div>
                <div className="yellow">
                  <div className="circle"></div>
                </div>
              </div>
              <div className="basket pt-2 d-flex  justify-content-end ">
                <>
                  <Button
                    variant="danger"
                    ref={target}
                    onClick={() => setShow(!show)}
                    className="basket-btn "
                  >
                    <i className="fa-solid fa-basket-shopping"></i>
                    Your Basket (4)
                  </Button>
                  <Overlay target={target.current} show={show} placement="top">
                    {({
                      placement: _placement,
                      arrowProps: _arrowProps,
                      show: _show,
                      popper: _popper,
                      hasDoneInitialMeasure: _hasDoneInitialMeasure,
                      ...props
                    }) => (
                      <div
                        {...props}
                        style={{
                          position: "absolute",
                          backgroundColor: "#ffffff",
                          padding: "2px 10px",
                          color: "black",
                          width: "300px",
                          borderRadius: 12,
                          ...props.style,
                        }}
                      >
                        <div className="popup">
                          <div className="head-line d-flex justify-content-between p-3">
                            <span>Your Item (4)</span>
                            <i className="fa-solid fa-chevron-down"></i>
                          </div>
                          <div className="basket-box d-flex  pt-3">
                            <i className="fa-solid fa-utensils"></i>
                            <div className="box-desc">
                              <p>KateringIbu Barbara</p>
                              <h6>Rp10.000.000</h6>
                            </div>
                          </div>
                          <div className="basket-box d-flex  pt-3">
                            <i className="fa-solid fa-utensils"></i>
                            <div className="box-desc">
                              <p>KateringIbu Barbara</p>
                              <h6>Rp10.000.000</h6>
                            </div>
                          </div>
                          <div className="basket-box d-flex  pt-3">
                            <i className="fa-solid fa-utensils"></i>
                            <div className="box-desc">
                              <p>KateringIbu Barbara</p>
                              <h6>Rp10.000.000</h6>
                            </div>
                          </div>
                          <div className="basket-box d-flex  pt-3">
                            <i className="fa-solid fa-utensils"></i>
                            <div className="box-desc">
                              <p>KateringIbu Barbara</p>
                              <h6>Rp10.000.000</h6>
                            </div>
                          </div>
                          <div className="basket-btn d-flex  justify-content-between p-4">
                            <button>Egp 1000</button>
                            <a href="#">Details</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </Overlay>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
