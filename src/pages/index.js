import React, { useRef, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import clsx from 'clsx'
import { useLocation } from '@reach/router'
// hero images
import imgHero from 'src/images/hero/forex-trader-1920x860.jpg'
import imgHeroRtl from 'src/images/hero/forex-trader-rtl.jpg'
// feature images
import imgFreeWebinars from 'src/images/features/free-webinars.png'
import imgLocalSeminars from 'src/images/features/local-seminars.png'
import imgPracticeAccount from 'src/images/features/practice-account.png'
// payment logo
import imgMastro from 'src/images/payments/maestro.png'
import imgNeteller from 'src/images/payments/neteller.png'
import imgPayza from 'src/images/payments/payza.png'
import imgUnionPay from 'src/images/payments/uniuon-pay.png'
import imgWesternUnion from 'src/images/payments/western-union.png'
import imgMasterCard from 'src/images/payments/master-card.png'
import imgScril from 'src/images/payments/scrill.png'
import imgVisa from 'src/images/payments/visa.png'
import imgWebMoney from 'src/images/payments/web-money.png'
// style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'static/style.css'

export default function Home() {
  const myRef = useRef(null)
  const location = useLocation()
  const [rtl, setRtl] = useState(false)
  const direction = rtl ? 'rtl' : 'auto'
  const executeScroll = () => {
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
  }
  const features = [
    {
      imageSource: imgFreeWebinars,
      title: 'Free Webinars',
      content:
        'Learn Everything you need to know about the forex market, trading strategies and how to manage risk.',
    },
    {
      imageSource: imgLocalSeminars,
      title: 'Local Seminars',
      content:
        'Gain market insights from industry experts and meet forex enthusiasts just like you.',
    },
    {
      imageSource: imgPracticeAccount,
      title: 'Practice Account',
      content:
        'Practice trading forex, gold and CFDs for as long as you like without any risk whatsoever.',
    },
  ]
  const paymentImages = [
    imgMastro,
    imgNeteller,
    imgPayza,
    imgUnionPay,
    imgWesternUnion,
    imgMasterCard,
    imgScril,
    imgVisa,
    imgWebMoney,
  ]
  const HeroContent = () => (
    <div className="mt-4 text-white">
      <h1>
        <strong>NEW TO FOREX?</strong>
      </h1>
      <h2 className="text-orange">
        <strong>Learn how to trade & increase your earning potential!</strong>
      </h2>
      <h2 className="mt-4">Register now and get:</h2>
      <ul className="p-0">
        <li>
          <GreenTick />
          <span className="mx-1">Free weekly webinars</span>
        </li>
        <li>
          <GreenTick />
          <span className="mx-1">A risk-free practice account</span>
        </li>
        <li>
          <GreenTick />
          <span className="mx-1">Personal, friendly support</span>
        </li>
      </ul>
      <Button
        className="btn-register-now rounded-0 border-0 mx-auto text-dark mt-3 d-md-block d-lg-none mx-auto text-center"
        onClick={executeScroll}
      >
        <strong>REGISTER NOW</strong>
      </Button>
    </div>
  )
  const GreenTick = () => (
    <img
      src="https://www.forextime.com/sites/default/files/lp/new-homepage/green-tick-small.svg"
      alt="bullet point"
    />
  )

  useEffect(() => {
    if (location.search === '?ltr=1') {
      setRtl(true)
    }
  }, [location])

  return (
    <>
      <section
        dir={direction}
        className="desktop hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${rtl ? imgHeroRtl : imgHero})`,
        }}
      >
        <Container>
          <Row>
            {/* LHS */}
            <Col
              dir={direction}
              lg={{ span: 7 }}
              className={clsx({
                'text-white text-center': true,
                'text-lg-right': rtl,
                'text-lg-left': !rtl,
              })}
            >
              <HeroContent />
            </Col>
            {/* RHS */}
            <Col lg={{ span: 5 }} className="mt-3 d-none d-lg-block">
              <iframe
                src="https://my.forextime.com/en/identity/registration?sbt=Register%20Now&abt=Login%20to%20MyFXTM&theme=black"
                title="Registration"
                className="border-0 w-100 "
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="d-md-block d-lg-none" ref={myRef}>
        <iframe
          src="https://my.forextime.com/en/identity/registration?sbt=Register%20Now&abt=Login%20to%20MyFXTM&theme=black"
          title="Registration"
          className="border-0 w-100 "
        ></iframe>
      </section>
      {/* main */}
      <Container className="mt-5">
        {/* features */}
        <section dir={direction}>
          <Row className="text-center d-flex justify-content-center">
            {features.map((item, index) => (
              <Col key={index} xs={12} sm={4}>
                <Card className="card border-0">
                  <Card.Img
                    variant="top"
                    src={item.imageSource}
                    className="feature-image d-block mx-auto mw-100"
                  />
                  <Card.Body>
                    <Card.Title className="mx-auto">{item.title}</Card.Title>
                    <Card.Text className="mx-auto">{item.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        {/* payment logo */}
        <hr />
        <section dir={direction}>
          <Row className="d-flex justify-content-center my-5">
            {paymentImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="payment logo"
                className="p-1 payment-image "
              />
            ))}
          </Row>
        </section>
      </Container>
    </>
  )
}
