import { auth } from '@/api/firebase/firebase-init';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';

export const registerUser = async (username, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: username });
    return user;
}