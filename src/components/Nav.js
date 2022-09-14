import Styles from './nav.module.css';
function Nav() {
    return (
        <div className={Styles.nav}>
        <img alt='' src="./assets/img/logo.png" className={Styles.logo} />
        <img alt='' src="./assets/img/menu.svg" className={Styles.menuIcon} />
        </div>
    );
}
export default Nav;