import { BoxIcon } from "./BoxIcon";
import { Options } from "./Options";
import { useState } from "react";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
  social,
  isMobileView,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="home section" id="home">
      <Options />
      <div className="home__container bd-grid">
        <div className="home__data bd-grid">
          <img
            src={image}
            alt="profile_image"
            className="home__img no-print"
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          />
          <h1 className="home__title">{name}</h1>
          <h3 className="home__profession">{ocupation}</h3>
          <span className="home__information no-print">
            <i className="bx bx-map home__icon" /> {location}
          </span>
        </div>
        <div className="home__contact bd-grid">
          <span className="social__link print">
            <i className="bx bx-map social__icon" /> {location}
          </span>
          <BoxIcon
            className="home__icon bx-envelope"
            label={`Enviar un correo electrónico a ${name}`}
            url={`mailto:${email}`}
          />
          <BoxIcon
            className="home__icon bx-phone"
            label={`Llamar por teléfono a ${name}`}
            url={`tel:${telephone}`}
          />
          {true &&
            social.map((social) => <BoxIcon key={social.name} {...social} />)}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <img src={image} alt="profile_full_image" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};
