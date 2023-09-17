var username = sessionStorage.getItem("username1");
var password = sessionStorage.getItem("password1");
var name = sessionStorage.getItem("name1");

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

var dispQue = document.getElementById("dispQue");
var dispQue2 = document.getElementById("dispQue2");
var dispQue3 = document.getElementById("dispQue3");
var dispQue4 = document.getElementById("dispQue4");
var dispQue5 = document.getElementById("dispQue5");
// Reference to the "Question" node in the database
const questionsRef = firebase.database().ref("Question");
var s = document.getElementById("dispQue").getAttribute("sIndex");
const userRef = firebase.database().ref("user-try");

q1();
function q1() {
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").hide();
  $("#q5").hide();
  questionsRef
    .orderByChild("set")
    .equalTo(s)
    .once("value")
    .then(function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
          const questionData = childSnapshot.val();
          dispQue.innerHTML = questionData.Algo;
          $("#subq1").on("click", function () {
            userRef
              .once("value")
              .then(function (snapshot) {
                if (snapshot.exists()) {
                  snapshot.forEach(function (userSnapshot) {
                    // Get the specific user's folder key (e.g., "user1" or "user2")
                    const userKey = userSnapshot.key;

                    // Check if this user's folder has a matching username
                    const userData = userSnapshot.val();
                    if (userData.username && userData.username.toLowerCase() === username) {
                      // Update the data for the matching user
                      var txtar = document.getElementById("txtar").value;
                      const dataToPush = {
                        set: s,
                        al1: txtar,
                        index: 0, // Replace with the index value you want to push
                      };
                      userRef
                        .child(userKey)
                        .update(dataToPush)
                        .then(() => {
                          console.log(`Data updated for username: ${username} in folder: ${userKey}`);
                        })
                        .catch((error) => {
                          console.error(`Error updating data for username ${username}: ${error}`);
                        });
                    }
                  });
                } else {
                  console.error(`No users found in "user-try"`);
                }
              })
              .catch(function (error) {
                console.error("Error querying data: " + error);
              });
            q2();
          });
        });
      }
    })
    .catch(function (error) {
      console.error("Error fetching data: " + error);
    });
}
function q2() {
  $("#q2").show();
  $("#q1").hide();
  $("#q3").hide();
  $("#q4").hide();
  $("#q5").hide();
  questionsRef
    .orderByChild("set")
    .equalTo(s)
    .once("value")
    .then(function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
          const questionData = childSnapshot.val();
          dispQue2.innerHTML = questionData.cs1;
          $("#subq2").on("click", function () {
            userRef
              .once("value")
              .then(function (snapshot) {
                if (snapshot.exists()) {
                  snapshot.forEach(function (userSnapshot) {
                    // Get the specific user's folder key (e.g., "user1" or "user2")
                    const userKey = userSnapshot.key;

                    // Check if this user's folder has a matching username
                    const userData = userSnapshot.val();
                    if (userData.username && userData.username.toLowerCase() === username) {
                      // Push the data into the matching user's folder
                      var txtar2 = document.getElementById("txtar2").value;
                      const dataToPush = {
                        cs1: txtar2, // Replace with the text data you want to push
                      };
                      userRef
                        .child(userKey)
                        .push(dataToPush)
                        .then(() => {
                          console.log(`Data pushed for username: ${username} in folder: ${userKey}`);
                        })
                        .catch((error) => {
                          console.error(`Error pushing data for username ${username}: ${error}`);
                        });
                    }
                  });
                } else {
                  console.error(`No users found in "user-try"`);
                }
              })
              .catch(function (error) {
                console.error("Error querying data: " + error);
              });
            q3();
          });
        });
      }
    })
    .catch(function (error) {
      console.error("Error fetching data: " + error);
    });
}
function q3() {
  $("#q2").hide();
  $("#q1").hide();
  $("#q3").show();
  $("#q4").hide();
  $("#q5").hide();
  questionsRef
    .orderByChild("set")
    .equalTo(s)
    .once("value")
    .then(function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
          const questionData = childSnapshot.val();
          dispQue3.innerHTML = questionData.cs2;
          $("#subq3").on("click", function () {
            userRef
              .once("value")
              .then(function (snapshot) {
                if (snapshot.exists()) {
                  snapshot.forEach(function (userSnapshot) {
                    // Get the specific user's folder key (e.g., "user1" or "user2")
                    const userKey = userSnapshot.key;

                    // Check if this user's folder has a matching username
                    const userData = userSnapshot.val();
                    if (userData.username && userData.username.toLowerCase() === username) {
                      // Push the data into the matching user's folder
                      var txtar3 = document.getElementById("txtar3").value;
                      const dataToPush = {
                        cs2: txtar3, // Replace with the text data you want to push
                      };
                      userRef
                        .child(userKey)
                        .push(dataToPush)
                        .then(() => {
                          console.log(`Data pushed for username: ${username} in folder: ${userKey}`);
                        })
                        .catch((error) => {
                          console.error(`Error pushing data for username ${username}: ${error}`);
                        });
                    }
                  });
                } else {
                  console.error(`No users found in "user-try"`);
                }
              })
              .catch(function (error) {
                console.error("Error querying data: " + error);
              });
            q4();
          });
        });
      }
    })
    .catch(function (error) {
      console.error("Error fetching data: " + error);
    });
}
function q4() {
  $("#q1").hide();
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").show();
  $("#q5").hide();
  questionsRef
    .orderByChild("set")
    .equalTo(s)
    .once("value")
    .then(function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
          const questionData = childSnapshot.val();
          dispQue4.innerHTML = questionData.js1;
          $("#subq4").on("click", function () {
            userRef
              .once("value")
              .then(function (snapshot) {
                if (snapshot.exists()) {
                  snapshot.forEach(function (userSnapshot) {
                    // Get the specific user's folder key (e.g., "user1" or "user2")
                    const userKey = userSnapshot.key;

                    // Check if this user's folder has a matching username
                    const userData = userSnapshot.val();
                    if (userData.username && userData.username.toLowerCase() === username) {
                      // Push the data into the matching user's folder
                      var txtar4 = document.getElementById("txtar4").value;
                      const dataToPush = {
                        js1: txtar4, // Replace with the text data you want to push
                      };
                      userRef
                        .child(userKey)
                        .push(dataToPush)
                        .then(() => {
                          console.log(`Data pushed for username: ${username} in folder: ${userKey}`);
                        })
                        .catch((error) => {
                          console.error(`Error pushing data for username ${username}: ${error}`);
                        });
                    }
                  });
                } else {
                  console.error(`No users found in "user-try"`);
                }
              })
              .catch(function (error) {
                console.error("Error querying data: " + error);
              });
            q5();
          });
        });
      }
    })
    .catch(function (error) {
      console.error("Error fetching data: " + error);
    });
}
function q5() {
  $("#q1").hide();
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").hide();
  $("#q5").show();
  questionsRef
    .orderByChild("set")
    .equalTo(s)
    .once("value")
    .then(function (snapshot) {
      if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
          const questionData = childSnapshot.val();
          dispQue5.innerHTML = questionData.js2;
          $("#subq5").on("click", function () {
            userRef
              .once("value")
              .then(function (snapshot) {
                if (snapshot.exists()) {
                  snapshot.forEach(function (userSnapshot) {
                    // Get the specific user's folder key (e.g., "user1" or "user2")
                    const userKey = userSnapshot.key;

                    // Check if this user's folder has a matching username
                    const userData = userSnapshot.val();
                    if (userData.username && userData.username.toLowerCase() === username) {
                      // Push the data into the matching user's folder
                      var txtar5 = document.getElementById("txtar5").value;
                      const dataToPush = {
                        js5: txtar5, // Replace with the text data you want to push
                      };
                      userRef
                        .child(userKey)
                        .push(dataToPush)
                        .then(() => {
                          console.log(`Data pushed for username: ${username} in folder: ${userKey}`);
                        })
                        .catch((error) => {
                          console.error(`Error pushing data for username ${username}: ${error}`);
                        });
                    }
                  });
                } else {
                  console.error(`No users found in "user-try"`);
                }
              })
              .catch(function (error) {
                console.error("Error querying data: " + error);
              });
            q6();
          });
        });
      }
    })
    .catch(function (error) {
      console.error("Error fetching data: " + error);
    });
}
function q6() {
  location.href = "../index.html";
}
// timer engine
let timerInterval;
let timeInSeconds = 150; // 25 minutes

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const timerDisplay = `Refreshing the page will cancel your test. Timeleft: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById("timer").textContent = timerDisplay;
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeInSeconds--;
    updateTimerDisplay();
    if (timeInSeconds === 0) {
      clearInterval(timerInterval);
      alert("Timer has reached 25 minutes!");
      confirm("Time is over, Press OK!");
    }
  }, 1000); // Update every 1 second
}
updateTimerDisplay();
window.addEventListener("load", startTimer);

// Get all textarea elements on the page
const textareas = document.querySelectorAll("textarea");

// Loop through each textarea and add the event listener
textareas.forEach(function (textarea) {
  textarea.addEventListener("paste", function (e) {
    e.preventDefault();
    confirm("Only editing & writing is allowed");
  });
});
