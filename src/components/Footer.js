import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Section = styled(Col)`
    padding-left: 100px;
`;

const Detail = styled.p`
    color: ${colors.secondaryDark};
    font-size: 12px;
    margin-left: 30px;
    text-align: center;
`;

const Info = styled.a`
    color: ${colors.secondaryDark};
    display: flex;
    text-decoration: none;
    text-align: center;
    align-self: center;
    box-align: center;
    :hover {
        color: ${colors.secondaryDark};
    }
`;

const SRow = styled(Row)`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${colors.canvasLight};
    color: ${colors.secondary};
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 0 5px 5px 0;
    font-size: 13px;
    height: 45px;
    width: 80px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
`;

const Input = styled.input`
    color: ${colors.secondary};
    border-radius: 5px 0 0 5px;
    background-color: ${colors.secondaryDark};
    border-width: 0;
    :focus {
        border: 1px solid ${colors.secondaryDark};
        box-shadow: 0 0 3px ${colors.secondaryD};
        outline-offset: 0px;
        outline: none;
    }
    ::placeholder {
        color: ${colors.secondary};
        opacity: 0.75;
        padding-left: 20px;
        font-size: 13px;
    }
`;

const Simg = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 45px;
    margin-bottom: 20px;
`;

const Circle = styled.div`
    height: 50px;
    width: 50px;
    margin-left: 30px;
    background-color: ${colors.primary};
    border-radius: 50%;
    font-size: 20px;
    color: ${colors.secondary};
    transition-duration: 0.25s;
    :hover {
        transform: scale(1.15);
    }
`;

const Media = styled(Row)`
    padding-top: 30px;
    padding-right: 120px;
`;

export default function Footer() {
    return (
        <SRow>
            <Col lg={2}>
                <Simg src={require('../assets/logo.png')}></Simg>
                {' '}Token Club
                <Detail>
                    Soluta voluptate et optio. Eos quasi impedit sapiente aliquid eius eligendi at. Necessitatibus magni et sed quod quas minima.
                    <br></br>
                    Soluta voluptate et optio. Eos quasi impedit sapiente aliquid eius eligendi at. Necessitatibus magni et sed quod quas minima.
                </Detail>
            </Col>
            <Section lg={2}>
                <p>Company</p>
                <Info href='#'>About Us</Info>
                <Info href='#'>Jobs</Info>
                <Info href='#'>Contact</Info>
                <Info href='#'>Media</Info>
            </Section>
            <Section lg={2}>
                <p>Product</p>
                <Info href='#'>About Us</Info>
                <Info href='#'>Jobs</Info>
                <Info href='#'>Contact</Info>
                <Info href='#'>Media</Info>
            </Section >
            <Section lg={2}>
                <p>Support</p>
                <Info href='#'>About Us</Info>
                <Info href='#'>Jobs</Info>
                <Info href='#'>Contact</Info>
                <Info href='#'>Media</Info>
            </Section>
            <Col lg={4}>
                <div className="btn-group">
                    <Input type="text" id="name" name="name" placeholder="Email Address"></Input>
                    <Button>Start</Button>
                </div>
                <Media>
                    <Col>
                        <Circle className='d-flex align-items-center justify-content-center'>
                            <FiTwitter />
                        </Circle>
                    </Col>
                    <Col>
                        <Circle className='d-flex align-items-center justify-content-center'>
                            <FiFacebook />
                        </Circle>
                    </Col>
                    <Col>
                        <Circle className='d-flex align-items-center justify-content-center'>
                            <FiInstagram />
                        </Circle>
                    </Col>
                </Media>
            </Col>
        </SRow>
    )
}