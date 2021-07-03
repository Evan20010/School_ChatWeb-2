// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCDMXKLnTReGpJleFzth5YLEl5gUSe5ngk",
      authDomain: "school-chat-web.firebaseapp.com",
      databaseURL: "https://school-chat-web-default-rtdb.firebaseio.com",
      projectId: "school-chat-web",
      storageBucket: "school-chat-web.appspot.com",
      messagingSenderId: "569722893313",
      appId: "1:569722893313:web:cecaa9f0a1ebac6c333c00"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output1").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room_name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>"
      document.getElementById("output1").innerHTML += row;
      
      

      //End code
      });
});
}
getData();
function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}