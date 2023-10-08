import React from "react"

export function HorizontalSpace(props) {
  const { size = 10, height = 10 } = props || {}
  return <div style={{ width: size, backgroundColor: "transparent" }}></div>
}
