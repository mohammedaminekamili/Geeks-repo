import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CardData } from "../App";

interface CardProps {
  card: CardData;
}

function Card({ card }: CardProps) {
  return (
    <>
    <div className="item">
      <FontAwesomeIcon icon={card.icon} className="icon icon_card" size="5x" />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
    </>
  );
}

export default Card;