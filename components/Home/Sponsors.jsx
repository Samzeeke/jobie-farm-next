import Image from 'next/image'

export default function Sponsors() {
    return  <div className="sponsor-section padding-tb">
    <div className="container">
      <div className="section-wrapper">
        <div className="sponsor-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="sponsor-item">
                <div className="sponsor-thumb">
                  <a href="#">
                    <Image
                      width={150}
                      height={100}
                      src="/assets/images/sponsor/01.png"
                      alt="sponsor"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <div className="sponsor-thumb">
                  <a href="#">
                    <Image
                      width={250}
                      height={100}
                      src="/assets/images/sponsor/02.png"
                      alt="sponsor"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <div className="sponsor-thumb">
                  <a href="#">
                    <Image
                      width={250}
                      height={100}
                      src="/assets/images/sponsor/03.png"
                      alt="sponsor"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <div className="sponsor-thumb">
                  <a href="#">
                    <Image
                      width={250}
                      height={100}
                      src="/assets/images/sponsor/04.png"
                      alt="sponsor"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <div className="sponsor-thumb">
                  <a href="#">
                    <Image
                      width={250}
                      height={100}
                      src="/assets/images/sponsor/05.png"
                      alt="sponsor"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}