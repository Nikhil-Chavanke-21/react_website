import styled from 'styled-components';
import { colors } from '../style';
import { BsArrowRight } from 'react-icons/bs';

const Title = styled.p`
    color: ${colors.secondary};
    font-size: 45px;
    font-weight: bold;
`;

const Description = styled.p`
    color: ${colors.primaryLight};
    font-size: 25px;
`;

const Div = styled.div`
    margin: 100px;
`;

const Image = styled.div`
    width: 600px;
    height: 400px;
    background-image: url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg');
    background-size: contain;
    background-repeat: no-repeat;
`;

const Button = styled.button`
    border-width: 0;
    height: 40px;
    width: 120px;
    background-color: ${colors.secondary};
    color: ${colors.canvas};
    font-size: 20px;
    :hover {
        background-color: transparent;
        color: ${colors.secondary};
    }
`;

export default function Blog() {
    return (
        <Div id='blog'>
            <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Description>
            <Image>
                <Button>Visit{' '}<BsArrowRight></BsArrowRight></Button>
            </Image>
        </Div>
    )
}
