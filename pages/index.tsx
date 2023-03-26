import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Footer from '../components/Footer'
import Header from '../components/Header'
import BootstrapCarousel from '../components/carousel'

import HomeAbout from '../components/Home/HomeAbout'
import Feature from '../components/Home/Feature'
import HomeProducts from '../components/Home/HomeProducts'
import Services from '../components/Home/Services'
import FarmGallery from '../components/Home/FarmGallery'
import { ProductsActions } from '../store/Products/ProductsSlice'

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (router.query && router.query['reset-password'] === 'ok') {
      console.log('password has been reset')
      window.alert('password has been successfully updated!')
    }
  }, [router.query])
  useEffect(() => {
    ;(async () => {
      const colRef = collection(db, 'products')
      const snapshots = await getDocs(colRef)
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data()
        data.id = doc.id
        return data
      })
      dispatch(ProductsActions.addProducts({ products: docs }))

      const usersRef = collection(db, 'users')
      const usersSnapshots = await getDocs(usersRef)
      const usersDocs = usersSnapshots.docs.map((doc) => {
        const data = doc.data()
        data.id = doc.id
        return data
      })
      dispatch(ProductsActions.addUsers({ users: usersDocs }))
    })()
  }, [dispatch])
  return (
    <div>
      <main>
        {/*  */}
        <Header />
        {/*  */}
        {/* Banner */}
        <BootstrapCarousel />
        {/* Banner */}
        {/* Little About */}
        <HomeAbout />
        {/* Little About */}
        {/* Feature */}
        <Feature />
        {/* Feature */}
        {/* Products */}
        <HomeProducts />
        {/* Products */}
        {/* Poultry farm service */}
        <Services />
        {/* poultry farm service */}
        {/* poultry farm gallery */}
        {/* <FarmGallery /> */}
        {/* poultry farm gallery */}
        {/* Testimonial */}
        {/* Testim */}
        {/* ./Testimonial */}
        {/* Video Section */}
        <div className="video-section padding-tb bg-ash">
          <div className="container">
            <div className="video-section-wrapper mb-15">
              <div className="video-content">
                <Image
                  width={2500}
                  height={1000}
                  src="/assets/images/bg-images/video-bg.jpg"
                  alt="Video-background"
                />
                <a href="https://youtu.be/cvOx1uC1-oA" data-rel="lightcase">
                  <Image
                    width={70}
                    height={50}
                    src="/assets/images/bg-images/yt-icon.png"
                    alt="Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Video Section */}
        {/* Sponsor */}

        {/* ./Sponsor */}
        {/* Footer */}
        <Footer />
        {/* ./Footer */}
      </main>
    </div>
  )
}
