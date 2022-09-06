import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
class AuthController {
    public user: firebase.User;
    private provider = new firebase.auth.GoogleAuthProvider();
    private providerFB = new firebase.auth.FacebookAuthProvider();
    constructor() {
        this.init();
    }

    init() {
        const firebaseConfig = {
            apiKey: "AIzaSyDCeyXF3SFr2Yw0aBZGXhH3-7DSc5LBQUI",
            authDomain: "stencil-auth-firebase.firebaseapp.com",
            projectId: "stencil-auth-firebase",
            storageBucket: "stencil-auth-firebase.appspot.com",
            messagingSenderId: "902268549496",
            appId: "1:902268549496:web:b9073f8603a6c0ceb4708d",
            measurementId: "G-GXVT2MFQ8R"
          };
          
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

          firebase.auth().onAuthStateChanged(user => {
            this.user = user;
          });
    }
    

    async loginAnon(): Promise<firebase.auth.UserCredential>{
        try {
            return await firebase.auth().signInAnonymously();
        } catch (error){
            console.log(error);
        }
    }
    
    async loginGoogle(): Promise<firebase.auth.UserCredential>{
        try {
            const result = await firebase.auth().signInWithPopup(this.provider);
            console.log(result);
            return result;
        } catch (error){
            console.log(error);
        }
    }
    async loginFacebook(): Promise<firebase.auth.UserCredential>{
        try {
            const result = await firebase.auth().signInWithPopup(this.providerFB);
            console.log(result);
            return result;
        } catch (error){
            console.log(error);
        }
    }
}

export const AuthService = new AuthController();