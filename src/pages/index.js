import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import Section from "../components/Section/Section";
import ButtonLink from "../components/ButtonLink/ButtonLink";

const IndexPage = () => {
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

        <ButtonLink to="/#deaths">Deaths</ButtonLink>
      </Section>

      <Section id="deaths">
        {infected && infected.cases && (
          <h1>
            <CountUp
              start={infected && infected.deaths}
              end={infected && infected.deaths}
              delay={0}
              duration={0}
              separator="."
            />
          </h1>
        )}

        <p>Deaths</p>

        <ButtonLink to="/#fuckCovid">Fuck Covid</ButtonLink>
      </Section>

      <Section id="fuckCovid">
        <p>Give Covid-19 a fuck off & stay safe</p>

        <ButtonLink to="/#thanks">Site info</ButtonLink>
      </Section>

      <Section id="thanks">
        <p>API resource etc...</p>
      </Section>
    </Layout>
  );
};

export default IndexPage;
