import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Section from "../components/Section/Section";

const IndexPage = () => {
  // const COVID_API_URL = "https://api.covid19api.com/summary";
  const COVID_API_URL = "https://coronavirus-19-api.herokuapp.com/all";

  const [infected, setInfected] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    fetch(COVID_API_URL)
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        setIsLoading(false);
        setInfected(response);
      })
      .catch(e => {
        console.log("error", e);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />

      <Section id="infected">
        {isLoading && <h1>0</h1>}

        {infected && infected.cases && (
          <h1>
            <CountUp
              start={0}
              end={infected && infected.cases}
              delay={0}
              duration={5}
              separator="."
            />
          </h1>
        )}

        <p>People infected</p>

        <Link to="/#deaths">next</Link>
      </Section>

      <Section id="deaths">
        {infected && infected.cases && (
          <h1>
            <CountUp
              start={0}
              end={infected && infected.deaths}
              delay={0}
              duration={5}
              separator="."
            />
          </h1>
        )}

        <p>Deaths</p>

        <Link to="/#fuckCovid">next</Link>
      </Section>

      <Section id="fuckCovid">
        <p>Give Covid a fuck off</p>
      </Section>

      <div style={{ height: "2000px" }}></div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
