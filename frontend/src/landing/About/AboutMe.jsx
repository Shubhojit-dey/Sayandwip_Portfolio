export default function AboutMe() {
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <div className="row">
        <div className="col">
          <h2>
            <span style={{ color: "#ff4081" }}>/</span>about-me
          </h2>
        </div>
        <div className="row">
          <div className="col">
            <p style={{marginTop:"2%", fontSize:"1.2rem", marginBottom:"8%"}}>Who am i</p>
          </div>
          <div className="row">
            <div className="col-6">
              <img style={{width:"50%",marginLeft:"25%", marginBottom:"10%" }} src="media/about-me.png"></img>
            </div>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}} className="col-6">
              <p>
                I’m a self-taught Android developer based India. I
                specialize in building native mobile applications from scratch
                and refining them into intuitive, high-performance experiences.
              </p>
              <p>
                Transforming innovative ideas into functional Android apps has
                been my passion for over a year. I’ve collaborated with diverse
                clients to elevate their mobile presence and deliver solutions
                that engage users effectively.
              </p>
              <p>
                I’m constantly exploring the latest Android technologies,
                architecture patterns, and tools to ensure my work aligns with
                modern development standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
