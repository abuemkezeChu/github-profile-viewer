'use strict'

let search = document.getElementById('username')
const button = document.getElementById('search')
const profileCard = document.querySelector('.profile')
const repoCard = document.getElementById('repos-list')

// render profile card
const renderProfile = (data) => {
  // profile properties
  const { avatar_url, html_url, login, bio, public_repos, followers, following } = data
  
  const profile = `
      <div class="profile-image">
        <img src="${avatar_url}" alt="profile picture" id="profile-image">
      </div>
      <div class="profile-info">
        <h1 id="profile-name"><a href="${html_url}">${login}</a></h1>
        <p id="profile-bio">${bio}</p>
        <div class="profile-info-details">
          <div class="profile-info-details-item">
            <span id="profile-repos">${public_repos}</span>
            <span>Repos</span>
          </div>
          <div class="profile-info-details-item">
            <span id="profile-followers">${followers}</span>
            <span>Follower(s)</span>
          </div>
          <div class="profile-info-details-item">
            <span id="profile-following">${following}</span>
            <span>Following</span>
          </div>
        </div>
      </div>
  `
  profileCard.innerHTML = profile
  profileCard.style.opacity = 1
}

const getUserData = (username) => {
  search.value = ''
  const url = `https://api.github.com/users/${username}`
  fetch(url)
    .then(response => response.json())
    .then(data => renderProfile(data))
    .catch(error => console.log(error))
}

button.addEventListener('click', ()=>{
  const username = search.value
  if (username !== '') {
    getUserData(username)
  } else {
    alert('Please enter a username')
  }
})
