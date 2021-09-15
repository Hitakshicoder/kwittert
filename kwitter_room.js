const firebaseConfig = {
  apiKey: "AIzaSyBVSr0VY5F03AjAGC38W8VIEqO5b1syyTU",
  authDomain: "classtest-ce936.firebaseapp.com",
  projectId: "classtest-ce936",
  storageBucket: "classtest-ce936.appspot.com",
  messagingSenderId: "738479623025",
  appId: "1:738479623025:web:47be34a911220a9d7b84d0"
};
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    