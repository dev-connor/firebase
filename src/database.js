var db = firebase.firestore();

function onAddRecord() {
    var _email = $("#exampleInputEmail1").val();
    var _name = $("#exampleInputName").val();
    var _date = new Date();
    var _str = "<tr>";
    _str += "<td>" + _email + "</td>";
    _str += "<td>" + _name + "</td>";
    _str += "<td>" + _date + "</td></tr>";
    $("#tblData").append(_str)
    db.collection("bbs").add({
    name: _name,
    email: _email,
    eventtime: _date
    })
    .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
    console.error("Error adding document: ", error);
    });
    }

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