import Link from 'next/link'

import Form from './Form'
import useFirebaseAuth from './../../hooks/useFirebaseAuth'
import classes from './Login.module.css'

import { useRouter } from 'next/router'
import { useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Login = () => {
  const { signInWithCustomEmailAndPassword } = useFirebaseAuth()
  const [pending, setPending] = useState(false)
  const router = useRouter()

  const signInHandler = async (formData) => {
    // console.log(formData);
    setPending(true)
    try {
      const response = await signInWithCustomEmailAndPassword({
        email: formData.email,
        password: formData.password,
      })
      console.log(response, 'signed in successfully')
      router.push('/')
    } catch (error) {
      console.log('error occured', error.toString())
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <main>
        {/*  */}
        <Header />
        <>
          <div
            className={classes.login}
            data-testid="login__page"
            style={{ marginTop: '120px' }}
          >
            <h1 className={classes.h1}>Welcome back!</h1>
            <Form onSubmit={signInHandler} loading={pending} />

            <p className={classes.p}>
              Do not have an account?
              <Link href="/signup" className={classes.a}>
                Create now
              </Link>
            </p>
          </div>
        </>
        <Footer />
      </main>
    </div>
  )
}

export default Login
