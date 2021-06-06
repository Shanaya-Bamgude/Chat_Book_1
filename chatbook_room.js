var firebaseConfig = {
    apiKey: "AIzaSyDM9d7AGgh5ct-OoFrn85vs2VOal7Tv5_g",
    authDomain: "chatbook-7042c.firebaseapp.com",
    projectId: "chatbook-7042c",
    storageBucket: "chatbook-7042c.appspot.com",
    messagingSenderId: "756351896133",
    appId: "1:756351896133:web:a4425d42d2ff0fd375712c",
    measurementId: "G-54NVWCL4DC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML
    })
    Group_name = childKey;
    //Start code

    //End code
}
getData();