import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

async function showMyCoins(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/coins`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

async function deleteCoin(id) {
  try {
    const res = await fetch(`${BASE_URL}/coins/${id}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch(error) {
    console.log(error)
  }
}

export { 
  getAllProfiles, 
  addPhoto,
  showMyCoins,
  deleteCoin
}
