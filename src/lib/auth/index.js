import fbLoginPermissions from '../../constant/index';
import firebase from '../../config/firebase';
import Auth from '../../config/auth';
export const handleFbLogin = () => {
  return new Promise(function (resolve, reject) {
    Auth.Facebook.login(fbLoginPermissions)
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      })
  })
}


export const LoginWithToken = (token) => {
  return new Promise(function (resolve, reject) {
    firebase.auth()
      .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token)).then((data) => {
        return resolve(data);
      }
      ).catch((error) => {
        return reject(error);
      })
  })
}