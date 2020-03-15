import React from "react"

export interface IVerticalSpacerProps {
  size: number
}

const VerticalSpacer: React.FC<IVerticalSpacerProps> = ({ size }) => {
  return <div style={{ height: size }} />
}

export default VerticalSpacer
