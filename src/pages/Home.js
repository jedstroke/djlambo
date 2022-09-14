import { CaretRightFilled, PauseOutlined, CaretRightOutlined, InstagramOutlined } from '@ant-design/icons';
import Styles from '../styles/home.module.css'
import Preloader from '../components/Preloader'
import Nav from '../components/Nav';
import Image from '../components/Image';
function Home() {
    return (
        <>
        <div className={Styles.home}>
        <Preloader display={false} />
          <Nav /> 
         <section className={Styles.first}>
            <div className={Styles.firstTexts}>
            <h1 className={Styles.txt1}>
            I’M
            </h1>
            <h1 className={Styles.txt2}>
            OLAWUNMI<br/>OKERAYI
            </h1>
            <p className={Styles.txt3}>
            SHARK OF THE OCEAN
            </p>
            </div>
            <div className={Styles.vinyl}>
                <img className={Styles.pin} src="./assets/img/pin.png" alt="" />
                <img className={Styles.disc} src="./assets/img/vinyl.png" alt="" />
            </div>
            <img src="./assets/img/lamba.png" alt="" className={Styles.lamba} />
         </section>
         <section className={Styles.second}>
            <h1 className={Styles.txt4}>Latest Release</h1>
            <Image style={{
                width: '271px',
                height: '193.8px'}} center={true} source={['./assets/img/venusNmars-min.png', './assets/img/venusNmars.png']} />
                <p className={Styles.txt5}>Venus and Mars <br /><span className={Styles.txt6}>2021</span></p>
                <h2 className={Styles.txt7}>Tracks</h2>
                <div className={Styles.track}>
                    <div className={Styles.subTrack11}>
                    <span className={Styles.trackTitle}>1. Sirius</span>
                    <span className={Styles.trackDuration}>3:27</span>
                    </div>
                    <div className={Styles.subTrack12}>
                    <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
                    <span className={Styles.trackControl}><CaretRightFilled color='white'  /></span>
                    </div>
                </div>
                <div className={Styles.track}>
                    <div className={Styles.subTrack11}>
                    <span className={Styles.trackTitle}>2. Rigel</span>
                    <span className={Styles.trackDuration}>3:27</span>
                    </div>
                    <div className={Styles.subTrack12}>
                    <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
                    <span className={Styles.trackControl}><CaretRightFilled color='white'  /></span>
                    </div>
                </div>
                <div className={Styles.track}>
                    <div className={Styles.subTrack11}>
                    <span className={Styles.trackTitle}>3. Canopus</span>
                    <span className={Styles.trackDuration}>4:01</span>
                    </div>
                    <div className={Styles.subTrack12}>
                    <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
                    <span className={Styles.trackControl}><CaretRightFilled color='white'  /></span>
                    </div>
                </div>
                <div className={Styles.trackActive}>
                    <div className={Styles.subTrack11}>
                    <span className={Styles.trackTitle}>4. Alioth</span>
                    <span className={Styles.trackDuration}>3:27</span>
                    </div>
                    <div className={Styles.subTrack12}>
                    <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
                    <span className={Styles.trackControl}><PauseOutlined color='white'/></span>
                    </div>
                </div>
                <div className={Styles.track}>
                    <div className={Styles.subTrack11}>
                    <span className={Styles.trackTitle}>5. Algol</span>
                    <span className={Styles.trackDuration}>2:34</span>
                    </div>
                    <div className={Styles.subTrack12}>
                    <span className={Styles.trackArtiste}>Dr Caise, DJ Lambo</span>
                    <span className={Styles.trackControl}><CaretRightFilled color='white'  /></span>
                    </div>
                </div>
         </section>
         <section className={Styles.third}>
            <h1 className={Styles.txt8}>Other Releases</h1>
            <div className={Styles.centerDiv}>
            <div className={Styles.leftTrack}>
                <Image source={['./assets/img/kk-min.png', './assets/img/kk.png']}
                style={{
                width: '265px'
                }}
                />
                <span className={Styles.sideTrackTxt}>KUNTE KUNTE</span>
                <span className={Styles.sideTrackYear}>2018</span>
            </div>
            </div>
            <div className={Styles.centerDiv}>
            <div className={Styles.rightTrack}>
                <Image source={['./assets/img/bebe-min.png', './assets/img/bebe.png']}
                style={{
                    width: '265px'
                }}
                />
                <span className={Styles.sideTrackTxt}>Bebe</span>
                <span className={Styles.sideTrackYear}>2017</span>
            </div>
            </div>
            <div className={Styles.centerDiv}>
            <div className={Styles.leftTrack}>
                <Image source={['./assets/img/im-min.png', './assets/img/im.png']}
                style={{
                width: '265px'
                }}
                />
                <span className={Styles.sideTrackTxt}>The Motion</span>
                <span className={Styles.sideTrackYear}>2015</span>
            </div>
            </div>
            <div className={Styles.seeAll}>
                <p className={Styles.seeAllTxt}>See All</p><CaretRightOutlined color={'white'} style={{
                    fontSize: '20px'
                }} />
            </div>
         </section>
         <section className={Styles.fourth}>
         <h1 className={Styles.txt8}>Instagram Feed</h1>
         <div className={Styles.instaFlex}>
             <div style={{
                width: '150px',
                height: '150px'
             }}>
             <div className={Styles.instaBox}>
                <Image source={['./assets/img/insta1-min.png', './assets/img/insta1.png']} style={{
                    objectFit: 'contain',
                    borderRadius: '15px',
                    width: '150px',
                    height: '150px'
                }} />
                <div className={Styles.instaOverlay} style={{display: 'flex'}}>
                <InstagramOutlined style={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
                </div>
             </div>
             </div>
             <div style={{
                width: '150px',
                height: '150px'
             }}>
             <div className={Styles.instaBox}>
                <Image source={['./assets/img/insta2-min.png', './assets/img/insta2.png']} style={{
                    objectFit: 'contain',
                    borderRadius: '15px',
                    width: '150px',
                    height: '150px'
                }} />
                <div className={Styles.instaOverlay} style={{display: 'none'}}>
                <InstagramOutlined style={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
                </div>
             </div>
             </div>
             <div style={{
                width: '150px',
                height: '150px'
             }}>
             <div className={Styles.instaBox}>
                <Image source={['./assets/img/insta3-min.png', './assets/img/insta3.png']} style={{
                    objectFit: 'contain',
                    borderRadius: '15px',
                    width: '150px',
                    height: '150px'
                }} />
                <div className={Styles.instaOverlay} style={{display: 'none'}}>
                <InstagramOutlined style={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
                </div>
             </div>
             </div>
             <div style={{
                width: '150px',
                height: '150px'
             }}>
             <div className={Styles.instaBox}>
                <Image source={['./assets/img/insta4-min.png', './assets/img/insta4.png']} style={{
                    objectFit: 'contain',
                    borderRadius: '15px',
                    width: '150px',
                    height: '150px'
                }} />
                <div className={Styles.instaOverlay} style={{display: 'none'}}>
                <InstagramOutlined style={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
                </div>
             </div>
             </div>
             <div style={{
                width: '150px',
                height: '150px'
             }}>
             <div className={Styles.instaBox}>
                <Image source={['./assets/img/insta5-min.png', './assets/img/insta5.png']} style={{
                    objectFit: 'contain',
                    borderRadius: '15px',
                    width: '150px',
                    height: '150px'
                }} />
                <div className={Styles.instaOverlay} style={{display: 'none'}}>
                <InstagramOutlined style={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
                </div>
             </div>
             </div>
             <div style={{
                width: '150px',
                height: '150px'
             }}>
             <div className={Styles.instaBox}>
                <Image source={['./assets/img/insta6-min.png', './assets/img/insta6.png']} style={{
                    objectFit: 'contain',
                    borderRadius: '15px',
                    width: '150px',
                    height: '150px'
                }} />
                <div className={Styles.instaOverlay} style={{display: 'none'}}>
                <InstagramOutlined style={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
                </div>
             </div>
             </div>
         </div>
         <Image style={{
            height: '300px',
            margin: 'auto',
            marginTop: '-10px',
            width: 'calc(100% - 40px',
            objectFit: 'scale-down'
         }} source={['./assets/img/lambox-min.png', './assets/img/lambox.png']} />
         </section>
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
             <button className={Styles.eventButton}>
                SOLD OUT 
             </button>
             </div>
         </div>
        </div>
        </>
    );
}
export default Home;
