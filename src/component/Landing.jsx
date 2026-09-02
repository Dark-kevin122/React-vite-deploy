import React, { useState } from 'react'
import './Landing.css'
import Chatbot from './Chatbot'

const Landing = () => {


    const [page, setcurentpage] = useState('Landing');

    function handleStart() {
        setcurentpage('Chatbot'); 
    }

   
    if (page === 'Chatbot') {
        return <Chatbot />;
    }



    return (

         <>
      <div className="wrap">
        <nav>
          <div className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3z" fill="#F3F0E8" />
              </svg>
            </div>
            <span className="brand-name">Insurix</span>
          </div>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#trust">Why trust us</a>
            <button className="nav-cta" onClick={handleStart}>Try the agent</button>
          </div>
        </nav>
      </div>
 
      <div className="wrap">
        <section className="hero">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot"></span> AI Insurance Agent</div>
            <h1 className="serif">Let's find you, <em>the Best Insurance.</em></h1>
            <p>A simple chat to find the right insurance for you, based on your needs and budget. Every recommendation comes with clear reasoning — why it fits you best</p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={handleStart}>Search Your Plan →</button>
              <a href="#how" className="btn-secondary">How It's Works</a>
            </div>
            <div className="hero-proof">
              <div>
                <div className="proof-num serif">10</div>
                <div className="proof-label">insurers compared</div>
              </div>
              <div>
                <div className="proof-num serif">&lt;2 min</div>
                <div className="proof-label">to a recommendation</div>
              </div>
              <div>
                <div className="proof-num serif">100%</div>
                <div className="proof-label">reasoning shown</div>
              </div>
            </div>
          </div>
 
          <div className="chat-preview-card">
            <div className="chat-preview-header">
              <span className="dot"></span>
              <span>Insurix — live</span>
            </div>

            <div className="bubble-row"><div className="bubble agent">Does anyone in your family have a pre-existing medical condition?</div></div>
            <div className="bubble-row user"><div className="bubble user">Diabetes — my father</div></div>
            <div className="bubble-row"><div className="bubble agent">Got it. I’m comparing the plans now.</div></div>
            <div className="result-mini">
              <div className="result-mini-top">
                <div>
                  <div className="result-mini-insurer">Insurix Assurance</div>
                  <div className="result-mini-name serif">HealthShield Elite</div>
                </div>
                <div className="result-mini-rank">#1</div>
              </div>
              <div className="result-mini-reason">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                <span>12-month waiting period — shortest for pre-existing conditions</span>
              </div>
              <div className="result-mini-reason">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                <span>98.4% claim settlement ratio</span>
              </div>
            </div>
          </div>
        </section>
      </div>
 
      <div className="wrap">
        <section className="section" id="how">
          <div className="section-head">
            <div className="section-eyebrow">How it works</div>
            <h2 className="serif">Just 3 simple steps — with everything explained clearly.</h2>
            <p>No long forms to fill out. Just have a conversation, and let the agent handle the rest.</p>
          </div>
          <div className="steps">
            <div className="step-card">
              <div className="step-num">01</div>
              <div className="step-icon" style={{ background: "var(--bronze-tint)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A5A34" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="serif">Just Chat</h3>
              <p>Age, budget, family, health — agent ek-ek karke natural conversation mein poochta hai.</p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <div className="step-icon" style={{ background: "var(--teal-tint)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3 className="serif">AI Finds Your Best Match</h3>
              <p>The AI compares plans from 10 insurers across premium, coverage, claim ratio, and riders to find and rank the best options for you..</p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <div className="step-icon" style={{ background: "var(--bronze-tint)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A5A34" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h3 className="serif">Decide with Confidence</h3>
              <p>Get your top 3 insurance plans, each with a clear “why” behind the recommendation</p>
            </div>
          </div>
        </section>
      </div>
 
      <div className="trust" id="trust">
        <div className="wrap">
          <section className="section trust-grid">
            <div>
              <div className="section-eyebrow">Why trust us</div>
              <h2 className="serif" style={{ fontSize: "30px" }}>Every Recommendation Is Explainable</h2>
              <div className="trust-list">
                <div className="trust-item">
                  <div className="trust-item-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="2">
                      <path d="M12 2L4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4>No Hidden Bias</h4>
                    <p>The agent isn’t paid by any insurer — it simply finds the best match based on your needs and data..</p>
                  </div>
                </div>
                <div className="trust-item">
                  <div className="trust-item-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="2">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <div>
                    <h4>Full Breakdown Behind Every Score</h4>
                    <p>See exactly how each plan is scored — from budget fit and coverage to claim settlement ratio.</p>
                  </div>
                </div>
                <div className="trust-item">
                  <div className="trust-item-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Get Results in 2 Minutes</h4>
                    <p>No advisor calls or lengthy forms. Simply chat, compare, and get your results instantly.</p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="reason-showcase">
              <div className="reason-showcase-title">Sample reasoning — Northstar Term Shield</div>
              <div className="reason-line ok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                <span>Premium ₹1,340/month, aapke ₹1,500 budget ke andar hai</span>
              </div>
              <div className="reason-line ok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                <span>Coverage aapke ₹40L outstanding loan ko cover karta hai</span>
              </div>
              <div className="reason-line ok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B6E63" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                <span>Claim settlement ratio 98.2%</span>
              </div>
              <div className="reason-line flag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A5A34" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                <span>Sirf 3 riders available — Meridian LifeGuard mein 4 hain</span>
              </div>
            </div>
          </section>
        </div>
      </div>
 
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2 className="serif">Find the Right Plan in 2 Minutes</h2>
            <p>No sign-up. No salespeople. Just a simple conversation.</p>
          </div>
          <button className="btn-light" onClick={handleStart}>Start Chat</button>
        </div>
 
        <footer>
     
        </footer>
      </div>
    </>
    )
}

export default Landing
