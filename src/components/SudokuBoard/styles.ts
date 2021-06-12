import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* column-gap: 5px;
    row-gap: 5px; */
`;

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* column-gap: 5px;
    row-gap: 5px; */
    border: 1px solid #686868;
`;

export const SquareContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cecece;
`;
