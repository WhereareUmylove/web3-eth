const TokenKey = 'vue_admin_session_storage_TokenKey'
const UserNameKey = 'vue_admin_session_storage_UserNameKey'

export function getStorage() {
  return sessionStorage.getItem(TokenKey)
}

export function setStorage(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeStorage() {
  return sessionStorage.removeItem(TokenKey)
}

export function getUsername() {
  return sessionStorage.getItem(UserNameKey)
}

export function setUsername(username) {
  return sessionStorage.setItem(UserNameKey, username)
}