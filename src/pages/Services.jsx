import React from "react";

const services = [
  {
    title: "Start a Business in the UK - General Call",
    duration: "15 min",
    price: "£5 GBP",
    description: (
      <>
        Innovator Founder Visa is the UK business visa where your business idea is assessed on <b>innovation, scalability, and viability</b>. If you wish to apply, please keep questions ready, or I will walk you through the entire process on this call.<br /><br />
        <b>Why me?</b><br />
        With over 9 years of experience in the UK, I've been on the UK Tier 1 Graduate Entrepreneur visa, Startup Visa and Innovator visa. Started my career on the student visa with MA in International Relations from Warwick University. I am passionate about helping graduate entrepreneurs and aspiring founders.
        <br /><br />
        <span className="notice">Please note: This is a generic call, and business plans or ideas will not be discussed. This call is restricted to one person only.</span>
      </>
    ),
    booking: "#",
  },
  {
    title: "Start a Business in the UK - 30 minutes",
    duration: "30 min",
    price: "£15 GBP",
    description: (
      <>
        Please use this option if you would like to book a longer call and would like to discuss your business idea(s). You can also book this call to discuss the innovativeness, scalability, or viability of your idea.
        <br /><br />
        <span className="notice">Please note: This is a generic call, and business plans will not be discussed. This call is restricted to one person only.</span>
      </>
    ),
    booking: "#",
  },
  {
    title: "Business Plan Review and Feedback",
    duration: "1 hr",
    price: "£100 GBP",
    description: (
      <>
        Get feedback on the first draft of your business plan based on Innovator Founder Visa endorsement criteria. I’ll review your submission within 48 hours and provide actionable insights to refine your innovation, viability sections, and enhance scalability.
        <br /><br />
        <span className="notice">
          After booking the call, please email your Business plan to <a href="mailto:shiv@avikalimited.co.uk">shiv@avikalimited.co.uk</a>.<br />
          If you would like to sign an NDA, please email me before sharing the Business plan.
          <br /><br />
          Only the first draft/s of the business plan will be discussed. In case of a full business plan review, where the business plan is ready for submission, please send an email to <a href="mailto:shiv@avikalimited.co.uk">shiv@avikalimited.co.uk</a>
          <br /><br />
          This call is restricted to one person only.
        </span>
      </>
    ),
    booking: "#",
  }
];

export default function ServicePage() {
  return (
    <>
      <style>{`
        .services-wrap {
          max-width: 1050px;
          margin: 0 auto;
          padding: 2rem 1rem 4rem 1rem;
          background: #f7fafc;
          border-radius: 1.3rem;
        }
        .services-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .services-header h1 {
          color: #1d3557;
          font-size: 2.1rem;
          margin-bottom: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.6px;
        }
        .service-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 900px) {
          .service-cards-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        .service-card {
          background: #fff;
          border-radius: 1.1rem;
          box-shadow: 0 6px 30px #34529613;
          padding: 2rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 2.5px solid #eaf2ff;
          transition: box-shadow 0.17s, border 0.18s;
        }
        .service-card:hover {
          border-color: #1fd95e;
          box-shadow: 0 8px 40px #1fd95e16;
        }
        .service-title {
          font-size: 1.16rem;
          color: #1d3557;
          font-weight: 700;
          margin-bottom: 0.7rem;
        }
        .service-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          margin-bottom: 0.7rem;
        }
        .service-meta .badge {
          display: inline-block;
          padding: 3px 11px;
          border-radius: 14px;
          font-size: 0.95rem;
          background: #eaf2ff;
          color: #183a63;
          font-weight: 500;
          margin-right: 2px;
        }
        .service-meta .price {
          color: #1fd95e;
          font-size: 1.1rem;
          font-weight: 600;
        }
        .service-desc {
          font-size: 0.98rem;
          color: #29384c;
          margin-bottom: 1.6rem;
        }
        .notice {
          display: block;
          background: #f5fff9;
          color: #136d3a;
          padding: 0.6em 0.8em;
          border-left: 4px solid #1fd95e;
          border-radius: 6px;
          margin-top: 0.9em;
          font-size: 0.95rem;
        }
        .service-book-btn {
          display: inline-block;
          margin-top: auto;
          background: linear-gradient(90deg, #183a63 55%, #1fd95e 130%);
          color: #fff;
          padding: 0.62rem 2.1rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 3px 14px #1fd95e33;
          border: none;
          transition: background 0.18s, box-shadow 0.17s;
        }
        .service-book-btn:hover {
          background: linear-gradient(90deg, #154183 70%, #1fd95e 130%);
          box-shadow: 0 8px 32px #1fd95e44;
        }
      `}</style>
      <div className="services-wrap">
        <div className="services-header">
          <h1>Business Visa & Startup Services</h1>
          <p style={{ color: "#204284", fontSize: "1.14rem", maxWidth: 480, margin: "0 auto" }}>
            Book a 1:1 consultation or business plan review with an expert who’s been through every UK founder visa route.
          </p>
        </div>
        <div className="service-cards-grid">
          {services.map((s, idx) => (
            <div className="service-card" key={s.title}>
              <div className="service-title">{s.title}</div>
              <div className="service-meta">
                <span className="badge">{s.duration}</span>
                <span className="price">{s.price}</span>
              </div>
              <div className="service-desc">{s.description}</div>
              <a href={s.booking} className="service-book-btn">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
