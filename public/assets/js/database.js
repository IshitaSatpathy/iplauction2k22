  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBe8gmgnXYKIgJiC8fMTBsHHcaSjRI9UVY",
    authDomain: "iplauction-2021-4cec1.firebaseapp.com",
    databaseURL: "https://iplauction-2021-4cec1-default-rtdb.firebaseio.com",
    projectId: "iplauction-2021-4cec1",
    storageBucket: "iplauction-2021-4cec1.appspot.com",
    messagingSenderId: "476516664360",
    appId: "1:476516664360:web:a0d2354cfa66d25959a11d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let registration = firebase.database().ref('secondRound');
let contactUs = firebase.database().ref('contactRequest');

document
  .querySelector('.php-email-form')
  .addEventListener('submit', submitContactForm);

function submitContactForm(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const subject = document.querySelector('#subject').value;
  //let date = toString(new Date());

  saveContactInfo(name, email, message, subject);
  document.querySelector('.php-email-form').reset();
  alert('Submitted.')
}
//push the data to collections
function saveContactInfo(name, email, message, subject) {
  let newContactUs = contactUs.push();

  newContactUs.set({
    Name: name,
    Email: email,
    Subject: subject,
    Message: message,
  });
}

//registration details
document
  .querySelector('.register-form')
  .addEventListener('submit', submitRegistration);
function submitRegistration(e){
  e.preventDefault();

  const lname = document.querySelector('#lname').value;
  const lemail = document.querySelector('#lemail').value;
  const lmobile = document.querySelector('#lmobile').value;
  const lcollege = document.querySelector('#lcollege').value;
  const lcname = document.querySelector('#lcname').value;
  const lcspec = document.querySelector('#lcspec').value;
  const lyr = document.querySelector('#lyr').value;

  const m1name = document.querySelector('#m1name').value;
  const m1email = document.querySelector('#m1email').value;
  const m1mobile = document.querySelector('#m1mobile').value;
  const m1college = document.querySelector('#m1college').value;
  const m1cname = document.querySelector('#m1cname').value;
  const m1cspec = document.querySelector('#m1cspec').value;
  const m1yr = document.querySelector('#m1yr').value;

  const m2name = document.querySelector('#m2name').value;
  const m2email = document.querySelector('#m2email').value;
  const m2mobile = document.querySelector('#m2mobile').value;
  const m2college = document.querySelector('#m2college').value;
  const m2cname = document.querySelector('#m2cname').value;
  const m2cspec = document.querySelector('#m2cspec').value;
  const m2yr = document.querySelector('#m2yr').value;

  const m3name = document.querySelector('#m3name').value;
  const m3email = document.querySelector('#m3email').value;
  const m3mobile = document.querySelector('#m3mobile').value;
  const m3college = document.querySelector('#m3college').value;
  const m3cname = document.querySelector('#m3cname').value;
  const m3cspec = document.querySelector('#m3cspec').value;
  const m3yr = document.querySelector('#m3yr').value;

  const m4name = document.querySelector('#m4name').value;
  const m4email = document.querySelector('#m4email').value;
  const m4mobile = document.querySelector('#m4mobile').value;
  const m4college = document.querySelector('#m4college').value;
  const m4cname = document.querySelector('#m4cname').value;
  const m4cspec = document.querySelector('#m4cspec').value;
  const m4yr = document.querySelector('#m4yr').value;

  const m5name = document.querySelector('#m5name').value;
  const m5email = document.querySelector('#m5email').value;
  const m5mobile = document.querySelector('#m5mobile').value;
  const m5college = document.querySelector('#m5college').value;
  const m5cname = document.querySelector('#m5cname').value;
  const m5cspec = document.querySelector('#m5cspec').value;
  const m5yr = document.querySelector('#m5yr').value;

  const m6name = document.querySelector('#m6name').value;
  const m6email = document.querySelector('#m6email').value;
  const m6mobile = document.querySelector('#m6mobile').value;
  const m6college = document.querySelector('#m6college').value;
  const m6cname = document.querySelector('#m6cname').value;
  const m6cspec = document.querySelector('#m6cspec').value;
  const m6yr = document.querySelector('#m6yr').value;

  const m7name = document.querySelector('#m7name').value;
  const m7email = document.querySelector('#m7email').value;
  const m7mobile = document.querySelector('#m7mobile').value;
  const m7college = document.querySelector('#m7college').value;
  const m7cname = document.querySelector('#m7cname').value;
  const m7cspec = document.querySelector('#m7cspec').value;
  const m7yr = document.querySelector('#m7yr').value;

  const m8name = document.querySelector('#m8name').value;
  const m8email = document.querySelector('#m8email').value;
  const m8mobile = document.querySelector('#m8mobile').value;
  const m8college = document.querySelector('#m8college').value;
  const m8cname = document.querySelector('#m8cname').value;
  const m8cspec = document.querySelector('#m8cspec').value;
  const m8yr = document.querySelector('#m8yr').value;

  const m9name = document.querySelector('#m9name').value;
  const m9email = document.querySelector('#m9email').value;
  const m9mobile = document.querySelector('#m9mobile').value;
  const m9college = document.querySelector('#m9college').value;
  const m9cname = document.querySelector('#m9cname').value;
  const m9cspec = document.querySelector('#m9cspec').value;
  const m9yr = document.querySelector('#m9yr').value;
  
  const tmember = document.querySelector('#tmember').value;
  const tp1 = document.querySelector('#tp1').value;
  const tp2 = document.querySelector('#tp2').value;
  const tp3 = document.querySelector('#tp3').value;
  
  //console.log(date);
  // console.log(lname,lemail,lmobile,lcollege,lcname,lcspec,lyr);
  // console.log(m1name,m1email,m1mobile,m1college,m1cname,m1cspec,m1yr);
  // console.log(m2name,m2email,m2mobile,m2college,m2cname,m2cspec,m2yr);
  // console.log(m3name,m3email,m3mobile,m3college,m3cname,m3cspec,m3yr);
  // console.log(m4name,m4email,m4mobile,m4college,m4cname,m4cspec,m4yr);
  // console.log(m5name,m5email,m5mobile,m5college,m5cname,m5cspec,m5yr);
  // console.log(tmember,tp1,tp2,tp3);

  saveLeaderInfo(lname,lemail,lmobile,lcollege,lcname,lcspec,lyr,
    m1name,m1email,m1mobile,m1college,m1cname,m1cspec,m1yr,
    m2name,m2email,m2mobile,m2college,m2cname,m2cspec,m2yr,
    m3name,m3email,m3mobile,m3college,m3cname,m3cspec,m3yr,
    m4name,m4email,m4mobile,m4college,m4cname,m4cspec,m4yr,
    m5name,m5email,m5mobile,m5college,m5cname,m5cspec,m5yr,
    m6name,m6email,m6mobile,m6college,m6cname,m6cspec,m6yr,
    m7name,m7email,m7mobile,m7college,m7cname,m7cspec,m7yr,
    m8name,m8email,m8mobile,m8college,m8cname,m8cspec,m8yr,
    m9name,m9email,m9mobile,m9college,m9cname,m9cspec,m9yr,
    tmember,tp1,tp2,tp3);
  // saveMember1Info(m1name,m1email,m1mobile,m1college,m1cname,m1cspec,m1yr);
  // saveMember2Info(m2name,m2email,m2mobile,m2college,m2cname,m2cspec,m2yr);
  // saveMember3Info(m3name,m3email,m3mobile,m3college,m3cname,m3cspec,m3yr);
  // saveMember4Info(m4name,m4email,m4mobile,m4college,m4cname,m4cspec,m4yr);
  // saveMember5Info(m5name,m5email,m5mobile,m5college,m5cname,m5cspec,m5yr);
  // saveTeamInfo(tmember,tp1,tp2,tp3);
   alert('Your form has been submitted for rounf 2.');
  document.querySelector('.register-form').reset();
}

