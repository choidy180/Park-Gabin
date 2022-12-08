import styled from "styled-components";

const TopNav = () => {
    return (
        <Container>
            <span>ABOUT</span>
            <span>ABOUT</span>
            <span>PROJECTS</span>
            <span>CONTACT</span>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 20px;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    span {
        font-size: 20px;
        cursor: pointer;
        font-family: 'Pretendard-Regular';
        font-weight: lighter;
        ::after{
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 1.4px;
            background-color: #000000;
            transition: all ease-in-out .25s;
        }
        :hover{
            ::after{
                width: 100%;
            }
        }
    }
`
export default TopNav;