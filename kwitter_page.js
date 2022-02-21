const firebaseConfig = {
      apiKey: "AIzaSyD774lmqju7_hz4fj2kznUsBWilOsmyfOA",
      authDomain: "kitter-ea8b1.firebaseapp.com",
      databaseURL: "https://kitter-ea8b1-default-rtdb.firebaseio.com",
      projectId: "kitter-ea8b1",
      storageBucket: "kitter-ea8b1.appspot.com",
      messagingSenderId: "623450642782",
      appId: "1:623450642782:web:4f90f033822992d6ad97cf",
      measurementId: "G-WG9HWRJ97W"
    };

    firebase.initializeApp(firebaseConfig);
    
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name:username,
            messgae:message,
            like:0
      });
      document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
