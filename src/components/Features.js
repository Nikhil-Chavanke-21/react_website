import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';
import { MdOutlineStorage } from 'react-icons/md';
import { BiChip } from 'react-icons/bi';
import { FiDatabase } from 'react-icons/fi';

const Feature = styled(Card)`
    margin: 0 auto;
    width: 300px;
    background-color: ${colors.canvas};
    border-color: ${colors.canvas};
    margin-top: 50px;
`;

const SRow = styled(Row)`
    background-color: ${colors.canvas};
    margin-left: 100px;
    margin-right: 100px;
    height: 400px;
`;

const Title = styled.p`
    color: ${colors.secondary};
    font-weight: 400;
    font-size: 30px;
`;

const Description = styled.p`
    color: ${colors.primaryLight};
    font-weight: 400;
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 5px;
    height: 30px;
    width: 80px;
    background-color: ${colors.secondaryDark};
    color: ${colors.secondary};
    transition-duration: 0.25s;
    :hover {
        transform: scale(1.2);
    }
`;

const Circle = styled.div`
    height: 75px;
    width: 75px;
    margin-left: 30px;
    background-color: ${colors.secondaryDark};
    border-radius: 50%;
    font-size: 30px;
    color: ${colors.secondary};
`;


export default function Features() {
  return (
    <SRow id="features">
        <Col>
            <Feature>
                  <Circle className='d-flex align-items-center justify-content-center'>
                      <MdOutlineStorage />
                  </Circle>
                  <Card.Body>
                      <Title>Storage</Title>
                      <Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Description>
                      <Button>Read</Button>
                  </Card.Body>
            </Feature>
        </Col>
        <Col>
            <Feature>
                <Circle className='d-flex align-items-center justify-content-center'  >
                    <BiChip />
                </Circle>
                <Card.Body>
                    <Title>Compute</Title>
                      <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Description>
                    <Button>Read</Button>
                </Card.Body>
            </Feature>
        </Col>
        <Col>
            <Feature>
                <Circle className='d-flex align-items-center justify-content-center'  >
                    <FiDatabase />
                </Circle>
                <Card.Body>
                    <Title>Database</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Description>
                    <Button>Read</Button>
                </Card.Body>
            </Feature>
        </Col>
    </SRow>
  )
}
