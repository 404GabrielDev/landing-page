import "./Footer.css";
import { instagram, facebook, whatsapp } from '../../assets/images'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const Footer = () => {
  return (
    <>
      <section className="container-footer">
        <div  data-aos="zoom-in" className="container-f1">
          <h1>Landing page</h1>
          <button>Tel. 99 99999-9999</button>
          <button>Tel. 99 99999-9999</button>
          <button>Contact</button>
        </div>

        <div data-aos="zoom-in"  className="container-f2">
          <h2>Menu</h2>
          <ul>
            <li>Services</li>
            <li>Cars</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        <div data-aos="zoom-in" className="container-f3">
          <h2>Receba as atualizações!</h2>
          <div>
            <input type="email" placeholder="nome@email.com" />
            <button type="submit">Enviar</button>
          </div>
        </div>

        <div data-aos="zoom-in" className="container-f4">
          <h2>Redes sociais</h2>
          <div>
            <img src={instagram} alt="icon-instagram" />
            <img src={facebook} alt="icon-facebook" />
            <img src={whatsapp} alt="icon-whatsapp" />
          </div>
        </div>
      </section>

      <section data-aos="zoom-in">
      <div className="container-f5">
          <p>
            © 2024-Best Cars - Seja o piloto da sua própria história -
            Desenvolvido por 404GabrielDev.
          </p>
        </div>
      </section>
    </>
  );
};


export default Footer;
