// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyACXLjxs8cDhCLWEP2kVeZ0TIxguLrdIDs",
      authDomain: "social-website-3eb90.firebaseapp.com",
      databaseURL: "https://social-website-3eb90-default-rtdb.firebaseio.com",
      projectId: "social-website-3eb90",
      storageBucket: "social-website-3eb90.appspot.com",
      messagingSenderId: "974985185008",
      appId: "1:974985185008:web:511701c5cc3ed49a186435"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name= localStorage.getItem("user name - ");
   document.getElementById("user_name").innerHTML="Welcome "+ user_name;

   function addroom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose: "addding roooom nameee"
      }) ;
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
   }
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name = "+ Room_names);
       var row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoroomname(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user name - ");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}