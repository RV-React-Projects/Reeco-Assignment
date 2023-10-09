import React from "react"
import Button from "@mui/material/Button"
import styled from "styled-components"
import "../scss/Home_header.scss"
import { HorizontalSpace } from "../components/CommonComponents"

export default function HomeHeader() {
  return (
    <div className="home_hedaer">
      <p className="ord_head">Orders {">"} Orders 387894893849</p>
      <div className="ord_main_section">
        <h2 className="ord_main">Order 387894893849</h2>
        <div className="button_group">
          <Button
            variant="outlined"
            onClick={() => {}}
            style={{
              textTransform: "none",
              borderRadius: 20,
              borderColor: "#1e633f",
              color: "#1e633f",
              backgroundColor: "#fff",
              // height: 40,
            }}
          >
            Back
          </Button>
          <HorizontalSpace size={10} />
          <Button
            variant="contained"
            onClick={() => {}}
            style={{
              textTransform: "none",
              borderRadius: 20,
              backgroundColor: "#1e633f",
              color: "#fff",
              // height: 40,
              textAlign: "center",
              verticalAlign: "center",
            }}
          >
            Approve Order
          </Button>
        </div>
      </div>
    </div>
  )
}
