import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;