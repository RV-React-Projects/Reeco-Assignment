import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Icon from "@mui/material/Icon"
import "../scss/Header.scss"
import {
  CardTravel,
  ExpandMore,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "@mui/icons-material"

export default function Header() {
  const LogoTitle = styled.h1`
    font-size: 1.5em;
    color: #ffffff;
  `

  return (
    <nav className="nav_main">
      <ul>
        <li className="nav_title">
          <LogoTitle>Reeco</LogoTitle>
        </li>
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="#">Order</Link>
        </li>
        <li>
          <Link to="#">Analytics</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="#">
            <ShoppingCart className="shop_icon" />
          </Link>
        </li>
        <li>
          <Link to="#">
            Hello Guest <ExpandMore className="more_icon" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
