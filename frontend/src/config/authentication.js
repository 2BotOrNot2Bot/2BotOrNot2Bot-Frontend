/**
 * @Description:
 * @author Tianyi(Lorena) Yan
 * @date 2021/11/2
 */

function hasToken () {
  return sessionStorage.getItem('user_info');
}

function getIdToken () {
  return JSON.parse(sessionStorage.getItem('user_info')).id_token;
}

function getEmail () {
  return JSON.parse(sessionStorage.getItem('user_info')).email;
}

export {hasToken, getIdToken, getEmail}
