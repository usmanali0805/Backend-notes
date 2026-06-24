const API_URL = "http://localhost:5000/users";

const usersContainer = document.getElementById("usersContainer");
const userForm = document.getElementById("submit");
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
let ageStart;
let ageEnd;
let username;
let sortax;
let Currentpage = 1;
const limit = 5;


// Fetch Users
async function getUsers() {

  try {
    const response = await fetch(`http://localhost:8000/api/v1/user?limit=${limit}&currentpage=${Currentpage}`);
    const { data } = await response.json();

    console.log(data)

    usersContainer.innerHTML = "";

    data.forEach((user) => {

      usersContainer.innerHTML += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Age: ${user.age}</p>
        </div>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

prevBtn.addEventListener("click", () => {
  if (Currentpage > 1) {
    Currentpage--;
    getUsers()
  }
})
nextBtn.addEventListener("click", () => {
  if (Currentpage < 4) {
    ++Currentpage;
    getUsers()
  }
})

// Initial Call
getUsers();



async function SearchUser() {
  username = document.querySelector('#name').value
  // ageStart = document.querySelector('#MinAge').value
  // ageEnd = document.querySelector('#MaxAge').value
  sortBy = document.querySelector('#sort').value
  sortBy === "Sort by age" ? '' : document.querySelector('#sort').value
  try {
    const response = await fetch(`http://localhost:8000/api/v1/user?limit=${limit}&currentpage=${Currentpage}&username=${username}&sort=${sortBy}`);

    const { data } = await response.json();

    console.log(data)

    usersContainer.innerHTML = "";

    data.forEach((user) => {

      usersContainer.innerHTML += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Age: ${user.age}</p>
        </div>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

// Add User
userForm.addEventListener("click", (e) => {
  SearchUser()
  console.log('chala')
});



