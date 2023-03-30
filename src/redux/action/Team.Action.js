import axios from "axios";
import { toast } from "react-toastify";

export const TeamAction =  (data) => async () =>  {
  await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BASE_URL}/team`,
    data: data,
  });

  toast.success("😁");
  return data;
};
