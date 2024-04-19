

function HomeScreen() {
    return (
      <div>
        <div id="home">
          <div className="hero-slidera" id="hp-banner">
            <div className="banner">
              <div className="img-wrapper">
                <picture>
                  <source srcSet="images/banner-businessman.jpg" media="(min-width: 1024px)" />
                  <source srcSet="images/banner_businessman_1024.jpg" media="(min-width: 412px)" />
                  <img srcSet="images/banner_businessman_412.jpg" alt="HOMEPAGE BANNER" data-object-fit="cover" height={600} />
                </picture>
              </div>
              <div className="container home-hero">
                <div className="row row-hero">
                  <div className="col-md-6 offset-md-6 hero-text-col">
                    <div className="text-wrapper lang-en">
                      <h1 className="tag-line">The Global Leader in Residence and Citizenship by Investment</h1>
                      <p className="white">Invest in a secure future today</p>
                      <p className="explore-btn"><a href="/countries" className="btn primary-btn alt" tabIndex={0}>Investment migration programs</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div id="main-home">
          <div className id="tabNavContent">
            <div id className="anchor stacker-anchor" />
            <div className="container slide-in">
              <div className="row">
                <div className="col-md-6">
                  <img loading="lazy" className="section-img img-large-portrait" src="images/passports3.jpg" alt="Citizenship by Investment" data-object-fit="cover" height={586} />
                </div>
                <div className="col-md offset-md-1 home-block lang-en">
                  <h2>The Firm of Global Citizens</h2>
                  <div className="right-normal-text mb30">
                    <p>Henley &amp; Partners is the global leader in residence and citizenship by investment.
                      Each year, hundreds of wealthy individuals and their advisors rely on our expertise and
                      experience in this area. The firm’s highly qualified professionals work together as one
                      team in over 55 offices worldwide.</p>
                    <p>The concept of residence and citizenship by investment was created by Henley &amp;
                      Partners in the 1990s. As globalization has expanded, residence and citizenship have
                      become topics of significant interest among the increasing number of internationally
                      mobile entrepreneurs and investors whom we proudly serve every day.</p>
                  </div>
                  <p className="enquiry-btn-wrapper">
                    <a className="btn secondary-btn secondary-btn-transparent" href="/about">About Henley &amp;
                      Partners</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="container slide-in">
              <div className="row mb-wrapper">
                <div className="col-sm-7 stat-container lang-en">
                  <h2>Why Henley &amp; Partners</h2>
                  <div className="row no-gutters numbers-perex">
                    <p className="mw550 mb45">With over 25 years of institutional experience, Henley &amp; Partners
                      is by far the largest globally integrated residence and citizenship advisory firm in the
                      world. Through the provision of bespoke residence and citizenship by investment
                      solutions, we have helped thousands of individuals and families, their advisors, and
                      many sovereign states to generate value. Our outstanding people and systems provide a
                      world-class advisory service underpinned by strict confidentiality, data security, and
                      limited transaction risk. </p>
                  </div>
                  <div className="row stat-row">
                    <div className="col-md-6 stat-col">
                      <h2 className="mb0 stat-header">55 +</h2>
                      <p className="mb0 stat-text">Offices worldwide</p>
                    </div>
                    <div className="col-md-6 stat-col">
                      <h2 className="mb0 stat-header">25 +</h2>
                      <p className="mb0 stat-text">Years leading the sector</p>
                    </div>
                  </div>
                  <div className="row stat-row">
                    <div className="col-md-6 stat-col">
                      <h2 className="mb0 stat-header">40 +</h2>
                      <p className="mb0 stat-text">Investment migration options</p>
                    </div>
                    <div className="col-md-6 stat-col">
                      <h2 className="mb0 stat-header">25,000 +</h2>
                      <p className="mb0 stat-text">Clients advised</p>
                    </div>
                  </div>
                  <div className="row stat-row">
                    <div className="col-md-6 stat-col">
                      <h2 className="mb0 stat-header">15 +</h2>
                      <p className="mb0 stat-text">Government advisory mandates</p>
                    </div>
                    <div className="col-md-6 stat-col">
                      <h2 className="mb0 stat-header">USD 12 billion +</h2>
                      <p className="mb0 stat-text">FDI raised</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 offset-sm-1">
                  <div>
                    <img loading="lazy" className="section-img img-xl-portrait" src="images/why-henley-and-partners.jpg" alt="test" data-object-fit="cover" height={640} />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-alt alt-bg section-pt-half">
              <div className="container lang-en">
                <div className="row">
                  <div className="col-md">
                    <h2 className="your-journey-h2">Your Journey with Henley &amp; Partners</h2>
                  </div>
                </div>
                <div className="row row-heading section-pb">
                  <div className="col-lg-6 col-md-7">
                    <div className="img-container">
                      <img loading="lazy" src="images/henley_passport_index_.jpg" data-object-fit="cover" alt="Your Journey with Henley & Partners" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5">
                    <div className="col-md col-content desktop-accordion mt-3 mt-md-0" data-collapse="collapsed" id="your-journey">
                      <div className="grid-wrapper">
                        <div className="grid-item-wrapper">
                          <a href="#journey-1" className="btn-wrapper btn btn-style-none grid-item collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="journey-1">
                            <span className="your-journey-counter">1.</span>
                            <h3 className="your-journey-h3 mb0">We advise on the best program for you and
                              your family</h3>
                            <div className="icon-wrapper plus">
                              <img src="images/plus.svg" className="icon" alt="plus" />
                            </div>
                            <div className="icon-wrapper minus">
                              <img src="images/minus.svg" className="icon" alt="minus" />
                            </div>
                          </a>
                          <div className="grid-item section-content collapse" id="journey-1">
                            <div className="row">
                              <div className="your-journey-text">
                                One of our experienced client advisors will carefully assess your
                                personal requirements and help you select the most suitable
                                residence or citizenship by investment program to meet your
                                individual needs and preferences. This initial consultation is free
                                of charge.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item-wrapper">
                          <a href="#journey-2" className="btn-wrapper btn btn-style-none grid-item collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="journey-2">
                            <span className="your-journey-counter">2.</span>
                            <h3 className="your-journey-h3 mb0">We onboard you as a Henley &amp; Partners
                              client</h3>
                            <div className="icon-wrapper plus">
                              <img src="images/plus.svg" className="icon" alt="plus" />
                            </div>
                            <div className="icon-wrapper minus">
                              <img src="images/minus.svg" className="icon" alt="minus" />
                            </div>
                          </a>
                          <div className="grid-item section-content collapse" id="journey-2">
                            <div className="row">
                              <div className="your-journey-text">
                                Before a client agreement is signed and you are invoiced for any
                                services rendered, our compliance team will conduct thorough due
                                diligence on you and any family members included in your
                                application. Once you have passed our due diligence checks, we will
                                onboard you as a client and request a fixed fee for our ongoing
                                services.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item-wrapper">
                          <a href="#journey-3" className="btn-wrapper btn btn-style-none grid-item collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="journey-3">
                            <span className="your-journey-counter">3.</span>
                            <h3 className="your-journey-h3 mb0">We assist you with the entire application
                              process</h3>
                            <div className="icon-wrapper plus">
                              <img src="images/plus.svg" className="icon" alt="plus" />
                            </div>
                            <div className="icon-wrapper minus">
                              <img src="images/minus.svg" className="icon" alt="minus" />
                            </div>
                          </a>
                          <div className="grid-item section-content collapse" id="journey-3">
                            <div className="row">
                              <div className="your-journey-text">
                                A dedicated relationship manager will be appointed to assist you in
                                securing and compiling all necessary supporting documents and
                                completing various government application forms. We will guide and
                                support you throughout this often time-consuming and complex part of
                                the process, including making the final submission to the relevant
                                government authority.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item-wrapper">
                          <a href="#journey-4" className="btn-wrapper btn btn-style-none grid-item collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="journey-4">
                            <span className="your-journey-counter">4.</span>
                            <h3 className="your-journey-h3 mb0">You are granted your new residence or
                              citizenship rights</h3>
                            <div className="icon-wrapper plus">
                              <img src="images/plus.svg" className="icon" alt="plus" />
                            </div>
                            <div className="icon-wrapper minus">
                              <img src="images/minus.svg" className="icon" alt="minus" />
                            </div>
                          </a>
                          <div className="grid-item section-content collapse" id="journey-4">
                            <div className="row">
                              <div className="your-journey-text">
                                Once the relevant government agency has reviewed all documentation,
                                it will conduct its own due diligence checks. If your application is
                                successful, the government will send us an approval-in-principle
                                letter, and you will be asked to fulfill any payment obligations
                                (namely, make the investment, and/or pay the contribution, and/or
                                settle any remaining fees). On receipt of the payments, the
                                government will initiate your residence or citizenship documents.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item-wrapper">
                          <a href="#journey-5" className="btn-wrapper btn btn-style-none grid-item collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="journey-5">
                            <span className="your-journey-counter">5.</span>
                            <h3 className="your-journey-h3 mb0">We will continue to support you</h3>
                            <div className="icon-wrapper plus">
                              <img src="images/plus.svg" className="icon" alt="plus" />
                            </div>
                            <div className="icon-wrapper minus">
                              <img src="images/minus.svg" className="icon" alt="minus" />
                            </div>
                          </a>
                          <div className="grid-item section-content collapse" id="journey-5">
                            <div className="row">
                              <div className="your-journey-text">
                                If you require any further services relating to your residence and
                                citizenship portfolio, we will continue to provide you with all the
                                assistance you need. This includes the provision of any annual
                                declarations, the renewal of your residence permit or passport, the
                                addition of dependents or new spouses to approved applications, and
                                any additional residence or citizenship options you and your family
                                members may wish to acquire.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container slide-in">
              <div className="row pb50">
                <div className="col-lg-3">
                  <h2>Top-Tier Citizenship Programs</h2>
                  <p className="text-link-wrapper"><a className="text-link" href="/citizenship-investment">Citizenship by
                      Investment Programs</a></p>
                </div>
                <div className="col-lg-9 nmb30">
                  <div className="card-grid-container">
                    <div className="card-grid-item">
                      <div className="hp-card with-links">
                        <a href="/citizenship-investment/antigua-barbuda" className="btn-style-none">
                          <img loading="lazy" className="card-crest" src="images/Antigua-Barbuda.png" alt="Antigua and Barbuda" width={45} height={45} />
                          <h3 className="mb15">Antigua and Barbuda</h3>
                          <div className="pb20">
                            <p>Antigua and Barbuda offers one of the most competitive citizenship
                              programs in the Caribbean. Options start from USD 100,000.</p>
                          </div>
                        </a>
                        <div className="links-container">
                          <p className="text-link-wrapper w-100"><a href="/citizenship-investment/antigua-barbuda" className="text-link">Antigua
                              and Barbuda citizenship</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-grid-item">
                      <div className="hp-card with-links">
                        <a href="/citizenship-investment/austria" className="btn-style-none">
                          <img loading="lazy" className="card-crest" src="images/Austria.png" alt="Austria" width={45} height={45} />
                          <h3 className="mb15">Austria</h3>
                          <div className="pb20">
                            <p>Austria has one of the world’s strongest passports. Prospective citizens
                              are required to make a substantial contribution to the country’s
                              economy.</p>
                          </div>
                        </a>
                        <div className="links-container">
                          <p className="text-link-wrapper w-100"><a href="/citizenship-investment/austria" className="text-link">Austria citizenship</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-grid-item">
                      <div className="hp-card with-links">
                        <a href="/citizenship-investment/grenada" className="btn-style-none">
                          <img loading="lazy" className="card-crest" src="images/Grenada.png" alt="Grenada" width={45} height={45} />
                          <h3 className="mb15">Grenada</h3>
                          <div className="pb20">
                            <p>Grenada has the only Caribbean citizenship program that holds an E-2
                              Investor Visa Treaty with the USA, allowing citizens to be eligible to
                              apply for a non-immigrant visa.</p>
                          </div>
                        </a>
                        <div className="links-container">
                          <p className="text-link-wrapper w-100"><a href="/citizenship-investment/grenada" className="text-link">Grenada citizenship</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-grid-item">
                      <div className="hp-card with-links">
                        <a href="/citizenship-investment/malta" className="btn-style-none">
                          <img loading="lazy" className="card-crest" src="images/Malta.png" alt="Malta" width={45} height={45} />
                          <h3 className="mb15">Malta</h3>
                          <div className="pb20">
                            <p>Citizenship by Naturalisation for Exceptional Services by Direct
                              Investment. This process offers the world’s strictest due diligence
                              standards and vetting.</p>
                          </div>
                        </a>
                        <div className="links-container">
                          <p className="text-link-wrapper w-100"><a href="/citizenship-investment/malta" className="text-link">Malta citizenship</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-grid-item">
                      <div className="hp-card with-links">
                        <a href="/citizenship-investment/st-lucia" className="btn-style-none">
                          <img loading="lazy" className="card-crest" src="images/St-Lucia.png" alt="St. Lucia" width={45} height={45} />
                          <h3 className="mb15">St. Lucia</h3>
                          <div className="pb20">
                            <p>The St. Lucia Citizenship by Investment Program offers a real estate
                              development option and visa-free access to over 140 destinations. A
                              donation of USD 100,000 is required.</p>
                          </div>
                        </a>
                        <div className="links-container">
                          <p className="text-link-wrapper w-100"><a href="/citizenship-investment/st-lucia" className="text-link">St. Lucia citizenship</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-grid-item">
                      <div className="hp-card with-links">
                        <a href="/citizenship-investment/turkey" className="btn-style-none">
                          <img loading="lazy" className="card-crest" src="images/crest_turkey.png" alt="Türkiye" width={45} height={45} />
                          <h3 className="mb15">Türkiye</h3>
                          <div className="pb20">
                            <p>The Türkiye Citizenship by Investment Program provides citizenship of a
                              country with links to both Asia and Europe and access to the markets in
                              both regions.</p>
                          </div>
                        </a>
                        <div className="links-container">
                          <p className="text-link-wrapper w-100"><a href="/citizenship-investment/turkey" className="text-link">Türkiye citizenship</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-alt alt-bg alt-card-grid slide-in">
              <div className="container">
                <div className="row pb50">
                  <div className="col-lg-3">
                    <h2>Top-Tier Residence Programs</h2>
                    <p className="text-link-wrapper"><a className="text-link" href="/residence-investment">Residence by
                        Investment Programs</a></p>
                  </div>
                  <div className="col-lg-9 nmb30">
                    <div className="card-grid-container">
                      <div className="card-grid-item">
                        <div className="hp-card with-links">
                          <a href="/residence-investment/canada" className="btn-style-none">
                            <img loading="lazy" className="card-crest" src="images/Canada.png" alt="Canada" width={45} height={45} />
                            <h3 className="mb15">Canada</h3>
                            <div className="pb20">
                              <p>Canada offers two residence programs for investors and entrepreneurs
                                seeking access to this thriving North American market.</p>
                            </div>
                          </a>
                          <div className="links-container">
                            <p className="text-link-wrapper w-100"><a href="/residence-investment/canada" className="text-link">Canada residence</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-grid-item">
                        <div className="hp-card with-links">
                          <a href="/residence-investment/greece" className="btn-style-none">
                            <img loading="lazy" className="card-crest" src="images/Greece.png" alt="Greece" width={45} height={45} />
                            <h3 className="mb15">Greece</h3>
                            <div className="pb20">
                              <p>Under the Greece Golden Visa Program, a minimum real estate
                                investment of EUR 250,000 grants a residence permit, which is
                                acquired within 120 days.</p>
                            </div>
                          </a>
                          <div className="links-container">
                            <p className="text-link-wrapper w-100"><a href="/residence-investment/greece" className="text-link">Greece residence</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-grid-item">
                        <div className="hp-card with-links">
                          <a href="/residence-investment/portugal" className="btn-style-none">
                            <img loading="lazy" className="card-crest" src="images/Portugal.png" alt="Portugal" width={45} height={45} />
                            <h3 className="mb15">Portugal</h3>
                            <div className="pb20">
                              <p>The Portugal Golden Residence Permit Program is a pathway to
                                visa-free travel in Europe’s Schengen Area and offers the right to
                                live, work, and study in Portugal.</p>
                            </div>
                          </a>
                          <div className="links-container">
                            <p className="text-link-wrapper w-100"><a href="/residence-investment/portugal" className="text-link">Portugal residence</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-grid-item">
                        <div className="hp-card with-links">
                          <a href="/residence-investment/spain" className="btn-style-none">
                            <img loading="lazy" className="card-crest" src="images/spain_crest.png" alt="Spain" width={45} height={45} />
                            <h3 className="mb15">Spain</h3>
                            <div className="pb20">
                              <p>The Spain Residence by Investment Program is a pathway to visa-free
                                travel in Europe’s Schengen Area and offers the right to live, work,
                                and study in Spain.</p>
                            </div>
                          </a>
                          <div className="links-container">
                            <p className="text-link-wrapper w-100"><a href="/residence-investment/spain" className="text-link">Spain residence</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-grid-item">
                        <div className="hp-card with-links">
                          <a href="/residence-investment/switzerland" className="btn-style-none">
                            <img loading="lazy" className="card-crest" src="images/Switzerland.png" alt="Switzerland" width={45} height={45} />
                            <h3 className="mb15">Switzerland</h3>
                            <div className="pb20">
                              <p>The Swiss Residence Program guarantees residence in Switzerland for a
                                minimum contribution of CHF 250,000 in annual taxes.</p>
                            </div>
                          </a>
                          <div className="links-container">
                            <p className="text-link-wrapper w-100"><a href="/residence-investment/switzerland" className="text-link">Switzerland residence</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-grid-item">
                        <div className="hp-card with-links">
                          <a href="/residence-investment/thailand" className="btn-style-none">
                            <img loading="lazy" className="card-crest" src="images/Thailand.png" alt="Thailand" width={45} height={45} />
                            <h3 className="mb15">Thailand</h3>
                            <div className="pb20">
                              <p>Thailand offers a wide range of residence options through its
                                Thailand Privilege Residence and the Long Term Residence Programs.
                              </p>
                            </div>
                          </a>
                          <div className="links-container">
                            <p className="text-link-wrapper w-100"><a href="/residence-investment/thailand" className="text-link">Thailand residence</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id className="anchor stacker-anchor" />
            <div className="container slide-in mt200 lang-en">
              <div className="row">
                <div className="col-sm">
                  <h2 className="mb45">Specialist Services</h2>
                </div>
              </div>
              <div className="card-grid-container">
                <div className="card mb60 col-md-4">
                  <div className="card-head">
                    <h3>Private Client Solutions</h3>
                  </div>
                  <div className="card-body">
                    <p className="mb30 mw280">Refined by over 25 years of residence and citizenship by investment
                      sector leadership, Henley &amp; Partners’ unique strategic advisory process creates
                      lifelong value for you and your family. We have the broadest and deepest private client
                      offering available, working with the widest range of sovereign states, giving you the
                      greatest possible optionality. The return on your investment includes the freedom to
                      travel, live, and invest where you choose, enhanced security, and a hedge against
                      potential volatility.</p>
                  </div>
                  <div>
                    <a className="btn secondary-btn" href="/services">Private Clients</a>
                  </div>
                </div>
                <div className="card mb60 col-md-4">
                  <div className="card-head">
                    <h3>Government Advisory Practice</h3>
                  </div>
                  <div className="card-body">
                    <p className="mb30 mw280">Through our leading government advisory practice, Henley &amp;
                      Partners assists governments with strategic consulting as well as the design, set-up,
                      operation, and promotion of investment-related residence and citizenship programs. We
                      have raised more than USD 12 billion in foreign direct investment and have designed and
                      implemented several of the most successful programs worldwide.</p>
                  </div>
                  <div>
                    <a className="btn secondary-btn" href="/services/government-advisory-practice">Government
                      Advisory</a>
                  </div>
                </div>
                <div className="card mb60 col-md-4">
                  <div className="card-head">
                    <h3>Supporting Private Client Advisors</h3>
                  </div>
                  <div className="card-body">
                    <p className="mb30 mw280">We partner and work in tandem with other advisors of our clients,
                      providing complementary advice and services relating to their residence and citizenship
                      planning options. Henley &amp; Partners has a deep understanding of the complex
                      requirements of private banks, independent asset managers, family offices, legal
                      advisors, and real estate agents, because many of our employees have previously advised
                      across the same value chains. Contact us if you would like to find out more about how we
                      can support you and add further value for your clients.</p>
                  </div>
                  <div>
                    <a className="btn secondary-btn" href="/about/work-with-us">Partner With Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-alt alt-bg slide-in">
            <article className="container news-articles">
              <div className="row">
                <div className="col-md">
                  <h2 className="mb40">News and Articles</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 latest-article article-link">
                  <a className="article-card btn btn-style-none" href="">
                    <img className="feature-article-img" src="images/africa-wealth-report-2024.jpg" data-object-fit="cover" alt="Africa Wealth Report 2024" height={340} />
                    <h4><time dateTime="2024-04-16T00:00:00+00:00">16 April 2024</time></h4>
                    <h3 className="mb20">Africa Wealth Report 2024</h3>
                    <p className="latest-article-summary feature-text-clamp" />
                    <p>The total investable wealth currently held on the African continent amounts to USD 2.5
                      trillion, according to the 2024 Africa Wealth Report.</p>
                    <p />
                    <p className="text-link-wrapper nmt8"><span className="text-link">View article</span></p>
                  </a>
                </div>
                <div className="col-md-5 offset-md-1 recent-articles-col">
                  <article className="news-article mb60">
                    <a href="" target="blank" className="article-card btn btn-style-none">
                      <h4><time dateTime="2024-03-22T00:00:00+00:00">22 March 2024</time></h4>
                      <h3 className="mb20">The U.S. is the top country for millionaires and billionaires</h3>
                      <p className="feature-text-clamp lines-2" />
                      <p>The U.S. has rapidly overwhelmed China as the world’s top spot for millionaires and
                        billionaires, according to a new report.</p>
                      <p />
                      <p className="text-link-wrapper nmt8"><span className="text-link">View article</span></p>
                    </a>
                  </article>
                  <article className="news-article mb60">
                    <a href="" target="blank" className="article-card btn btn-style-none">
                      <h4><time dateTime="2024-03-20T00:00:00+00:00">20 March 2024</time></h4>
                      <h3 className="mb20">Sun Belt Cities Are Adding Millionaires Much Faster Than NYC</h3>
                      <p className="feature-text-clamp lines-2" />
                      <p>Texas, Arizona and Florida are home to the places seeing the biggest jump in wealthy
                        residents over the past decade, according to a new report. </p>
                      <p />
                      <p className="text-link-wrapper nmt8"><span className="text-link">View article</span></p>
                    </a>
                  </article>
                  <article className="news-article mb60">
                    <a href="" target="blank" className="article-card btn btn-style-none">
                      <h4><time dateTime="2024-02-14T00:00:00+00:00">14 February 2024</time></h4>
                      <h3 className="mb20">Switzerland tops leaderboard of best education destinations for mobile
                        HNWs, new report finds</h3>
                      <p className="feature-text-clamp lines-2" />
                      <p>An education in Switzerland, the US or Singapore — and relocating for the long term —
                        could bring an ‘opportunity advantage’ to young HNWs, according to Henley &amp;
                        Partners.</p>
                      <p />
                      <p className="text-link-wrapper nmt8"><span className="text-link">View article</span></p>
                    </a>
                  </article>
                </div>
              </div>
              <div className="row pb50">
                <div className="col-sm offset-sm-6">
                  <p className="mb0"><a href="/newsroom/press-releases" className="secondary-btn secondary-btn-transparent">View all Press releases</a></p>
                </div>
              </div>
            </article>
          </div>
          {/* Contact Section */}
          <div id="contact-us-component" className="contact-section-wrapper slide-in section-mt mb60">
            <div className="bg-grey bgl" />
            <div className="container container-contact-us">
              <div className="row row-contact">
                <div className="col-md-4">
                  <h2>Contact us today</h2>
                  <p className="lead">Henley &amp; Partners assists international clients in obtaining residence and
                    citizenship under the respective programs. Contact us to arrange an initial private
                    consultation.</p>
                  <p className="btn-wrapper"><a href="" className="tertiary-btn">Enquiry</a></p>
                </div>
                <div className="col-md-8">
                  <div className="nmr img-wrapper"><img className="right-img" src="images/contact%20professional%20industry%20expert.jpg" data-object-fit="cover" height={400} alt="Contact us today" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="main-footer">
          <div className="container">
            <div className="row row-1 justify-content-md-space-between">
              <div className="col-md-6 col-logo">
                <p className="label-alt">The Firm of Global Citizens<span className="entity">®</span></p>
              </div>
              <div className="col-md-6 col-right-container">
                <div className="col-md col-links">
                  <ul className="footer-menu footer-menu-minus">
                    <li><a className="footer-link" href="/citizenship-investment">Citizenship</a></li>
                    <li><a className="footer-link" href="/residence-investment">Residence</a></li>
                    <li><a className="footer-link" href="/real-estate">Real Estate</a></li>
                    <li><a className="footer-link" href="/countries">Countries</a></li>
                    <li><a className="footer-link" href="/services">Services</a></li>
                    <li><a className="footer-link" href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md col-links">
                  <ul className="footer-menu">
                    <li><a className="footer-link" href="/about">About</a></li>
                    <li><a className="footer-link" href="/contact/worldwide-offices">Worldwide offices</a></li>
                    <li><a className="footer-link" href="/publications">Publications and Reports</a></li>
                    <li><a className="footer-link" href="/newsroom/online-articles">Newsroom</a></li>
                    <li><a className="footer-link" href="/events/upcoming-events">Events</a></li>
                    <li><a className="footer-link" href="/philanthropy/corporate-social-responsibility">Philanthropy</a></li>
                  </ul>
                </div>
                <div className="col-md col-links col-right">
                  <ul className="footer-menu">
                    <li><a className="footer-link" href="/passport-index">Henley Passport Index</a></li>
                    <li><a className="footer-link" href="/passport-power">Henley Passport Power Index</a></li>
                    <li><a className="footer-link" href="/ultimate-portfolio">Henley Ultimate Portfolio</a></li>
                    <li><a className="footer-link" href="/publications/henley-private-wealth-migration-dashboard">Henley Wealth
                        Migration Dashboard</a></li>
                    <li><a className="footer-link" href="/publications/residence-program-index-2024">Henley
                        Residence Program Index</a></li>
                    <li><a className="footer-link" href="/publications/citizenship-program-index-2024">Henley
                        Citizenship Program Index</a></li>
                  </ul>
                </div>
                <div className="col-12 col-mobile-border d-lg-none" />
              </div>
            </div>
            <div className="row row-2">
              <div className="col-md-6 col-copyright">
                <p className="footer-text-small col-right copyright-text mb5"><span>© 2024 </span><span className="mr10">Henley &amp; Partners Holdings Ltd </span><span>All rights reserved</span></p>
                <ul className="list-style-none footer-terms-menu">
                  <li><a className="footer-link-small" href="/terms-of-use">Terms of use</a></li>
                  <li><a className="footer-link-small" href="/privacy-policy">Privacy policy</a></li>
                  <li><a className="footer-link-small" href="/cookie-policy">Cookie policy</a></li>
                  <li><a className="footer-link-small" href="/disclaimer">Disclaimer</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-right-container">
                <div className="col-md-4 align-bottom col-imc-logo col-right lang-en">
                  <a href="" target="blank">
                    <img src="images/imc-logo.svg" alt="IMC Member" width={64} height={30} />
                  </a>
                </div>
                <div className="col-md-4 social align-bottom">
                  <a href="/subscribe">
                    <img className="icon white icon-email" src="images/email.svg" alt="email" />
                  </a>
                  <a target="_blank" href="">
                    <img className="icon white icon-facebook" src="images/facebook.svg" alt="facebook" />
                  </a>
                  <a target="_blank" href="">
                    <img className="icon white icon-x" src="images/x.svg" alt="X" />
                  </a>
                  <a target="_blank" href="">
                    <img className="icon white icon-linkedin" src="images/linkedin.svg" alt="linkedin" />
                  </a>
                  <a target="_blank" href="">
                    <img className="icon white icon-youtube" src="images/youtube.svg" alt="youtube" />
                  </a>
                  <a target="_blank" href="">
                    <img className="icon white icon-instagram" src="images/instagram.svg" alt="instagram" />
                  </a>
                  <a target="_blank" href="">
                    <img className="icon white icon-pinterest" src="images/pinterest.svg" alt="pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Modal */}
        <div className="cbf-button">
          <a href="#" data-toggle="modal" data-target="#callback-modal">
            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width={150} height={75} viewBox="0 0 150 75">
              <path fill="#FFFFFF" fillRule="evenodd" transform="translate(0.5,8.5) scale(0.88,0.88)" d="M86.8,1.119c12.044,0,36.614-1.284,47.04.56,11.792,2.086,11.361,2.6,19.04,7.836,11.682,7.97,14,18.722,14,27.985,0,5.587-.368,10.518-3.92,16.791-3.494,6.17-11.327,14.556-21.28,17.911-14.915,5.028-34.186,1.119-54.88,1.119-22.251,0-44.559,4.046-59.92-1.679-6.314-2.353-11.109-6.063-17.92-11.194C1.2,54.6,0,44.1,0,37.22c0-7.292,2.261-17.551,11.2-23.228,6.007-3.814,7.3-9.127,16.24-11.754C41.578-1.914,68.176,1.119,86.8,1.119Z">
              </path>
              <g transform="translate(0.000000,75) scale(0.050000,-0.050000)">
                <path fill="#405363" stroke="none" d="M526 1205 c-190 -52 -340 -205 -391 -395 -19 -70 -19 -210 0 -280 51 -193 202 -344 395 -395 84 -23 1859 -22 1945 0 183 48 342 208 389 391 20 77 20 212 1 284 -51 193 -202 344 -395 395 -78 21 -1868 20 -1944 0z">
                </path>
                <path fill="#405363" stroke="none" d="M600 1334 c-134 -21 -237 -62 -336 -136 -104 -78 -186 -196 -231 -333 -22 -67 -26 -98 -26 -195 0 -97 4 -128 26 -195 70 -214 224 -369 442 -443 l80 -27 935 0 c1032 0 981 -3 1125 65 147 69 251 176 320 325 45 96 59 164 59 275 0 111 -14 179 -59 275 -66 145 -169 250 -310 321 -145 72 -80 68 -1090 70 -500 1 -921 0 -935 -2z m1930 -86 c181 -66 323 -211 381 -390 35 -105 34 -271 0 -377 -60 -181 -211 -332 -393 -392 l-73 -24 -945 0 -945 0 -73 24 c-242 79 -407 296 -419 551 -12 249 120 473 343 580 125 60 93 59 1114 57 l935 -2 75 -27z">
                </path>
              </g>
              <path transform="translate(24,31), scale(1.5, 1.5)" fill="#FFF" fillRule="evenodd" d="M14.817 1.978l-3.934 3.606H12.5c.345 0 .625.255.625.572 0 .317-.18.545-.524.545H9.532c-.052.013-.104.028-.159.028a.652.652 0 0 1-.442-.168c-.148-.136-.164-1.24-.048-3.31 0-.317.145-.532.49-.532.346 0 .625.256.625.573v1.481l3.935-3.605a.665.665 0 0 1 .884 0 .54.54 0 0 1 0 .81zM4.705 7.355l3.427 3.115 1.923-.874a.618.618 0 0 1 .63.072l2.866 2.244c.116.09.187.22.198.358a.49.49 0 0 1-.142.38l-1.66 1.718c-.211.194-.53.382-1.064.382-1.478 0-4.175-1.55-6.71-3.856-2.76-2.508-5.124-5.76-3.79-6.97L2.289 2.38a.622.622 0 0 1 .417-.13.596.596 0 0 1 .397.178l2.484 2.604c.151.16.182.386.08.575l-.962 1.747z">
              </path>
              <text x={60} y={39} className="innercircletext" fontFamily="Roboto Bold">REQUEST A</text>
              <text x={60} y={54} className="innercircletext" fontFamily="Roboto Bold">CALLBACK</text>
            </svg>
          </a>
        </div>
        <div className="modal fade" id="callback-modal" tabIndex={-1} role="dialog" aria-labelledby="callback-modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content" style={{background: 'transparent'}}>
              <div className="modal-body" style={{padding: 0}}>
                <div className="form-wrapper" style={{marginTop: 0}}>
                  <button className="btn-style-none close_button" data-dismiss="modal" aria-label="Close">
                    <div className="lines" />
                  </button>
                  <div id="call-back-form">
                    <div className="h3title">Call back request</div>
                    <p>Have one of our qualified advisors contact you today.</p>
                    <form method="POST" action="" acceptCharset="UTF-8" data-request="callBackForm::onSubmit" data-request-validate data-request-flash id="rcbForm"><input name="_session_key" type="hidden" defaultValue="T09cDjtLfSNPdcP3DkyVlZSQH4w88a2QCjtbDmCT" /><input name="_token" type="hidden" defaultValue="jrTbDf9hKZjQV9YMLRPylnAY3zTjCM8qJ7GBS5bk" />
                      <input name="source" type="hidden" value="" />
                      <div className="form-group">
                        <label htmlFor="user_interest">Program of interest*</label>
                        <select  className="form-control custom-select" id="user_interest" name="user_interest">
                          <option  selected>Please select</option>
                          <optgroup label=" ">
                            <option value="general">General Enquiry</option>
                          </optgroup>
                          <optgroup label="  ">
                            <option value="citizenship-antigua-barbuda">Citizenship of Antigua and
                              Barbuda</option>
                            <option value="citizenship-austria">Citizenship of Austria</option>
                            <option value="citizenship-dominica">Citizenship of Dominica</option>
                            <option value="citizenship-egypt">Citizenship of Egypt</option>
                            <option value="citizenship-grenada">Citizenship of Grenada</option>
                            <option value="citizenship-jordan">Citizenship of Jordan</option>
                            <option value="citizenship-malta">Citizenship of Malta</option>
                            <option value="citizenship-montenegro">Citizenship of Montenegro</option>
                            <option value="citizenship-north-macedonia">Citizenship of North Macedonia
                            </option>
                            <option value="citizenship-st-kitts-nevis">Citizenship of St. Kitts and
                              Nevis</option>
                            <option value="citizenship-stlucia">Citizenship of St. Lucia</option>
                            <option value="citizenship-turkey">Citizenship of Türkiye</option>
                          </optgroup>
                          <optgroup label="   ">
                            <option value="residence-australia">Residence in Australia</option>
                            <option value="residence-austria">Residence in Austria</option>
                            <option value="residence-canada">Residence in Canada</option>
                            <option value="residence-costa-rica">Residence in Costa Rica</option>
                            <option value="residence-cyprus">Residence in Cyprus</option>
                            <option value="residence-greece">Residence in Greece</option>
                            <option value="residence-hong-kong">Residence in Hong Kong</option>
                            <option value="residence-ireland">Residence in Ireland</option>
                            <option value="residence-italy">Residence in Italy</option>
                            <option value="residence-jersey">Residence in Jersey</option>
                            <option value="residence-latvia">Residence in Latvia</option>
                            <option value="residence-luxembourg">Residence in Luxembourg</option>
                            <option value="residence-malaysia">Residence in Malaysia</option>
                            <option value="residence-malta">Residence in Malta</option>
                            <option value="residence-mauritius">Residence in Mauritius</option>
                            <option value="residence-monaco">Residence in Monaco</option>
                            <option value="residence-montenegro">Residence in Montenegro</option>
                            <option value="residence-namibia">Residence in Namibia</option>
                            <option value="residence-netherlands">Residence in Netherlands</option>
                            <option value="residence-newzealand">Residence in New Zealand</option>
                            <option value="residence-panama">Residence in Panama</option>
                            <option value="residence-portugal">Residence in Portugal</option>
                            <option value="residence-singapore">Residence in Singapore</option>
                            <option value="residence-spain">Residence in Spain</option>
                            <option value="residence-switzerland">Residence in Switzerland</option>
                            <option value="residence-thailand">Residence in Thailand</option>
                            <option value="residence-united-arab-emirates">Residence in United Arab
                              Emirates</option>
                            <option value="residence-united-kingdom">Residence in United Kingdom
                            </option>
                            <option value="residence-united-states">Residence in United States of
                              America</option>
                          </optgroup>
                        </select>
                        <div className="error-message" data-validate-for="user_interest" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="salutation" className="control-label">Salutation*</label>
                            <select  className="form-control custom-select" id="salutation" name="salutation">
                              <option  selected>Please select</option>
                              <option value={0}>Hon.</option>
                              <option value={1}>Mr.</option>
                              <option value={2}>Ms.</option>
                              <option value={3}>Mrs.</option>
                              <option value={4}>Dr.</option>
                              <option value={5}>Prof.</option>
                              <option value={6}>Sheikh</option>
                            </select>
                            <div className="error-message" data-validate-for="salutation" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactInfo_firstName">First name*</label>
                            <input className="form-control" placeholder="Enter first name" name="contactInfo_firstName" type="text"  id="contactInfo_firstName" />
                            <div className="error-message" data-validate-for="contactInfo_firstName" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactInfo_lastName">Last name*</label>
                            <input className="form-control" placeholder="Enter last name" name="contactInfo_lastName" type="text" id="contactInfo_lastName" />
                            <div className="error-message" data-validate-for="contactInfo_lastName" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactInfo_nationality">Nationality*</label>
                            <select className="form-control custom-select" id="contactInfo_nationality" name="contactInfo_nationality">
                              <option  selected>Please select</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AG">Antigua &amp; Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BA">Bosnia &amp; Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BR">Brazil</option>
                              <option value="VG">British Virgin Islands</option>
                              <option value="BN">Brunei</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">Central African Republic</option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo - Brazzaville</option>
                              <option value="CD">Congo - Kinshasa</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curaçao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czechia</option>
                              <option value="CI">Côte d’Ivoire</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong SAR China</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macau SAR China</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar (Burma)</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="MP">Northern Mariana Islands</option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">Palestinian Territories</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="RE">Réunion</option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="BL">St. Barthélemy</option>
                              <option value="SH">St. Helena</option>
                              <option value="KN">St. Kitts &amp; Nevis</option>
                              <option value="LC">St. Lucia</option>
                              <option value="MF">St. Martin</option>
                              <option value="PM">St. Pierre &amp; Miquelon</option>
                              <option value="VC">St. Vincent &amp; Grenadines</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="ST">São Tomé &amp; Príncipe</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad &amp; Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">Turks &amp; Caicos Islands</option>
                              <option value="TV">Tuvalu</option>
                              <option value="TR">Türkiye</option>
                              <option value="UM">U.S. Outlying Islands</option>
                              <option value="VI">U.S. Virgin Islands</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VA">Vatican City</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="WF">Wallis &amp; Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                            <div className="error-message" data-validate-for="contactInfo_nationality">
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactInfo_country">Country you currently reside in*</label>
                            <select  className="form-control custom-select" id="contactInfo_country" name="contactInfo_country">
                              <option selected>Please select</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AG">Antigua &amp; Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BA">Bosnia &amp; Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BR">Brazil</option>
                              <option value="VG">British Virgin Islands</option>
                              <option value="BN">Brunei</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">Central African Republic</option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo - Brazzaville</option>
                              <option value="CD">Congo - Kinshasa</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curaçao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czechia</option>
                              <option value="CI">Côte d’Ivoire</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong SAR China</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macau SAR China</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar (Burma)</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="MP">Northern Mariana Islands</option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">Palestinian Territories</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="RE">Réunion</option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="BL">St. Barthélemy</option>
                              <option value="SH">St. Helena</option>
                              <option value="KN">St. Kitts &amp; Nevis</option>
                              <option value="LC">St. Lucia</option>
                              <option value="MF">St. Martin</option>
                              <option value="PM">St. Pierre &amp; Miquelon</option>
                              <option value="VC">St. Vincent &amp; Grenadines</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="ST">São Tomé &amp; Príncipe</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad &amp; Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">Turks &amp; Caicos Islands</option>
                              <option value="TV">Tuvalu</option>
                              <option value="TR">Türkiye</option>
                              <option value="UM">U.S. Outlying Islands</option>
                              <option value="VI">U.S. Virgin Islands</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VA">Vatican City</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="WF">Wallis &amp; Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                            <div className="error-message" data-validate-for="contactInfo_country" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                          <div className="form-group hidden" id="states-group">
                            <label htmlFor="contactInfo_country_state">State*</label>
                            <select  className="form-control custom-select" id="contactInfo_country_state" name="contactInfo_country_state">
                              <option  selected>Please select</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>
                            <div className="error-message" data-validate-for="country_of_residence_state">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactInfo_dialing_code">Telephone number*</label>
                            <input className="form-control" placeholder="Enter telephone number" inputMode="tel" name="contactInfo_dialing_code" type="tel"  id="contactInfo_dialing_code" />
                            <div className="error-message" data-validate-for="contactInfo_dialing_code">
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="contactInfo_email_field">E-mail address*</label>
                            <input className="form-control" placeholder="Enter e-mail address" inputMode="email" name="contactInfo_email_field" type="email"  id="contactInfo_email_field" />
                            <div className="error-message" data-validate-for="contactInfo_email_field">
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Lead Source Code and Details START */}
                      <div className="form-group">
                        <label htmlFor="lead_source">How did you hear about Henley &amp; Partners?*</label>
                        <select id="cbf_lead_source_code" name="lead-source" className="form-control custom-select">
                          <option value data-details>Please select</option>
                          <option value="referred" data-details="referred">Someone referred me to Henley
                            &amp; Partners</option>
                          <option value="search" data-details="search">I was searching online (internet
                            search)</option>
                          <option value="event" data-details="event">I attended an event</option>
                          <option value="advert" data-details="advert">I saw an advertisement</option>
                          <option value="article" data-details="article">I read an article</option>
                          <option value="report" data-details="report">I watched news coverage on TV/Video
                          </option>
                          <option value="radio" data-details="radio">I heard about it on the radio
                          </option>
                          <option value="mail" data-details="mail">I received a publication or letter in
                            the mail</option>
                        </select>
                      </div>
                      <div className="lead-source-fields" id="lead-source-referred" data-source="referred" style={{display: 'none'}}>
                        <div className="form-group">
                          <label htmlFor="details-referred">Who, or which company?</label>
                          <textarea className="form-control" name="details-referred" rows={5} id="details-referred"  />
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-search" data-source="search" style={{display: 'none'}}>
                        <div className="form-group">
                          <label htmlFor="details-search">Where did you see it?</label>
                          <textarea className="form-control" name="details-search" rows={5} id="details-search"/>
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-event" data-source="event" style={{display: 'none'}}>
                        <div className="form-group">
                          <label htmlFor="details-event">Which event, or hosted by whom?</label>
                          <textarea className="form-control" name="details-event" rows={5} id="details-event"  />
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-advert" data-source="advert" style={{display: 'none'}}>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group custom-radio filled">
                                <input type="radio" name="lead-type" id="lead_source_details_advert_Print"  />
                                <label htmlFor="lead_source_details_advert_Print">Print</label>
                                <div className="circle" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group custom-radio filled">
                                <input type="radio" name="lead-type" id="lead_source_details_advert_Online" />
                                <label htmlFor="lead_source_details_advert_Online">Online</label>
                                <div className="circle" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group custom-radio filled">
                                <input type="radio" name="lead-type" id="lead_source_details_advert_TV/Video"  />
                                <label htmlFor="lead_source_details_advert_TV/Video">TV/Video</label>
                                <div className="circle" />
                              </div>
                            </div>
                          </div>
                          <label htmlFor="details-advert">Where did you see it?</label>
                          <textarea className="form-control" name="details-advert" rows={5} id="details-advert"  />
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-article" data-source="article" style={{display: 'none'}}>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group custom-radio filled">
                                <input type="radio" name="lead-type" id="lead_source_details_article_Print" defaultValue="Print" />
                                <label htmlFor="lead_source_details_article_Print">Print</label>
                                <div className="circle" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group custom-radio filled">
                                <input type="radio" name="lead-type" id="lead_source_details_article_Online" defaultValue="Online" />
                                <label htmlFor="lead_source_details_article_Online">Online</label>
                                <div className="circle" />
                              </div>
                            </div>
                          </div>
                          <label htmlFor="details-article">Where did you see the article?</label>
                          <textarea className="form-control" name="details-article" rows={5} id="details-article" defaultValue={""} />
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-report" data-source="report" style={{display: 'none'}}>
                        <div className="form-group">
                          <label htmlFor="details-report">Where did you see the report?</label>
                          <textarea className="form-control" name="details-report" rows={5} id="details-report" defaultValue={""} />
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-radio" data-source="radio" style={{display: 'none'}}>
                        <div className="form-group">
                          <label htmlFor="details-radio">On which radio station did you hear about Henley
                            &amp; Partners?</label>
                          <textarea className="form-control" name="details-radio" rows={5} id="details-radio" defaultValue={""} />
                        </div>
                      </div>
                      <div className="lead-source-fields" id="lead-source-mail" data-source="mail" style={{display: 'none'}}>
                        <div className="form-group">
                          <label htmlFor="details-mail">What did you receive?</label>
                          <textarea className="form-control" name="details-mail" rows={5} id="details-mail" defaultValue={""} />
                        </div>
                      </div>
                      {/* Lead Source Code and Details END */}
                      <div className="form-group checkbox-group">
                        <label htmlFor="keep_updated">Please keep me updated and send me information and news
                          about Henley &amp; Partners and its group companies, event invitations, press
                          references, and publications via e-mail or mail. <br /><br />Detailed information on
                          how we process your personal data can be found in Henley &amp; Partners' Privacy
                          Policy, available <a href="#" className="px-0" target="_blank">here</a>.</label>
                        <input className="styled custom-checkbox" name="keep_updated" type="checkbox" defaultValue={1} />
                      </div>
                      <div className="form-footer">
                        <input name="formType" type="hidden" defaultValue="CALLBACK" />
                        <input name="formName" type="hidden" defaultValue="callback" />
                        <input className="form-btn primary-btn recaptcha float-right" type="submit" defaultValue="Submit" />
                        <button data-dismiss="modal" className="form-btn btn-has-spinner tertiary-btn"><span className="text">Close</span><span className="spinner-container"><span className="spinner" /></span></button>
                        <div className="error-message" data-validate-for="captcha" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="languagePicker-modal" tabIndex={-1} role="dialog" aria-labelledby="languagePicker-modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content" style={{background: 'transparent'}}>
              <div className="modal-body" style={{padding: 0}}>
                <div className="form-wrapper" style={{marginTop: 0}}>
                  <button className="btn-style-none close_button" data-dismiss="modal" aria-label="Close">
                    <div className="lines" />
                  </button>
                  <div className="h3title">Change language</div>
                  <div className="container-fluid p-0">
                    <div className="row">
                      <div className="lang-link col-6 col-md-3"><a href="/" className="active">English</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/ru">русский</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/zh">简体中文</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/zh-hant">中文 (繁體)</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/fr">français</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/es">español</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/tr">Türkçe</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/ar">العربية</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/he">עברית</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/pt">português</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/ua">украïнська</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/vn">Tiếng Việt</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/de">Deutsch</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/ko">한국어</a></div>
                      <div className="lang-link col-6 col-md-3"><a href="/ja">日本語</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal hg-modal fade" id="noticeModal" tabIndex={-1} role="dialog" aria-labelledby="noticeModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="notice" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="spinnerWrapper">
          <div className="spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  export default HomeScreen ;