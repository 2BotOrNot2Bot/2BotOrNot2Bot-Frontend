/**
 * @Description: Configuration for Axios
 * @author Tianyi(Lorena) Yan
 */
import Axios from 'axios'
import { Loading, Message } from 'element-ui';
var loading = null;

Axios.interceptors.request.use((config) => {
  config.headers['Authentication'] = 'Bearer ' + sessionStorage.getItem('id_token');
  loading = Loading.service({
    lock: true,
    text: 'Loading...',
    spinner: 'el-icon-loading',
    background: 'white'
  })
  return config;
}), (error) => {
  Message.error(error)
  console.log(error);
  return Promise.reject(error);
}

Axios.interceptors.response.use((response) => {
  loading.close();
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
