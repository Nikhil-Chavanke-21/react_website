import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';

const Subs = styled(Card)`
    padding-left: 60px;
    padding-right: 60px;
    width: 1000px;
    margin: 70px auto;
    background-color: ${colors.canvasLight};
    border-color: ${colors.canvasLight};
    margin-top: 50px;
`;

const Title = styled.p`
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 35px;
`;

const Description = styled.p`
    color: ${colors.secondaryDark};
    font-size: 17px;
    font-weight: 400;
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 0 5px 5px 0;
    font-size: 13px;
    height: 45px;
    width: 100px;
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

export default function Footer() {
    return (
        <Subs>
            <Row className='d-flex align-items-center justify-content-center' style={{ height: '200px' }}>
                <Col>
                    <Title>Try Hook Today</Title>
                    <Description>
                        Get first month free for commercial use.
                        <br></br>
                        Forever free for open source products.
                    </Description>
                </Col>
                <Col>
                    <div className="btn-group">
                        <Input type="text" id="name" name="name" placeholder="Email Address"></Input>
                        <Button>Get Started</Button>
                    </div>
                </Col>
            </Row>
        </Subs>
    )
}