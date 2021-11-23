import "./works.css";

function Works() {
  return (
    <>
      {/* WEB DEV SECTION */}
      <section className="works-header-section">
        <h1 className="works-header">WEB DEVELOPMENT</h1>
      </section>
      <div className="works-Container">
      <card className="worksContainer-Card">
        <h1 className="works-header-card-title">JavaScript AI</h1>
        <img
          className="work-example-web"
          src="/HueAi.jpg"
          alt="WebpageExample"
        ></img>
      </card>
      
      
      <card className="worksContainer-Card">
        <h1 className="works-header-card-title">Solar Webpage</h1>
        <img
          className="work-example-web"
          src="/SolarCompany.jpg"
          alt="WebpageExample"
        ></img>
        </card>
      </div>

      
      {/* WEB DEV SECTION END*/}

      {/* PHOTOGRAPHY SECTION */}
      <section className="works-header-section">
        <h1 className="works-header">PHOTOGRAPHY</h1>
      </section>
      <div className="worksContainer">
        {" "}
        <img
          className="work-example-photography"
          src="/009.jpg"
          alt="WebpageExample"
        ></img>
        <img
          className="work-example-photography"
          src="/HOODIE_FILM_001.jpg"
          alt="WebpageExample"
        ></img>
        <img
          className="work-example-photography"
          src="/005.jpg"
          alt="WebpageExample"
        ></img>
      </div>
      {/* PHOTOGRAPHY SECTION END*/}
      <section className="works-header-section">
        <h1 className="works-header">GRAPHIC DESIGN</h1>
      </section>
      <div className="worksContainer"></div>
    </>
  );
}

export default Works;
