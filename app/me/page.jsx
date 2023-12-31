import Profile from "../../components/auth/Profile";
import React from "react";
import axios from "axios";

const getAddresses = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/address`);

  return data?.addresses;
};

const ProfilePage = async () => {
  const addresses = await getAddresses();

  return <Profile addresses={addresses} />;
};

export default ProfilePage;