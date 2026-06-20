const API_URL = "http://localhost:5000/users";

const usersContainer = document.getElementById("usersContainer");
const userForm = document.getElementById("userForm");


// Fetch Users
async function getUsers() {


  try {

    const limit = 5
    const response = await fetch(`http://localhost:8000/api/v1/user?limit=${limit}`);
    const {data} = await response.json();
 
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


// Initial Call
getUsers();

async function SearchUser(props) {
   try {
    console.log(props)
    const response = await fetch("http://localhost:8000/api/v1/user");

    const {data} = await response.json();
 
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
userForm.addEventListener("submit", async (e) => {
  SearchUser()
});
//   e.preventDefault();

//   const newUser = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//     age: document.getElementById("age").value,
//   };

//   try {

//     await fetch("http://localhost:8000/api/v1/auth/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });

    // userForm.reset();

    // getUsers();

//   } catch (error) {
//     console.log(error);
//   }

