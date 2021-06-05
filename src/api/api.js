import API_URL from "../config";
import axios from "axios";

export const postUserChoiceApi = async (data) => {
    try {
      const response = await axios.post(API_URL + "/play", data);
      return response.data;
  
      //
    } catch (error) {
      console.log({ error });
    }
  };
  
  export const getAllChoicesApi = async () => {
    try {

      const response = await axios.get(
        API_URL + "/choices"
      );
      return response.data;
      
    } catch (error) {
      console.log({ error });
    }
  };

  export const getRobotChoiceApi = async () => {
    try {
    
      const response = await axios.get(
        API_URL + "/choice"
      );
      return response.data;
  
    } catch (error) {
      console.log({ error });
    }
  };