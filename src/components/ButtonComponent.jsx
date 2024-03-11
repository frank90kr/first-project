//Crea un nuovo componente come funzione, chiamalo ButtonComponent: dovrebbe ritornare un tag ‘button’. Il testo del bottone dovrebbe essere passato tramite le Props del componente e visualizzato in mezzo ai tag  <button></button> .

const ButtonComponent = function (props) {
  return <button className="button">{props.nameButton}</button>;
};

export default ButtonComponent;
