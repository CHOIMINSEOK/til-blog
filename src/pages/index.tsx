import React from "react"
import styled from "styled-components"

export const routes = {
  LIFE: "/life",
  DEV: "/dev",
}

export default () => (
  <Wrapper>
    <Title>
      최민석
      <Subtitle>/ Minseok Choi</Subtitle>
    </Title>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  padding-top: 20px;
  font-family: "Apple SD Gothic Neo", "Helvetica", "Arial";
`

const Title = styled.h1`
  font-weight: 10;
  font-size: 50px;
  color: #555555;
  display: flex;
  flex-direction: row;
`

const Subtitle = styled.div`
  font-weight: 10;
  font-size: 30px;
  color: #999999;
  margin-left: 12px;
  margin-bottom: 2px;
  align-self: flex-end;
`
