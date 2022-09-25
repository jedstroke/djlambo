import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Waveform from '../waveform';
import lamboClip from '../lambo.mp3';
import Styles from '../components/pitch.module.css';
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
    return (
<main className={Styles.main} style={{ padding: '16px' }}>
    <ArrowLeftOutlined onClick={() => {
                navigate('/')
            }} style={{
          boxShadow:'none',
          position:'absolute',
          top: '20px',
          left: '5px',
          fontSize: '40px',
          fontWeight: 'bolder',
          color: '#2593fc',
          background:'lavender'
      }} />
      <h1 style={{
          width:'300px',
          textAlign:'center',
          position:'relative',
          top:'-35px'
      }}>My pitch to <br /> <span className={Styles.span}>DJ LAMBO</span> <br /> And Co <span className={Styles.span}>DEVs</span> <br/> (<span className={Styles.span}>Voice Note</span>)</h1>
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
    </main>
    );
}
export default Pitch;