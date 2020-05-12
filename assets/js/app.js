window.onload = checkConsent();

function checkConsent() {
  if(!localStorage.getItem("consent")){
    window.location.href = "index.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let checkBox = document.getElementById("consent");
  let nextBtn = document.getElementById("submit-button");
  let inst1 = document.getElementById("instructions-one");
  let inst2 = document.getElementById("instructions-two");
  let instructionsBtn = document.getElementById("instructions-button");
  let debriefBtn = document.getElementById("debrief-button");
  let debriefText = document.getElementById("debrief-text");
  let code = document.getElementById("code");

  if (checkBox) {
    checkBox.onchange = function () {
      if (this.checked) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    };
  }

  if (nextBtn){
    nextBtn.addEventListener("click", function(e) {
      e.preventDefault;
      localStorage.setItem("consent", "true");
      window.location.href = "instructions.html";
    });
  }

  if (instructionsBtn) {
    instructionsBtn.addEventListener("click", function (e) {
      e.preventDefault;

      inst1.style.display = "none";

      if (inst2.style.display === "block") {
        window.location.href = "study.html";
      }

      inst2.style.display = "block";
    });
  }

  if (debriefBtn) {
    debriefBtn.addEventListener("click", function (e) {
      e.preventDefault;
      debriefText.style.display = "none";
      code.style.display = "block";
    });
  }

  let fFaces = [
    "./assets/images/female/AF-206-079-N.jpg",
    "./assets/images/female/AF-214-139-N.jpg",
    "./assets/images/female/AF-215-070-N.jpg",
    "./assets/images/female/AF-246-242-N.jpg",
    "./assets/images/female/AF-253-130-N.jpg",
    "./assets/images/female/MF-308-001.jpg",
    "./assets/images/female/MF-326-016.jpg",
    "./assets/images/female/MF-359-019.jpg",
    "./assets/images/female/MF-360-106.jpg",
    "./assets/images/female/MF-361-006.jpg",
    "./assets/images/female/WF-022-017-N.jpg",
    "./assets/images/female/WF-027-003-N.jpg",
    "./assets/images/female/WF-037-029-N.jpg",
    "./assets/images/female/WF-220-101-N.jpg",
    "./assets/images/female/WF-242-001-N.jpg",
  ];

  // mFaces = [
  //   "./assets/images/male/AM-203-086-N.jpg",
  //   "./assets/images/male/AM-209-048-N.jpg",
  //   "./assets/images/male/AM-210-035-N.jpg",
  //   "./assets/images/male/AM-213-056-N.jpg",
  //   "./assets/images/male/AM-238-269-N.jpg",
  //   "./assets/images/male/MM-306-010.jpg",
  //   "./assets/images/male/MM-310-001.jpg",
  //   "./assets/images/male/MM-312-002.jpg",
  //   "./assets/images/male/MM-317-061.jpg",
  //   "./assets/images/male/MM-323-053.jpg",
  //   "./assets/images/male/WM-009-002-N.jpg",
  //   "./assets/images/male/WM-014-002-N.jpg",
  //   "./assets/images/male/WM-016-001-N.jpg",
  //   "./assets/images/male/WM-029-023-N.jpg",
  //   "./assets/images/male/WM-257-161-N.jpg",
  // ];

  // let randomBool = Math.random() >= 0.5;
  let test = "female";

  // if (randomBool === true) {
  //   faces = faces.concat(EditedFaces);
  //   test = "edited";
  // } else {
  //   faces = faces.concat(nonEditedFaces);
  //   test = "not edited";
  // }

  // let firebaseConfig = {
  //   apiKey: "AIzaSyCAiQq7AGfVPamHHSN_ObkAIsn8LFALkP8",
  //   authDomain: "mds-base-script.firebaseapp.com",
  //   databaseURL: "https://mds-base-script.firebaseio.com",
  //   projectId: "mds-base-script",
  //   storageBucket: "mds-base-script.appspot.com",
  //   messagingSenderId: "377022607691",
  //   appId: "1:377022607691:web:5f28b6a13b60a6168f38ce",
  //   measurementId: "G-NMTK4X8L1S"
  // };  

  let firebaseConfig = {
    apiKey: "AIzaSyARjmqlMf7UhFA8buKB5OIQ2VreaqMz4l0",
    authDomain: "facestudy-7aa90.firebaseapp.com",
    databaseURL: "https://facestudy-7aa90.firebaseio.com",
    projectId: "facestudy-7aa90",
    storageBucket: "facestudy-7aa90.appspot.com",
    messagingSenderId: "517061399659",
    appId: "1:517061399659:web:021d269da8ffd264b58d2e",
    measurementId: "G-TTFMER2NY5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let database = firebase.database();

  let id = Date.now();

  class FaceRating {
    constructor(face1, face2, rating, id, test) {
      this.firstFace = face1;
      this.secondFace = face2;
      this.rating = rating;
      this.id = id;
      this.test = test;
    }
  }

  class Person {
    constructor(age, race, gender, id, test) {
      this.age = age;
      this.race = race;
      this.gender = gender;
      this.id = id;
      this.test = test;
    }
  }

  class AllInfo {
    constructor(ratings, person, test) {
      this.ratings = ratings;
      this.person = person;
      this.test = test;
    }
  }

  let count = 0;
  let randFace1;
  let randFace2;
  let temp;
  let temp2;
  let ratingsArr = [];
  let buttons = document.getElementsByClassName("rating-btn");

  function loadFaces() {
    faceOneDiv = document.getElementById("face-one");
    faceTwoDiv = document.getElementById("face-two");

    do {
      randFace1 = Math.floor(Math.random() * 15);
    } while (randFace1 === temp || randFace1 === temp2);

    do {
      randFace2 = Math.floor(Math.random() * 15);
    } while (randFace1 === randFace2 || randFace2 === temp || randFace2 === temp2);

    temp = randFace1;
    temp2 = randFace2;

    if (!faceOneDiv.firstElementChild || !faceTwoDiv.firstElementChild) {
      faceOneEl = document.createElement("img");
      faceTwoEl = document.createElement("img");

      faceOneEl.setAttribute("id", "face-1");
      faceTwoEl.setAttribute("id", "face-2");
      faceOneEl.setAttribute("src", fFaces[randFace1]);
      faceTwoEl.setAttribute("src", fFaces[randFace2]);
      faceOneEl.setAttribute("class", "img-fluid mx-auto d-block");
      faceTwoEl.setAttribute("class", "img-fluid mx-auto d-block");

      faceOneDiv.appendChild(faceOneEl);
      faceTwoDiv.appendChild(faceTwoEl);
    } else {
      faceOne = document.getElementById("face-1");
      faceTwo = document.getElementById("face-2");

      faceOneEl.setAttribute("src", fFaces[randFace1]);
      faceTwoEl.setAttribute("src", fFaces[randFace2]);
    }
  }

  

  function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.setAttribute("disabled", true);
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = function () {
      let rating = new FaceRating(
        fFaces[randFace1].substring(16),
        fFaces[randFace2].substring(16),
        parseInt(button.innerHTML),
        id,
        test
      );
      ratingsArr.push(rating);
      
      if (count < 104) {
        count++;
        
        loadFaces();
      } else {
        disableButtons();
        document.getElementById("study-div").style.display = "none";
        document.getElementById("info-form").style.display = "block";
      }
    };
  }

  let form = document.getElementById("form");

  form.onsubmit = submit;
  function submit(e) {
    e.preventDefault();
    let age = form.firstElementChild.lastElementChild.value;
    let race = form.children[1].lastElementChild.value;
    let gender = form.children[2].lastElementChild.value;
    
    if (race === "Select One" || gender === "Select One") {
      if (race != "Select One") {
        document.getElementById("race").style.borderColor = "#ced4da";
      } else {
        document.getElementById("race").style.borderColor = "red";
      }
      if (gender != "Select One") {
        document.getElementById("gender").style.borderColor = "#ced4da";
      } else {
        document.getElementById("gender").style.borderColor = "red";
      }
      return;
    } else {

      ratingsArr.forEach(function (element){
        element.age = age;
        element.race = race;
        element.gender = gender;
        element.test = test;
      })
      let today = new Date();
      todayString = today.toDateString();

      firebase
        .database()
        .ref(todayString + "/" + id)
        .set(ratingsArr);
      form.reset();
      window.location.href = "debrief.html";
    }
  }

  loadFaces();
});
