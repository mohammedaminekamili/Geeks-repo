
function Card({ card, handleClick }) { 
    return (
      <div className="card border p-4 rounded shadow-sm flex justify-between items-center bg-white">
        <span className="font-bold text-blue-600"> {card.votes} </span>
        <span className="text-lg"> {card.name} </span>
        <button 
          onClick={handleClick}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Click here!
        </button>
      </div>
    );
  }
  
  export default Card;