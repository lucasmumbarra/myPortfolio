(function() {
  const profile = document.getElementById("profile")
  const url = "https://api.github.com/users"
  const user = "lucasmumbarra"
  const client_id = "aacc39334836ed5fa8bb"
  const client_secret = "30385253f2418d5284a86f46cfd08a11320f020b"
  const count = 6;
  const sort = "stargazers"
  const direction = "asc"

  async function getUser(user){
    const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`)

    const reposResponse = await fetch(`${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {profile, repos}
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

  function showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `<div class="repo">
        <a href=${repo.html_url} target="_blanck">
          <div class="repoLineOne">
            <img src="./assets/folder.svg" alt="Folder Github repository">
            <h2>${repo.name}</h2>
          </div>

          <div class="repoLineTwo">
            <p>${repo.description}</p>
          </div>

          <div class="repoLineTree">
            <div class="repoGit">
              <div class="gitStar">
                <img src="./assets/star.svg" alt="Star Github repository">
                <p>${repo.stargazers_count}</p>
              </div>
              <div class="gitBranch">
                <img src="./assets/git-branch.svg" alt="Branch Github repository">
                <p>${repo.forks_count}</p>
              </div>
            </div>
            <div class="repoLanguage">
              <div class="circleLanguage"></div>
              <p>${repo.language}</p>
            </div>
          </div>
        </a>
       </div>
      `
    })

    document.getElementById("repositories").innerHTML = output
  }

  getUser(user).then(res => {
    showProfile(res.profile)
    showRepos(res.repos)
  })
})()