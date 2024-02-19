import styled, { css } from "styled-components"

export const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
`
interface Props {
    backgroundColor: string;
}
export const ButtonNoivos= styled.button<Props> `
border-radius: 40px;
    background-color: ${ (props) => props.backgroundColor };
    padding: 0.5em 3em 0.5em  3em;
    color: black;
    font-family: "Roboto", sans-serif;
    font-weight: 3  00;
    font-style: normal;
    transition: 0.5s;
    border: none;
    &:hover{
        opacity: 0.5;
    }

`