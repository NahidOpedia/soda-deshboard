import React, { useState } from "react";
import "./style.css";

import { GrFormAdd } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";

// MUI
import TextField from "@mui/material/TextField";
import InputC from "./input";
import InputF from "./inputF";
import MultipleSelect from "./MultiSelect";

function AllProduct() {
  const [showsearch, setShowsearch] = useState(false);

  return (
    <div>
      {/* header */}
      <HeaderP />
      {/* products */}

      <div className="products"></div>

      {/* edit/add */}

      <div className="Add_products my-4 ">
        <h4>Add New Products / Edit</h4>
        <div className="greycolr">
          <div className="my-2 formsection">
            <div className="row">
              <div className="col-md-6">
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Heading"
                  variant="outlined"
                />
                <textarea
                  class="my-2 form-control"
                  id="exampleFormControlTextarea3"
                  rows="7"
                ></textarea>

                <textarea
                  class="my-2 form-control"
                  id="exampleFormControlTextarea3"
                  rows="7"
                ></textarea>

                {/* .options */}
                <div className="f_row d-flex justify-content-between">
                  <InputC title="Category" />
                  <InputC title="Sub Category" />
                  <InputC title="Location" />
                  <InputC title="Products Stats" />
                  <InputC title="Marchent" />
                  <InputC title="Type" />
                </div>
                <div className="s_row d-flex">
                  <InputC title="New/Used" />
                  <InputC title="Brands" />
                  <InputC title="Quantity" />
                  <InputC title="Price(payable)" />
                  <InputC title="Price(old)" />
                </div>
                <div className="t_row d-flex">
                  <InputC title="Home Dlvy" />
                  <InputC title="Hd amount" />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="button" class="w-25 btn px-4 btn-danger">
                    All
                  </button>
                  <button type="button" class="w-70 btn px-4 btn-success">
                    Sell
                  </button>
                </div>
                {/* .options */}
              </div>
              <div className="col-md-6">
                <div className="f_row d-flex justify-content-between">
                  <InputC title="Show till" />
                  <InputC title="Create " />
                  <InputC title="pub" />
                  <InputC title="Ordering" />
                  <InputC title="Products Stats" />
                </div>
                <div className="d-flex my-3 justify-content-between">
                  <div>
                    <h5>Normal</h5>
                    <div className="f_row d-flex ">
                      <InputC title="Imp" />
                      <InputC title="Reach" />
                      <InputC title="Click" />
                    </div>
                  </div>

                  <div>
                    <h5>Paid</h5>
                    <div className="f_row d-flex ">
                      <InputC title="Imp" />
                      <InputC title="Reach" />
                      <InputC title="Click" />
                    </div>
                  </div>
                </div>
                <div className="f_row d-flex ">
                  <InputC title="Slot Status" />
                </div>

                <MultipleSelect />
                <InputF title="Video Link" />
                <div className="mx-1 my-3 imagesection">
                  <h6>Photo Zone</h6>
                  <input type="file" name="" id="" />
                </div>
                <div className="mt-5 mx-1 my-3 apr-imagesection">
                  <h6>Approve Photo</h6>
                  <input type="file" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premier */}
      <div>
        {/* Bundle */}
        <h4>Bundle Promotion</h4>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="160px" title="Category" />
          <InputC widthc="160px" title="Sub Category" />
          <InputC widthc="160px" title="Location" />
          <InputC widthc="160px" title="Products Stats" />
          <InputC widthc="160px" title="Marchent" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
        </div>
        <div className="s_row d-flex">
          <InputC widthc="160px" title="New/Used" />
          <InputC widthc="160px" title="Brands" />
          <InputC widthc="160px" title="Quantity" />
          <MultipleSelect />
        </div>
        <div className="t_row d-flex">
          <InputC widthc="160px" title="Home Dlvy" />
          <InputC widthc="160px" title="Hd amount" />
        </div>

        {/* Bundle */}
        <h4>Single Promotion</h4>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="160px" title="Category" />
          <InputC widthc="160px" title="Sub Category" />
          <InputC widthc="160px" title="Location" />
          <InputC widthc="160px" title="Products Stats" />
          <InputC widthc="160px" title="Marchent" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
        </div>
        <div className="s_row d-flex">
          <InputC widthc="160px" title="New/Used" />
          <InputC widthc="160px" title="Brands" />
          <InputC widthc="160px" title="Quantity" />
          <MultipleSelect />
        </div>
        <div className="t_row d-flex">
          <InputC widthc="160px" title="Home Dlvy" />
          <InputC widthc="160px" title="Hd amount" />
        </div>

        {/* Bundle */}
        <h4>Traffic Promotion</h4>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="160px" title="Category" />
          <InputC widthc="160px" title="Sub Category" />
          <InputC widthc="160px" title="Location" />
          <InputC widthc="160px" title="Products Stats" />
          <InputC widthc="160px" title="Marchent" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
          <InputC widthc="160px" title="Type" />
        </div>
        <div className="s_row d-flex">
          <InputC widthc="160px" title="New/Used" />
          <InputC widthc="160px" title="Brands" />
          <InputC widthc="160px" title="Quantity" />
          <MultipleSelect />
        </div>
        <div className="t_row d-flex">
          <InputC widthc="160px" title="Home Dlvy" />
          <InputC widthc="160px" title="Hd amount" />
        </div>
      </div>
      {/* Searching and sorting  */}
      <div>
        <hr />
        <h5>Search</h5>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
        <div className="f_row d-flex justify-content-between">
          <InputC widthc="260px" title="Category" />
          <InputC widthc="260px" title="Sub Category" />
          <InputC widthc="260px" title="Location" />
          <InputC widthc="260px" title="Products Stats" />
          <InputC widthc="260px" title="Marchent" />
        </div>
      </div>
      {/* Footer */}
      <FooterP />
    </div>
  );
}

export default AllProduct;

function HeaderP() {
  return (
    <div className="header d-flex justify-content-between">
      <div className="right">
        <button type="button" class="btn mx-1 px-4 btn-danger">
          All
        </button>
        <button type="button" class="btn mx-1 px-4 btn-success">
          Sell
        </button>
        <button type="button" class="btn mx-1 px-4 btn-success">
          Rent
        </button>
        <button type="button" class="btn mx-1 px-4 btn-success">
          Job
        </button>
        <button type="button" class="btn mx-1 px-4 btn-success">
          Offer
        </button>
        <button type="button" class="btn mx-1 px-4 btn-success">
          Bid
        </button>
        <button type="button" class="btn mx-1 px-4 btn-success">
          Buy
        </button>
      </div>
      <div className="left">
        <button type="button" class="btn mx-1 btn-danger">
          <RiDeleteBin6Line />
        </button>
        <button type="button" class="btn mx-1 btn-success">
          <span className=" add">+</span>
        </button>
        <button type="button" class="btn mx-1 btn-success">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
function FooterP() {
  return (
    <div className="header my-4 d-flex justify-content-between">
      <div className="right">
        <button type="button" class="btn mx-1 px-4 btn-dark">
          Both
        </button>
        <button type="button" class="btn mx-1 px-4 btn-dark">
          Seller
        </button>
        <button type="button" class="btn mx-1 px-4 btn-dark">
          Customer
        </button>
      </div>
      <div className="left">
        <button type="button" class="btn mx-1 btn-dark">
          Hide search
        </button>
        <button type="button" class="btn mx-1 btn-success">
          Search
        </button>
      </div>
    </div>
  );
}
