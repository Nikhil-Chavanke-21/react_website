import { Card, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { colors } from '../style';
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft } from 'react-icons/fa';

const Review = styled(Card)`
    padding: 20px;
    width: 270px;
    margin: 20px auto;
    background-color: ${colors.canvasLight};
    border-color: ${colors.canvasLight};
`;

const Description = styled.p`
    color: ${colors.primaryLight};
    font-size: 20px;
    font-weight: 400;
`;

const Profile = styled.div`
    height: 50px;
    width: 50px;
    background-image: url("https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord.jpg");
    border-radius: 50%;
    background-size: contain;
`;

const Name = styled.p`
    color: ${colors.secondary};
    margin: 0;
`;

const Designation = styled.p`
    color: ${colors.secondaryDark};
    margin: 0;
`;

const Quote = styled(FaQuoteLeft)`
    font-size: 40px;
    margin-bottom: 10px;
`;

export default function Slider2() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 2,
            partialVisibilityGutter: 40,
        },
    };
    return (
        <div style={{ margin: '100px' }}>
            <Carousel
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                transitionDuration={500}
                removeArrowOnDeviceType={["desktop"]}
                deviceType={"desktop"}
                centerMode={true}
            >
                <Review>
                    <Quote></Quote>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Row>
                        <Col lg={3}>
                            <Profile></Profile>
                        </Col>
                        <Col>
                            <Name>Nikhil Chavanke</Name>
                            <Designation>Software Developer</Designation>
                        </Col>
                    </Row>
                </Review>
                <Review>
                    <Quote></Quote>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Row>
                        <Col lg={3}>
                            <Profile></Profile>
                        </Col>
                        <Col>
                            <Name>Nikhil Chavanke</Name>
                            <Designation>Software Developer</Designation>
                        </Col>
                    </Row>
                </Review>
                <Review>
                    <Quote></Quote>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Row>
                        <Col lg={3}>
                            <Profile></Profile>
                        </Col>
                        <Col>
                            <Name>Nikhil Chavanke</Name>
                            <Designation>Software Developer</Designation>
                        </Col>
                    </Row>
                </Review>
                <Review>
                    <Quote></Quote>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
                    <Row>
                        <Col lg={3}>
                            <Profile></Profile>
                        </Col>
                        <Col>
                            <Name>Nikhil Chavanke</Name>
                            <Designation>Software Developer</Designation>
                        </Col>
                    </Row>
                </Review>
            </Carousel>
        </div>
    )
}