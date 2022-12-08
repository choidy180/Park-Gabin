import { NextPage } from 'next';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { isThemeAtom } from 'recoil/theme';
import styled from 'styled-components';
import "aos/dist/aos.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home:NextPage = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    console.log(isTheme);
    React.useEffect(()=> {
        Aos.init({
            duration: 1000,
        });
    },[]);
    return(
        <Container>
            {/* <h1 className='title'>PARK GABIN</h1> */}
            <Top data-aos="zoom-in">
                <img className='main-image' src='/images/KakaoTalk_Photo_2022-10-13-18-29-32.png' alt="" />
                <div className="dark-back"/>
                <div className="text-content" data-aos="fade-up">
                    <h4>UN ICONICO MELTING POT</h4>
                    <h2>PROJECT 1004</h2>
                    <button style={{backgroundColor: '#6667AB'}}>MORE VIEW</button>
                </div>
            </Top>
            <Center>
                {/* <h2>PROJECT</h2> */}
                <div className='box-1'>
                    <div className='left' data-aos="fade-right">
                        <div className='image-box'>
                            <img src="/images/82ac209f4c0e4fa98ac0c408c959d768_20221206154545.jpg" alt="" />
                        </div>
                        <h2 data-aos="fade-up">Teixeira<br/>Design Studio</h2>
                    </div>
                    <div className='right' data-aos="fade-left">
                        <img src="/images/mountains-g935b2e2e4_1920.jpg" alt="" />
                    </div>
                </div>
            </Center>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 60px 0px;
    min-height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1{
        margin-top: 18px;
        font-size: 2.4em;
        font-weight: bold;
        font-family: 'GmarketSansMedium';
    }
    /* scroll-snap-type: y mandatory; */
`
const Top = styled.div`
    width: 100%;
    max-height: calc(100vh - 60px);
    /* margin-top: 24px; */
    overflow: hidden;
    cursor: pointer;
    .main-image{
        width: 100%;
        height: 100%;
        transition: all .2s ease-in-out;
    }
    .dark-back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.3;
        transition: all .2s ease-in-out;
    }
    .text-content{
        position: absolute;
        top: 55%;
        left: 20%;
        color: #FFFFFF;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h4{
            font-size: 18px;
        }
        h2{
            margin-top: 12px;
            font-size: 3.8em;
            font-weight: 300;
        }
        button{
            font-size: 20px;
            padding: 8px 18px;
            margin-top: 24px;
            transition: all ease-in-out .3s;
            /* background-color: #FFFFFF; */
            color: #FFFFFF;
            font-weight: 500;
            /* border-radius: 8px; */
        }
    }
    :hover{
        .dark-back{
            opacity: 0.4;
        }
        img{
            scale: 1.03;
        }
        .text-content{
            display: flex;
        }
    }
`
const Center = styled.div`
    margin-top: 4vh;
    width: 100%;
    overflow: hidden;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 1.8em;
    }
    .box-1{
        width: 100%;
        margin-top: 24px;
        height: 94vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 32px;
        div{
            overflow: hidden;
        }
        div.left {
            width: 33vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .image-box{
                width: 100%;
                height: 16.5vw;
                background-color: red;
                img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all ease-in-out .2s;
                    cursor: pointer;
                }
            }
            
            h2{
                position: absolute;
                left: 20px;
                bottom: 12px;
                font-size: 5em;
            }
            :hover{
                img {
                    scale: 1.05;
                }
            }
        }
        div.right {
            width: 65vw;
            height: 100%;
            img{
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all ease-in-out .2s;
                cursor: pointer;
            }
            :hover{
                img {
                    scale: 1.05;
                }
            }
        }
    }
`

export default Home;