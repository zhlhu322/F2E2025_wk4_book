import { Helmet } from 'react-helmet';
import Bookcarousel from '../components/BookCarousel.jsx';
import Category from '../components/Category.jsx';
import Footer from '../components/footer.jsx';
import CartIcon from '../components/CartIcon';
import { useRef } from 'react';

function Home() {
    const categoryRef = useRef(null);

    const scrollToCategory = () => {
        categoryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Helmet>
                <title>322bookstore</title>
            </Helmet>
            <div className="home-container">
                <header className="header relative">
                    <div className='productpage-header-container w-[800px] mx-auto flex justify-between items-center'>
                        <text className="instrument-serif-regular header-text">Welcome to the 322bookstore</text>
                        <hr className="header-line" />
                        <CartIcon position="center" />
                    </div>
                    
                </header>
                <div className="carousel">
                    <Bookcarousel />
                </div>
                
                {/* 向下箭頭 */}
                <div className="scroll-arrow-container" onClick={scrollToCategory}>
                    <div className="scroll-arrow"></div>
                </div>
            </div>

            <div ref={categoryRef}>
                <Category />
            </div>

            <div className='footer instrument-serif-regular'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;