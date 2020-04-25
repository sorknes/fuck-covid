import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import SectionIntro from "../components/SectionIntro/SectionIntro";
import SectionStats from "../components/SectionStats/SectionStats";

// import Image from "../components/image";
// import SEO from "../components/seo";

const IndexPage = () => {
  const COVID_API_URL = "https://coronavirus-19-api.herokuapp.com/all";

  const [stats, setInStats] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    fetch(COVID_API_URL)
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        // setIsLoading(false);
        setInStats(response);
      });
    // .catch(e => {
    //   console.log("error", e);
    //   setIsLoading(false);
    // });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <SectionIntro />
      <SectionStats id="infected" stats={stats && stats.cases} />
      {/* {isLoading ? (
          <h1 className="fc-section__title">0</h1>
        ) : (
          <h1 className="fc-section__title">{stats && stats.cases}</h1>
        )} */}

      <SectionStats id="infected" stats={stats && stats.deaths} />

      {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export default IndexPage;
