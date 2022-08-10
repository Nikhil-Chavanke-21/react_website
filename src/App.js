import { colors } from './style';
import { FiDownload } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Features from './components/Features';
import styled from 'styled-components';
import Slider from './components/Slider';
import BigText from './components/BigText';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Slider2 from './components/Slider2';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Blog from './components/Blog';
import FeaturedBlog from './components/FeaturedBlog';
import Hero from './components/Hero';
import Projects from './components/Projects';

const Div = styled.body`
    background-color: ${colors.canvas};
`;

const Clamp = styled.div`
    float: right;
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 7px 0 0 7px;
    height: 40px;
    width: 50px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    position: fixed;
    bottom: 200px;
    right: 0;
    z-index: 2;
`;

function App() {
    return (
        <Div>
            <Clamp>
                <Button><FiDownload></FiDownload></Button>
            </Clamp>
            <NavBar></NavBar>
            <Hero></Hero>
            <Features></Features>
            <Slider></Slider>
            <BigText></BigText>
            <Products></Products>
            <Pricing></Pricing>
            <Slider2></Slider2>
            <Blog></Blog>
            <FeaturedBlog></FeaturedBlog>
            <Projects></Projects>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </Div>
    );
}

export default App;


// learn responsiveness
// learn redux
// learn api integrations
