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
    document.getElementById("username").innerHTML = "welcome " + username + "!";

    function addroom() {
          roomname = document.getElementById("roomname").value;
          firebase.database().ref("/").child(roomname).update({
                purpose:"adding room name"
          });
          localStorage.setItem("roomname", roomname);
          window.location = "kiwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname = " + Room_names);
      row = "<div class = 'roomname' id = "+ Room_names +" onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");

      window.location = "index.html";
}