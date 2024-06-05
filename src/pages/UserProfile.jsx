import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

function UserProfile() {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loader />;
  }
  const {displayName, email, photoURL} = user;
  console.log(user)

  return (
    <div>
      <div className="w-2/4 space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Name:
          <input type="text" value={displayName} className="grow" readOnly/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email:
          <input type="text" value={email} className="grow" readOnly/>
        </label>
        <label className="flex items-center gap-2">
          Image:
          <div>
          <img src={photoURL} alt="" />
          </div>
        </label>
        
      </div>
    </div>
  );
}

export default UserProfile;
