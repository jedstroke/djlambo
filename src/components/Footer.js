import { InstagramFilled, FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';
import Styles from './footer.module.css';
function Footer() {
    return (<>
        <div className={Styles.footerCont}>
            <img className={Styles.footerLogo} src="./assets/img/footer-logo.png" alt="" />
            <p className={Styles.textCenter}>©2022 Masterminds, All rights Reserved.</p>
            <div className={Styles.iconSet}>
            <FacebookFilled />
            <InstagramFilled />
            <TwitterSquareFilled />
            </div>
        </div>
        </>);
}
export default Footer;