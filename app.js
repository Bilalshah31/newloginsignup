let register = () => {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let loader = document.getElementById("loader");
    let loaderText = document.getElementById("loaderText");
    loaderText.style.display = "none";
    loader.style.display ="block";
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`users/${res.user.uid}`).set({
                username : username.value,
                email : email.value ,
                password : password.value,
            })
            .then(()=>{
                  let successDiv = document.getElementById("successDiv");
            successDiv.innerHTML = "User register successfully";
            successDiv.style.display ="block";
            username.value ="";
            email.value ="";
            password.value ="";
            errorDiv.style.display ="none"
            loaderText.style.display = "block";
            loader.style.display ="none"
        setTimeout(()=>{
            window.location = "login.html"
        },1000)
            }) 

        })

        .catch((err)=>{
            let errorDiv =document.getElementById("errorDiv")
            errorDiv.innerHTML =err.message;
            errorDiv.style.display ="block"
            loaderText.style.display = "block";
            loader.style.display ="none"
        })
}



let login = () => {
     let email = document.getElementById("email");
     let password = document.getElementById("password");
     let loader = document.getElementById("loader");
     let loaderText = document.getElementById("loaderText");
     loaderText.style.display = "none";
     loader.style.display ="block";
     
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
     .then((res) => {
    localStorage.setItem('uid',res.user.uid)
    let successDiv = document.getElementById("successDiv");
    successDiv.innerHTML = "User Login successfully";
    successDiv.style.display ="block";
    email.value ="";
    password.value ="";
    errorDiv.style.display ="none"
    loaderText.style.display = "block";
    loader.style.display ="none"
    setTimeout(()=>{
        window.location = "profile.html"
    },1000)
        
     })
     .catch((error) => {
        let errorDiv =document.getElementById("errorDiv")
        errorDiv.innerHTML =err.message;
        errorDiv.style.display ="block"
        loaderText.style.display = "block";
        loader.style.display ="none"
     });

}



// let register = () => {
//     let username = document.getElementById("username");
//     let password = document.getElementById("password");
//     let email = document.getElementById("email");
//     let loader = document.getElementById("loader");
//     let loaderText = document.getElementById("loaderText");
//     loaderText.style.display = "none";
//     loader.style.display ="block";
    
//     firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//         .then((res) => {
//             firebase.database().ref(`users/${res.user.uid}`).set({
//                 username : username.value,
//                 email : email.value ,
//                 password : password.value,
//             })
//             .then(()=>{
//             let successDiv = document.getElementById("successDiv");
//             successDiv.innerHTML = "User register successfully";
//             successDiv.style.display ="block";
//             username.value ="";
//             email.value ="";
//             password.value ="";
//             errorDiv.style.display ="none"
//             loaderText.style.display = "block";
//             loader.style.display ="none"
//         setTimeout(()=>{
//             window.location = "login.html"
//         },1000)
//             }) 

//         })

//         .catch((err)=>{
//             let errorDiv =document.getElementById("errorDiv")
//             errorDiv.innerHTML =err.message;
//             errorDiv.style.display ="block"
//             loaderText.style.display = "block";
//             loader.style.display ="none"
//         })
// }



// let login = () => {
//      let email = document.getElementById("email");
//      let password = document.getElementById("password");
//      let loader = document.getElementById("loader");
//      let loaderText = document.getElementById("loaderText");
//      loaderText.style.display = "none";
//      loader.style.display ="block";
     
//         firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//      .then((res) => {
//     localStorage.setItem('uid',res.user.uid)
//     let successDiv = document.getElementById("successDiv");
//     successDiv.innerHTML = "User Login successfully";
//     successDiv.style.display ="block";
//     email.value ="";
//     password.value ="";
//     errorDiv.style.display ="none"
//     loaderText.style.display = "block";
//     loader.style.display ="none"
//     setTimeout(()=>{
//         window.location = "profile.html"
//     },1000)
        
//      })
//      .catch((error) => {
//         let errorDiv =document.getElementById("errorDiv")
//         errorDiv.innerHTML =err.message;
//         errorDiv.style.display ="block"
//         loaderText.style.display = "block";
//         loader.style.display ="none"
//      });

// }