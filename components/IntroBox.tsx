import { useRecoilValue } from "recoil";
import { isThemeAtom } from "recoil/theme";
import styled from "styled-components";
import { IntroContentBox } from "./IntroContent";

export const IntroBox = () => {
    const isTheme = useRecoilValue(isThemeAtom);    
    return (
        <Wrapper>
            <NavigationBox color={isTheme}>
                <Navigation>모두보기</Navigation>
                <Navigation>제품디자인</Navigation>
                <Navigation>광고디자인</Navigation>
                <Navigation>시각디자인</Navigation>
                <Navigation>상업디자인</Navigation>
            </NavigationBox>
            <ContentBox>
                <IntroContentBox data-aos="zoom-in-up"/>
                <IntroContentBox data-aos="zoom-in-up"/>
                <IntroContentBox data-aos="zoom-in-up"/>
                <IntroContentBox data-aos="zoom-in-up"/>
                <IntroContentBox data-aos="zoom-in-up"/>
            </ContentBox>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin-top: 74px;
    padding: 40px;
    padding-bottom: 70px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #F1F3F4;
    border-radius: 12px;
    @media (max-width: 840px) {
        margin-top: 70px;
        padding: 30px 20px;
        padding-bottom: 70px;
    }
    @media (max-width: 640px) {
        margin-top: 54px;
    }
    @media (max-width: 440px) {
        margin-top: 38px;
    }
`
const NavigationBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    div{
        &:hover{
            background: ${props => props.color};
        }
    }
    @media (max-width: 640px) {
        flex-wrap: wrap;
        gap: 20px;
    }
    @media (max-width: 640px) {
        gap: 12px;
    }
`
const Navigation = styled.div`
    width: 20%;
    padding: 10.5px 0;
    font-family: 'GmarketSansMedium';
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all .15s ease-in-out;
    border-radius: 4px;
    @media (max-width: 680px) {
        width: calc(50% - 11px);
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`

const ContentBox = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media (max-width: 840px) {
        padding-top: 16px;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        gap: 48px;
    }
`