function   saveLeaderInfo(lname,lemail,lmobile,lcollege,lcname,lcspec,lyr,
  m1name,m1email,m1mobile,m1college,m1cname,m1cspec,m1yr,
  m2name,m2email,m2mobile,m2college,m2cname,m2cspec,m2yr,
  m3name,m3email,m3mobile,m3college,m3cname,m3cspec,m3yr,
  m4name,m4email,m4mobile,m4college,m4cname,m4cspec,m4yr,
  m5name,m5email,m5mobile,m5college,m5cname,m5cspec,m5yr,
  m6name,m6email,m6mobile,m6college,m6cname,m6cspec,m6yr,
  m7name,m7email,m7mobile,m7college,m7cname,m7cspec,m7yr,
  m8name,m8email,m8mobile,m8college,m8cname,m8cspec,m8yr,
  m9name,m9email,m9mobile,m9college,m9cname,m9cspec,m9yr,
  tmember,tp1,tp2,tp3){

  let leader = registration.push();

  leader.set({
    leaderName: lname,
    leaderEmail: lemail,
    leaderWhatsApp: lmobile,
    leaderCollege: lcollege,
    leaderCourse: lcname,
    leaderCranch: lcspec,
    leaderYear: lyr,

    member1Name: m1name,
    member1Email: m1email,
    member1WhatsApp: m1mobile,
    member1College: m1college,
    member1Course: m1cname,
    member1Branch: m1cspec,
    member1Year: m1yr,

    member2Name: m2name,
    member2Email: m2email,
    member2WhatsApp: m2mobile,
    member2College: m2college,
    member2Course: m2cname,
    member2Branch: m2cspec,
    member2Year: m2yr,

    member3Name: m3name,
    member3Email: m3email,
    member3WhatsApp: m3mobile,
    member3College: m3college,
    member3Course: m3cname,
    member3Branch: m3cspec,
    member3Year: m3yr,

    member4Name: m4name,
    member4Email: m4email,
    member4WhatsApp: m4mobile,
    member4College: m4college,
    member4Course: m4cname,
    member4Branch: m4cspec,
    member4Year: m4yr,

    member5Name: m5name,
    member5Email: m5email,
    member5WhatsApp: m5mobile,
    member5College: m5college,
    member5Course: m5cname,
    member5Branch: m5cspec,
    member5Year: m5yr,

    member6Name: m6name,
    member6Email: m6email,
    member6WhatsApp: m6mobile,
    member6College: m6college,
    member6Course: m6cname,
    member6Branch: m6cspec,
    member6Year: m6yr,

    member7Name: m7name,
    member7Email: m7email,
    member7WhatsApp: m7mobile,
    member7College: m7college,
    member7Course: m7cname,
    member7Branch: m7cspec,
    member7Year: m7yr,

    member8Name: m8name,
    member8Email: m8email,
    member8WhatsApp: m8mobile,
    member8College: m8college,
    member8Course: m8cname,
    member8Branch: m8cspec,
    member8Year: m8yr,

    member9Name: m9name,
    member9Email: m9email,
    member9WhatsApp: m9mobile,
    member9College: m9college,
    member9Course: m9cname,
    member9Branch: m9cspec,
    member9Year: m9yr,

    totalMembers: tmember,
    teamPref1: tp1,
    teamPref2: tp2,
    teamPref3: tp3,
  });
}

