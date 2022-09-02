import  Styles  from './preloader.module.css';
function Preloader({ display = true }) {
    return (
      <div style={{
        display: display ? 'block' : 'none'
      }}>
        <div className={Styles.hero}>
        <div className={Styles.container}>
        <img alt='' src="./assets/logo.png" className={Styles.img} />
        <div className={Styles.roller}></div>
        </div>
        </div>
      </div>
    );
}

export default Preloader;