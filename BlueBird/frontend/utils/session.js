export function login(user){
  return $.ajax({
    url: '/api/session',
    method: 'post',
    data: { user }
  })
}

export function logout(){
  return $.ajax({
    url: '/api/session',
    method: 'delete'  
  })
}

export function signup(user){
  return $.ajax({
    url: '/api/users',
    method: 'post',
    data: {user}
  })
}