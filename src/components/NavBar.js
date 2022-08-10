import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../style';

const Simg = styled.img`
    width: 32px;
    height: 32px;
`;

const Button = styled.button`
    border-width: 0;
    border-radius: 5px;
    width: 80px;
    background-color: ${colors.secondary};
    :hover {
        background-color: ${colors.secondaryDark};
        border-color: ${colors.secondaryDark};
    }
`;

const SLink = styled.a`
    color: ${colors.primary};
    font-weight: 400;
    margin-right: 20px;
    margin-top: 6px;
    text-decoration: none;
    :hover {
        color: ${colors.secondary};
    }
`;

const SNavbar = styled(Navbar)`
    background-color: ${colors.canvas};
    :after {
        content:"";
        position:absolute;
        width:100%;
        height: 100%;
        bottom: 0;
        z-index:-1;
        box-shadow: 0px 0px 25px ${colors.primary};
    }
`;

export default function NavBar() {
    return (
        <SNavbar sticky='top'>
            <Container>
                <Navbar.Brand href="#home" style={{ color: colors.secondary }}>
                    <Simg src={require('../assets/logo.png')}></Simg>
                    {' '}Token Club
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <SLink href="#">Home</SLink>
                        <SLink href="#features">Features</SLink>
                        {/* <SLink href="#pricing">Pricing</SLink>
                        <SLink href="#blog">Blog</SLink> */}
                        <Button variant='light'>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </SNavbar>
    )
}