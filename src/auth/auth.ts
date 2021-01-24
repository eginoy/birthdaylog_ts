import firebase from '../firebase'

export function authUser():Promise<firebase.User> {
    return new Promise((resolve,reject) => {
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                resolve(user)
            }else{
                reject()
            }
        })
    })
}

export function googleLogin (){
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
}

export function logout (){
    return firebase.auth().signOut()
}