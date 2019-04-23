import React, { Component } from 'react';
import styled from 'styled-components';
import MobileNavSlide from './MobileNav';
import HamburgerMenu from "react-hamburger-menu";
import anime from 'animejs';

const Wrapper = styled.div`

    background-color: #FECDD2;
    min-height: 100vh;
    min-width: 100vw;
    
    .burger {
        margin: 10px;
    }
`

const Navigation = styled.div`

    width: 1175px;
    display: flex;
    margin: 0 auto;
    z-index: 100;
    justify-content: space-between;

    @media (max-width: 1200px) {
        width: 950px;
    }

    @media (max-width: 990px) {
        display: none;
    }

`

const Divider = styled.div`

    width: 1px;
    height: 15px;
    background-color: black;
    margin: 0 10px;

`

const Icon = styled.div`

    background-image: ${props => (props.mobile === true ? "url(https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png)" : "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/spotify-logo.svg)")};
    height: ${props => (props.mobile === true ? "30px" : "45px")};
    width: 135px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: ${props => (props.mobile === true ? "15px 20px" : "20px")};
    opacity: ${props => (props.hide === true ? ".3" : "1")}
`

const Links = styled.div`

    display: flex;
    align-items:center;

    a {
        font-size: 16px;
        font-weight: 700;
        padding: 28px 17px;
        text-decoration: none;
        color: black;
    }

    a:hover {
        color: #EF37A5;
    }
`

const BodyContainer = styled.div`

    padding-top: 50px;
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
    // border: 1px solid red;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media (max-width: 990px) {
        flex-direction: column-reverse;
    }

`

const TextContainer = styled.div`

    width: 250px;
    height: 500px;
    text-align: left;
    display: flex;
    align-items: center;
    padding: 5px 40px 5px 5px;

    h2 {
        font-size: 25px;
        line-height: 30px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 20px;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 3px;
        color: black;
        transiion: .2s ease;
    }

    a:hover {
        opacity: .7
    }

    @media (max-width: 990px) {
        width: 500px;
        padding: 0;
        margin: 40px auto;
        height: auto;
        h2, p, a {
            padding: 0 20px;
        }
    }

    @media (max-width: 765px) {
        width: 100%;
        height: auto;

    }

`

const RecordContainer = styled.div`

    // background-color: blue;
    height: 550px;
    width: 620px;
    position: relative;
    margin: 20px 0 0 40px;
    overflow: hidden;

    @media (max-width: 1200px) {
        width: 500px;
        margin: 0;
    }

    @media (max-width: 990px) {
        width: 350px;
        height: 350px;
        margin: 0 auto;
    }

    @media (max-width: 765px) {
        margin: 30px auto 0;
        width: 275px;
        height: 275px;
    }

`

const RecordArm = styled.div`
    position: relative;
    z-index: 20;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/record-arm.svg);
    height: 100%;
    width: 100%;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;

`

const Record = styled.div`

    position: absolute;
    z-index: 10;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3130484/record.svg);
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    top: 0;
    transition: 1s ease;
    animation: RecordSpin 2s forwards;

    @media (max-width: 1200px) {
        margin: 0;
    }

    @keyframes RecordSpin{
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(240deg)
        }
    }

`

const MobileNav = styled.div`

    height: 55px;
    background-color: black;
    max-width: 100%;
    width: 100%;
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;

    .flex {
        max-width: 775px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
    }

    @media (max-width: 990px) {
        display: flex;
    }

`

const MobileToggle = styled.div`

    height: 20px;
    width: 20px;
    background-color: white;
    margin: 20px;

`

class ErrorPage extends Component {

    state = {
        mobileNavHidden: false,
        number: "21",
        open: null
    }

    componentDidMount() {

        this.setState({ number: "22", mobileNavHidden: false })


    }


    handleClick() {
        this.setState({
            mobileNavHidden: !this.state.mobileNavHidden
        })

        anime({
            targets: '.linkBox .el',
            marginLeft: "40px",
            delay: anime.stagger(10),
        });

        anime({
        targets: '.linkBox',
        right: "0",
        })
    }


    render() {
        return (
            <Wrapper>
                <Navigation>
                    <Icon hidden={this.state.mobileNavHidden} />
                    <Links>
                        <a href="#">Premium</a>
                        <a href="#">Help</a>
                        <a href="#">Download</a>
                        <Divider />
                        <a href="#">Sign Up</a>
                        <a href="#">Login</a>
                    </Links>
                </Navigation>
                <MobileNavSlide hidden={this.state.mobileNavHidden} className="mobileSlide"/>
                <MobileNav hidden={this.state.mobileNavHidden} >
                    <div className="flex">
                        <Icon mobile={true} hide={this.state.mobileNavHidden}/>
                        <div  className="burger">                        <HamburgerMenu
                            style={{marginRight: "20px"}}
                            isOpen={this.state.mobileNavHidden}
                            menuClicked={this.handleClick.bind(this)}
                            width={22}
                            height={15}
                            strokeWidth={3}
                            rotate={0}
                            color='white'
                            borderRadius={0}
                            animationDuration={0.2}
                        /></div>

                        {/* <MobileToggle onClick={this.toggleNavigationSlide}/> */}
                    </div>
                </MobileNav>
                <BodyContainer>
                    <TextContainer>
                        <div>
                            <h2>404s and heartbreaks</h2>
                            <p>We couldn’t find the page you were looking for. Maybe our FAQ or Community can help?</p>
                            <a href="#">GO BACK</a>
                        </div>
                    </TextContainer>
                    <RecordContainer>
                        <RecordArm />
                        <Record />
                    </RecordContainer>
                </BodyContainer>
            </Wrapper>
        )
    }

}

export default ErrorPage