import { usePaystackPayment } from 'react-paystack'
import { useAuth } from '../../contexts/auth.context'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Form from './Form'
import Bank from './Bank'
import Flutter from './Flutter'

import classes from './Checkouts.module.css'
import { useSelector } from 'react-redux'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
const Checkouts = () => {
  const [bankModal, setBankModal] = useState(false)
  const [flutterModal, setFlutterModal] = useState(false)
  const [checkoutFormData, setCheckoutFormData] = useState(null)
  const [success, setSuccess] = useState(false)

  const { users, carts, totalAmount } = useSelector((state) => state.products)

  const { authUser } = useAuth()
  const config = (email, amount) => ({
    reference: new Date().getTime().toString(),
    email,
    amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY,
  })
  // console.log('config', config(checkoutFormData?.email ?? "",  parseInt(totalAmount) * 100))
  const initializePayment = usePaystackPayment(
    config(checkoutFormData?.email ?? '', parseInt(totalAmount) * 100),
  )
  const router = useRouter()

  useEffect(() => {
    const addToDataBase = async () => {
      // Storing in database
      const docRef = collection(db, 'transactions')
      console.log(docRef)
      await addDoc(docRef, {
        email: checkoutFormData?.email,
        firstname: checkoutFormData?.firstname,
        lastname: checkoutFormData?.lastname,
        address: checkoutFormData?.address,
        zip: checkoutFormData?.zip,
        country: checkoutFormData?.country,
        state: checkoutFormData?.state,
        phone: checkoutFormData?.phone,
        status: 'Success',
        date: new Date().toLocaleDateString(),
        amount: parseInt(totalAmount) * 100,
        paymentType: 'Paystack',
      })
    }
    const createOrder = async () => {
      const signedInUserEmail = authUser?.email
      const user = users.find((user) => user.email === signedInUserEmail)

      const docRef = collection(db, 'orders')
      await addDoc(docRef, {
        totalQuantity: carts.length,
        carts: carts,
        grandTotal: totalAmount,
        paymentStatus: 'Pending',
        orderStatus: 'Pending',
        customerName: user.lastName ? `${user.lastName} ${user.firstName}` : '',
        customerEmail: user.email || '',
        customerPhone: user.phone || '',
      })
    }
    if (success) {
      addToDataBase()
      createOrder()
    }
  }, [success, checkoutFormData, totalAmount, carts, users, authUser])

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference);
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
    router.push('/shop/ps-checkout-success')
  }

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed. setSuccess(true);
  }

  const getFormDatas = (datas) => {
    setCheckoutFormData(datas)
    setTimeout(() => {
      initializePayment(onSuccess, onClose)
    }, 500)
  }

  const closeBank = () => {
    setBankModal(false)
  }
  const closeFlutter = () => {
    setFlutterModal(false)
  }
  return (
    <div className={classes.payment__form}>
      {bankModal && (
        <Bank
          onClose={closeBank}
          totalAmount={totalAmount}
          checkoutFormData={checkoutFormData}
        />
      )}
      {flutterModal && <Flutter onClose={closeFlutter} />}

      <Form
        onPaystack={getFormDatas}
        onBank={() => setBankModal(true)}
        onFlutter={() => setFlutterModal(true)}
      />
    </div>
  )
}
export default Checkouts
