import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Capture = () => {
  return (
    <>
      <div className="header">
        <img
          className="navbar__logo"
          src="photo_2025-01-27_00-41-53.jpg"
          alt=""
        />
        <h3>Cyphur</h3>
      </div>
      <div className="heropage">
        <video className="tech-video" autoPlay muted loop playsInline>
          <source src="144257-784302968_small.mp4" type="video/mp4" />
        </video>
        <div className="heropage__text">
          <h1 className="header-text gradient-text main__header">Cyphur</h1>

          <h1>
            AI-driven solutions for blockchain, combining decentralized
            innovation with data insights to shape the future of Web3.{" "}
          </h1>
        </div>
      </div>

      <div className="page2 page">
        <h1 className="header-text">
          Beyond Traditional Chains: <br />
          <span className="gradient-text"> Your AI-Powered Defi Network</span>
        </h1>

        <div className="page2__cards-div">
          <div className="page2__cards-top">
            <div className="page2__cards--big ">
              <h3 className="card-text--big">
                Fortify Against MEV & Unlock Liquidity
              </h3>
              <p className="card-text--small">
                Mind Circuit’s PoA consensus and AI-driven checks help you stay
                a step ahead of frontrunning. Focus on building liquidity
                without worrying about hidden risks or block manipulation.
              </p>
            </div>
            <div className="page2__cards--small">
              <h3>Seamless AI Orchestration</h3>
              <p>
                Merge aggregator calls, real-time analytics, and user-deployed
                AI agents into your workflow.
              </p>
            </div>
          </div>
          <div className="page2__cards-bottom">
            <div className="page2__cards--small">
              <h3>Developer-Centric Insights</h3>
              <p>
                From new token launches to liquidity pool monitoring, our tools
                provide deep insight.
              </p>
            </div>
            <div className="page2__cards--big">
              <h3>Adaptive Cross-Chain Growth</h3>
              <p>
                Confidently expand beyond a single network. With Mind Circuit’s
                multi-chain analytics and zero-knowledge frameworks, you can tap
                into diverse ecosystems, staying agile as DeFi evolves.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page3 page">
        <h1 className="header-text">
          Key Engines of Intelligent
          <span className="gradient-text">
            {" "}
            On-Chain <br /> Orchestration
          </span>
        </h1>

        <div className="page3__cards-container">
          <div className="page3__card">
            📚
            <h3>Collaborative Intelligence</h3>
            <p className="card-text--small">
              Encourage fluid interaction among validators, liquidity providers,
              and traders with AI-driven insights that unify strategies under a
              shared network vision.
            </p>
            <div className="learn-more">
              Learn More
              <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
            </div>
          </div>
          <div className="page3__card">
            📝
            <h3>Precision at Scale</h3>
            <p className="card-text--small">
              Combine advanced ML and zero-knowledge proofs to execute every
              transaction with meticulous accuracy, bolstering privacy and
              performance.
            </p>
            <div className="learn-more">
              Learn More
              <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
            </div>{" "}
          </div>
          <div className="page3__card">
            📝
            <h3>Adaptive Analytics</h3>
            <p className="card-text--small">
              Our AI validators continually learn from on-chain data, slashing
              MEV risks and boosting throughput as network conditions shift.
            </p>
            <div className="learn-more">
              Learn More
              <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
            </div>{" "}
          </div>
          <div className="page3__card">
            📝
            <h3>Frictionless Onboarding</h3>
            <p className="card-text--small">
              Mind Circuit’s architecture fits effortlessly with top DeFi
              protocols and popular wallets, streamlining cross-chain
              connectivity and user adoption.
            </p>
            <div className="learn-more">
              Learn More
              <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
            </div>{" "}
          </div>
          <div className="page3__card">
            📝
            <h3>Conversational Control</h3>
            <p className="card-text--small">
              Query our AI engine for market intel, contract scans, or liquidity
              updates—our bot recognizes context and delivers actionable
              responses in real time.
            </p>
            <div className="learn-more">
              Learn More
              <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
            </div>{" "}
          </div>
          <div className="page3__card">
            📝
            <h3>Ever-Evolving Assistant</h3>
            <p className="card-text--small">
              Think of Mind Circuit as your personal on-chain guide,
              continuously refining its AI capabilities to align with your DeFi
              goals and ecosystem expansions.
            </p>
            <div className="learn-more">
              Learn More
              <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
            </div>{" "}
          </div>
        </div>

        <button className="page3--btn solid">View all Features</button>
      </div>

      <div className="page4 page">
        <h1 className="header-text">
          Personalize
          <span className="gradient-text"> and Accelerate</span>
        </h1>

        <div className="page4--container">
          <div className="page4--top top">
            <div className="top--text">
              <h1 className="header-text">
                <span className="gradient-text">
                  {" "}
                  Data Insights on Projects
                </span>
              </h1>
              <p className="card-text--small">
                Providing actionable insights on blockchain projects, helping
                users make informed decisions
              </p>
            </div>
            <img src="jsj.jpg" alt="" />
          </div>

          <div className="page4--top top">
            <img
              src="679027f7378a7ee7a5dc78bf_snowmachine copy-p-800.jpg"
              alt=""
            />

            <div className="top--text">
              <h1 className="header-text">
                <span className="gradient-text"> Wallet tracking</span>
              </h1>
              <p className="card-text--small">
                Advanced AI tracks wallet activity to analyze market trends and
                identify key players in the ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page5 page">
        <h1 className="header-text">
          Experience
          <span className="gradient-text">Seamless Autonomy</span>
        </h1>

        <p className=" card-text--small page4-card-text--small">
          Curious how our chain’s real-time AI capabilities come together? Jump
          into a live showcase of aggregator insights, on-chain validations, and
          auto-optimized strategies powered by Mind Circuit’s advanced grid bot.
        </p>

        <button className="page3--btn solid">Test Gridswap</button>
      </div>

      <div className="page6 page5 page">
        <h1 className="header-text">
          All-in-One
          <span className="gradient-text"> Intelligence</span>
        </h1>

        <p className=" card-text--small page4-card-text--small">
          Mind Circuit goes beyond a simple chain. Our platform unifies
          aggregator insights, AI computations, and a frictionless integration
          layer—empowering you with a single, cohesive ecosystem built for
          intelligent DeFi.
        </p>

        <div className="page6__cards-container">
          <div className="page6__card">
            📚
            <h3>Integration</h3>
            <p className="card-text--small">
              Effortlessly link Mind Circuit with top DEXs, multi-chain
              networks, and aggregator frameworks. Expand your DeFi reach and
              synchronize real-time data with minimal overhead.
            </p>
            <button className="page6--btn trans">View All</button>
          </div>
          <div className="page6__card">
            📝
            <h3>Current Products</h3>
            <p className="card-text--small">
              Contract Monitor – Automatically detect suspicious code and
              unusual token functions. Pool Monitor – Track newly deployed
              liquidity pools, highlighting potential gains or risks. AI Bot –
              Converse with a context-aware AI assistant for signals, analytics,
              and on-chain insights. AI Guided Grid Bot – Auto-execute trades
              within user-defined grid ranges, all powered by ML-driven
              decision-making.
            </p>
            <button className="page6--btn trans">View All</button>
          </div>
        </div>
      </div>

      <div className="page4 page">
        <div className="page4--container">
          <div className="page4--top top">
            <div className="img--container">
              {" "}
              <img src="sui.jpg" alt="" />
            </div>

            <div className="top--text">
              <h1 className="header-text">
                Custom
                <span className="gradient-text"> Sui Interoperability</span>
              </h1>
              <p className="card-text--small">
                Mind Circuit is building a custom interoperability layer that
                bridges the Sui (Move-based) environment with our Cosmos-based
                PoA framework. This allows Sui developers to tap into Mind
                Circuit’s AI agents, aggregator endpoints, and on-chain
                intelligence while maintaining full compatibility with Sui’s
                native Move contracts. In practice, Sui smart contracts and apps
                can invoke Mind Circuit’s PoA validation or data services,
                enabling cross-chain orchestration, AI-powered insights, and
                seamless DeFi workflows that combine both networks’
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capture;
