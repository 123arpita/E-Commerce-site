const firebaseConfig = {
    apiKey: "AIzaSyBxF_SQQJWlL9hEFZRRXBS-tOlL3Vu4A0E",
    authDomain: "contactform-c94ba.firebaseapp.com",
    databaseURL: "https://contactform-c94ba-default-rtdb.firebaseio.com",
    projectId: "contactform-c94ba",
    storageBucket: "contactform-c94ba.appspot.com",
    messagingSenderId: "313043428797",
    appId: "1:313043428797:web:6e7fde0799a35cd4ec1ed4"
  };

  firebase.initializeApp(firebaseConfig);

//Reference message collection
var messagesRef = firebase.database().ref('messages');

 //listen for from submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name=getInputVal('name');
    var email=getInputVal('email');
    var number=getInputVal('number');
    var location=getInputVal('location');
    var message=getInputVal('message');

    saveMessage(name,email,number,location,message);

    //enable alert
    document.querySelector('.alert').style.display="block";

    //remove the alert
    setTimeout(()=>{
        document.querySelector('.alert').style.display="none";
    },3000);

    //reset form
    document.getElementById('contactForm').reset();

}

//function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name,email,number,location,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        number:number,
        location:location,
        message:message
    });
}