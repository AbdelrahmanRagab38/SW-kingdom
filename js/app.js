window.addEventListener("resize", function () {
  if (window.innerWidth < 767) {
    $("#order").addClass("order-2");
  } else {
    $("#order").removeClass("order-2");
  }
});

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmBOGgLcAlaiRzP_5-qeBuMm-gnoaG5VU",
    authDomain: "sw-kingdom.firebaseapp.com",
    databaseURL: "https://sw-kingdom.firebaseio.com",
    projectId: "sw-kingdom",
    storageBucket: "sw-kingdom.appspot.com",
    messagingSenderId: "660072434501",
    appId: "1:660072434501:web:ea93afa504929b0e208c2c",
    measurementId: "G-VK64MQ2X12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.analytics();


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactform').addEventListener('submit',submitform);

function submitform (e){
  e.preventDefault();
  console.log(123);
  var name = getInputval('name');
  var email = getInputval('email');
  var message = getInputval('message');
  console.log(name);
    

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'inline-block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },10000);

  // Clear form
  document.getElementById('contactform').reset();



}

function getInputval(id){
  return document.getElementById(id).value;

}




// Save message to firebase
function saveMessage(name, email, message){
  
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}