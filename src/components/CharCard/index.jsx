import './style.css'
const CharCard = ({ char: { name, image, status}}) =>{

  return(
    <div className ="card">
      <label>{name}</label>
      <img className ="picture" src={image} alt={status} />
    </div>
  )

}
export default CharCard;
