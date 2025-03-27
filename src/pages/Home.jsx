import { Helmet } from 'react-helmet';
import Bookcarousel from '../components/BookCarousel.jsx';
import Category from '../components/Category.jsx';
import Footer from '../components/footer.jsx';

function Home() {
    return (
        <div >
            <Helmet>
                <title>322bookstore</title>
            </Helmet>
            <div className="home-container">
                <header className="header">
                    <text className="instrument-serif-regular header-text">Welcome to the 322bookstore</text>
                    <hr className="header-line" />
                </header>
                <div className="carousel">
                    <Bookcarousel />
                </div>
            </div>

            <Category />

            <div className='footer instrument-serif-regular'>
                <Footer />
            </div>
        </div>

    );
}

export default Home;