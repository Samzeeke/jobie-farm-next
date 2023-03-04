import Image from 'next/image'

export default function HomeAbout() {
  return (
    <section className="about-section relative padding-tb bg-ash">
      <div className="container">
        <div className="row mb-15">
          <div className="col-xl-7 col-12">
            <div className="about-left-part">
              <div className="about-item">
                <div className="about-inner">
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/about/05.jpg"
                      alt="about"
                    />
                  </div>
                  <div className="about-content w-100">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className="ml-auto mr-auto"
                        src="/assets/images/about/icon/01.png"
                        alt="about Image"
                      />
                    </div>
                    <div className="ac-content">
                      <h6>Daily 700+ Collect</h6>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-item">
                <div className="about-inner">
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/about/06.jpg"
                      alt="about"
                    />
                  </div>
                  <div className="about-content">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className="ml-auto mr-auto"
                        src="/assets/images/about/icon/02.png"
                        alt="about Image"
                      />
                    </div>
                    <div className="ac-content">
                      <h6>500+ Chicken</h6>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-item">
                <div className="about-inner">
                  <div className="about-thumb">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/about/07.jpg"
                      alt="about"
                    />
                  </div>
                  <div className="about-content w-100">
                    <div className="ac-thumb">
                      <Image
                        width={100}
                        height={100}
                        className="ml-auto mr-auto"
                        src="/assets/images/about/icon/03.png"
                        alt="about Image"
                      />
                    </div>
                    <div className="ac-content">
                      <h6>Daily 100kg+ Meet</h6>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12">
            <div className="about-wrapper p-0">
              <div className="about-title">
                <h2>
                  <span className="d-lg-block">Welcome to Jobie</span>
                  <span className="d-lg-block"> Agro Farm</span>
                </h2>
              </div>
              <div className="about-content">
                <p>
                  Our vision and experience is designing and building
                  residential gated communities and investment opportunities. We
                  exhibits the most superior standards in terms of quality and
                  yet remains affordable to the masses. We specialise in
                  hatching of different types of fertilized eggs and breeding
                  and rearing layers and boilers. We supply day old chicks of
                  different breeds and commercial eggs within Abia state and
                  outside the state. At Jobie Agro farm we have over 5 thousand
                  yam plantation stands that will be heavest around November
                  sale at affordable price. We build local made battery cages
                  for layers for small farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
