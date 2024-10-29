'use client';
export default function Contact({params}) {
    return (
        <div className="section-signup">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <div className="container">
                <div className="row row-grid justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <h3 className="display-3 text-white">
                            Empower Change
                            <span className="text-white">Support Campaigns</span>
                        </h3>
                        <p className="text-white mb-3">
                            Your contributions matter. Support causes by raising funds or donating to campaigns that resonate with you. Together, we can make a lasting impact.
                        </p>
                    </div>
                    <div className="col-lg-7 mb-lg-auto">
                        <div className="card">
                            <div className="card-body">
                            <div className="contact-boxes">
      <div className="contact-box">
          <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
          </div>
          <div className="contact-info">
              <p>Contact Number</p>
              <span>
                  <a href="tel:1234567890" style={{ color: '#ccc', textDecoration: 'none' }}>(123) 456-7890</a>
              </span>
          </div>
      </div>
      <div className="contact-box">
          <div className="contact-icon">
              <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="contact-info">
              <p>Email ID</p>
              <span>
                  <a href="mailto:support@example.com" style={{ color: '#ccc', textDecoration: 'none' }}>support@example.com</a>
              </span>
          </div>
      </div>
      <div className="contact-box">
          <div className="contact-icon">
              <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="contact-info">
              <p>LinkedIn</p>
              <span>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>Linkedin</a>
              </span>
          </div>
      </div>
      <div className="contact-box">
          <div className="contact-icon">
              <i className="fa-brands fa-telegram"></i>
          </div>
          <div className="contact-info">
              <p>Telegram</p>
              <span>
                  <a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>Telegram</a>
              </span>
          </div>
      </div>
  </div>
  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="section section-download" id="download-section" data-background-color="black">
                <img src="./image/path5.png" className="path" alt="Path decoration" />
                <div className="container">
                    <div className="row row-grid align-items-center my-md">
                        <div className="col-lg-6">
                            <h3 className="text-primary font-weight-light mb-2">We’d Love to Hear From You!</h3>
                            <h4 className="mb-0 font-weight-light">Join us in making a difference. Explore ways you can get involved.</h4>
                        </div>
                        <div className="col-lg-6 text-lg-center">
                            <a id="ViewCampaigns" href="./compaign.html" className="button-4" data-toggle="tooltip" title="Explore Campaigns">
                                <i className="fas fa-search-dollar"></i>
                            </a>
                            <a id="DonateNow" href="./compaign.html" className="button-4" data-toggle="tooltip" title="Donate Now">
                                <i className="fas fa-hand-holding-heart"></i>
                            </a>
                            <a id="StartCampaign" href="../index.html" className="button-4" data-toggle="tooltip" title="Start Your Campaign">
                                <i className="fas fa-bullhorn"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };