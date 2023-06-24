import { signOut } from "@firebase/auth";
import { auth } from '@/api/firebase/firebase-init';

export const signOutUser = () => signOut(auth);