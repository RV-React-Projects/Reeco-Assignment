import React from "react"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { Print } from "@mui/icons-material"
import ListsCard from "./ListsCard"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#000",
  backgroundColor: "#Fbfbfb",
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
  marginLeft: 0,
  // width: "100%",
  width: 500,
  minWidth: 200,
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}))

export default function OrderList() {
  return (
    <div
      className="order_list"
      style={{ backgroundColor: "#FFF", padding: "1%" }}
    >
      <div className="search_comp">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div className="serch_button">
          <Button
            variant="outlined"
            onClick={() => {}}
            style={{
              textTransform: "none",
              borderRadius: 20,
              borderColor: "#1e633f",
              color: "#1e633f",
              backgroundColor: "#fff",
              fontWeight: "bold",
            }}
          >
            Add Item
          </Button>
          <Print
            style={{
              color: "#1e633f",
              marginLeft: 30,
              marginRight: 10,
            }}
          />
        </div>
      </div>
      {/* ============ List Components ========== */}
      <div style={{ marginTop: 30 }}>
        <ListsCard />
      </div>
      {/* <div className="order_list_comp">
        <div className="order_list_comp_header">
          <div className="order_list_comp_header_left">
            <div className="order_list_comp_header_left_left">
              <p className="order_list_comp_header_left_left_p">Product name</p>
              <p className="order_list_comp_header_left_left_p">Item</p>
              <p className="order_list_comp_header_left_left_p">Quantity</p>
              <p className="order_list_comp_header_left_left_p">Price</p>
              <p className="order_list_comp_header_left_left_p">Status</p>
              <p className="order_list_comp_header_left_left_p">Action</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
