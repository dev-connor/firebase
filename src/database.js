var db = firebase.firestore();

function addRecord(){
    db.collection("bbs").add({
        name: "Ada",
        email: "Lovelace",
        eventime: new Date()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}