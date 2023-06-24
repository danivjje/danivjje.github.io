import { firebaseConfig } from '@/api/firebase/firebase-config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from '@firebase/auth';

export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);