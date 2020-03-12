import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const CoffeeRoastTemplate = ({ data, pageContext, location }) => {
  console.log(data);
  const roast = data.allRoastsJson.edges[0].node.roast
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={roast.title} description={"sample"} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {roast.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {roast.roastisodate}
          </p>
        </header>
        <ul>
          <li>{roast.computed.weight_loss}</li>
        </ul>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default CoffeeRoastTemplate

export const pageQuery = graphql`
  query CoffeeRoastById($roastId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allRoastsJson(filter: { id: { eq: $roastId } }) {
      edges {
        node {
          id
          roast {
            title
            roastisodate
            computed {
              volumeout
              total_ts_BT
              DRY_ET
              DRY_time
              total_ts
              DROP_time
              DROP_BT
              weight_loss
              midphasetime
              weightout
              finish_phase_AUC
              AUCbegin
              FCs_ET
              weightin
              TP_time
              TP_BT
              coolphaseeval
              COOL_time
              total_ror
              CHARGE_BT
              midphaseeval
              AUCfromeventflag
              finish_phase_ror
              AUC
              dryphasetime
              mid_phase_ror
              DROP_ET
              FCs_BT
              DRY_BT
              mid_phase_AUC
              dryphaseeval
              COOL_ET
              totaltime
              dry_phase_ror
              finishphaseeval
              finishphasetime
              volumein
              coolphasetime
              COOL_BT
              ambient_temperature
              TP_ET
              MET
              total_ts_ET
              CHARGE_ET
              dry_phase_AUC
              FCs_time
              AUCbase
            }
          }
        }
      }
    }
  }
`
