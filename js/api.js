(function() {
  const profile = document.getElementById("profile")
  const url = "https://api.github.com/users"
  const user = "lucasmumbarra"
  const client_id = "aacc39334836ed5fa8bb"
  const client_secret = "30385253f2418d5284a86f46cfd08a11320f020b"

  async function getUser(user){
    const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`)

    const profile = profileResponse.json()

    return profile
  }

  function showProfile(user) {
     profile.innerHTML = `<div id="profileImage">
     <img src="${user.avatar_url}" alt="Avatar Photo - Lucas Mumbarra"l>
   </div>
   <div id="profileText">
     <h2>${user.name}</h2>
     <p>${user.bio}</p>
   </div>`
  }

  getUser(user).then(res => showProfile(res))
})()