import {Button} from "@material-ui/core";
import Head from 'next/head';
import styled from "styled-components";
import {auth, provider} from "../firebase";

 
function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginInContainer>
                <logo src="https://www.stickpng.com/img/icons-logos-emojis/tech-companies/whatsapp-logo" alt="logo picture" />
                <Button onClick={signIn} variant="outlined">Signin With Google</Button>
            </LoginInContainer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginInContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

// const Button = styled.Button`
//     background-color: #DB4437;

// `;