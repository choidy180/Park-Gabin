import type { AppProps } from 'next/app';
import * as React from 'react';
import GlobalStyle from '@src/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeChangeBtn } from 'components/ThemeChangeBtn';
import '../src/styles/globals.css';
import TopNav from 'components/TopNav';
import { Container } from 'components/Container';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    function setScreenSize() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    React.useEffect(()=>{
        setScreenSize();
    },[]);
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <GlobalStyle/>
                    {/* <Navigation/> */}
                    {/* <ThemeNavigation/> */}
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                    <ThemeChangeBtn/>
                    <TopNav/>
                </RecoilRoot>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
