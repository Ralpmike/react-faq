function Button({ clicked, onClick }) {
  const url = "/images/icon-";
  return <img onClick={onClick} src={`${url}${clicked ? "minus" : "plus"}.svg`} alt="" />;
}

export default Button;