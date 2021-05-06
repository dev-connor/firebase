// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.


// Docs: https://source.corp.google.com/piper///depot/google3/third_party/devsite/firebase/en/docs/auth/web/google-signin.md<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBmn3pvJ3E9Nofp8LpS_UeShLaqKglmZTc",
    authDomain: "test-a19d6.firebaseapp.com",
    databaseURL: "https://test-a19d6-default-rtdb.firebaseio.com",
    projectId: "test-a19d6",
    storageBucket: "test-a19d6.appspot.com",
    messagingSenderId: "437803216708",
    appId: "1:437803216708:web:25f0556124c5274efff111",
    measurementId: "G-B8DPQVNV8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function googleSignInPopup() {
	
	// [START auth_google_provider_create]
  var provider = new firebase.auth.GoogleAuthProvider();
  // [END auth_google_provider_create]
	
  // [START auth_google_signin_popup]
  firebase.auth().signInWithPopup(provider).then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  // [END auth_google_signin_popup]
}