// function saveMember1Info(m1name,m1email,m1mobile,m1college,m1cname,m1cspec,m1yr){

//   let member1 = registration.push();

//   member1.set({
//     member1Name: m1name,
//     member1Email: m1email,
//     member1WhatsApp: m1mobile,
//     member1College: m1college,
//     member1Course: m1cname,
//     member1Cranch: m1cspec,
//     member1Year: m1yr,
//   });

// }

// function saveMember2Info(m2name,m2email,m2mobile,m2college,m2cname,m2cspec,m2yr){

//   let member2 = registration.push();

//   member2.set({
//     member2Name: m2name,
//     member2Email: m2email,
//     member2WhatsApp: m2mobile,
//     member2College: m2college,
//     member2Cranch: m2cspec,
//     member2Year: m2yr,
//   });

// }

// function saveMember3Info(m3name,m3email,m3mobile,m3college,m3cname,m3cspec,m3yr){

//   let member3 = registration.push();

//   member3.set({
//     member3Name: m3name,
//     member3Email: m3email,
//     member3WhatsApp: m3mobile,
//     member3College: m3college,
//     member3Course: m3cname,
//     member3Cranch: m3cspec,
//     member3Year: m3yr,
//   });

// }

// function saveMember4Info(m4name,m4email,m4mobile,m4college,m4cname,m4cspec,m4yr){

//   let member4 = registration.push();

//   member4.set({
//     member4Name: m4name,
//     member4Email: m4email,
//     member4WhatsApp: m4mobile,
//     member4College: m4college,
//     member4Course: m4cname,
//     member4Cranch: m4cspec,
//     member4Year: m4yr,
//   });
// }

// function saveMember5Info(m5name,m5email,m5mobile,m5college,m5cname,m5cspec,m5yr){

//   let member5 = registration.push();

//   member5.set({
//     member5Name: m5name,
//     member5Email: m5email,
//     member5WhatsApp: m5mobile,
//     member5College: m5college,
//     member5Course: m5cname,
//     member5Cranch: m5cspec,
//     member5Year: m5yr,
//   });

// }

// function saveTeamInfo(tmember,tp1,tp2,tp3){

//   let team = registration.push();

//   team.set({
//     totalMembers: tmember,
//     teamPref1: tp1,
//     teamPref2: tp2,
//     teamPref3: tp3,
//   });

// }

//image upload
function upload() {
  //get your select image
  var image=document.getElementById("image").files[0];
  //now get your image name
  var imageName=image.name;
  //firebase  storage reference
  //it is the path where yyour image will store
  var storageRef=firebase.storage().ref('secondRound/'+imageName);
  //upload image to selected storage reference

  var uploadTask=storageRef.put(image);

  uploadTask.on('state_changed',function (snapshot) {
      //observe state change events such as progress , pause ,resume
      //get task progress by including the number of bytes uploaded and total
      //number of bytes
      var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log("upload is " + progress +" done");
      alert('Image uploaded');
  },function (error) {
      //handle error here
      console.log(error.message);
  },function () {
     //handle successful uploads on complete

      uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
          //get your upload image url here...
          console.log(downlaodURL);
      });
  });
  
}