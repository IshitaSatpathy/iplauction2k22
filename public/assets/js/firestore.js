// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvH8s6ooJT8LUtBplkEdEdtj70lyEtMpI",
    authDomain: "iplauction2k22.firebaseapp.com",
    databaseURL: "https://iplauction2k22-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iplauction2k22",
    storageBucket: "iplauction2k22.appspot.com",
    messagingSenderId: "764564653920",
    appId: "1:764564653920:web:2d8a9c728e1c1356060005"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)
const entriesCollection = collection(db, 'payment')

const form  = document.querySelector('#registration-form')
console.log(form)
const success = document.querySelector('#regs')

/*const error = document.querySelector('#pitchdeck-error')
const loading = document.querySelector('#pitchdeck-loading')
const success = document.querySelector('#form-success')

const showError = () => {
    error.style.display = 'block';
}

const showLoading = () => {
    loading.classList.toggle('d-flex', true)
    loading.classList.toggle('d-none', false)
}*/

const showSuccess = () => {
    form.style.display = 'none'
    success.innerHTML = 'Registration successful!!'
    success.style.color='#35A535'
}

/*const hideHelpers = () => {
    error.style.display = 'none'
    loading.classList.toggle('d-flex', false)
    loading.classList.toggle('d-none', true)
}*/

form.addEventListener('submit', e => {
    e.preventDefault()
    //hideHelpers()
    //showLoading()
    const file = form.pays.files[0]
    const data = {
        leader: {
            name: form.tlname.value,
            email: form.email.value,
            mobile: parseInt(form.mobile.value),
            institute: form.college.value,
            course: form.coursename.value,
            coursespec: form.coursespec.value,
            studyyear: form.studyyear.value,
        },
        teamSize: parseInt(form.teammembers.value),
        members: [form.t1name.value,form.t2name.value,form.t3name.value,form.t4name.value],
        teampref: [form.teampreference1.value,form.teampreference2.value,form.teampreference3.value],

        createdAt: new Date()
    }
    console.log({data, file})
    const newFileRef = ref(storage, 'payment/' + uuidv4() + '-' + data.teamName + '-' + file.name)
    const metadata = {
        contentType: file.type
    }
    uploadBytes(newFileRef, file, metadata)
        .then(snapshot => {
            //hideHelpers()
            console.log('uploaded', snapshot)
            return getDownloadURL(snapshot.ref)
        })
        .then(url => {
            data['paymentss'] = url
            return addDoc(entriesCollection, data)
        })
        .then(data=>showSuccess())
        .catch(
            error => console.log(error)
        )
})

// extra
/*const splBtn = document.querySelector('#special-register-button')
const headerSection = document.querySelector('#header')
const registerSection = document.querySelector('#services')
const navLinks = document.querySelectorAll('#navbar ul li a')

console.log({splBtn, headerSection, registerSection, navLinks})

splBtn.addEventListener('click', e => {
  console.log('clicked')
  headerSection.classList.toggle('header-top', true)
  registerSection.classList.toggle('section-show', true)
  navLinks.forEach((link, idx) => {
    if(idx === 3) {
        link.classList.toggle('active', true)
    } else {
        link.classList.toggle('active', false)
    }
  })
})*/