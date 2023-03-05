import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
  GoogleAuthProvider, 
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const clear = () => {
    setAuthUser(null)
    setLoading(false)
  }

  const signInWithCustomEmailAndPassword = ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<UserCredential | null> =>
    signInWithEmailAndPassword(auth, email, password)

  const createNewUserWithEmailAndPassword = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    await sendEmailVerification(credential.user)
    return credential.user
  }

  const requestForgotPassword = async (email: string) => 
    await sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/?reset-password=ok'
    })
  
  

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const credential = await signInWithPopup(auth, provider)
    return credential.user;
  }

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    return credential.user;
  }

  const updateUsername = (user: User, name: string): Promise<void> =>
    updateProfile(user, {
      displayName: name,
    })

  const signOut = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAuthUser(null)
        setLoading(false)
        return
      }

      setLoading(true)
      var formattedUser = formatAuthUser(user)
      setAuthUser(formattedUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    signInWithCustomEmailAndPassword,
    createNewUserWithEmailAndPassword,
    updateUsername,
    signInWithGoogle,
    signInWithFacebook,
    requestForgotPassword,
    signOut,
  }
}
