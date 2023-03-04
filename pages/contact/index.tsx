import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Contact() {
  return (
    <>
      <Header />
      {/*  */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay"></div>
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">Poultry Farm Contact us</h4>
            <ul className="lab-ul">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a className="active">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*  */}
      {/*  */}
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="contac-top">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icofont-google-map"></i>
                  </div>
                  <div className="contact-details">
                    <p>
                      4 Oriokuku Street, Glass industry road Aba Abia state.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icofont-phone"></i>
                  </div>
                  <div className="contact-details">
                    <p>+234(0)7088479448</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icofont-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <p>hello@jobieagrofarm.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contac-bottom">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="location-map">
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8219894017325!2d7.380653650719103!3d5.132352396257113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429920f1a07501%3A0x12814cd51424a7b1!2s4%20Isaac%20Close%20off%20Glass%20Industry%20Rd.!5e0!3m2!1sen!2sng!4v1677619915769!5m2!1sen!2sng"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact-form">
                  <form
                    action="#"
                    method="POST"
                    id="commentform"
                    className="comment-form"
                  >
                    <input
                      type="text"
                      name="name"
                      className=""
                      placeholder="Name*"
                    />
                    <input
                      type="email"
                      name="email"
                      className=""
                      placeholder="Email*"
                    />
                    <input
                      type="text"
                      name="subject"
                      className=""
                      placeholder="Subject*"
                    />
                    <textarea
                      name="text"
                      id="role"
                      cols={30}
                      rows={9}
                      placeholder="Message*"
                    ></textarea>
                    <button type="submit" className="lab-btn">
                      <span>Submit Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Footer />
    </>
  )
}
