import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `TAKWORLD Experts Limited is an incorporated engineering and Infrastructure development firm. It continues to grow and develop progressively over years During which it has been providing expertise in Structural Designs, Cost control and Valuations, Cost analysis and advice for A variety of engineering projects`,
    `TAKWORLD Experts Limited has on several occasions handled Projects in association with a number of consulting firms; this Arrangement has been on a job-to-job basis.`,
    `We employ the highest ethical standards and believe that our continued success is based upon sustaining the relationships that keep our business growing. We believe that open and honest communication is vital to the lasting success of the firm.`,
    `We remain accountable to our clients for the efficient execution of any project.  We will work to identify and execute cost savings wherever we can.`,
    `We believe that an open culture characterised by mutual respect, sharing of ideas and a commitment to common goals contributes to the overall productivity of our firm.  Our philosophy is that each team member plays an important role in our company by providing individual expertise and a distinctive perspective to each project that they are involved in.`,
    `In providing professional service we are dedicated to competence, dependability and excellence.  We believe that our projects are a reflection of who we are as a company.`,
    `We are dedicated to not only achieving, but exceeding, client expectations.  Through a strong commitment to the above values, TAKWORLD EXPERTS LTD strives to set ourselves above the rest.`
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                  <strong>{fullTitle} </strong>We will deliver reliable, high quality solutions for infrastructure always ensuring that integrity, safety  and sustainability are at the heart of everything we do
                </p>
                <ol>
                  <li>Providing awesome customer service to our clients.</li>
                  <li>
                    Providing a mixture of services to a variety of industries
                    and geographical locations.
                  </li>
                  <li>
                    Continually improving communications with our customers and
                    between departments.
                  </li>
                  <li>Providing training for personnel’s enhancement.</li>
                  <li>
                    Recruiting and hiring only those who share our vision.
                  </li>
                </ol>
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Vision">
                <strong>{fullTitle} </strong>
                <p>
                  To be the Company of choice for clients in the market, for all our business driven by passion to work, use of cutting edge technology and execution excellence
                </p>
              </AboutCard>
              <AboutCard title="Core Values">
                <p>
                <strong>{title} </strong> ensures that the following core values are met when serving our dear customers and partners.

           
                </p>
                <ul>
                  <li>Professionalism</li>
                  <li>Commitment</li>
                  <li>Integrity</li>
                  <li>Efficiency</li>
                  <li> Customer Service</li>
                </ul>
              </AboutCard>
            </Col>
          </Row>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
