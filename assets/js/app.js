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

  let faces = [
    "./assets/images/CFD-BF-001-025-N.jpg",
    "./assets/images/CFD-BF-037-022-N.jpg",
    "./assets/images/CFD-BF-039-031-N.jpg",
    "./assets/images/CFD-BF-040-003-N.jpg",
    "./assets/images/CFD-BF-201-080-N.jpg",
    "./assets/images/CFD-BF-204-189-N.jpg",
    "./assets/images/CFD-BF-218-207-N.jpg",
    "./assets/images/CFD-BF-221-223-N.jpg",
    "./assets/images/CFD-BF-244-231-N.jpg",
    "./assets/images/CFD-LF-204-133-N.jpg",
    "./assets/images/CFD-LF-209-072-N.jpg",
    "./assets/images/CFD-LF-212-066-N.jpg",
    "./assets/images/CFD-LF-214-090-N.jpg",
    "./assets/images/CFD-LF-215-157-N.jpg",
    "./assets/images/CFD-LF-220-120-N.jpg",
    "./assets/images/CFD-LF-221-002-N.jpg",
    "./assets/images/CFD-LF-252-172-N.jpg",
    "./assets/images/CFD-LF-255-088-N.jpg",
    "./assets/images/CFD-WF-008-002-N.jpg",
    "./assets/images/CFD-WF-011-002-N.jpg",
    "./assets/images/CFD-WF-036-023-N.jpg",
    "./assets/images/CFD-WF-038-021-N.jpg",
    "./assets/images/CFD-WF-205-006-N.jpg",
    "./assets/images/CFD-WF-207-014-N.jpg",
    "./assets/images/CFD-WF-208-068-N.jpg",
    "./assets/images/CFD-WF-212-050-N.jpg",
    "./assets/images/CFD-WF-218-087-N.jpg",
  ];

  nonEditedFaces = [
    "./assets/images/MF-306-003.jpg",
    "./assets/images/MF-310-027.jpg",
    "./assets/images/MF-318-022.jpg",
    "./assets/images/MF-328-020.jpg",
    "./assets/images/MF-332-014.jpg",
    "./assets/images/MF-337-026.jpg",
    "./assets/images/MF-340-026.jpg",
    "./assets/images/MF-347-001.jpg",
    "./assets/images/MF-348-018.jpg",
  ];

  EditedFaces = [
    "./assets/images/MF-306-003-bz.jpg",
    "./assets/images/MF-310-027-bz.jpg",
    "./assets/images/MF-318-022-bz.jpg",
    "./assets/images/MF-328-020-bz.jpg",
    "./assets/images/MF-332-014-bz.jpg",
    "./assets/images/MF-337-026-bz.jpg",
    "./assets/images/MF-340-026-bz.jpg",
    "./assets/images/MF-347-001-bz.jpg",
    "./assets/images/MF-348-018-bz.jpg",
  ];

  let randomBool = Math.random() >= 0.5;
  let test;

  if (randomBool === true) {
    faces = faces.concat(EditedFaces);
    test = "edited";
  } else {
    faces = faces.concat(nonEditedFaces);
    test = "not edited";
  }

  let firebaseConfig = {
    apiKey: "AIzaSyARjmqlMf7UhFA8buKB5OIQ2VreaqMz4l0",
    authDomain: "facestudy-7aa90.firebaseapp.com",
    databaseURL: "https://facestudy-7aa90.firebaseio.com",
    projectId: "facestudy-7aa90",
    storageBucket: "facestudy-7aa90.appspot.com",
    messagingSenderId: "517061399659",
    appId: "1:517061399659:web:021d269da8ffd264b58d2e",
    measurementId: "G-TTFMER2NY5",
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

  function loadFaces() {
    faceOneDiv = document.getElementById("face-one");
    faceTwoDiv = document.getElementById("face-two");

    do {
      randFace1 = Math.floor(Math.random() * 36);
    } while (randFace1 === temp || randFace1 === temp2);

    do {
      randFace2 = Math.floor(Math.random() * 36);
    } while (randFace1 === randFace2 || randFace2 === temp || randFace2 === temp2);

    temp1 = randFace1;
    temp2 = randFace2;

    if (!faceOneDiv.firstElementChild || !faceTwoDiv.firstElementChild) {
      faceOneEl = document.createElement("img");
      faceTwoEl = document.createElement("img");

      faceOneEl.setAttribute("id", "face-1");
      faceTwoEl.setAttribute("id", "face-2");
      faceOneEl.setAttribute("src", faces[randFace1]);
      faceTwoEl.setAttribute("src", faces[randFace2]);
      faceOneEl.setAttribute("class", "img-fluid");
      faceTwoEl.setAttribute("class", "img-fluid");

      faceOneDiv.appendChild(faceOneEl);
      faceTwoDiv.appendChild(faceTwoEl);
    } else {
      faceOne = document.getElementById("face-1");
      faceTwo = document.getElementById("face-2");

      faceOneEl.setAttribute("src", faces[randFace1]);
      faceTwoEl.setAttribute("src", faces[randFace2]);
    }
  }

  let buttons = document.getElementsByClassName("rating-btn");

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
        faces[randFace1].substring(16),
        faces[randFace2].substring(16),
        parseInt(button.innerHTML),
        id,
        test
      );
      ratingsArr.push(rating);

      if (count < 119) {
        count++;
        loadFaces();
      } else {
        disableButtons();
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
    console.log(age);
    console.log(race);
    console.log(gender);
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
      let personInfo = new Person(age, race, gender, id, test);
      let totalInfo = new AllInfo(ratingsArr, personInfo, test);

      firebase
        .database()
        .ref("participants/" + personInfo.id)
        .set({
          totalInfo,
        });
      form.reset();
      window.location.href = "debrief.html";
    }
  }

  loadFaces();
});
