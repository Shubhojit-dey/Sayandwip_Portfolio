
export default function Quota() {
  return (
    <div className="quote-container">
    <div className="quote-box">
      {/* Top-left quote mark */}
      <span className="quote-symbol quote-symbol-left">“</span>

      {/* Top-right quote mark */}
      <span className="quote-symbol quote-symbol-right">”</span>

      {/* Main quote text */}
      <p className="quote-text">With great power comes great electricity bill</p>

      {/* Author in bottom-right corner */}
      <div className="quote-author">- Dr. Who</div>
    </div>
  </div>
  )
}
