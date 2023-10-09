import { Box, Button, IconButton, Tooltip } from "@mui/material"
import { Close, Done } from "@mui/icons-material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import React, { useState } from "react"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import { useAppDispatch, useAppSelector } from "../redux/store"
import {
  acceptOrder,
  rejectOrder,
  editOrder,
} from "../redux/reducers/orderSlice"

type rejData = {
  id: number
  name: string
  brand: string
  price: string
  quantity: number
  total: number
  status: number
  updated: number
}

export default function ListsCard() {
  const [openReject, setOpenReject] = useState(false)
  const [rejectId, setRejectId] = useState<rejData>()

  const appDisPatch = useAppDispatch()
  const { orders } = useAppSelector((state) => state.order)

  const handleClickOpen = () => {
    setOpenReject(true)
  }

  const handleClose = () => {
    setOpenReject(false)
  }

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  const rejectOrd = (id: number) => {
    appDisPatch(rejectOrder(id))
  }

  return (
    <>
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
        {orders.map((item, index) => (
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
                  <p className="list_status edited_cont">Order Updated</p>
                )
              ) : (
                <div className="list_status"></div>
              )}
              <Box sx={{ display: "flex" }}>
                <Tooltip arrow placement="bottom" title="Approve">
                  <IconButton
                    onClick={() => appDisPatch(acceptOrder(item?.id))}
                  >
                    <Done
                      color={
                        item.status && item.status === 1
                          ? "primary"
                          : "disabled"
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="bottom" title="Reject">
                  <IconButton
                    onClick={() => {
                      setRejectId(item)
                      handleClickOpen()
                    }}
                  >
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
                    onClick={() => appDisPatch(editOrder(item?.id))}
                  >
                    Edit
                  </Button>
                </Tooltip>
              </Box>
            </div>
          </div>
        ))}
      </div>
      <Dialog
        open={openReject}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        // aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you Sure to Reaject the Order?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "Rejecting the Order : " {rejectId?.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              rejectOrd(rejectId?.id)
              handleClose()
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
