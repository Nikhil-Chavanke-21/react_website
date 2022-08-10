import styled from 'styled-components';
import { colors } from '../style';


const Head = styled.p`
    color: ${colors.secondary};
    font-size: 85px;
    line-height: 100px;
    font-weight: bold;
`;

const Div = styled.div`
    padding-left: 100px;
`;

const Lower = styled.p`
    font-size: 13px;
    margin: 7px;
    color: ${colors.secondaryDark};
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 0 3px 3px 0;
    font-size: 13px;
    height: 45px;
    width: 150px;
    background-color: ${colors.secondaryDark};
    color: ${colors.secondary};
`;

const Input = styled.input`
    color: ${colors.secondary};
    border-radius: 3px 0 0 3px;
    background-color: ${colors.canvasLight};
    border-width: 0;
    width: 300px;
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

const Tag = styled.div`
    height: 40px;
    width: 350px;
    margin-bottom: 30px;
    margin-top: 170px;
    background-color: ${colors.primary};
    border-radius: 20px;
    font-size: 13px;
    color: ${colors.secondary};
`;

const Join = styled.button`
    border-width: 0;
    border-radius: 15px;
    margin: 5px;
    font-size: 13px;
    height: 30px;
    width: 100px;
    background-color: ${colors.darker};
    background-position: top;
    color: ${colors.secondary};
`;

export default function Hero() {
    return (
        <Div>
            <Tag>
                <Join>Join Meet Up</Join>
                We are coming to Singapore. Learn...
            </Tag>
            <Head>Serve Your<br></br>Website Fast</Head>
            <div className="btn-group">
                <Input type="text" id="name" name="name" placeholder="Email Address"></Input>
                <Button>Get Started</Button>
            </div>
            <Lower>No credit card required</Lower>
        </Div>
    )
}
