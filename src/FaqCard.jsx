import Faq from "./Faq";

export default function FaqCard() {
  return (
    <div className="faq-card">
      <div className="">
        <img src="/images/icon-star.svg" alt="" />
        <h1>FAQs</h1>
      </div>
      <ul>
        <Faq />
      </ul>
    </div>
  );
}

;