import React from "react"
import HomeHeader from "../PageComponents/HomeHeader"
import SellerDetails from "../PageComponents/SellerDetails"
import OrderList from "../PageComponents/OrderList"
import "../scss/home.scss"

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div style={{ margin: "2% 5%" }}>
        <SellerDetails />
      </div>
      <div style={{ margin: "2% 5%" }}>
        <OrderList />
      </div>
    </>
  )
}
