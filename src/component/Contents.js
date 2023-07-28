import hero from '../images/Hero.png';
import second from '../images/second.png';
import intro from '../images/intro.png';
import copy from '../images/intro copy.png';
import cta from '../images/cta.png';
import price from '../images/Pricing.png';
import footer from '../images/footer.png';
import './Contents.css';

const Contents = () => {
  return (
    <>
      <section className="main">


        <img src={hero} alt='intro' className='img-hero' />

        {/* <div>
            <h1>Introduce Your Product<br /> Quickly & Effectively.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
               Quis maiores minus veritatis blanditiis! Expedita dicta <br />
               officia quasi quos enim quis cupiditate illum, magnam aperiam <br />
               sapiente dolorem perspiciatis vitae voluptatum aspernatur.
            </p>
            <button type="button">
              <a href ="/">Purchase UI Kit</a>
            </button>

            <button type="button">
              <a href ="/">Learn More</a>
            </button>
        </div>

        <div>
          <img src={person} />
        </div> */}
      </section>

      <section className="second">
        <img src={second} alt="text" className='img-sec' />
      </section>

      <section className="third">
        <img src={intro} alt='text' className='img-intro'/>
      </section>

      <section className="copy">
        <img src={copy} alt='text' className='img-copy'/>
      </section>

      <section className="cta">
        <img src={cta} alt='text' className='img-cta'/>
      </section>

      <section className="price">
        <img src={price} alt='text' className='img-price'/>
      </section>

      <section className="footer">
        <img src={footer} alt='text' className='img-footer'/>
      </section>
    </>
  )
}

export default Contents;