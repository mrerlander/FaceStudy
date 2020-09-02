document.addEventListener("DOMContentLoaded", function () {
  let checkBox = document.getElementById("consent");
  let checkBoxAlt = document.getElementById("consent-alt");
  let nextBtn = document.getElementById("submit-button");
  let nextBtnAlt = document.getElementById("submit-button-alt");
  let inst1 = document.getElementById("instructions-one");
  let inst2 = document.getElementById("instructions-two");
  let instructionsBtn = document.getElementById("instructions-button");
  let childCountry = document.getElementById("child-country");
  let debriefBtn = document.getElementById("debrief-button");
  let debriefBtnAlt = document.getElementById("debrief-button-alt");
  let debriefText = document.getElementById("debrief-text");
  let debriefTextAlt = document.getElementById("debrief-text-alt");
  let code = document.getElementById("code");
  let codeAlt = document.getElementById("code-alt");
  let usChild = document.getElementById("child-country");
  let childZipQ = document.getElementById("child-zip");
  let oldZip = document.getElementById("old-zip");
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let cityDiv = document.getElementById("city-div");
  let countryDiv = document.getElementById("country-div");
  let subjectPool;

  if (document.URL.includes("study.html")) {
    if (!localStorage.getItem("consent")) {
      if (!localStorage.getItem("subjectPool")) {
        window.location.href = "index.html";
      } else {
        window.location.href = "consent.html";
      }
    }
  }

  if (checkBox) {
    checkBox.onchange = function () {
      if (this.checked) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    };
  }

  if (checkBoxAlt) {
    checkBoxAlt.onchange = function () {
      if (this.checked) {
        nextBtnAlt.disabled = false;
      } else {
        nextBtnAlt.disabled = true;
      }
    };
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault;
      localStorage.setItem("consent", "true");
      window.location.href = "instructions.html";
    });
  }

  if (nextBtnAlt) {
    nextBtnAlt.addEventListener("click", function (e) {
      e.preventDefault;
      localStorage.setItem("subjectPool", "true");
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

  if (childCountry) {
    childCountry.onchange = function () {
      if (this.value === "Yes") {
        childZipQ.style.display = "block";
        oldZip.required = true;
        city.value = "";
        country.value = "";
        country.required = false;
        city.required = false;
      } else {
        childZipQ.style.display = "none";
        countryDiv.style.display = "block";
        cityDiv.style.display = "block";
        country.required = true;
        city.required = true;
        oldZip.required = false;
        oldZip.value = "";
      }
    };
  }

  if (debriefBtn) {
    debriefBtn.addEventListener("click", function (e) {
      e.preventDefault;
      debriefText.style.display = "none";
      code.style.display = "block";
      localStorage.removeItem("consent");
    });
  }

  if (debriefBtnAlt) {
    debriefBtnAlt.addEventListener("click", function (e) {
      e.preventDefault;
      debriefTextAlt.style.display = "none";
      codeAlt.style.display = "block";
      localStorage.removeItem("consent");
      localStorage.removeItem("subjectPool");
    });
  }

  // let fFaces = [
  //   "./assets/images/female/AF-206-079-N.jpg",
  //   "./assets/images/female/AF-214-139-N.jpg",
  //   "./assets/images/female/AF-215-070-N.jpg",
  //   "./assets/images/female/AF-246-242-N.jpg",
  //   "./assets/images/female/AF-253-130-N.jpg",
  //   "./assets/images/female/MF-308-001.jpg",
  //   "./assets/images/female/MF-326-016.jpg",
  //   "./assets/images/female/MF-359-019.jpg",
  //   "./assets/images/female/MF-360-106.jpg",
  //   "./assets/images/female/MF-361-006.jpg",
  //   "./assets/images/female/WF-022-017-N.jpg",
  //   "./assets/images/female/WF-027-003-N.jpg",
  //   "./assets/images/female/WF-037-029-N.jpg",
  //   "./assets/images/female/WF-220-101-N.jpg",
  //   "./assets/images/female/WF-242-001-N.jpg",
  // ];

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

  // let faces = [
  //   "./assets/images/CFD-BF-001-025-N.jpg",
  //   "./assets/images/CFD-BF-037-022-N.jpg",
  //   "./assets/images/CFD-BF-039-031-N.jpg",
  //   "./assets/images/CFD-BF-040-003-N.jpg",
  //   "./assets/images/CFD-BF-201-080-N.jpg",
  //   "./assets/images/CFD-BF-204-189-N.jpg",
  //   "./assets/images/CFD-BF-218-207-N.jpg",
  //   "./assets/images/CFD-BF-221-223-N.jpg",
  //   "./assets/images/CFD-BF-244-231-N.jpg",
  //   "./assets/images/CFD-LF-204-133-N.jpg",
  //   "./assets/images/CFD-LF-209-072-N.jpg",
  //   "./assets/images/CFD-LF-212-066-N.jpg",
  //   "./assets/images/CFD-LF-214-090-N.jpg",
  //   "./assets/images/CFD-LF-215-157-N.jpg",
  //   "./assets/images/CFD-LF-220-120-N.jpg",
  //   "./assets/images/CFD-LF-221-002-N.jpg",
  //   "./assets/images/CFD-LF-252-172-N.jpg",
  //   "./assets/images/CFD-LF-255-088-N.jpg",
  //   "./assets/images/CFD-WF-008-002-N.jpg",
  //   "./assets/images/CFD-WF-011-002-N.jpg",
  //   "./assets/images/CFD-WF-036-023-N.jpg",
  //   "./assets/images/CFD-WF-038-021-N.jpg",
  //   "./assets/images/CFD-WF-205-006-N.jpg",
  //   "./assets/images/CFD-WF-207-014-N.jpg",
  //   "./assets/images/CFD-WF-208-068-N.jpg",
  //   "./assets/images/CFD-WF-212-050-N.jpg",
  //   "./assets/images/CFD-WF-218-087-N.jpg",
  //   "./assets/images/MF-306-003.jpg",
  //   "./assets/images/MF-310-027.jpg",
  //   "./assets/images/MF-318-022.jpg",
  //   "./assets/images/MF-328-020.jpg",
  //   "./assets/images/MF-332-014.jpg",
  //   "./assets/images/MF-337-026.jpg",
  //   "./assets/images/MF-340-026.jpg",
  //   "./assets/images/MF-347-001.jpg",
  //   "./assets/images/MF-348-018.jpg",
  // ];

  let faces = [
    "./assets/images/MF-350-029.jpg",
    "./assets/images/MF-338-001.jpg",
    "./assets/images/MF-326-016.jpg",
    "./assets/images/MF-323-001.jpg",
    "./assets/images/MF-312-002.jpg",
    "./assets/images/MF-308-001.jpg",
    "./assets/images/HF-011-006.jpg",
    "./assets/images/HF-010-106.jpg",
    "./assets/images/HF-009-019.jpg",
    "./assets/images/HF-007-002.jpg",
    "./assets/images/HF-006-017.jpg",
    "./assets/images/HF-005-022.jpg",
    "./assets/images/HF-002-054.jpg",
    "./assets/images/HF-001-017.jpg",
    "./assets/images/CFD-WF-248-129-N.jpg",
    "./assets/images/CFD-WF-244-163-N.jpg",
    "./assets/images/CFD-WF-243-148-N.jpg",
    "./assets/images/CFD-WF-239-155-N.jpg",
    "./assets/images/CFD-WF-233-112-N.jpg",
    "./assets/images/CFD-WF-232-161-N.jpg",
    "./assets/images/CFD-WF-231-099-N.jpg",
    "./assets/images/CFD-WF-230-158-N.jpg",
    "./assets/images/CFD-WF-219-038-N.jpg",
    "./assets/images/CFD-WF-039-025-N.jpg",
    "./assets/images/CFD-WF-035-024-N.jpg",
    "./assets/images/CFD-WF-011-002-N.jpg",
    "./assets/images/CFD-WF-008-002-N.jpg",
    "./assets/images/CFD-WF-003-003-N.jpg",
    "./assets/images/CFD-LF-255-088-N.jpg",
    "./assets/images/CFD-LF-254-125-N.jpg",
    "./assets/images/CFD-LF-252-172-N.jpg",
    "./assets/images/CFD-LF-251-057-N.jpg",
    "./assets/images/CFD-LF-238-154-N.jpg",
    "./assets/images/CFD-LF-231-260-N.jpg",
    "./assets/images/CFD-LF-226-174-N.jpg",
    "./assets/images/CFD-LF-220-120-N.jpg",
    "./assets/images/CFD-LF-217-082-N.jpg",
    "./assets/images/CFD-LF-215-157-N.jpg",
    "./assets/images/CFD-LF-214-090-N.jpg",
    "./assets/images/CFD-LF-212-066-N.jpg",
    "./assets/images/CFD-LF-209-072-N.jpg",
    "./assets/images/CFD-LF-204-133-N.jpg",
    "./assets/images/CFD-AF-254-167-N.jpg",
    "./assets/images/CFD-AF-253-130-N.jpg",
    "./assets/images/CFD-AF-246-242-N.jpg",
    "./assets/images/CFD-AF-245-143-N.jpg",
    "./assets/images/CFD-AF-236-145-N.jpg",
    "./assets/images/CFD-AF-235-170-N.jpg",
    "./assets/images/CFD-AF-232-078-N.jpg",
    "./assets/images/CFD-AF-230-193-N.jpg",
    "./assets/images/CFD-AF-228-173-N.jpg",
    "./assets/images/CFD-AF-225-141-N.jpg",
    "./assets/images/CFD-AF-224-026-N.jpg",
    "./assets/images/CFD-AF-216-106-N.jpg",
    "./assets/images/CFD-AF-214-139-N.jpg",
    "./assets/images/CFD-AF-206-079-N.jpg",
  ];

  // facePairs = [];

  // function pairs(arr){
  //   let l = arr.length;

  //   for(let i = 0; i < l; i++){
  //     for(let j = i + 1; j < l; j++){
  //       facePairs.push([arr[i], arr[j]]);
  //     }
  //   }
  // }

  // pairs(mFaces);

  // let randomBool = Math.random() >= 0.5;
  let test = "original female";

  // if (randomBool === true) {
  //   faces = faces.concat(EditedFaces);
  //   test = "edited";
  // } else {
  //   faces = faces.concat(nonEditedFaces);
  //   test = "not edited";
  // }

  let firebaseConfig = {
    apiKey: "AIzaSyCAiQq7AGfVPamHHSN_ObkAIsn8LFALkP8",
    authDomain: "mds-base-script.firebaseapp.com",
    databaseURL: "https://mds-base-script.firebaseio.com",
    projectId: "mds-base-script",
    storageBucket: "mds-base-script.appspot.com",
    messagingSenderId: "377022607691",
    appId: "1:377022607691:web:5f28b6a13b60a6168f38ce",
    measurementId: "G-NMTK4X8L1S",
  };

  let firebaseConfig2 = {
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
  let primaryDB = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let secondaryDB = firebase.initializeApp(firebaseConfig2, "secondary");
  secondaryDB.analytics();

  let today = new Date();
  let todayString = today.toDateString();

  let refPrimary = primaryDB.database().ref(todayString);
  // let refSecondary = secondaryDB.database().ref(todayString);
  let newUserRef = refPrimary.push();

  let id = newUserRef.key;

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
      //, oldZip, newZip
      this.age = age;
      this.race = race;
      this.gender = gender;
      this.id = id;
      this.test = test;
      this.oldZip = oldZip;
      this.newZip = newZip;
    }
  }

  class AllInfo {
    constructor(ratings, person, test, subjectPool) {
      this.ratings = ratings;
      this.person = person;
      this.test = test;
      this.subjectPool = subjectPool;
    }
  }

  let count = 0;
  let randFace1;
  let randFace2;
  let temp; //= [0,0];
  let temp2;
  let temp3;
  let temp4;
  let ratingsArr = [];
  let buttons = document.getElementsByClassName("rating-btn");
  // let pair = [0,0];
  // let counter = 0;
  // let pairIndex;

  function loadFaces() {
    faceOneDiv = document.getElementById("face-one");
    faceTwoDiv = document.getElementById("face-two");

    do {
      randFace1 = Math.floor(Math.random() * 56);
    } while (randFace1 === temp || randFace1 === temp2 || randFace1 === temp3 || randFace1 === temp4);

    do {
      randFace2 = Math.floor(Math.random() * 56);
    } while (randFace1 === randFace2 || randFace2 === temp || randFace2 === temp2 || randFace2 === temp3 || randFace2 === temp4);

    temp3 = temp;
    temp4 = temp2;
    temp = randFace1;
    temp2 = randFace2;

    // do{
    //   pairIndex = Math.floor(Math.random() * facePairs.length);
    //   console.log(pairIndex);
    //   pair = facePairs[pairIndex];
    //   console.log(pair[0] + " " + temp[0] + "-----" + pair[1] + " " + temp[1]);
    //   counter++;
    //   if(count == facePairs.length){
    //     break;
    //   }
    // } while (pair[0] === temp[0] || pair[0] === temp[1] || pair[1] === temp[0] || pair[1] === temp[1]);

    // temp = pair;
    // counter = 0;

    if (!faceOneDiv.firstElementChild || !faceTwoDiv.firstElementChild) {
      faceOneEl = document.createElement("img");
      faceTwoEl = document.createElement("img");

      faceOneEl.setAttribute("id", "face-1");
      faceTwoEl.setAttribute("id", "face-2");
      faceOneEl.setAttribute("src", faces[randFace1]); //pair[0]
      faceTwoEl.setAttribute("src", faces[randFace2]); //pair[1]
      faceOneEl.setAttribute("class", "img-fluid mx-auto d-block");
      faceTwoEl.setAttribute("class", "img-fluid mx-auto d-block");

      faceOneDiv.appendChild(faceOneEl);
      faceTwoDiv.appendChild(faceTwoEl);
    } else {
      faceOne = document.getElementById("face-1");
      faceTwo = document.getElementById("face-2");

      // faceOneEl.setAttribute("src", pair[0]);
      // faceTwoEl.setAttribute("src", pair[1]);
      faceOneEl.setAttribute("src", faces[randFace1]);
      faceTwoEl.setAttribute("src", faces[randFace2]);
    }

    // facePairs.splice(pairIndex, 1);
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
        // pair[0].substring(16),
        // pair[1].substring(16),
        faces[randFace1].substring(16),
        faces[randFace2].substring(16),
        parseInt(button.innerHTML),
        id,
        test
      );
      ratingsArr.push(rating);

      if (count < 119) {
        //119
        count++;

        loadFaces();
      } else {
        disableButtons();
        document.getElementById("study-div").style.display = "none";
        document.getElementById("info-form").style.display = "block";
        buttonSubmit.disabled = false;
      }
    };
  }

  let form = document.getElementById("form");
  let buttonSubmit = document.getElementById("submit-form-button");
  let buttonResubmit = document.getElementById("resubmit-button");
  let debrief = "debrief.html";

  form.onsubmit = submit;
  function submit(e) {
    e.preventDefault();
    let age = form.firstElementChild.lastElementChild.value;
    let race = form.children[1].lastElementChild.value;
    let gender = form.children[2].lastElementChild.value;
    let oldZip = form.children[6].lastElementChild.value;
    let childCountry = form.children[4].lastElementChild.value;
    let childCity = form.children[5].lastElementChild.value;
    let newZip = form.children[7].lastElementChild.value;

    if (!localStorage.getItem("subjectPool")) {
      subjectPool = false;
    } else {
      subjectPool = true;
      debrief = "debriefsp.html";
    }

    buttonSubmit.disabled = true;
    buttonSubmit.style.display = "none";
    buttonResubmit.style.display = "block";
    buttonResubmit.innerText = "Loading...";

    if(oldZip === ""){
      oldZip = "none";
    }

    if(childCountry === ""){
      childCountry = "United States";
    }

    if(childCity === ""){
      childCity = "none";
    }

    ratingsArr.forEach(function (element) {
      element.age = age;
      element.race = race;
      element.gender = gender;
      element.oldZip = oldZip;
      element.country = childCountry;
      element.city = childCity;
      element.newZip = newZip;
      element.test = test;
      element.subjectPool = subjectPool;
    });

    buttonSubmit.addEventListener("click", writeToDBs);
    writeToDBs();
  }

  let errorCode = 2;

  function writeToDBs() {
    if (errorCode == 2) {
      secondaryDB
        .database()
        .ref(todayString + "/" + id)
        .set(ratingsArr)
        .then(function () {
          newUserRef
            .set(ratingsArr)
            .then(function () {
              form.reset();
              console.log("boop");
              console.log(debrief);
              window.location.href = debrief;
            })
            .catch(function (error) {
              console.log(error);
              alert(
                "There was an error with your submission. Please try again. (error code 1) first catch"
              );
              errorCode = 1;
              buttonResubmit.disabled = false;
              buttonResubmit.innerText = "Submit";
            });
        })
        .catch(function (error) {
          alert(
            "There was an error with your submission. Please try again. (error code 2)"
          );
          errorCode = 2;
          buttonResubmit.disabled = false;
          buttonResubmit.innerText = "Submit";
        });
    }

    if (errorCode == 1) {
      newUserRef
        .set(ratingsArr)
        .then(function () {
          form.reset();
            window.location.href = debrief;
        })
        .catch(function (error) {
          alert(
            "There was an error with your submission. Please try again. (error code 1)"
          );
          errorCode = 1;
          buttonSubmit.style.display = "block";
          buttonResubmit.style.display = "none";
        });
    }
  }

  loadFaces();
});
