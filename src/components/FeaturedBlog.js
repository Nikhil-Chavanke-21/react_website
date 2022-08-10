import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';
import { BsArrowRight } from 'react-icons/bs';

const Blog = styled(Card)`
    transition-duration: 0.25s;
    padding: 20px;
    width: 300px;
    background-color: ${colors.canvas};
    border-color: ${colors.canvas};
    margin-top: 50px;
    :hover {
        transform: scale(1.15);
        background-color: ${colors.canvasLight};
    }
`;

const SRow = styled(Row)`
    background-color: ${colors.canvas};
    margin-left: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
`;

const Description = styled.p`
    color: ${colors.secondary};
    margin: 10px;
    font-size: 25px;
    font-weight: 400;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${colors.primary};
    font-size: 12px;
`;

export default function FeaturedBlog() {
    return (
        <SRow>
            <Col>
                <Blog>
                    <img src={require('../assets/yoann-siloine-dyaxQ-aoGWY-unsplash.jpg')}></img>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed…</Description>
                    <Link>3 days ago by Jeff{' '}<BsArrowRight></BsArrowRight></Link>
                </Blog>
            </Col>
            <Col>
                <Blog>
                    <img src={require('../assets/fabrice-villard-Jrl_UQcZqOc-unsplash.jpg')}></img>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed…</Description>
                    <Link>3 days ago by Jeff{' '}<BsArrowRight></BsArrowRight></Link>
                </Blog>
            </Col>
            <Col>
                <Blog>
                    <img src={require('../assets/florian-klauer-mk7D-4UCfmg-unsplash.jpg')}></img>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed…</Description>
                    <Link>3 days ago by Jeff{' '}<BsArrowRight></BsArrowRight></Link>
                </Blog>
            </Col>
        </SRow>
    )
}
