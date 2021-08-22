

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        var uid = user.uid;
        firebase.database().ref(`users/${uid}`).once('value', (data) => {
            let username = document.getElementById("username");
            let email = document.getElementById("email");
            let profileUsername = document.getElementById("profile-username");
            let profileEmail = document.getElementById("profile-email");
            username.innerHTML = data.val().username.toUpperCase();
            email.innerHTML = data.val().email
            profileEmail.value = data.val().email
            profileUsername.value = data.val().username

            console.log(data.val())
        })
    } else {
        window.location = "index.html"
    }
});

let logout = () => {
    firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem('uid')
            window.location = "login.html";
        })
}

let saveChanges = () => {
    let profileUsername = document.getElementById("profile-username");
    let username = document.getElementById("username");
    let profilePhone = document.getElementById("profile-phone");
    let profileDob = document.getElementById("profile-dob");
    localStorage.setItem("date",profileDob.value)
    console.log(profileUsername.value)
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref(`users/${user.uid}`).update({username : profileUsername.value , dob : profileDob.value , phone : profilePhone.value})
            .then(()=>{
                let closeBtn = document.getElementById('closeBtn')
                username.innerHTML = profileUsername.value
                closeBtn.click()
            })
        }
    })
}