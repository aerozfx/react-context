import "./Card.css"

const Card = ({formData}) => {
  let {name, email, image, age} = formData
  return (
    <>
      {Object.keys(formData).length === 0 ? <p>&nbsp;</p> :     
        <article className="profile-card">
          <img src={image} alt={name} />
          <section className="profile-info">
            <span>Nombre: </span>
            <p className="profile-data">{name}</p>
            <span>Email: </span>
            <p className="profile-data">{email}</p>
            <span>Edad: </span>
            <p className="profile-data">{age}</p>
          </section>
        </article>
      }
    </>
  );
};

export default Card;