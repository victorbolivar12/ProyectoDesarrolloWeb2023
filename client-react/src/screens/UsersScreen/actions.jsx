import { useState } from "react";
import { useEffect } from "react";
import { request } from "../../api";
import { enqueueSnackbar } from "notistack";

const Action = () => {
  const [data, setData] = useState({});

  const fechData = async () => {
    const res = await request.users.getUsers();
    if (res.statusCode == 200) {
      console.log(res.data);
      setData(res.data);
    } else {
      enqueueSnackbar(res.response?.data?.message, {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  return {
    data,
  };
};

export default Action;
