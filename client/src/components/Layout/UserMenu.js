import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu col-md-10">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>

          {/* <NavLink
            to="/dashboard/user/items"
            className="list-group-item list-group-item-action"
          >
            Items
          </NavLink> */}

          <NavLink
            to="/dashboard/user/cart"
            className="list-group-item list-group-item-action"
          >
            Items
          </NavLink>

          {/* <NavLink
            to="/dashboard/user/bid"
            className="list-group-item list-group-item-action"
          >
            Bid
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
