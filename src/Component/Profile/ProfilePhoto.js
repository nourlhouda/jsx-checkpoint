import React from "react";
import pic from "./assests/img/myPicture.jpeg";

const ProfilePhoto = () => {
  return <img src={pic} style={{ width: 70, height: 95 }} alt="Profile" />;
};

export default ProfilePhoto;
