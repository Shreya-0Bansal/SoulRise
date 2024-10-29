export const HomePage = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <div className="page-header header-filter">
        <div className="squares square1"></div>
        <div className="squares square2"></div>
        <div className="squares square3"></div>
        <div className="squares square4"></div>
        <div className="squares square5"></div>
        <div className="squares square6"></div>
        <div className="squares square7"></div>
        <div className="container">
          <div className="content-center brand">
            <h1 className="h1-seo">SOULRISE</h1>
            <h3>Connecting hearts, Funding Dreams</h3>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <hr className="line-success"/>
            <h3>About...</h3>
            <p className="about-para">
              Harness the power of community and technology with our innovative fundraising platform.
              Together, we can drive positive change and make a meaningful difference.
            </p>
            <ul className="list-unstyled mt-5">
              <li className="py-2">
                <div className="d-flex align-items-center">
                  <div className="icon icon-success mb-2">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <div className="ml-3">
                    <h6>Share your goals</h6>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="d-flex align-items-center">
                  <div className="icon icon-success mb-2">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                  </div>
                  <div className="ml-3">
                    <h6>Receive Donations</h6>
                  </div>
                </div>
              </li>
            </ul>
            <a href="/create/createId" className="button-5">Campaign Marketplace</a>
          </div>
          <div className="col-lg-6">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./image/a1.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./image/a2.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./image/a3.png" alt="Third slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./image/a4.png" alt="Fourth slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <i className="fa-solid fa-caret-left"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <i className="fa-solid fa-caret-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="section section-nucleo-icons">
        <img src="/assets/image/path3.png" className="path" alt="path" />
        <div className="container">
          <div className="blur-hover">
            <a href="/create/createId">
            <div className="icons-container blur-item on-screen mt-5">
              {/* <!-- Center --> */}
              <i className="icon fa-solid fa-dove"></i>
              {/* <!-- Right 1 --> */}
              <i className="icon icon-sm fa-solid fa-hand-holding-heart"></i>
              <i className="icon icon-sm fa-solid fa-ribbon"></i>
              <i className="icon icon-sm fa-solid fa-seedling"></i>
              {/* <!-- Right 2 --> */}
              <i className="icon fa-solid fa-wand-magic-sparkles"></i>
              <i className="icon fa-solid fa-star"></i>
              <i className="icon fa-solid fa-heart"></i>
              {/* <!-- Left 1 --> */}
              <i className="icon icon-sm fa-solid fa-hand-holding-heart"></i>
              <i className="icon icon-sm fa-solid fa-ribbon"></i>
              <i className="icon icon-sm fa-solid fa-seedling"></i>
              {/* <!-- Left 2 --> */}
              <i className="icon fa-solid fa-wand-magic-sparkles"></i>
              <i className="icon fa-solid fa-star"></i>
              <i className="icon fa-solid fa-heart"></i>
            </div>
              <span className="blur-hidden h4 text-primary">Raise Funds</span>
            </a>
          </div>
        </div>
      </div>

      {/* What we do section */}
      <div className="section section-tabs">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto col-xl-6 mr-auto">
            {/* <!-- Nav tabs --> */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" role="tablist">
                      <i className="fa-solid fa-rocket"></i> 1
                      <h4>Easy Campaign creation</h4>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content tab-space">
                  <div className="tab-pane active" id="link1">
                    <p> SoulRise makes it effortless to create fundraising campaigns. Whether you’re an individual or an organization, you can quickly set up a campaign to support your cause. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 ml-auto col-xl-6 mr-auto">
            {/* <!-- Nav tabs --> */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" role="tablist">
                      <i className="fa-solid fa-rocket"></i> 2
                      <h4>Real Time Progress Tracking</h4>
                    </a> 
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content tab-space">
                  <div className="tab-pane active" id="link1">
                    <p> Stay up to date with your campaign's progress in real time. Monitor how close you are to reaching your fundraising goals, and keep both you and your donors motivated. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 ml-auto col-xl-6 mr-auto">
            {/* <!-- Nav tabs --> */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" role="tablist">
                      <i className="fa-solid fa-rocket"></i> 3
                      <h4>Wide Reach and Social Sharing</h4>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content tab-space">
                  <div className="tab-pane active" id="link1">
                    <p>We make it simple for your donors to share your campaigns on social media platforms, extending your reach and boosting visibility. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 ml-auto col-xl-6 mr-auto">
            {/* <!-- Nav tabs --> */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" role="tablist">
                      <i className="fa-solid fa-rocket"></i> 4
                      <h4>Secure Payment Processing</h4>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content tab-space">
                  <div className="tab-pane active" id="link1">
                    <p> Donations are handled with top-notch security, providing peace of mind to both donors and campaign creators. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div> 
      
      <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>

          <div className="content">
            <div>
              <input type="checkbox" id="question1" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question1" className="question">
                What types of campaigns can I create on SoulRise?
              </label>
              <div className="answers">
                SoulRise allows you to create various types of campaigns, including charity drives, personal fundraisers, community projects, and more. You can set a goal amount, deadline, and provide detailed descriptions to attract donors.
              </div>
            </div>

            <div>
              <input type="checkbox" id="question2" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question2" className="question">
                How can I create a donation campaign?
              </label>
              <div className="answers">
                After signing in, you can create a donation campaign by navigating to the "Create a Campaign" page. Fill out the form with your campaign's details, including the title, description, goal amount, and deadline. You can preview the campaign before submitting it.
              </div>
            </div>

            <div>
              <input type="checkbox" id="question3" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question3" className="question">
                What happens if my campaign doesn’t reach its goal?
              </label>
              <div className="answers">
                If a campaign does not reach its goal by the deadline, it will still receive the funds raised unless otherwise specified. Donors will be notified of the outcome.
              </div>
            </div>

            <div>
              <input type="checkbox" id="question4" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question4" className="question">
                How can I contact support if I have an issue?
              </label>
              <div className="answers">
                If you need assistance, contact the support team through the "Contact Us" page. Fill out the form with your query, and our support team will reply as soon as possible. You can also check the FAQs for answers to common questions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
