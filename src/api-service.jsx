

export class API {
    static loginUser(body){
        return fetch(`https://ahmed101.pythonanywhere.com/auth/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) 
          }).then (resp => {
              if (!resp.ok) {
                throw new Error("login failed")

              }
              return resp.json()
          })
    } 

    static registerUser(body){
        return fetch(`https://ahmed101.pythonanywhere.com/api/users/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) 
          }).then(resp => resp.json())
    } 

    static getMovies(token) {
      return fetch("https://ahmed101.pythonanywhere.com/api/movies/", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            }
          }).then( resp => resp.json())
    }


    static updateMovie(mov_id, body, token){
        return fetch(`https://ahmed101.pythonanywhere.com/api/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body) 
          }).then(resp => resp.json())
    } 

    static createMovie(body, token){
      return fetch(`https://ahmed101.pythonanywhere.com/api/movies/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          },
          body: JSON.stringify(body) 
        }).then(resp => resp.json())
  }

  static deleteMovie(mov_id, token){
    return fetch(`https://ahmed101.pythonanywhere.com/api/movies/${mov_id}/`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }, 
      })
}


}