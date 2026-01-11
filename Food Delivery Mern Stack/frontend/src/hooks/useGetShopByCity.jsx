import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";

export default function useGetShopByCity() {
  const dispatch = useDispatch();
  const { currentCity } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/shop/get-by-city/${currentCity}`,
          {
            withCredentials: true,
          }
        );
        console.log(result);
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchShops();
  }, [dispatch]);
}
