import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// TODO: color 값을 props로 전달받기
export interface IRoundedOutlinBoxProps {
  label: string
  to: string
}

const RoundedOutlinBox: React.FC<IRoundedOutlinBoxProps> = ({ label, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Wrapper>{label}</Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #999999;
  border-radius: 5px;
  align-items: center;
  justify-contents: center;
  color: #999999;
  padding: 4px 8px 4px 8px;
`

export default RoundedOutlinBox
