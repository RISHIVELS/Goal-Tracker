import "./../main.css";

function MainPage() {
  return (
    <div className="main">
      <div className="header">
        <div className="header-title-container">
          <h1 className="header-title">HABIT TRACKER</h1>

          <div class="loading">
            <svg width="64px" height="48px">
              <polyline
                points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                id="back"
              ></polyline>
              <polyline
                points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                id="front"
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="header-flex">
          <ul>
            <li>
              <a href="#main">
                <button className="header-link">Main</button>
              </a>
            </li>
            <li>
              <a href="#about">
                <button className="header-link">About</button>
              </a>
            </li>
            <li>
              <a href="#contact">
                <button className="header-link">Contact</button>
              </a>
            </li>
            <li>
              <a href="#installation">
                <button className="header-link">Setup</button>
              </a>
            </li>
            <li>
              <a href="/leaderboard">
                <button className="header-link">Leaderboard</button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content" id="main">
        <h1 className="main-h1">
          Transform Your Life through <span>Habits</span>
        </h1>
        <h3 className="main-h3">
          Discover how small, consistent actions can lead to remarkable changes
          in your life and unlock your full potential.
        </h3>
        <div className="main-image"></div>
      </div>

      <div className="habits-container">
        <h2 className="habits-title">
          Why Habits Matter <span className="habit-span">?</span>
        </h2>
        <div className="habit-matter-flex">
          <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div class="card__content">
              <p class="card__title">Automated Success</p>
              <p class="card__description">
                Habits remove decision fatigue and make positive behaviors
                automatic, leading to consistent progress.
              </p>
            </div>
          </div>
          <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div class="card__content">
              <p class="card__title">Compound Effect</p>
              <p class="card__description">
                Small actions, repeated consistently, lead to significant
                improvements over time.
              </p>
            </div>
          </div>
          <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </svg>
            <div class="card__content">
              <p class="card__title">Sustainable Change</p>
              <p class="card__description">
                Habits create lasting change by rewiring your brain's neural
                pathways.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="good-habits">
        <div className="good-habits-container">
          <h2 className="good-habits-h2">The Impact Of Good Habits</h2>
          <span>&#8594; Improved Health</span>
          <p className="good-habits-p">
            💗 Regular exercise and healthy eating habits lead to better
            physical and mental well-being.
          </p>
          <span>&#8594; Enhanced Learning</span>
          <p className="good-habits-p">
            📕 Study habits and continuous learning patterns accelerate personal
            and professional growth.
          </p>
        </div>
        <div className="good-habits-photo"></div>
      </div>

      <div className="about" id="about">
        <div className="our-story">
          <h2>Our Story</h2>
          <p>
            <b>Habit Tracking</b> was born from a simple observation: many
            people <b>struggle</b> to build and maintain positive habits,
            despite their best intentions. We <b>created</b> a platform that
            combines <b>cutting-edge behavioral science</b> with practical tools
            to make habit formation accessible and <b>effective</b> for
            everyone.
          </p>
          <p>
            {" "}
            Our community-driven approach ensures that no one has to journey
            alone on their path to self-improvement.
          </p>
        </div>
        <div className="about-photo"></div>
      </div>

      <div className="setup-container" id="installation">
        <div className="card-setup-main">
          <div class="card-setup">
            <h2>SETUP GUIDE</h2>
          </div>
        </div>
        <p className="setup-p">
          Get started with Habit Tracking in just a few simple steps. Follow our
          comprehensive guide below.
        </p>
        <div className="setup-process-container">
          <div className="setup1">
            <h2>&#8595; 1.Click the link below</h2>

            <a
              href="https://www.notion.so/Habit-Tracker-190eac53163280909338f8cbb187a38d"
              class="codepen-button"
            >
              <span>HABIT TRACKING</span>
            </a>
          </div>
          <div className="setup1">
            <h2>&#8230; 2.Click the three dots on the top right corner</h2>

            <div className="image-setup"></div>
          </div>
          <div className="setup1">
            <h2>&#x2398; 3.Click Duplicate Element</h2>

            <div className="image-setup2"></div>
          </div>
          <div className="setup1">
            <div class="card-btn">
              <h2>4. Start Creating your Habits as Easy as Anything</h2>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer" id="contact">
        <div className="foot-end">
          <div className="one">
            <h2>Habit Tracking</h2>
            <p className="footer-para">
              Transform your life through the power of habits.
            </p>
          </div>
          <div className="two">
            <h2>Quick Links</h2>
            <ul className="footer-ul">
              <li>
                <a href="#main">Main</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#installation">Setup</a>
              </li>
            </ul>
          </div>
          <div className="three">
            <h2>Connect</h2>
            <ul className="three-ul">
              <li>
                <a href="https://www.linkedin.com/in/rishivels/">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/RISHIVELS">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <h5>© 2025 NANO HACKERS. All rights reserved.</h5>
    </div>
  );
}

export default MainPage;
