import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';
import { ImCheckmark, ImCross } from 'react-icons/im';

const PricingSection = styled(Row)`
    margin-left: 50px;
    margin-right: 50px;
`;

const Free = styled(Card)`
    padding: 20px;
    width: 250px;
    background-color: ${colors.canvasLight};
    border-color: ${colors.canvasLight};
    margin-top: 50px;
    color: ${colors.secondary};
`;

const Pro = styled(Card)`
    padding: 20px;
    width: 250px;
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
    margin-top: 50px;
    color: ${colors.canvas};
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

const Head = styled(Row)`
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 20px;
`;

const Companies = styled(Row)`
    margin: 30px;
`;

const Perks = styled.p`
    color: ${colors.secondaryDark};
    margin: 0;
`;

const Tick = styled(ImCheckmark)`
    font-size: 11px;
    color: ${colors.primary};
`;

const Cross = styled(ImCross)`
    font-size: 10px;
    color: ${colors.primary};
`;

const Plan = styled.p`
    color: ${colors.primary};
    font-weight: 700;
    font-size: 20px;
`;

const Button1 = styled.button`
    border-width: 0;
    border-radius: 5px;
    height: 35px;
    width: 180px;
    background-color: ${colors.canvas};
    color: ${colors.secondary};
    margin-top: 15px;
    align-self: center;
    transition-duration: 0.25s;
    :hover {
        transform: scale(1.15);
    }
`;

const Button2 = styled.button`
    border-width: 0;
    border-radius: 5px;
    height: 35px;
    width: 180px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    margin-top: 15px;
    align-self: center;
    transition-duration: 0.25s;
    :hover {
        transform: scale(1.15);
    }
`;

const Dollar = styled.p`
    font-size: 20px;
`;

const Price = styled.p`
    font-size: 60px;
    display: inline;
`;

const Time = styled.p`
    font-size: 15px;
    display: inline;
`;

const Company = styled.p`
    color: ${colors.canvasLight};
    font-size: 20px;
    font-weight: bold;
`;

export default function Products() {
    return (
        <PricingSection id="pricing">
            <Col lg={6}>
                <Title>Lorem Pricing</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
                <Head>Companies trust us.</Head>
                <Companies>
                    <Col>
                        <Company>facebook</Company>
                    </Col>
                    <Col>
                        <Company>Goolge</Company>
                    </Col>
                    <Col>
                        <Company>Microsoft</Company>
                    </Col>
                    <Col>
                        <Company>Apple</Company>
                    </Col>
                </Companies>
            </Col>
            <Col lg={3}>
                <Free>
                    <Plan>Free</Plan>
                    <Dollar>$<Price>0<Time>/mo</Time></Price></Dollar>
                    <Perks><Tick></Tick> 1 user</Perks>
                    <Perks><Tick></Tick> 100 visitors/month</Perks>
                    <Perks><Tick></Tick> 1 website</Perks>
                    <Perks><Cross></Cross> 24x7 support</Perks>
                    <Perks><Cross></Cross> third party integration</Perks>
                    <Button1>SIGN UP</Button1>
                </Free>
            </Col>
            <Col lg={3}>
                <Pro>
                    <Plan>Pro</Plan>
                    <Dollar>$<Price>99<Time>/mo</Time></Price></Dollar>
                    <Perks><Tick></Tick> 1 user</Perks>
                    <Perks><Tick></Tick> 100 visitors/month</Perks>
                    <Perks><Tick></Tick> 1 website</Perks>
                    <Perks><Tick></Tick> 24x7 support</Perks>
                    <Perks><Tick></Tick> third party integration</Perks>
                    <Button2>SIGN UP</Button2>
                </Pro>
            </Col>
        </PricingSection>
    )
}
