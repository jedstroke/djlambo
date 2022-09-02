import Preloader from '../components/Preloader'
import Styles from '../styles/home.module.css'
import Nav from '../components/Nav';
function Home() {
    return (
        <>
        <div className={Styles.home}>
        <Preloader display={false} />
         <section className={Styles.first}>
          <Nav />  
         </section>
        </div>
        </>
    );
}
export default Home;