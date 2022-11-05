import styled from "styled-components"

interface AddItemButtonProps {
    hasSibling?: Boolean;
}

interface NewItemButtonProps {
    isCancel?: Boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    font: inherit;
    color: ${props => (props.hasSibling ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    margin-top: ${props => (props.hasSibling ? "10px" : "0px")};
    padding: 10px 12px;
    text-align: left;
    transition: background 150ms ease-in;
    width: 100%;
    &:hover {
    background-color: #ffffff52;
    }
`
export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    align-items: flex-start;
`
export const NewItemButton = styled.button<NewItemButtonProps>`
    background-color: ${props => (props.isCancel ? "#ba4c4c" : "#5aac44")};
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 7px 12px;
    text-align: center;
    font: inherit;
    cursor: pointer;
    margin-right: 10px;
    transition: background 200ms ease-in;
    &:hover {
    background-color: ${props => (props.isCancel ? "#ba4c4cee" : "#5aac44ee")};
    }
`

export const NewItemInput = styled.input`
    border-radius: 3px;
    box-shadow: #091e4263 0px 0px 1px 0px;
    border: 0;
    outline: none;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    background: transparent;
    font: inherit;
`

export const AppHeader = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    background-color: inherit;
    padding: 15px 20px;
    justify-content: space-between;
`

export const AppContainer = styled.div`
    align-items: flex-start;
    background-color: #3179ba;
    display: flex;
    flex: 1;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
    padding: 20px;
    padding-top: 80px;
    width: 100%;
`

export const ColumnContainer = styled.div`
    width: 340px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 12px;
    flex-grow: 0;
    background-color: #ebecf0;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow:  0px 0px 2px 0px #091e4240;
`

