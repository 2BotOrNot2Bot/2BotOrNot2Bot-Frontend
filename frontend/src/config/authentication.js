/**
 * @Description: functions for authentication
 * @author Tianyi(Lorena) Yan
 * @date 2021/11/2
 */

function isLogin () {
  return sessionStorage.getItem('user_info');
}

function getIdToken () {
  return JSON.parse(sessionStorage.getItem('user_info')).id_token;
}

function getEmail () {
  return JSON.parse(sessionStorage.getItem('user_info')).email;
}

function getUid() {
  return JSON.parse(sessionStorage.getItem('user_info')).uid;
}

export {isLogin, getIdToken, getEmail, getUid}
