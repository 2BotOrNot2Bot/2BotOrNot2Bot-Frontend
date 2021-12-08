/**
 * @Description: Configuration for Axios
 * @author Tianyi(Lorena) Yan
 */
import Axios from 'axios'
import { Message } from 'element-ui';

Axios.interceptors.request.use((config) => {
  return config;
}), (error) => {
  Message.error(error)
  console.log(error);
  return Promise.reject(error);
}

Axios.interceptors.response.use((response) => {
  console.log(response);
  if (response.data.code === "000") {
    return Promise.resolve(response.data.data)
  } else {
    if (response.data && response.data.message) {
      Message.error(response.data.message)
    }
    return Promise.reject(response)
  }
}), (error) => {
  console.log(error);
  Message.error(error)
  return Promise.reject(error);
}

export default Axios
