import { InstagramFilled, FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';
import Styles from './footer.module.css';
function Footer() {
    return (<>
        <div className={Styles.footerCont}>
            <img className={Styles.footerLogo} src="./assets/img/footer-logo.png" alt="" />
            <p className={Styles.textCenter}>©2022 <a href="https://www.instagram.com/jedstroke/"><u>Jed</u></a>, All rights Reserved.</p>
            <div className={Styles.iconSet}>
            <a href="https://facebook.com/djlamboofficial/">
            <FacebookFilled />
            </a>
            <a href="https://www.instagram.com/djlambo_/">
            <InstagramFilled />
            </a>
            <a href="https://twitter.com/djlambo_">
            <TwitterSquareFilled />
            </a>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
        </>);
}
export default Footer;