import { db, auth } from '../config/firebase';
import { errors } from '../config/constants';
import strings from '../config/languages/es-co.json';

function handleError(error) {
  console.warn('Error: ', error);
  if (error.code === errors.emailAlreadyInUse) {
    return strings.signup.emailAlreadyInUse;
  }
  return strings.signup.errorSignup;
}

export const signUp = async (payload) => {
  try {
    const { email, password, nickname } = payload;
    const response = await auth.createUserWithEmailAndPassword(email, password);
    const {
      user: { uid = null },
    } = response;
    if (uid) {
      const userRef = await db.collection('users').doc(uid);
      await userRef.set({
        uid,
        email,
        nickname,
        isAdmin: false,
      });

      const user = await userRef.get();
      return {
        user: await user.data(),
      };
    } else {
      throw new Error('Error creating the user');
    }
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
