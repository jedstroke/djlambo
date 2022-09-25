import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import Styles from './nav.module.css';
function Nav() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    return (<>
        <div className={Styles.nav}>
        <img alt='' src="./assets/img/logo.png" className={Styles.logo} />
        <img alt='' onClick={() => {
            setMenu(true);
        }} src="./assets/img/menu.svg" className={Styles.menuIcon} />
        </div>
        <div style={{
        }} className={`${Styles.menu} ${menu ? 'menuIn':'menuOut'}`}>
            <CloseOutlined 
                onClick={() => {
                    setMenu(false);
                }}
                style={{
                position: 'absolute',
                right: '25px',
                color:'lavender',
                top: '25px',
                fontSize: '30px',
                fontWeight:'bolder'
                
            }}  />
            <p onClick={() => {
                navigate('/my-pitch')
            }} className={Styles.home}>HOME</p>
            <p onClick={() => {
                navigate('/my-pitch')
            }} className={Styles.merch}>BLOG</p>
            <p onClick={() => {
                navigate('/my-pitch')
            }} className={Styles.event}>SHOP</p>
            <p onClick={() => {
                navigate('/my-pitch')
            }} className={Styles.merch}>EVENT</p>
            <p onClick={() => {
                navigate('/my-pitch')
            }} className={Styles.sounds}>SONGS</p>
        </div>
    </>);
}
export default Nav;