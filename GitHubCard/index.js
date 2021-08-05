const body = document.body;
const cards = body.querySelector('.cards');


//REQUESTING & COLLECTING DATA FROM MY REQUEST & LOGGING DATA TO INSPECT/STUDY
console.log(axios);
axios.get('https://api.github.com/users/cyberkade')
  .then(res => {
    console.log(res)
    cards.appendChild(cardCreator(res));
  })
// console.log(response);

//CREATING ARRAY AND REQUEST FUNCTION TO ITERATE THROUGH ARRAY AND APPEND EACH PROFILE TO PAGE
const followersArray = ['ManuelLucero', 'bigknell', 'someilam', 'justinfineberg', 'justsml'];

const fetchData = (username) => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(res => {
    cards.appendChild(cardCreator(res));
  })
}
followersArray.forEach(item => {fetchData(item)})

const cardCreator = (response) => {
  // console.log(response);
    //Create Elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const info = document.createElement('div');
  const h3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //Assign Classes/Attributes
  card.className = 'card';
  image.src = response.data['avatar_url'];
  info.className = 'card-info';
  h3.className = 'name';
  username.className = 'username';
  profileLink.href = response.data['html_url'];

  //APPEND TEXT CONTENT
  h3.textContent = response.data.name;
  username.textContent = response.data.login;
  location.textContent = response.data.location;
  profile.textContent = 'Profile: ';
  profileLink.textContent = response.data['html_url'];
  followers.textContent = response.data.followers;
  following.textContent = response.data.following;
  bio.textContent = response.data.bio;

  //APPEND/PREPEND ELEMENTS
  card.prepend(image);
  card.appendChild(info);
  info.appendChild(h3);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
    profile.appendChild(profileLink);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  return card;
};

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
