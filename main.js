const LinksSocialMedia = {
  github: 'MateusFras',
  instagram: 'frassonmateus'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json() )
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()

