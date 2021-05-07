// function authStateListener() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    console.warn('로그인을 환영합니다!!');
		console.log(user);
    $(".name").text(user.displayName + '님 환영합니다!!');
    } else {
      // User is signed out
      // ...
      console.warn('로그아웃이 성공적으로 되었습니다!!');
      $(".name").text('게스트');
    }
  });
  // [END auth_state_listener]
// }
function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}