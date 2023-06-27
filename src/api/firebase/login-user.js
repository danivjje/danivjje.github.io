import { firestore, auth } from '@/api/firebase/firebase-init';
import { signInWithEmailAndPassword } from '@firebase/auth';

export const loginUser = async (email, password) => {
    // try {
    return await signInWithEmailAndPassword(auth, email, password);
    // } catch (err) {
    //     console.log('register error: ', err);
    // }
}