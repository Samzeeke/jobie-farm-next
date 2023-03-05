import { useState } from "react";
import Link from "next/link";
import Form from "./Form";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import classes from "./SignUp.module.css";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
const SignUp = () => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const {
    createNewUserWithEmailAndPassword,
    updateUsername,
    signInWithCustomEmailAndPassword,
    signInWithFacebook,
    signInWithGoogle,
  } = useFirebaseAuth();
  const router = useRouter();

  const signUpHandler = async (formData) => {
    console.log("BeforeSend", formData);

    console.log("BeforeSend", formData);
    console.log("call signup api");
    const { first_name, last_name, email, password } = formData;
    const name = `${first_name} ${last_name}`;

    try {
      setLoading(true);
      const user = await createNewUserWithEmailAndPassword(email, password);
      console.log("user created", user);
      if (user != null) {
        await updateUsername(user, name);
      }

      await signInWithCustomEmailAndPassword(email, password);

      // Adding user to the database
      // Add a new document with a generated id.
      const docRef = collection(db, "users");
      await addDoc(docRef, {
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
      });

      router.push("/login");
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      const fullNameArr = user?.displayName?.split(" ");
      const lastName = fullNameArr[0];
      const firstName = fullNameArr[1];
      const email = user.email;

      // Adding user to the database
      // Add a new document with a generated id.
      const docRef = collection(db, "users");
      await addDoc(docRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: "",
      });

      router.push("/");
    } catch (error) {
      console.log("error while sign in with google", error);
    }
  };

  // const handleSignInFacebook = async () => {
  //   try {
  //     const user = await signInWithFacebook()
  //     console.log('user facebook', user)
  //   } catch (error) {
  //    console.log('error while sign in with facebook', error)
  //   }
  // }

  return (
    <>
      <div className="page">
        <div className="row">
          <div
            className="d-none d-md-block col-md-6 col-sm-hide bg-cover"
            style={{
              backgroundImage: `url("/assets/images/banner/bg-images/01.jpg")`,
              height: "100vh",
            }}
          >
            <div className="bg-black opacity-10 h-100 w-100 absolute top-0 left-0 right-0 bottom-0" />
            <h2 className="text-white font-normal fs-1 z-50 mt-24 text-center">
              Sign up
            </h2>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="px-24 py-10">
              <div className="row">
                <div className="col-sm-12 d-flex justify-content-center">
                  <button
                    className="btn-lg bg-danger text-white"
                    onClick={handleSignInGoogle}
                  >
                    Sign up with Google
                  </button>
                </div>
                {/* <div className="col-sm-6 d-flex justify-content-end">
                  <button className='btn-lg bg-primary text-white' onClick={handleSignInFacebook}>Sign up with Facebook</button>
                </div> */}
              </div>
              <div className="text-center fs-8 mt-10">OR</div>
              {error && (
                <div className={classes.error}>
                  <p>{error}</p>
                </div>
              )}
              <Form
                setError={setError}
                loading={loading}
                onSubmit={signUpHandler}
              />
              <p className={classes.p}>
                Already have an account?
                <Link href="/login" className={classes.a}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
