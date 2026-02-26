import React, { useState } from 'react';
import './HomePage.css';
import TestimonialSlider from './TestimonialSlider';
import WinningTeams from './WinningTeam';
import { useEffect } from 'react';
import {
  FiAlertTriangle, FiTarget, FiBarChart2,
  FiCheckCircle, FiStar,
  FiX
} from 'react-icons/fi';


import { useNavigate } from 'react-router-dom';

const clinchLogoFull = "https://static.wixstatic.com/media/b3f9bc_9064d42793e349b2852edee5defdb48a~mv2.png/v1/fill/w_450,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Metro%20Elevator%20Logo_white.png";
const heroBgOrb = "https://clinchit.io/images/UeN8DRPyDg7p.png";
const howItWorksBg = "https://clinchit.io/images/how_it_works.svg";


const featuresData = {
  research: {
    title: 'Walk In Prepared — Every Time',
    points: [
      {
        icon: <FiAlertTriangle className="point-icon" />,
        text: '<strong>20% of a rep’s time</strong> is wasted digging through emails, call notes, LinkedIn, and web pages.',
      },
      {
        icon: <FiTarget className="point-icon" />,
        text: 'Get real-time insights on buyers, accounts, pain points, and opportunity signals—so your team can engage with precision.',
      },
      {
        icon: <FiBarChart2 className="point-icon" />,
        text: '<strong>Increase Win Rates by 35% to 50%</strong> by walking into every conversation armed with the right context.',
      },
    ],
    image: 'https://d3urjsb4t4pqwq.cloudfront.net/assets/Research_Image_V4.svg',
  },
  assist: {
    title: 'Your AI Live Meeting Assistant',
    points: [
      {
        icon: <FiCheckCircle className="point-icon" />,
        text: 'Real-time battle cards and objection handling, delivered to you live as the prospect speaks.',
      },
    ],
    image: 'https://via.placeholder.com/600x450.png?text=Live+Assist+Mockup',
  },
  intelligence: {
    title: 'Unlock Conversational Intelligence',
    points: [
      {
        icon: <FiCheckCircle className="point-icon" />,
        text: 'Transcribe and analyze 100% of your customer conversations to find out what *really* works.',
      },
    ],
    image: 'https://via.placeholder.com/600x450.png?text=Intelligence+Mockup',
  },
  actions: {
    title: 'Execute Actions Automatically',
    points: [
      {
        icon: <FiCheckCircle className="point-icon" />,
        text: 'Automate post-call summaries, CRM updates, and follow-up email drafts instantly.',
      },
    ],
    image: 'https://via.placeholder.com/600x450.png?text=Actions+Mockup',
  },
};
const services = [
  {
    label: 'MAINTENANCE\n& REPAIR',
    img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500&q=80&fit=crop',
    href: '/services#maintenance',
  },
  {
    label: 'MODERNIZATION',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
    href: '/services#modernization',
  },
  {
    label: 'NEW\nINSTALLATION',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80&fit=crop',
    href: '/construction',
  },
  {
    label: 'INSPECTIONS &\nCOMPLIANCE',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80&fit=crop',
    href: '/services#inspection',
  },
]
const reviews = [
  {
    name: '- BEN, BOSTON, MA',
    text: "Metro Elevator has gone above expectations in completing our service contract. When old items fail, the team goes above and beyond explaining the issue and giving fair pricing for the repair. The crew is the best I have ever worked with.",
  },
  {
    name: '- SHEILA, CHARLOTTE, NC',
    text: "They are very professional and always communicated well with our team. We are happy with Metro's service and are slowly working at moving all our elevator service to Metro Elevator.",
  },
  {
    name: '- JONATHAN, NEW YORK, NY',
    text: "They were very professional; met all our requirements and quickly dealt with any issues that we had in a building with many challenges. They were very easy to get a hold of which is paramount in servicing our clients. They are now my go to company.",
  },
]
const divisions = [
  { label: 'NEW YORK METRO', href: '/newyork' },
  { label: 'NEW ENGLAND', href: '/new-england' },
  { label: 'VIRGINIA', href: '/virginia' },
  { label: 'NORTHWEST', href: '/seattle' },
  { label: 'NORCAL', href: '/san-francisco' },
  { label: 'CAROLINAS', href: '/charlotte' },
  { label: 'COASTAL CAROLINA', href: '/coastal-carolina' },
  { label: 'TRIANGLE-TRIAD', href: '/raleigh' },
  { label: 'TEXAS', href: '/dallas' },
  { label: 'UTAH', href: '/utah' },
  { label: 'IOWA', href: '/iowa' },
  { label: 'FLORIDA', href: '/west-florida' },
  { label: 'IDAHO', href: '/idaho' },
  { label: 'NEW JERSEY', href: '/new-jersey' },
  { label: 'KANSAS CITY', href: '/kansas-city' },
  { label: 'NEBRASKA', href: '/nebraska' },
  { label: 'WISCONSIN', href: '/wisconsin' },
  { label: 'MICHIGAN', href: '/michigan' },
  { label: 'PITTSBURGH', href: '/pittsburgh' },
  { label: 'TENNESSEE', href: '/nashville-tn' },
  { label: 'GEORGIA', href: '/georgia' },
]


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('research');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu
  const activeFeature = featuresData[activeTab];
  const navigate = useNavigate();
  const handleClick = () => {


  }

  useEffect(() => {
    if (window.SN_CSM_EC) return; // already loaded

    const script = document.createElement("script");
    script.src =
      "https://bangmetricllcdemo2.service-now.com/scripts/sn_csm_ec.js?v=5.6";
    script.async = true;
    script.onload = () => {
      if (window.SN_CSM_EC) {
        window.SN_CSM_EC.init({
          moduleID:
           "https://bangmetricllcdemo2.service-now.com/#f82c9aa90f977210a3a6c1e800d1b22b",
          loadFeature: window.SN_CSM_EC.loadEMFeature(),
        });
      }
    };
    document.body.appendChild(script);
  }, []);


  return (
    <div className="homepage-wrapper">
      <header className="new-header scrollHeaderGradient">

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <div className="col-span-1">
            <a href="/" className="logo-link-desktop">
              <div className="logo-container">
                <img src={clinchLogoFull} alt="ClinchIt Logo" />
              </div>
            </a>
          </div>
          <div className="col-span-4 nav-links-container">

            <div className="nav-item group">
              <a className="nav-link" href="/customers">About</a>
            </div>

            <div className="nav-item group has-dropdown">
              <div className="nav-link-dropdown">
                Services
              </div>
            </div>

            <div className="nav-item group">
              <a className="nav-link" href="/pricing">Division</a>
            </div>

            <div className="nav-item group">
              <a className="nav-link" href="/pricing">Blog</a>
            </div>

            <div className="nav-item group">
              <a className="nav-link" href="/pricing">ContactUs</a>
            </div>
          </div>
        </div>
      </header>
      <section className="hero">
        <img src={heroBgOrb} alt="Background" className="hero-bg-orb" />

        <div className="hero-video-wrapper">
          <video
            src="https://video.wixstatic.com/video/b3f9bc_7240ba2a2735445c87cd5456c01be5c2/1080p/mp4/file.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          />
        </div>
      </section>
      <section className="about-metro-section">
  <div className="about-metro-container">
    
    {/* Left Image */}
    <div className="about-metro-image">
      <img
        src="https://static.wixstatic.com/media/b3f9bc_714eae7e1f0a4d9fa9ed5ab64bf18561~mv2.jpg/v1/fill/w_735,h_899,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b3f9bc_714eae7e1f0a4d9fa9ed5ab64bf18561~mv2.jpg"
        alt="Metro Elevator Technician"
      />
    </div>

    {/* Right Content */}
    <div className="about-metro-content">
      <h2>
        With Metro Elevator, you’re not just another contract but an essential
        part of our community of long-term partners.
      </h2>

      <div className="about-divider"></div>

      <p>
        For nearly 40 years, Metro Elevator has been an independent,
        American-owned company that has garnered numerous awards for its
        outstanding performance in the elevator industry.
      </p>

      <p>
        We employ industry-leading management staff and top-tier mechanics. Our
        highly experienced elevator technicians have maintained, repaired,
        modernized, and installed every type of elevator equipment on the
        market. Whether it’s hydraulic, traction, machine-room-less,
        commercial, or freight, Metro Elevator has the extensive knowledge and
        expertise to handle your elevator project with precision and
        excellence.
      </p>

      <button className="learn-more-btn">LEARN MORE</button>
    </div>

  </div>
</section>
<section style={{ background: '#ffffff', padding: '70px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(22px, 4vw, 32px)',
            color: '#1B2E5E',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '10px',
          }}>
            OUR SERVICES
          </h2>
          {/* Red underline */}
          <div style={{ width: '60px', height: '3px', background: '#C8102E', margin: '0 auto' }} />
        </div>

        {/* Circle cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          {services.map((svc) => (
            <a
              key={svc.href}
              href={svc.href}
              style={{
                position: 'relative',
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* Background image */}
              <img
                src={svc.img}
                alt={svc.label}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
              {/* Dark navy overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(27, 46, 94, 0.72)',
              }} />
              {/* Label */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                color: '#ffffff',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '0 24px',
                lineHeight: 1.35,
                whiteSpace: 'pre-line',
              }}>
                {svc.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    <section style={{ background: '#1B2E5E' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        minHeight: '520px',
      }}>

        {/* Left — Text */}
        <div style={{
          flex: '0 0 45%',
          padding: '60px 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>

          {/* Heading */}
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '22px',
            color: '#ffffff',
            lineHeight: 1.35,
            marginBottom: '12px',
          }}>
            Nationwide presence with<br />local expertise
          </h2>

          {/* Red underline */}
          <div style={{ width: '50px', height: '3px', background: '#C8102E', marginBottom: '26px' }} />

          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.85,
            marginBottom: '18px',
          }}>
            Each of our Divisions are locally owned and operated, ensuring the highest level of responsiveness and care for your elevator project.
          </p>

          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.85,
            marginBottom: '18px',
          }}>
            Need assistance or have a question? Our local teams are here for you. Being in close proximity to our customers allows us to respond swiftly to your needs. We understand the importance of quick, reliable service, and our local ownership enables us to adapt promptly to changes and address your concerns with efficiency.
          </p>

          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.85,
            marginBottom: '32px',
          }}>
            When you call, we answer - it's that simple.
          </p>

          {/* Red button — centered */}
          <a
            href="/divisions"
            style={{
              display: 'inline-block',
              background: '#C8102E',
              color: '#ffffff',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#a30e25'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#C8102E'}
          >
            FIND A DIVISION NEAR YOU &gt;
          </a>
        </div>

        {/* Right — YouTube + text, all on navy */}
        <div style={{
          flex: '0 0 55%',
          padding: '50px 40px 50px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

          {/* YouTube embed */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            marginBottom: '20px',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0Uf0zSbxQh8"
              title="Metro Elevator Coastal Carolina"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block' }}
            />
          </div>

          {/* Caption text on navy background */}
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.75,
          }}>
            <a href="/coastal-carolina" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}>
              Metro Elevator Coastal Carolina
            </a>{' '}
            services elevators on the entire coastal region of South Carolina from Myrtle Beach all the way down to Savannah, Georgia. We understand the importance of reliable elevators in these challenging environments. From hurricane season to corrosive effects of salty air, our creative and solutions-oriented team is dedicated to ensuring the safety and efficiency of your elevators.{' '}
            <a href="/contact-us" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}>Contact</a>{' '}
            our Metro Elevator Coastal Carolina team today for more information.
          </p>
        </div>
      </div>
    </section>
    <section style={{ background: '#1B2E5E', padding: '70px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(26px, 5vw, 56px)',
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          textAlign: 'center',
          marginBottom: '50px',
        }}>
          WHAT OUR CUSTOMERS SAY
        </h2>

        {/* 3 cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="review-grid"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              style={{
                background: 'linear-gradient(145deg, #b8b8b8 0%, #e0e0e0 20%, #c8c8c8 40%, #eeeeee 60%, #c4c4c4 80%, #d8d8d8 100%)',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '300px',
              }}
            >
              {/* Name */}
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                color: '#1B2E5E',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}>
                {review.name}
              </div>

              {/* Review text */}
              <p style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                color: '#1B2E5E',
                lineHeight: 1.75,
                textAlign: 'center',
                flex: 1,
              }}>
                {review.text}
              </p>

              {/* Closing quote */}
              <div style={{
                textAlign: 'center',
                marginTop: '20px',
              }}>
                <span style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '48px',
                  color: '#1B2E5E',
                  lineHeight: 1,
                  display: 'block',
                }}>
                  &#8221;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .review-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
     <section style={{ background: '#ffffff', padding: '70px 24px 50px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(18px, 3.5vw, 28px)',
          color: '#1B2E5E',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '10px',
        }}>
          PROVIDING ELEVATOR SERVICE NATIONWIDE
        </h2>

        {/* Red underline */}
        <div style={{ width: '60px', height: '3px', background: '#C8102E', margin: '0 auto 40px' }} />

        {/* Actual map image asset */}
        <img
          src="/7.avif"
          alt="Metro Elevator Nationwide Service Map"
          style={{
            width: '100%',
            maxWidth: '760px',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
          }}
        />

      </div>
    </section>
    <section style={{ background: '#ffffff', padding: '0 24px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

        {/* Heading — appears only here, NOT in MapSection */}
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(14px, 2.2vw, 20px)',
          color: '#1B2E5E',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '20px',
          lineHeight: 1.4,
        }}>
          CONTACT ONE OF OUR LOCAL DIVISIONS FOR MORE INFORMATION
        </h2>

        {/* Body text */}
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '15px',
          color: '#1B2E5E',
          lineHeight: 1.85,
          maxWidth: '700px',
          margin: '0 auto 36px',
        }}>
          As the most trusted and reliable elevator servicing company, Metro Elevator provides elevator installation, repair, and maintenance services to clients across the United States through our local divisions. For further information and a complimentary consultation, contact one of our divisions today.
        </p>

        {/* Division buttons — 4 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          marginBottom: '36px',
        }}>
          {divisions.map((div) => (
            <a
              key={div.label}
              href={div.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#1B2E5E',
                color: '#ffffff',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '11.5px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '14px 14px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                lineHeight: 1.2,
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#243F7A'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1B2E5E'}
            >
              <span>{div.label}</span>
              <span style={{ marginLeft: '6px', opacity: 0.8, fontSize: '15px', flexShrink: 0 }}>›</span>
            </a>
          ))}
        </div>

        {/* Footer note with email */}
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '14px',
          color: '#1B2E5E',
          lineHeight: 1.75,
        }}>
          If you're interested in partnering with Metro Elevator but do not see your area listed, contact us at{' '}
          <a
            href="mailto:info@metro-elevator.com"
            style={{ color: '#1B2E5E', textDecoration: 'underline' }}
          >
            info@metro-elevator.com
          </a>
          {' '}and we'll connect you with the appropriate office.
        </p>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .divisions-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
    <div style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: 1.1, textAlign: 'center' }}>
      <div style={{
        color: '#1B2E5E',
        fontWeight: 900,
        fontSize: '38px',
        letterSpacing: '0.38em',
        textTransform: 'uppercase',
      }}>
        — METRO —
      </div>
      <div style={{
        fontWeight: 900,
        fontSize: '48px',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ color: '#1B2E5E' }}>ELEV</span>
        <span style={{ color: '#C8102E' }}>A</span>
        <span style={{ color: '#1B2E5E' }}>TOR</span>
      </div>
    </div>
    <footer style={{ background: '#F5F5F5', padding: '60px 24px 30px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        {/* Large Logo */}

        {/* Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '28px',
        }}>
          <a
            href="/contact-us"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#1B2E5E',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            CONTACT US
          </a>
          <span style={{ color: '#1B2E5E', fontWeight: 300, fontSize: '18px' }}>|</span>
          <a
            href="/careers"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#1B2E5E',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            CAREERS
          </a>
        </div>


        {/* Divider */}
        <div style={{ height: '1px', background: '#dddddd', marginBottom: '20px' }} />

        {/* Copyright */}
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '13px',
          color: '#888888',
        }}>
          © 2025 Metro Elevator. All Rights Reserved.{' '}
          <a href="/terms-of-use" style={{ color: '#888888', textDecoration: 'none' }}>Terms of Use</a>
          {' '}|{' '}
          <a href="/privacy-policy" style={{ color: '#888888', textDecoration: 'none' }}>Privacy Policy</a>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default HomePage;
