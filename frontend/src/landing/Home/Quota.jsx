
export default function Quota() {
  return (
    <div className="quote-container">
    <div style={{padding:"1% 20%"}} className="quote-box">
      {/* Top-left quote mark */}
      <span className="quote-symbol quote-symbol-left">“</span>

      {/* Top-right quote mark */}
      <span className="quote-symbol quote-symbol-right">”</span>

      {/* Main quote text */}
      <p className="quote-text">stop dreaming start doing</p>

      {/* Author in bottom-right corner */}
      <div className="quote-author">- Dr. Who</div>
    </div>
  </div>
  )
}
