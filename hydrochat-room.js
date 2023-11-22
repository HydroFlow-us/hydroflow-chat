// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


var firebaseConfig = {

      apiKey: "AIzaSyA1pFotZpkolFwUnHNqq9otI8QsF1gG1XI",
  
      authDomain: "hydrochat-34c9c.firebaseapp.com",
  
      databaseURL: "https://hydrochat-34c9c-default-rtdb.firebaseio.com",
  
      projectId: "hydrochat-34c9c",
  
      storageBucket: "hydrochat-34c9c.appspot.com",
  
      messagingSenderId: "867188845472",
  
      appId: "1:867188845472:web:76700792554bb68d23d2c5",
  
      measurementId: "G-PX8YKSQNEB"
  
    }; 
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";
  
  function addRoom(){
      
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "hydrochat_chatroom.html";


  }

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name:" + Room_names);
      row = "<div> class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "hydrochat_chatroom.html";
}