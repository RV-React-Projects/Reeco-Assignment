import { data } from "./makeData"
import { Box, Button, IconButton, Tooltip } from "@mui/material"
import { Close, Done } from "@mui/icons-material"

export default function ListsCard() {
  return (
    <div className="list_card">
      {/* ======== Table Header ========== */}
      <div className="table_head">
        <p className="table_name">Product Name</p>
        <p className="table_brand">Brand</p>
        <p className="table_price">Price</p>
        <p className="table_quantity">Qunatity</p>
        <p className="table_total">Total</p>
        <p className="table_status">Status</p>
      </div>
      {/* ============= List cards ============== */}
      {data.map((item, index) => (
        <div className="list_cards" key={index}>
          <p className="list_name">{item.name}</p>
          <p className="list_brand">{item.brand}</p>
          <p className="list_price">{item.price}</p>
          <p className="list_quantity">{item.quantity}</p>
          <p className="list_total">{item.total}</p>
          <div className="list_status_cont">
            {item.status ? (
              item.status === 1 ? (
                <p className="list_status approved_cont">Approved</p>
              ) : item.status === 2 ? (
                <p className="list_status rejected_cont">Missing</p>
              ) : (
                <p className="list_status edited_cont">Price Updated</p>
              )
            ) : (
              <div className="list_status"></div>
            )}
            <Box sx={{ display: "flex" }}>
              <Tooltip arrow placement="bottom" title="Approve">
                <IconButton onClick={(e) => console.log("HELLO", item.id)}>
                  <Done
                    color={
                      item.status && item.status === 1 ? "primary" : "disabled"
                    }
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="bottom" title="Reject">
                <IconButton onClick={() => console.log("@ND", item.id)}>
                  <Close
                    color={
                      item.status && item.status === 2 ? "error" : "disabled"
                    }
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="bottom" title="Edit">
                <Button
                  // color="info"
                  onClick={() => console.log("@ND", item.id)}
                >
                  Edit
                </Button>
              </Tooltip>
            </Box>
          </div>
        </div>
      ))}
    </div>
  )
}
