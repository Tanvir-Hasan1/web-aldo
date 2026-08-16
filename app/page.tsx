"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type BillingCycle = "1_month" | "1_year";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("1_month");

  const corePlanPrice = billingCycle === "1_month" ? 10 : 99;
  const periodLabel = billingCycle === "1_month" ? "/ month" : "/ year";

  return (
    <div className={styles.wrapper}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={`${styles.navContainer} container`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>R</div>
            <span>RistoAI</span>
          </div>
          <nav className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <Link href="/terms-and-conditions" className={styles.navLink}>Terms & Conditions</Link>
            <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
            <a href="#download" className={styles.downloadBtn}>Download App</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTag}>
            <span className={styles.pulseDot}></span> Powered by Next-Gen AI
          </div>
          <h1 className={`${styles.heroTitle} gradient-text`}>
            Supercharge Your Restaurant with Smart AI
          </h1>
          <p className={styles.heroSubtitle}>
            Unleash the power of artificial intelligence in your dining operations. Get instant menu suggestions, advanced sales insights, and multi-lingual support tailored for your staff and managers.
          </p>
          <div className={styles.heroCtas}>
            <a href="#download" className={styles.ctaPrimary}>
              Get Started Free
            </a>
            <a href="#features" className={styles.ctaSecondary}>
              Explore Features
            </a>
          </div>

          {/* Interactive UI Mockup */}
          <div className={`${styles.mockupContainer} floating`}>
            <svg
              className={styles.mockupImage}
              viewBox="0 0 800 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "auto" }}
            >
              <rect width="800" height="450" rx="16" fill="#0B132B" />
              {/* App Navbar */}
              <rect x="20" y="20" width="760" height="50" rx="8" fill="#1C2541" />
              <circle cx="50" cy="45" r="8" fill="#FA8C4C" />
              <rect x="75" y="40" width="100" height="10" rx="3" fill="#D1D5DB" />
              <rect x="640" y="32" width="120" height="26" rx="13" fill="#FA8C4C" />
              <text x="668" y="49" fill="#0B132B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                Restaurant Active
              </text>
              {/* Left Column - Live Menu suggestions */}
              <rect x="20" y="90" width="365" height="340" rx="12" fill="#111A35" />
              <text x="40" y="125" fill="#FA8C4C" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
                AI Smart Menu Suggestions
              </text>
              <rect x="40" y="150" width="325" height="60" rx="8" fill="#1C2541" />
              <text x="60" y="185" fill="#F9FAFB" fontSize="12" fontFamily="sans-serif">
                Suggestion: Pair local Chianti wine with Bistecca
              </text>
              <rect x="40" y="225" width="325" height="60" rx="8" fill="#1C2541" />
              <text x="60" y="260" fill="#F9FAFB" fontSize="12" fontFamily="sans-serif">
                Suggestion: Highlight Margherita pizza for weekend
              </text>
              {/* Right Column - Analytics */}
              <rect x="405" y="90" width="375" height="340" rx="12" fill="#111A35" />
              <text x="425" y="125" fill="#FA8C4C" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
                Sales Analytics & Insights
              </text>
              {/* Chart lines */}
              <path d="M 435 380 L 500 300 L 560 320 L 620 230 L 680 260 L 740 170" stroke="#FA8C4C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="500" cy="300" r="5" fill="#FFFFFF" />
              <circle cx="620" cy="230" r="5" fill="#FFFFFF" />
              <circle cx="740" cy="170" r="5" fill="#FFFFFF" />
              <text x="435" y="410" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">Mon</text>
              <text x="500" y="410" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">Tue</text>
              <text x="560" y="410" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">Wed</text>
              <text x="620" y="410" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">Thu</text>
              <text x="680" y="410" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">Fri</text>
              <text x="740" y="410" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">Sat</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Choose RistoAI</span>
            <h2 className={styles.sectionTitle}>Everything You Need to Scale</h2>
            <p className={styles.sectionSubtitle}>
              Empower your restaurant team with modern AI features designed to optimize workflows and maximize table turnover.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} glass-card`}>
              <div className={styles.featureIcon}>💡</div>
              <h3>AI Menu Suggestions</h3>
              <p>
                Get real-time suggestions based on current inventory, pairing algorithms, and historical customer favorites to increase average ticket size.
              </p>
            </div>

            <div className={`${styles.featureCard} glass-card`}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Basic Sales Analytics</h3>
              <p>
                Track restaurant revenue, product popularity, and hourly sales volume with beautiful, clean, and intuitive reports.
              </p>
            </div>

            <div className={`${styles.featureCard} glass-card`}>
              <div className={styles.featureIcon}>✉️</div>
              <h3>Direct Email Support</h3>
              <p>
                Get dedicated support from our tech team whenever you need help configuring menus, setting up users, or troubleshooting connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Plan Section */}
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Subscription Plans</span>
            <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
            <p className={styles.sectionSubtitle}>
              Unlock all features with a free trial. Cancel or change plans anytime directly from the mobile app settings.
            </p>
          </div>

          {/* Billing Switch */}
          <div className={styles.pricingToggleContainer}>
            <span className={`${styles.toggleLabel} ${billingCycle === "1_month" ? styles.toggleLabelActive : ""}`}>
              Monthly
            </span>
            <div 
              className={`${styles.toggleSwitch} ${billingCycle === "1_year" ? styles.toggleSwitchChecked : ""}`}
              onClick={() => setBillingCycle(prev => prev === "1_month" ? "1_year" : "1_month")}
            >
              <div className={`${styles.toggleHandle} ${billingCycle === "1_year" ? styles.toggleHandleChecked : ""}`} />
            </div>
            <span className={`${styles.toggleLabel} ${billingCycle === "1_year" ? styles.toggleLabelActive : ""}`}>
              Yearly <span style={{ color: "#10B981", fontSize: "0.8rem", fontWeight: "bold" }}>(Save 17%)</span>
            </span>
          </div>

          {/* Pricing Grid */}
          <div className={styles.pricingGrid}>
            <div className={`${styles.priceCard} ${styles.bestValueCard} glass-card`}>
              <div className={styles.bestValueBadge}>Best Value</div>
              <h3 className={styles.planName}>Core Plan</h3>
              <p className={styles.planDesc}>Fully loaded features for restaurants of all sizes.</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.priceSymbol}>€</span>
                <span className={styles.priceAmount}>{corePlanPrice}</span>
                <span className={styles.pricePeriod}>{periodLabel}</span>
              </div>

              <div className={styles.trialBadge}>
                ✨ 7-Day Free Trial Included
              </div>

              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span> Real-Time AI Menu Suggestions
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span> Complete Sales Analytics & Charts
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span> Multi-Lingual Support (EN, IT)
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span> Email & Push notifications
                </li>
              </ul>

              <a href="#download" className={`${styles.pricingBtn} ${styles.primaryPricingBtn}`}>
                Subscribe via Mobile App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className={styles.downloadSection}>
        <div className="container">
          <h2 className={styles.downloadTitle}>Get Started with RistoAI Today</h2>
          <p className={styles.downloadSubtitle}>
            Download the app on your mobile device, start your free trial, and upgrade your restaurant's digital presence instantly.
          </p>

          <div className={styles.badgeGrid}>
            {/* Apple App Store Badge */}
            <a href="#" className={styles.badgeLink}>
              <svg className={styles.storeBadge} viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="135" height="40" rx="6" fill="black" stroke="#333333" strokeWidth="1" />
                {/* Apple Logo Icon */}
                <path d="M 22 23 C 22 20 24.5 18.5 24.6 18.4 C 23.2 16.3 20.9 16 20.2 16 C 18.3 15.8 16.5 17.1 15.5 17.1 C 14.5 17.1 13.0 16 11.5 16 C 9.5 16 7.6 17.1 6.6 18.8 C 4.5 22.4 6.1 27.7 8.1 30.6 C 9.1 32 10.2 33.6 11.7 33.5 C 13.2 33.4 13.7 32.5 15.5 32.5 C 17.3 32.5 17.8 33.5 19.3 33.5 C 20.9 33.5 21.9 32 22.9 30.6 C 24.0 29.0 24.5 27.5 24.5 27.4 C 24.4 27.3 22 26.4 22 23 Z" fill="white" />
                <path d="M 18.3 12.8 C 19.1 11.8 19.7 10.4 19.5 9 C 18.3 9.1 16.8 9.8 16.0 10.8 C 15.3 11.6 14.7 13 15.0 14.4 C 16.3 14.5 17.6 13.7 18.3 12.8 Z" fill="white" />
                {/* Badge text */}
                <text x="35" y="16" fill="white" fontSize="6.5" fontWeight="normal" fontFamily="sans-serif">Download on the</text>
                <text x="35" y="29" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">App Store</text>
              </svg>
            </a>

            {/* Google Play Store Badge */}
            <a href="#" className={styles.badgeLink}>
              <svg className={styles.storeBadge} viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="135" height="40" rx="6" fill="black" stroke="#333333" strokeWidth="1" />
                {/* Play Store Logo triangle icon */}
                <path d="M 10 10 L 10 30 L 25 20 Z" fill="#10B981" />
                <path d="M 10 10 L 18 18 L 25 20 Z" fill="#0EA5E9" />
                <path d="M 10 30 L 18 22 L 25 20 Z" fill="#F59E0B" />
                <path d="M 10 10 L 10 30 L 18 20 Z" fill="#EF4444" />
                {/* Badge text */}
                <text x="35" y="16" fill="white" fontSize="6.5" fontWeight="normal" fontFamily="sans-serif">GET IT ON</text>
                <text x="35" y="29" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Google Play</text>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerGrid} container`}>
          <div className={styles.footerLogo}>
            <div className={styles.logoIcon}>R</div>
            <span>RistoAI</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms of Use</Link>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} RistoAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
