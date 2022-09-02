import Styles from './nav.module.css';
function Nav() {
    return (
        <div className={Styles.nav}>
        <img alt='' src="./assets/logo.png" className={Styles.logo} />
        <img alt='' src="./assets/menu.svg" className={Styles.menuIcon} />
        </div>
    );
}
export default Nav;