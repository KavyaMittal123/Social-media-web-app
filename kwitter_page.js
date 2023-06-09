var firebaseConfig = {
    apiKey: "AIzaSyCzFitdcoQKUJVrzIKTF4WCaBRrIZEnEZM",
  authDomain: "personal-app-1de28.firebaseapp.com",
  databaseURL: "https://personal-app-1de28-default-rtdb.firebaseio.com",
  projectId: "personal-app-1de28",
  storageBucket: "personal-app-1de28.appspot.com",
  messagingSenderId: "912757759478",
  appId: "1:912757759478:web:a98c2da13df7f89b57fbd7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user name - ");
  room_name=localStorage.getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
  }

  function logout(){
    localStorage.removeItem("user name - ");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];

name_tag= "<h4>"+name+"<img src = 'tick.png' class='user_tick'></h4>";
message_tag= "<h4 class='message_h4'>"+ message+"</h4>";
like_tag= "<button class='btn btn-secondary' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";

span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button> <hr> ";

row = name_tag+message_tag+like_tag+span_tag;

document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function update_like(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(update_like);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}