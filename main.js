 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB_qGsiOKc30K5qrI_XJrjQbeC_lZ2JCNM",
    authDomain: "email-form-a68ea.firebaseapp.com",
    databaseURL: "https://email-form-a68ea.firebaseio.com",
    projectId: "email-form-a68ea",
    storageBucket: "email-form-a68ea.appspot.com",
    messagingSenderId: "182875745834",
    appId: "1:182875745834:web:a2d434b184edce6b2e5d53",
    measurementId: "G-KZVHDWVE9P"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
// listen for form submit
document.getElementById('contactform').addEventListener('submit', submitform);
// Submit form
function submitform(e){
e.preventDefault();

//Get values
var name = getInputVal("name");
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message= getInputVal('message');
// Save messages
saveMessages(name,company,email,phone, message)
// Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);
// Clear form
document.getElementById('contactform').reset();
}
// Function to get get form values
function getInputVal(id) {
return document.getElementById(id). value;
}
// Save the messages to firebase
function saveMessages(name, company, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
company: company,
email: email,
phone: phone,
message: message

})

}

