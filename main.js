//Nesta Const foi guardado os "usuarios" dos urls de cada rede social.
const linksSocialMedia = {
  github: 'jenny-2021',
  youtube: 'UCylesft0_eL5Xq8tR0BX1Kw',
  facebook: 'jennifer.pereira.710667',
  instagram: 'jennifer.pereira1',
  twitter: 'Jennife78192189'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
