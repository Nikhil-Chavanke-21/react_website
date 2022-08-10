import styled from 'styled-components';
import { colors } from '../style';


const Text = styled.p`
    margin-left: 200px;
    color: ${colors.secondary};
    font-size: 85px;
    font-weight: bold;
`;

const Ul = styled.p`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
    display: inline;
`;


export default function BigText() {
    return (
        <Text>Lorem ipsum dolor sit amet, <Ul>consectetur</Ul> adipiscing elit, sed do eiusmod tempor</Text>
    )
}
