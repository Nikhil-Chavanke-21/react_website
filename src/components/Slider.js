import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { colors } from '../style';

const SCarousel = styled(Carousel)`
    height: 400px;
    background-color: ${colors.canvasLight};
`;

const Title = styled.p`
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 45px;
`;

const Description = styled.p`
    color: ${colors.secondaryDark};
    font-size: 25px;
    font-weight: 400;
`;

const Content = styled.div`
    margin-top: 130px;
    vertical-align: center;
    text-align: center;
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    :hover {
        background-color: ${colors.primaryDark};
    }
`;

export default function Slider() {
  return (
        <SCarousel
            interval={1500}
            indicators={false}
            prevIcon={<BsArrowLeftCircle style={{ fontSize: '30px' }}/>}
            nextIcon={<BsArrowRightCircle style={{ fontSize: '30px' }}/>}
        >
            <Carousel.Item>
                <Content>
                    <Title>Lorem ipsum dolor sit amet, consectetur</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Button>BUY NOW</Button>
                </Content>
            </Carousel.Item>
            <Carousel.Item>
                <Content>
                    <Title>Lorem ipsum dolor sit amet, consectetur</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Button>BUY NOW</Button>
                </Content>
            </Carousel.Item>
            <Carousel.Item>
                <Content>
                    <Title>Lorem ipsum dolor sit amet, consectetur</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Button>BUY NOW</Button>
                </Content>
            </Carousel.Item>
      </SCarousel>
  )
}
