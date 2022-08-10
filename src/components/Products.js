import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';

const SProducts = styled(Row)`
    height: 300px;
    margin-left: 200px;
    margin-right: 200px;
`;

const Product = styled(Card)`
    transition-duration: 0.5s;
    padding: 20px;
    width: 400px;
    background-color: ${colors.canvasLight};
    border-color: ${colors.canvasLight};
    margin-top: 50px;
    :hover {
      transform: scale(1.15);
    }
`;

const Text = styled.p`
    color: ${colors.secondaryDark};
    display: inline;
`;

const Bold = styled.b`
    color: ${colors.secondary};
    display: inline;
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 5px;
    height: 30px;
    width: 80px;
    background-color: ${colors.canvas};
    color: ${colors.secondary};
`;

const Label = styled.div`
    height: 30px;
    width: fit-content;
    padding: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
`;

export default function Products() {
  return (
    <SProducts>
      <Col>
        <Product>
          <Label>INDIVISUAL</Label>
          <Text>
            <Bold>Lorem</Bold> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button>Read</Button>
        </Product>
      </Col>
      <Col>
        <Product>
          <Label>TEAM</Label>
          <Text>
            <Bold>Lorem</Bold> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button>Read</Button>
        </Product>
      </Col>
    </SProducts>
  )
}
