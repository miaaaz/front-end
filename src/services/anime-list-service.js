// const LIST_URL = "http://localhost:4000/api";
const LIST_URL = "https://kissanime-backend.herokuapp.com/api";
// const LIST_URL = process.env.REACT_APP_API

const findWatchingListByUser = (uid) => {
  return fetch(`${LIST_URL}watchingLists/users/${uid}/animes`)
    .then(r => r.json())
}

const api = {

}

export default api