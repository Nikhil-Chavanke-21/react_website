import { Card, Row, Col } from 'react-bootstrap';
import { SiBootstrap, SiCmake, SiCss3, SiDjango, SiExpress, SiGnubash, SiHeroku, SiHtml5, SiNetlify, SiOpenssl, SiPython, SiReact, SiSqlite } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import styled from 'styled-components';
import { colors } from '../style';

const Project = styled(Card)`
    transition-duration: 0.25s;
    width: 300px;
    background-color: ${colors.canvas};
    border-color: ${colors.canvas};
    margin: 50px;
    :hover {
        transform: scale(1.1);
    }
`;

const Description = styled.p`
    color: ${colors.secondaryDark};
    margin-left: 10px;
    margin-right: 10px;
    font-size: 15px;
`;

const Stack = styled.div`
    display: inline;
    color: ${colors.primary};
    margin-left: 5px;
    font-size: 20px;
    svg {
      margin: 5px;
    }
`;

const Head = styled.p`
    color: ${colors.secondary};
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
`;

export default function Projects() {
  return (
    <Row>
      <Col>
        <Project>
          <Card.Img variant="top" src={require('../assets/dse.png')} />
          <Head>Design System Extractor</Head>
          <Description>
            Implemented a cloud based file system, with Synchronization and Encryption-Decryption Systems using Django and its REST API Framework
          </Description>
          <Stack>
            <SiBootstrap></SiBootstrap>
            <SiHtml5></SiHtml5>
            <SiCss3></SiCss3>
            <SiReact></SiReact>
            <IoLogoNodejs></IoLogoNodejs>
            <SiNetlify></SiNetlify>
            <SiHeroku></SiHeroku>
            <SiExpress></SiExpress>
          </Stack>
        </Project>
      </Col>
      <Col>
        <Project>
          <Card.Img variant="top" src={require('../assets/spc.png')}/>
          <Head>Secured Personal Cloud</Head>
          <Description>
            Implemented a cloud based file system, with Synchronization and Encryption-Decryption Systems using Django and its REST API Framework
          </Description>
          <Stack>
            <SiDjango></SiDjango>
            <SiPython></SiPython>
            <SiSqlite></SiSqlite>
            <SiGnubash></SiGnubash>
            <SiBootstrap></SiBootstrap>
            <SiHtml5></SiHtml5>
            <SiCmake></SiCmake>
            <SiOpenssl></SiOpenssl>
          </Stack>
        </Project>
      </Col>
      <Col>
        <Project>
          <Card.Img variant="top" src={require('../assets/dse.png')} />
          <Head>Design System Extractor</Head>
          <Description>
            Implemented a cloud based file system, with Synchronization and Encryption-Decryption Systems using Django and its REST API Framework
          </Description>
          <Stack>
            <SiBootstrap></SiBootstrap>
            <SiHtml5></SiHtml5>
            <SiCss3></SiCss3>
            <SiReact></SiReact>
            <IoLogoNodejs></IoLogoNodejs>
            <SiNetlify></SiNetlify>
            <SiHeroku></SiHeroku>
            <SiExpress></SiExpress>
          </Stack>
        </Project>
      </Col>
    </Row>
  )
}