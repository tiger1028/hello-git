import styled from "styled-components";

export const Container = styled.div`
  display: block;
  position: absolute;
  top: 0px;
  right: 0px; 
  width: 50rem;
  height: 50%;
  background-color: #eeeeee;
`

export const Title = styled.h1`
  color: red;
  margin-top: 10px;
  text-align: center;
`

export const AddButton = styled.button`
  border-radius: 50%;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-align: right;
  font-size: 20px;
  padding: 6px 12px;
  background-color: #ed2c35;
  &:hover {
    background-color: #b22c35;
  }
`
export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  color: white;
  margin-top: 100%;
  background-color: #ed2c35;
  &:hover {
    background-color: #b22c35;
  }
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  color: white;
  margin-top: 100%;
  background-color: #ed2c35;
  &:hover {
    background-color: #b22c35;
  }
`

export const Modal = styled.div`
  display: block;
  position: fixed;
  top:0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`
export const ModalContent = styled.div`
  background-color: #3b3a30;
  margin-top: 10%;
  margin-left: 40%;
  width: 400px;
  height: 500px;
`

export const Form = styled.form`
  height: 100%;
  text-align: center;
  position: relative;
`
export const Input = styled.input`

  height: 30px;
`
export const Label = styled.label`

  color: white;
  height: 30px;
`