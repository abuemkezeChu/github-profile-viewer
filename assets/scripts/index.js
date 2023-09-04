'use strict'

const search = document.getElementById('username')
const button = document.getElementById('search')
const profileCard = document.querySelector('.profile')

// render profile card
const renderProfile = (data) => {
  const profile = `
      <div class="profile-image">
        <img src="${data.avatar_url}" alt="profile picture" id="profile-image">
      </div>
      <div class="profile-info">
        <h1 id="profile-name"><a href="${data.html_url}">${data.login}</a></h1>
        <p id="profile-bio">${data.bio}</p>
        <div class="profile-info-details">
          <div class="profile-info-details-item">
            <span id="profile-repos">${data.public_repos}</span>
            <span>Repos</span>
          </div>
          <div class="profile-info-details-item">
            <span id="profile-followers">${data.followers}</span>
            <span>Follower(s)</span>
          </div>
          <div class="profile-info-details-item">
            <span id="profile-following">${data.following}</span>
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

button.addEventListener('click', () => {
  const username = search.value
  if (username !== '') {
    getUserData(username)
  } else {
    alert('Please enter a username')
  }
})
