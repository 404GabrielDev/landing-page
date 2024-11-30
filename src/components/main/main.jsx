import "./main.css";
import {
  suv,
  suvMobile,
  whatsapp,
  Cardcar1,
  Cardcar2,
  Cardcar3,
  Cardcar4,
} from "../../assets/images";

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

        <section>
          <div className="title-cards">
            <h1>Best SUV in the city!!!</h1>
          </div>

          <div className="container-cards">
            <div className="card1">
              <img src={Cardcar1} alt="image" />
              <p>
                Com espaço amplo e design robusto, os SUVs são perfeitos para
                famílias e aventuras em qualquer terreno.
              </p>
            </div>

            <div className="card1">
              <img src={Cardcar2} alt="image" />
              <p>
                Os SUVs oferecem design moderno, amplo espaço interno e
                excelente desempenho para qualquer ocasião.
              </p>
            </div>

            <div className="card1">
              <img src={Cardcar3} alt="image" />
              <p>
                Ideais para viagens ou cidade, os SUVs combinam força, conforto
                e segurança em um só veículo.
              </p>
            </div>
          </div>

          <div className="card4">
            <img src={Cardcar4} alt="image" />
            <p>
              Combinando design sofisticado e potência, os SUVs oferecem
              conforto, espaço e segurança, perfeitos para qualquer estilo de
              vida.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
