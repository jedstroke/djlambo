// eslint-disable-next-line
import { useState, useRef, useEffect } from "react";
import {
  CaretRightFilled,
  PauseOutlined,
  CaretRightOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Styles from "../styles/home.module.css";
import Preloader from "../components/Preloader";
import Nav from "../components/Nav";
import Image from "../components/Image";
import Footer from "../components/Footer";
function Home() {
  const navigate = useNavigate();
  const [pin, setPin] = useState(true);
  const [preloader, setPreloader] = useState(true);
  const [vinyl, setVinyl] = useState(true);
  const [lambo, setLambo] = useState(true);
  const [instaOverlay, setInstaOverlay] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [firstTrack, setFirstTrack] = useState(false);
  const [tracks, setTrack] = useState([true, false, false, false, false]);
  const song1 = useRef();
  const song2 = useRef();
  const song3 = useRef();
  const song4 = useRef();
  const song5 = useRef();
  const main = useRef();
  function track1() {
    song2.current.pause();
    song3.current.pause();
    song4.current.pause();
    song5.current.pause();
    song1.volume = "0.5";
    !tracks[0] ? song1.current.play() : song1.current.pause();
  }
  function track2() {
    song1.current.pause();
    song3.current.pause();
    song4.current.pause();
    song5.current.pause();
    song2.volume = "0.5";
    !tracks[1] ? song2.current.play() : song2.current.pause();
  }
  function track3() {
    song2.current.pause();
    song1.current.pause();
    song4.current.pause();
    song5.current.pause();
    song3.volume = "0.5";
    !tracks[2] ? song3.current.play() : song3.current.pause();
  }
  function track4() {
    song2.current.pause();
    song3.current.pause();
    song1.current.pause();
    song5.current.pause();
    song4.volume = "0.5";
    !tracks[3] ? song4.current.play() : song4.current.pause();
  }
  function track5() {
    song2.current.pause();
    song3.current.pause();
    song4.current.pause();
    song1.current.pause();
    song5.volume = "0.5";
    !tracks[4] ? song5.current.play() : song5.current.pause();
  }
  useEffect(() => {
    const observables = document.querySelectorAll("#observables");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.reset === "true") {
            observables[1].style.transform = "translateX(-35%)";
            observables[2].style.transform = "translateX(50%)";
            observables[3].style.transform = "translateX(-35%)";
          }
          if (entry.isIntersecting && entry.target.dataset.single === "1") {
            observables[1].style.transform = "translateX(0%)";
          }
          if (entry.isIntersecting && entry.target.dataset.single === "2") {
            observables[2].style.transform = "translateX(0%)";
          }
          if (entry.isIntersecting && entry.target.dataset.single === "3") {
            observables[3].style.transform = "translateX(0%)";
          }
          if (entry.isIntersecting && entry.target.dataset.ticket === "true") {
            observables[1].style.transform = "translateX(-35%)";
            observables[2].style.transform = "translateX(50%)";
            observables[3].style.transform = "translateX(-35%)";
          }
        });
      },
      {
        root: main.current,
      }
    );
    observables.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  useEffect(() => {
    if (sessionStorage.getItem("preloaded") === "true") {
      setPreloader(false);
    }
    if (!pin && !lambo && !vinyl) {
      setTimeout(() => {
        setPreloader(false);
      }, 5000);
      sessionStorage.setItem("preloaded", "true");
    }
  }, [pin, vinyl, lambo]);
  return (
    <>
      <div ref={main} className={Styles.home}>
        <Preloader display={preloader} />
        <Nav />
        <section className={Styles.first}>
          <div className={Styles.firstTexts}>
            <h1 className={Styles.txt1}>I’M</h1>
            <h1 className={Styles.txt2}>
              OLAWUNMI
              <br />
              OKERAYI
            </h1>
            <p className={Styles.txt3}>SHARK OF THE OCEAN</p>
          </div>
          <div className={Styles.vinyl}>
            <img
              className={Styles.pin}
              src="./assets/img/pin.png"
              onLoad={() => {
                if (window.innerWidth > window.innerHeight) {
                  toast("Use a portrait screen 🙏🏽", {
                    duration: 10000,
                    style: {
                      width: "fit-content",
                      lavenderSpace: "nowrap",
                    },
                  });
                  setPin(true);
                } else {
                  setPin(false);
                }
              }}
              alt=""
            />
            <img
              className={Styles.disc}
              src="./assets/img/vinyl.png"
              alt=""
              onLoad={() => {
                setVinyl(false);
              }}
            />
          </div>
          <img
            src="./assets/img/lamba.png"
            alt=""
            className={Styles.lamba}
            onLoad={() => {
              setLambo(false);
            }}
          />
        </section>
        <section className={Styles.second}>
          <h1 className={Styles.txt4}>Latest Release</h1>
          <Image
            style={{
              width: "271px",
              height: "193.8px",
            }}
            center={true}
            source={[
              "./assets/img/venusNmars-min.png",
              "./assets/img/venusNmars.png",
            ]}
          />
          <p id="observables" data-reset="true" className={Styles.txt5}>
            Venus and Mars <br />
            <span className={Styles.txt6}>2021</span>
          </p>
          {/* Sirius */}
          <div
            onClick={() => {
              track1();
              setFirstTrack(true);
              setTrack([!tracks[0], false, false, false, false]);
            }}
            className={`${tracks[0] ? Styles.trackActive : Styles.track}`}
          >
            <audio
              onEnded={() => {
                setTrack([!tracks[0], false, false, false, false]);
              }}
              ref={song1}
              src="./assets/songs/Sirius-min.mp3"
            ></audio>
            <div className={Styles.subTrack11}>
              <span className={Styles.trackTitle}>1. Sirius</span>
              <span className={Styles.trackDuration}>3:27</span>
            </div>
            <div className={Styles.subTrack12}>
              <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
              <span
                style={{
                  display: tracks[0] && firstTrack ? "none" : "inline",
                }}
                className={Styles.trackControl}
              >
                <CaretRightFilled
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
              <span
                style={{
                  display: tracks[0] && firstTrack ? "inline" : "none",
                }}
                className={Styles.trackControl}
              >
                <PauseOutlined
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
            </div>
          </div>
          {/* Rigel */}
          <div
            onClick={() => {
              track2();
              setTrack([false, !tracks[1], false, false, false]);
            }}
            className={`${tracks[1] ? Styles.trackActive : Styles.track}`}
          >
            <audio
              onEnded={() => {
                setTrack([false, !tracks[1], false, false, false]);
              }}
              src="./assets/songs/Rigel-min.mp3"
              ref={song2}
            ></audio>
            <div className={Styles.subTrack11}>
              <span className={Styles.trackTitle}>2. Rigel</span>
              <span className={Styles.trackDuration}>3:27</span>
            </div>
            <div className={Styles.subTrack12}>
              <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
              <span
                style={{
                  display: tracks[1] ? "none" : "inline",
                }}
                className={Styles.trackControl}
              >
                <CaretRightFilled
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
              <span
                style={{
                  display: tracks[1] ? "inline" : "none",
                }}
                className={Styles.trackControl}
              >
                <PauseOutlined
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
            </div>
          </div>
          {/* Canopus */}
          <div
            onClick={() => {
              track3();
              setTrack([false, false, !tracks[2], false, false]);
            }}
            className={`${tracks[2] ? Styles.trackActive : Styles.track}`}
          >
            <audio
              onEnded={() => {
                setTrack([false, false, !tracks[2], false, false]);
              }}
              ref={song3}
              src="./assets/songs/Canopus-min.mp3"
            ></audio>
            <div className={Styles.subTrack11}>
              <span className={Styles.trackTitle}>3. Canopus</span>
              <span className={Styles.trackDuration}>4:01</span>
            </div>
            <div className={Styles.subTrack12}>
              <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
              <span
                style={{
                  display: tracks[2] ? "none" : "inline",
                }}
                className={Styles.trackControl}
              >
                <CaretRightFilled
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
              <span
                style={{
                  display: tracks[2] ? "inline" : "none",
                }}
                className={Styles.trackControl}
              >
                <PauseOutlined
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
            </div>
          </div>
          {/* Alioth */}
          <div
            onClick={() => {
              track4();
              setTrack([false, false, false, !tracks[3], false]);
            }}
            className={`${tracks[3] ? Styles.trackActive : Styles.track}`}
          >
            <audio
              onEnded={() => {
                setTrack([false, false, false, !tracks[3], false]);
              }}
              ref={song4}
              src="./assets/songs/Alioth-min.mp3"
            ></audio>
            <div className={Styles.subTrack11}>
              <span className={Styles.trackTitle}>4. Alioth</span>
              <span className={Styles.trackDuration}>3:27</span>
            </div>
            <div className={Styles.subTrack12}>
              <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
              <span
                style={{
                  display: tracks[3] ? "none" : "inline",
                }}
                className={Styles.trackControl}
              >
                <CaretRightFilled
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
              <span
                style={{
                  display: tracks[3] ? "inline" : "none",
                }}
                className={Styles.trackControl}
              >
                <PauseOutlined
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
            </div>
          </div>
          {/* Algol */}
          <div
            onClick={() => {
              track5();
              setTrack([false, false, false, false, !tracks[4]]);
            }}
            className={`${tracks[4] ? Styles.trackActive : Styles.track}`}
          >
            <audio
              onEnded={() => {
                setTrack([false, false, false, false, !tracks[4]]);
              }}
              ref={song5}
              src="./assets/songs/Algol-min.mp3"
            ></audio>
            <div className={Styles.subTrack11}>
              <span className={Styles.trackTitle}>5. Algol</span>
              <span className={Styles.trackDuration}>2:34</span>
            </div>
            <div className={Styles.subTrack12}>
              <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
              <span
                style={{
                  display: tracks[4] ? "none" : "inline",
                }}
                className={Styles.trackControl}
              >
                <CaretRightFilled
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
              <span
                style={{
                  display: tracks[4] ? "inline" : "none",
                }}
                className={Styles.trackControl}
              >
                <PauseOutlined
                  style={{
                    fontSize: "23px",
                    position: "relative",
                    top: "-6px",
                  }}
                  color="lavender"
                />
              </span>
            </div>
          </div>
          <br />
          <br />
          <div
            onClick={() => {
              navigate("/my-pitch");
            }}
            className={Styles.seeAll}
          >
            <p className={Styles.seeAllTxt}>See All</p>
            <CaretRightOutlined
              color={"lavender"}
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </section>
        <section className={Styles.third}>
          <h1 className={Styles.txt8}>Other Releases</h1>
          <div className={Styles.centerDiv}>
            <div id="observables" data-single="1" className={Styles.leftTrack}>
              <Image
                source={["./assets/img/kk-min.png", "./assets/img/kk.png"]}
                style={{
                  width: "265px",
                }}
              />
              <span className={Styles.sideTrackTxt}>KUNTE KUNTE</span>
              <span className={Styles.sideTrackYear}>2018</span>
            </div>
          </div>
          <div className={Styles.centerDiv}>
            <div id="observables" data-single="2" className={Styles.rightTrack}>
              <Image
                source={["./assets/img/bebe-min.png", "./assets/img/bebe.png"]}
                style={{
                  width: "265px",
                }}
              />
              <span className={Styles.sideTrackTxt}>Bebe</span>
              <span className={Styles.sideTrackYear}>2017</span>
            </div>
          </div>
          <div className={Styles.centerDiv}>
            <div id="observables" data-single="3" className={Styles.leftTrack}>
              <Image
                source={["./assets/img/im-min.png", "./assets/img/im.png"]}
                style={{
                  width: "265px",
                }}
              />
              <span className={Styles.sideTrackTxt}>The Motion</span>
              <span className={Styles.sideTrackYear}>2015</span>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/my-pitch");
            }}
            className={Styles.seeAll}
          >
            <p className={Styles.seeAllTxt}>See All</p>
            <CaretRightOutlined
              color={"lavender"}
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </section>
        <section className={Styles.fourth}>
          <h1 className={Styles.txt8}>Instagram Feeds</h1>
          <div className={Styles.instaFlex}>
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <div
                onClick={() => {
                  setInstaOverlay([
                    !instaOverlay[0],
                    false,
                    false,
                    false,
                    false,
                    false,
                  ]);
                }}
                className={Styles.instaBox}
              >
                <Image
                  source={[
                    "./assets/img/insta1-min.png",
                    "./assets/img/insta1.png",
                  ]}
                  style={{
                    objectFit: "contain",
                    borderRadius: "15px",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <div
                  className={Styles.instaOverlay}
                  style={{ display: instaOverlay[0] ? "flex" : "none" }}
                >
                  <a href="https://www.instagram.com/djlambo_/">
                    <InstagramOutlined
                      style={{
                        color: "lavender",
                        fontSize: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <div
                onClick={() => {
                  setInstaOverlay([
                    false,
                    !instaOverlay[1],
                    false,
                    false,
                    false,
                    false,
                  ]);
                }}
                className={Styles.instaBox}
              >
                <Image
                  source={[
                    "./assets/img/insta2-min.png",
                    "./assets/img/insta2.png",
                  ]}
                  style={{
                    objectFit: "contain",
                    borderRadius: "15px",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <div
                  className={Styles.instaOverlay}
                  style={{ display: instaOverlay[1] ? "flex" : "none" }}
                >
                  <a href="https://www.instagram.com/djlambo_/">
                    <InstagramOutlined
                      style={{
                        color: "lavender",
                        fontSize: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <div
                onClick={() => {
                  setInstaOverlay([
                    false,
                    false,
                    !instaOverlay[2],
                    false,
                    false,
                    false,
                  ]);
                }}
                className={Styles.instaBox}
              >
                <Image
                  source={[
                    "./assets/img/insta3-min.png",
                    "./assets/img/insta3.png",
                  ]}
                  style={{
                    objectFit: "contain",
                    borderRadius: "15px",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <div
                  className={Styles.instaOverlay}
                  style={{ display: instaOverlay[2] ? "flex" : "none" }}
                >
                  <a href="https://www.instagram.com/djlambo_/">
                    <InstagramOutlined
                      style={{
                        color: "lavender",
                        fontSize: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <div
                onClick={() => {
                  setInstaOverlay([
                    false,
                    false,
                    false,
                    !instaOverlay[3],
                    false,
                    false,
                  ]);
                }}
                className={Styles.instaBox}
              >
                <Image
                  source={[
                    "./assets/img/insta4-min.png",
                    "./assets/img/insta4.png",
                  ]}
                  style={{
                    objectFit: "contain",
                    borderRadius: "15px",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <div
                  className={Styles.instaOverlay}
                  style={{ display: instaOverlay[3] ? "flex" : "none" }}
                >
                  <a href="https://www.instagram.com/djlambo_/">
                    <InstagramOutlined
                      style={{
                        color: "lavender",
                        fontSize: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              id="observables"
              data-ticket="true"
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <div
                onClick={() => {
                  setInstaOverlay([
                    false,
                    false,
                    false,
                    false,
                    !instaOverlay[4],
                    false,
                  ]);
                }}
                className={Styles.instaBox}
              >
                <Image
                  source={[
                    "./assets/img/insta5-min.png",
                    "./assets/img/insta5.png",
                  ]}
                  style={{
                    objectFit: "contain",
                    borderRadius: "15px",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <div
                  className={Styles.instaOverlay}
                  style={{ display: instaOverlay[4] ? "flex" : "none" }}
                >
                  <a href="https://www.instagram.com/djlambo_/">
                    <InstagramOutlined
                      style={{
                        color: "lavender",
                        fontSize: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <div
                onClick={() => {
                  setInstaOverlay([
                    false,
                    false,
                    false,
                    false,
                    false,
                    !instaOverlay[5],
                  ]);
                }}
                className={Styles.instaBox}
              >
                <Image
                  source={[
                    "./assets/img/insta6-min.png",
                    "./assets/img/insta6.png",
                  ]}
                  style={{
                    objectFit: "contain",
                    borderRadius: "15px",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <div
                  className={Styles.instaOverlay}
                  style={{ display: instaOverlay[5] ? "flex" : "none" }}
                >
                  <a href="https://www.instagram.com/djlambo_/">
                    <InstagramOutlined
                      style={{
                        color: "lavender",
                        fontSize: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={Styles.fourthy}>
          <h1 className={Styles.txt8}>Grab Tickets</h1>
          <br />
          <Image
            style={{
              height: "300px",
              margin: "auto",
              marginTop: "-10px",
              width: "calc(100% - 40px",
              objectFit: "scale-down",
            }}
            source={["./assets/img/lambox-min.png", "./assets/img/lambox.png"]}
          />
          <div className={Styles.eventFlex}>
            <div className={Styles.eventDate}>
              <p>MAR</p>
              <p>14</p>
            </div>
            <div className={Styles.eventTitle}>
              <p>ARTSCAPE THEATRE</p>
              <p>Cape Town, South africa</p>
            </div>
            <div className={Styles.eventButtonCont}>
              <button className={Styles.eventButton}>SOLD OUT!</button>
            </div>
          </div>
          <div className={Styles.eventFlex}>
            <div className={Styles.eventDate}>
              <p>MAR</p>
              <p>21</p>
            </div>
            <div className={Styles.eventTitle}>
              <p>CITY AUDITORIUM</p>
              <p>Okayama, Japan</p>
            </div>
            <div className={Styles.eventButtonCont}>
              <button
                onClick={() => {
                  navigate("/my-pitch");
                }}
                className={Styles.eventBuy}
              >
                BUY
              </button>
            </div>
          </div>
          <div className={Styles.eventFlex}>
            <div className={Styles.eventDate}>
              <p>MAR</p>
              <p>28</p>
            </div>
            <div className={Styles.eventTitle}>
              <p>ROYAL THEATRE</p>
              <p>Brussels, Belgium</p>
            </div>
            <div className={Styles.eventButtonCont}>
              <button className={Styles.eventButton}>SOLD OUT!</button>
            </div>
          </div>
          <div className={Styles.eventFlex}>
            <div className={Styles.eventDate}>
              <p>APR</p>
              <p>10</p>
            </div>
            <div className={Styles.eventTitle}>
              <p>SIBELIUS ACADEMY</p>
              <p>Helsinki, Finland</p>
            </div>
            <div className={Styles.eventButtonCont}>
              <button className={Styles.eventButton}>FREE ENTRY</button>
            </div>
          </div>
        </section>
        <section className={Styles.fifth}>
          <h1 id="observables" data-outta="true" className={Styles.txt8}>
            Blog Posts
          </h1>
          <div className={Styles.blogCont}>
            <p className={Styles.blogDate}>january 11, 2019</p>
            <p className={Styles.blogHeader}>
              I will still be a DJ even when I am a grandma
            </p>
            <p className={Styles.blogExcerpt}>
              In a recent interview, she told Showtime that staying relevant
              would be the only proof she can present to her grandchildren...
            </p>
            <button
              onClick={() => {
                navigate("/my-pitch");
              }}
              className={Styles.blogButton}
            >
              READ MORE
              <CaretRightFilled
                color="lavender"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  position: "relative",
                  bottom: "1px",
                }}
              />
            </button>
          </div>
          <div className={Styles.blogCont}>
            <p className={Styles.blogDate}>february 11, 2019</p>
            <p className={Styles.blogHeader}>
              Nigeria's DJ Lambo to release her first EP
            </p>
            <p className={Styles.blogExcerpt}>
              The EP is a testament to patience, and above all, to the
              cultivation of personal style and trusting in your taste and all
              the different paths...
            </p>
            <button
              onClick={() => {
                navigate("/my-pitch");
              }}
              className={Styles.blogButton}
            >
              READ MORE
              <CaretRightFilled
                color="lavender"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  position: "relative",
                  bottom: "1px",
                }}
              />
            </button>
          </div>
          <div className={Styles.blogCont}>
            <p className={Styles.blogDate}>march 11, 2019</p>
            <p className={Styles.blogHeader}>
              A lot of men are attracted to me
            </p>
            <p className={Styles.blogExcerpt}>
              I think I have both male and female fans. I don’t know if my
              tomboy personality scares men away from me but I know that men
              that come...
            </p>
            <button
              onClick={() => {
                navigate("/my-pitch");
              }}
              className={Styles.blogButton}
            >
              READ MORE
              <CaretRightFilled
                color="lavender"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  position: "relative",
                  bottom: "1px",
                }}
              />
            </button>
          </div>
        </section>
        <div className={Styles.footerCont}>
          <Footer />
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Montserrat",
            color: "#424449",
            fontWeight: "500",
            padding: "2px",
            fontSize: "18px",
            wordBreak: "keep-all",
            lavenderSpace: "nowrap",
          },
        }}
      />
    </>
  );
}
export default Home;
