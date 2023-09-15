const firebaseConfig = {
  apiKey: "AIzaSyAhOHX1_eL1X5WO8_q8jRWDqw1WrGOp3ow",
  authDomain: "techso-6df95.firebaseapp.com",
  databaseURL: "https://techso-6df95-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techso-6df95",
  storageBucket: "techso-6df95.appspot.com",
  messagingSenderId: "426658672504",
  appId: "1:426658672504:web:40a40809b8d5a6b15f228d",
  measurementId: "G-1N6EX23D9F",
};
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById("login-form");
const messageDiv = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Reference to the "users" node in the Realtime Database
  const usersRef = firebase.database().ref("users");

  // Check if the user exists in the database
  usersRef
    .orderByChild("username")
    .equalTo(username)
    .once("value", function (snapshot) {
      const userData = snapshot.val();

      if (userData) {
        // User found, check the password
        const user = Object.values(userData)[0]; // Assuming usernames are unique
        if (user.password === password) {
          // Password is correct
          messageDiv.innerHTML = `[Er-HIT] You will be allowed after the program starts, ${user.name}!`;
          sessionStorage.setItem("username", user.name);
          sessionStorage.setItem("password", user.password);
          location.href = "./set/set.html";
        } else {
          messageDiv.innerHTML = "[Er-PW-Mis] You will be allowed after the program starts";
        }
      } else {
        messageDiv.innerHTML = "[Er-N-DAT] You will be allowed after the program starts";
      }
    });
});
