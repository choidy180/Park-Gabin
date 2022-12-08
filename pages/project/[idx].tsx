import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isThemeAtom } from "recoil/theme";
import styled from "styled-components";

const Project = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    useEffect(() => {
        Aos.init({
            duration : 1000
        });
    });
    return (
        <Container>
            <Top>
                <Image
                    src={'/images/nature-g9.jpg'}
                    layout='fill'
                    objectFit='cover'
                    alt='back-image'
                />
                <div className="dark-back"/>
                <div className="text-content" data-aos="fade-up">
                    <h4>UN ICONICO MELTING POT</h4>
                    <h2>PROJECT 1004</h2>
                    <button style={{backgroundColor: isTheme}}>MORE VIEW</button>
                </div>
            </Top>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
`

const Top = styled.div`
    width: 100%;
    height: 90vh;
    .dark-back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.6;
    }
    .text-content{
        position: absolute;
        top: 55%;
        left: 20%;
        color: #FFFFFF;
        display: flex;
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
            /* border-radius: 8px; */
        }
    }
`

export default Project;