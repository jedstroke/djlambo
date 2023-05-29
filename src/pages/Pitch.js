import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Waveform from '../components/waveform';
import lamboClip from "../components/VoiceNote/thanks.mp3";
import Styles from '../styles/pitch.module.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
function Pitch() {
    const navigate = useNavigate();
    const Link = styled.a`
    --primary: #61dbff;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    padding: 0 1px;
    box-shadow: inset 0 -6px 0 0 var(--primary);
    transition: box-shadow 0.3s ease-in;

    &:hover {
    box-shadow: inset 0 -40px 0 0 var(--primary);
    }

    &:active {
    box-shadow: inset 0 -40px 0 0 var(--primary);
    }
    `;
    return (<>
<main className={Styles.main} style={{ padding: '16px'}}>
    <ArrowLeftOutlined onClick={() => {
                navigate('/')
            }} style={{
          boxShadow:'none',
          position:'absolute',
          top: '20px',
          left: '5px',
          fontSize: '40px',
          fontWeight: 'bolder',
          color: '#2593fc'
      }} />
      <h1 style={{
          width:'300px',
          textAlign:'center',
          position:'relative',
          top:'-35px'
      }}><span className={Styles.span}>Voice Note</span></h1>
      <p style={{
        position:'relative',
        top:'-20px'
      }}>(Wait for the Waveform 🔊)</p>
      <div style={{
          width:'100%'
      }}>
      <Waveform audio={lamboClip} />
      </div>
      <footer style={{ marginTop: '32px' }}>
        <p style={{
            textAlign:'center'
        }}>Her
          latest album:
          {' '}
          <Link href="https://music.youtube.com/playlist?list=OLAK5uy_nsB80a7PIHDsYkjXI-rhfjcGwgJ_27Bwo">Venus and Mars</Link>
        </p>
        <p style={{
            textAlign:'center'
        }}>Check out my GitHub:
          {' '}
          <Link href="https://github.com/jedstroke">@jedstroke</Link>
        </p>
      </footer>
        <br />
        <br />
        <br />
    </main>
    </>);
}
export default Pitch;
