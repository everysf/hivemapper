import React, { Component } from "react";
import styled from 'styled-components';


const Wrapper = styled.div`

    transition: 1s ease;
    min-height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 50;
    height: 55px;
    opacity:  ${props => (props.hide === true ? "1" : "0")}
    background-color: rgba(0,0,0,.5);
    display: ${props => (props.hide === true ? "flex" : "none")};

    .flex {
        max-width: 775px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
    }

    @media (min-width: 990px) {
        display: none;
    }

    .linkBox {
        right: -30px;
    }
    
}

`

const Links = styled.div`

    position: fixed;
    right: 40;
    color: white;
    background-color: black;
    width: 450px;
    min-height: 100vh;
    padding: 70px 10px 50px 0px;
    text-align: left;

    @media (max-width: 775px) {
        width: 70%;
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 24px;
        }
    }

    h1 {
        font-size: 36px;
        font-weight: 700;
        padding-bottom: 25px;
    }

    h2 {
        font-size: 28px;
        font-weight: 700;
        padding-bottom: 25px;
    }

    .el {
        margin-left: 60px;
    }

`

const Divider = styled.div`

    width: 50px;
    height: 2px;
    background-color: white;
    margin-top: 15px;
    margin-bottom: 40px;

`

const IconMobile = styled.div`

    background-image: url(https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png);
    height: 30px;
    width: 135px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 40px;

`

const MobileNavSlide = (props) => {
    return (
        <Wrapper hide={props.hidden}>
            <Links className="linkBox">
                <h1 className="el">Premium</h1>
                <h1 className="el">Download</h1>
                <Divider className="el" />
                <h2 className="el">Sign Up</h2>
                <h2 className="el">Log In</h2>
                <IconMobile className="el" />
            </Links>

        </Wrapper>
    );
}

export default MobileNavSlide;
