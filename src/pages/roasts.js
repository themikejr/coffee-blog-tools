import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/main.scss"

const RoastsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Coffee Roasts" />
      <h2>Roast Log</h2>
      <table>
        <thead>
          <tr>
            <th>{"Date"}</th>
            <th>{"Coffee Name"}</th>
            <th>{"Batch No."}</th>
            <th>{"Weight Loss"}</th>
            <th>{"Roast Length"}</th>
          </tr>
        </thead>
        {data.allRoastsJson.edges.map(edge => {
          const roast = edge.node.roast
          const roastLengthMin = Math.floor(roast.computed.DROP_time / 60)
          const roastLengthSec = String(
            Math.floor(roast.computed.DROP_time % 60)
          ).padStart(2, "0")
          const roastLength = `${roastLengthMin}:${roastLengthSec}`
          return (
            <tr>
              <td>{roast.roastisodate}</td>
              <td>{roast.title}</td>
              <td>
                <Link to={edge.node.id}>{roast.roastbatchnr}</Link>
              </td>
              <td>{roast.computed.weight_loss}</td>
              <td>{roastLength}</td>
            </tr>
          )
        })}
      </table>
    </Layout>
  )
}

export default RoastsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allRoastsJson(sort: { fields: [roast___roastisodate], order: DESC }) {
      edges {
        node {
          roast {
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
            zmax
            zmin
            externaloutprogram
            uneven
            title
            roasttime
            roastbatchprefix
            roastertype
            mode
            xmax
            roastepoch
            roastdate
            ambient_humidity
            scorching
            version
            roastbatchnr
            beansize
            samplinginterval
            divots
            flavoraspect
            beans
            moisture_roasted
            ground_color
            greens_temp
            flavorstartangle
            operator
            ambientTemp
            whole_color
            ymin
            lightCut
            ymax
            roastbatchpos
            moisture_greens
            color_system
            oily
            roastisodate
            lowFC
            externalprogram
            volumeCalcWeightIn
            drops
            tipping
            darkCut
            volumeCalcWeightOut
            xmin
            roastingnotes
            cuppingnotes
            heavyFC
            oversampling
            roasttzoffset
            revision
            backgroundpath
          }
        }
      }
    }
  }
`
