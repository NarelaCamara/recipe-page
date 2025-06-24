interface IFood {
  name: string;
  image: string;
  description: string;
  preparation: { total: string; preparation: string; cooking: string };
  ingredents: Array<string>;
  instructions: Array<{ title: string; description: string }>;
  nutrition: Array<{ name: string; porcentaje: string }>;
}

export const Card = ({ food }: { food: IFood }) => {
  return (
    <div className="container__card">
      <img src={food.image} className="card__image" alt="food" />
      <div className="card__section">
        <h2 className="section__title">{food.name}</h2>
        <p className="section__description">{food.description}</p>

        <div className="section__preparation">
          <h3 className="preparation__title">Preparation time</h3>
          <ul>
            <li className="preparation__list">
              <b>Total: </b> {food.preparation.total}
            </li>
            <li className="preparation__list">
              <b>Preparation: </b> {food.preparation.preparation}
            </li>
            <li className="preparation__list">
              <b>Cooking: </b> {food.preparation.cooking}
            </li>
          </ul>
        </div>

        <div className="section__ingredients">
          <h3 className="ingredients__title">Ingredients</h3>
          <ul>
            {food.ingredents.map((e) => (
              <li className="ingredients__list">{e}</li>
            ))}
          </ul>
        </div>
        <hr className="section__line" />

        <div className="section__intructions">
          <h3 className="intructions__title">Intructions</h3>
          <ol>
            {food.instructions.map((e) => (
              <li className="intructions__list">
                <b>{e.title}: </b>
                {e.description}
              </li>
            ))}
          </ol>
        </div>
        <hr className="section__line" />

        <div className="section__nutrition">
          <h3 className="nutrition__title">Nutrition</h3>
          <p className="nutrition__description">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="nutrition_table">
            {food.nutrition.map((e) => (
              <tr className="nutrition__row">
                <td className="nutrition__column__name">{e.name}</td>
                <td className="nutrition__column__porcentaje">
                  <b>{e.porcentaje}</b>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
