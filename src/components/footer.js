import React from "react";
import styled from "styled-components";

const Rodape = styled.p`
    font-size: 12px;
    color: #fed7aa;

    @media (max-width: 700px) {
        margin-bottom: 0;
    }
`

export default function Footer({copyRightYear}) {
    return (
        <Rodape>
           (c) {copyRightYear} Dev Notes.
        </Rodape>
    )
}
