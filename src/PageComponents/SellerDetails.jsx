import React from "react"

const sellDetArray = [
  {
    title: "supplier",
    description: "East Coast fruits & Vegitables",
  },
  {
    title: "shipping Date",
    description: "8 Sep 2021",
  },
  {
    title: "total",
    description: "$ 15,450",
  },
  {
    title: "category",
    description: "East Coast fruits & Vegitables",
  },
  {
    title: "department",
    description: "300-400-500",
  },
  {
    title: "status",
    description: "Awaiting for Arival",
  },
]

export default function SellerDetails() {
  const SellerInfocard = (props) => {
    const { title, description, index } = props || {}

    return (
      <div
        key={index}
        className={`component ${
          index === sellDetArray.length - 1
            ? " seller_card last-component"
            : "seller_card"
        }`}
      >
        <p className="seller_card_title">{title}</p>
        <h4 className="seller_card_desc">{description}</h4>
      </div>
    )
  }
  return (
    <div className="seller_detail_cont">
      {sellDetArray.map((sell, index) => (
        <SellerInfocard
          key={index}
          index={index}
          title={sell.title}
          description={sell.description}
        />
      ))}
    </div>
  )
}
