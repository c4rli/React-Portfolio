import React from "react";

function Home() {
  return (
    <div id="pageWrapper" className="container-fluid p-0">
      <div className="backgroundImage">
        <div className="row justify-content-center text-center w-100">
            <h1>carl[i]++</h1>
            <p>by carli navarro</p>
       </div>
        <div className="row justify-content-end align-items-center w-100">
          <div className="col col-12 col-md-6 px-5">
            <h2>Made by carli.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
              varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
              Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
              imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
              ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
              elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
              consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
            </p>
            <div className="d-flex justify-content-evenly">
              <button>carli</button>
              <button>projects</button>
              <button>contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
