import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function About() {
  return (
    <>
      <Header />
      {/*  */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay"></div>
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title" style={{fontSize: '35px'}}>About us</h4>
            <ul className="lab-ul">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a className="active">About</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*  */}
      {/*  */}
      <section className="about-section bg_img relative padding-tb">
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-lg-6 col-12">
              <div className="about-thumb">
                <picture>
                  <img src="/assets/images/about/01.png" alt="about-thumb" />
                </picture>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-wrapper">
                <div className="about-title">
                  <h2>
                    <span className="d-lg-block">Welcome to Jobie </span>
                    Agro Farm.
                  </h2>
                  <p>
                    Jobie Agro Farm was born in 2022 with the aim to serve the l
                    of South-East Region of Nigeria precisely Abia state, Imo
                    state, Rivers State and other neighboring states. Our head
                    office is located at 4 Oriokuku street, Glass Industry Road
                    Aba and farm location at uche’s close Uzo-owo Road Isi-ala
                    Itukpa in Abia State Nigeria. Jobie farm initiative was
                    derived after a terror marketing research on how difficult
                    small farmer owner struggled to order day old chicks and
                    eggs down to hatching different kinds of eggs. We operate in
                    land size of 2.5 acres and we are proud of our huge range of
                    predominantly locally sourced quality produce of organic
                    products. We love working with independent suppliers who are
                    as passionate about what they do as we are!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section className="about-section bg_img relative padding-tb">
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-lg-6 col-12">
              <div className="about-wrapper">
                <div className="about-title">
                  <h2>
                    <span className="d-lg-block">Our Values </span>
                  </h2>
                  <p>(Quality & Sustainability)</p>
                  <p>
                  &quot;Let food be thy medicine, and medicine be thy food&quot;. A
                    beautiful saying that we follow in every step of our
                    produce. Our organic production prioritizes your health &
                    ensures no harm is made to the environment. Also, the
                    production goes through multiple quality checks before they
                    are delivered to your doorstep.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="about-thumb">
                <picture>
                  <img src="/assets/images/about/02.png" alt="about-thumb" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}


      {/*  */}
      <section className="about-section bg_img relative padding-tb">
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-lg-6 col-12">
              <div className="about-wrapper">
                <div className="about-title">
                  <h2>
                    What We Do 
                  </h2>
                  <p>Various Farming Is Mainstay For Us</p>
                  <p>
                    Agriculture is the mainstay of economy because of its high
                    share in employment and livelihood creation. It&apos;s also an
                    important source of raw material and demand for many
                    industrial products .
                  </p>
                  <p> Agro Farming</p>
                  <p>
                    Agro Farming is advance form of traditional agriculture
                    basically it is a skill of cultivating plants and live
                    stock..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-wrapper">
                <div className="about-title">
                  <h2>
                    <span className="d-lg-block">Sustainability </span>
                  </h2>
                  <p>
                    We believe in leaving no one behind. It&apos;s only fair if we
                    make sure our fellow farmers grow with us. Our goal is to
                    eliminate the concept of dependency on food imports. Thus,
                    growing everything locally itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <div className='border h-80 bg-black bg-contain object-contain' style={{backgroundImage: `url("/assets/images/banner/bg-images/01.jpg")`}}>
       
      </div>

      {/*  */}
      <section className="about-section bg_img relative padding-tb">
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-lg-6 col-12">
              <div className="about-wrapper">
                <div className="about-title">
                  <h2>
                    <span className="d-lg-block">Our Mission</span>
                  </h2>
                  <p>
                    The mission of Jobie Agro farm is to provide an outstanding
                    level of service and expertise in the real estate market
                    that is innovative and ambitious. The Jobie Agro Farm is
                    dedicated to the highest standards, systems and performance
                    necessary to fulfill all of your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="about-wrapper">
                <div className="about-title">
                  <h2>
                    <span className="d-lg-block">Our Vision </span>
                  </h2>
                  <p>
                  &quot;Our Vision is to change the way people perceive farming,
                    one farm at a time.&quot; Change could be uncomfortable but it&apos;s
                    necessary. The traditional methods being used in farming
                    have to go away to pave the way for modern methods. Jobie
                    Agro farms is just a beginning for all the other farms that
                    will adapt to the innovative ways of farming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}


      {/* Footer */}
      <Footer />
    </>
  )
}
