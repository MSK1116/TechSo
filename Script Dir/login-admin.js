localStorage.removeItem("pageLoaded");
localStorage.removeItem("set");
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
const dataToPush = {index: 1};
const usersRef = firebase.database().ref(`users`);
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  document.getElementById("tolog").style.display = "block";

  usersRef
    .orderByChild("username")
    .equalTo(username)
    .once("value", function (snapshot) {
      const userData = snapshot.val();
      var user = Object.values(userData)[0];
      if (userData) {
        // User found, check the password
        if (user.index == 1) {
          messageDiv.innerHTML = "You have reached login limit, Try contacting to TechSo for recovery";
          document.getElementById("tolog").style.display = "none";
        }
        // Assuming usernames are unique
        else if (user.password === password) {
          // Password is correct

          messageDiv.innerHTML = `You're registered ${user.name}!`;
          sessionStorage.setItem("username1", user.username);
          sessionStorage.setItem("password1", user.password);
          sessionStorage.setItem("name1", user.name);
        
        } else {
          messageDiv.innerHTML = "Incorrect Password, Retry";
          document.getElementById("tolog").style.display = "none";
        }
      } else {
        messageDiv.innerHTML = "No such participate found. Try changing username ";
        document.getElementById("tolog").style.display = "none";
      }
    });
});
