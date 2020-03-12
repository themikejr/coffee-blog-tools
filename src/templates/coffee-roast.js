import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const CoffeeRoastTemplate = ({ data, pageContext, location }) => {
  console.log(data)
  const roast = data.allRoastsJson.edges[0].node.roast
  const siteTitle = data.site.siteMetadata.title

  const roastLength = roast.computed.totaltime
  const dryLength = roast.computed.dryphasetime
  const dryPercentage = `${Math.round((dryLength / roastLength) * 100)}%`
  const malliardLength = roast.computed.midphasetime
  const malliardPercentage = `${Math.round(
    (malliardLength / roastLength) * 100
  )}%`
  const developmentLength = roast.computed.finishphasetime
  const developmentPercentage = `${Math.round(
    (developmentLength / roastLength) * 100
  )}%`

  const roastLengthMin = Math.floor(roastLength / 60)
  const roastLengthSec = String(Math.floor(roastLength % 60)).padStart(2, "0")
  const roastLengthMinSec = `${roastLengthMin}:${roastLengthSec}`

  const dryLengthMin = Math.floor(dryLength / 60)
  const dryLengthSec = String(Math.floor(dryLength % 60)).padStart(2, "0")
  const dryLengthMinSec = `${dryLengthMin}:${dryLengthSec}`

  const malliardLengthMin = Math.floor(malliardLength / 60)
  const malliardLengthSec = String(Math.floor(malliardLength % 60)).padStart(
    2,
    "0"
  )
  const malliardLengthMinSec = `${malliardLengthMin}:${malliardLengthSec}`

  const developmentLengthMin = Math.floor(developmentLength / 60)
  const developmentLengthSec = String(
    Math.floor(developmentLength % 60)
  ).padStart(2, "0")
  const developmentLengthMinSec = `${developmentLengthMin}:${developmentLengthSec}`

  console.log(dryLength)

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
        <div
          style={{
            width: "100%",
            height: "4rem",
            display: "flex",
            overflow: "none",
            backgroundColor: "white",
          }}
        >
          <div
            className="dry"
            style={{
              width: dryPercentage,
              height: "4rem",
              backgroundColor: "red",
              textAlign: "center",
            }}
          >
            <p>{dryLengthMinSec}</p>
            <p style={{margin: '0'}}>{dryPercentage}</p>
          </div>
          <div
            className="malliard"
            style={{
              width: malliardPercentage,
              height: "4rem",
              backgroundColor: "blue",
              textAlign: "center",
            }}
          >
            <p>{malliardLengthMinSec}</p>
            <p style={{margin: '0'}}>{malliardPercentage}</p>
          </div>
          <div
            className="development"
            style={{
              width: developmentPercentage,
              height: "4rem",
              backgroundColor: "green",
              textAlign: "center",
            }}
          >
            <p>{developmentLengthMinSec}</p>
            <p style={{margin: '0'}}>{developmentPercentage}</p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "2rem",
            display: "flex",
            overflow: "none",
          }}
        >
          <div
            className="dry"
            style={{
              width: dryPercentage,
              height: "2rem",
              textAlign: "center",
              fontSize: "medium",
            }}
          >
            Dry
          </div>
          <div
            className="malliard"
            style={{
              width: malliardPercentage,
              height: "2rem",
              textAlign: "center",
              fontSize: "medium",
            }}
          >
            Malliard
          </div>
          <div
            className="development"
            style={{
              width: developmentPercentage,
              height: "2rem",
              textAlign: "center",
              fontSize: "medium",
            }}
          >
            Development
          </div>
        </div>

        <p><b>Total Roast Time:</b>&nbsp;{roastLengthMinSec}</p>
        <p><b>Weight Loss:</b>&nbsp;{roast.computed.weight_loss}%</p>
        <p><b>Drop Temp (BT):</b>&nbsp;{roast.computed.DROP_BT}&#8457;</p>
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
