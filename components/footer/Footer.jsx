import Link from 'next/link';
import { Row, Col } from 'react-simple-flex-grid';
import Container from '../layout/container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  COMPANY_MAP_URL,
  EMAIL_LINK,
  LOCATION,
  CONTACT,
  FACEBOOK_URL,
  TITLE,
  YOUTUBE_URL,
  IG_URL,
} from '../../public/variables/constants';

export default () => {
  return (
    <>
      <div className="footer-section pt-5 py-2">
        <Container>
          <Row>
            <Col md={3} xs={12} className="px-2">
              <div>
                <img src="/image/logo.jpg" alt="logo" className="pt-1"></img>

                <p className="pt-3 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati commodi recusandae
                </p>

                <div className="footer-social-icon py-2">
                  <div>
                    <a href={FACEBOOK_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="facebook-bg"
                      />
                    </a>
                    <a href={IG_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="instagram-bg"
                      />
                    </a>
                    <a href={IG_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="linkedin-bg"
                      />
                    </a>
                    <a href={YOUTUBE_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="youtube-bg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} xs={12} className="px-2">
              <h4 className="quicklink-title">Quick Links</h4>
              <div className="d-flex justify-content-around">
                <ul>
                  <li>
                    <Link href="/">
                      <a href="/">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Home
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/aboutus">
                      <a href="/aboutus">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; About Us
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/services">
                      <a href="/services">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a href="/products">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Products
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a href="/contact-us">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Link href="/blog">
                      <a href="/blog">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a href="/career">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Career
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap">
                      <a href="/sitemap">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Site Map
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy">
                      <a href="/policy">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon"
                        />
                        &nbsp; Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} xs={12} className="px-2">
              <h4>Business Information</h4>
              <p>
                <a
                  href={COMPANY_MAP_URL}
                  className="contact-link"
                  target="_blank"
                >
                  {LOCATION.address}
                </a>
              </p>
              <p>
                <span>Email : </span>
                <a href="/" className="contact-link">
                  {EMAIL_LINK}
                </a>
              </p>
              <p>
                <span>Phone : </span>
                <a
                  href={`tel:${CONTACT.primaryContact}`}
                  className="contact-link"
                >
                  {CONTACT.primaryContact}
                </a>
                <span> , </span>
                <a
                  href={`tel:${CONTACT.secondaryContact}`}
                  className="contact-link"
                >
                  {CONTACT.secondaryContact}
                </a>
              </p>
            </Col>
            <Col md={3} xs={12} className="px-2">
              <h4>Business Hours</h4>
              <p>
                Our support available to help you 24 hours a day, seven days a
                week.
              </p>
              <div className="d-flex justify-content-between pt-3 footer-business-hour">
                <span>Mon-Fri:</span>
                <span>9AM - 5:30PM</span>
              </div>
              <div className="d-flex justify-content-between pt-3 footer-business-hour">
                <span>Sat-Sun:</span>
                <span>Close</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
