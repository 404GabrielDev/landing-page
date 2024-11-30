import "./main.css";
import { suv, suvMobile, whatsapp } from "../../assets/images";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="container-background">
            <img src={suvMobile} alt="background" />
          </div>

          <div className="text-overlay">
            <p>
              SUV: conforto, desempenho e liberdade para todas as suas
              aventuras.
            </p>

            <div className="button-overlay">
                <button>Contact</button>
                <img src={whatsapp} alt="icon" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
