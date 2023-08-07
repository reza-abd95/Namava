export async function getMoviesData() {
    const res = await fetch('https://api.jsonbin.io/v3/b/64cb6bcfb89b1e2299ca80fe')
  
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }
  
    return res.json()
}

export async function getCategoriesData() {
    const res = await fetch('https://api.jsonbin.io/v3/b/64cb6c2a9d312622a38b0de1')
  
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }
  
    return res.json()
}

export async function getActorData() {
    const res = await fetch('https://api.jsonbin.io/v3/b/64cb6c069d312622a38b0dcf')
  
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }
  
    return res.json()
}

export async function getHomeSliderData() {
    const res = await fetch('https://api.jsonbin.io/v3/b/64cb6c468e4aa6225ec9da08')
  
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }
  
    return res.json()
}