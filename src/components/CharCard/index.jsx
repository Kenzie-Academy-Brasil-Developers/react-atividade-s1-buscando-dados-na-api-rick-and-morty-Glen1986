import './style.css'
const CharCard = ({ char: {name, image}}) =>{

  return(
    <div className ="card">
      <label>{name}</label>
      <img className ="picture" src={image} alt={name} />
    </div>
  )

}
export default CharCard;
