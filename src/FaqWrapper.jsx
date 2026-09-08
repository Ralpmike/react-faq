function FaqWrapper({ children }) {
  return (
    <div className="faq-wrapper">
      <img
        src="/images/background-pattern-desktop.svg"
        alt=""
        className="bg-img"
      />
      <div>{children}</div>
    </div>
  );
}

export default FaqWrapper;