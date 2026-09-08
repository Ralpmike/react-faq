import Slider from "./Slider";

export default function Accordion() {
  return (
    <div className="accordion_header">
      <div>
        <h2>Testimonials</h2>
        <p>see what people are saying about Futurelabs</p>
      </div>
      <Slider />
    </div>
  );
}
