"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./privacy.module.css";

interface PrivacyPolicyData {
  key: string;
  title: string;
  content: string;
  updated_at: string | null;
  updated_by: string | null;
}

const STATIC_FALLBACK_CONTENT = `RistoAI ("we", "our", or "us") operates the RistoAI mobile application (also referred to as Aldo). We are committed to protecting your privacy. This Privacy Policy outlines our practices regarding data collection, usage, and security.

1. Information We Collect
When you use our application to manage your restaurant, we collect certain personal and business-related information to provide and improve our service:
- Account Information: Your email address, full name, and passwords when you register or manage an account.
- Restaurant Details: Name, location, and operating hours of your restaurant to configure the AI features correctly.
- Microphone Data: The application requests permission to use your device's microphone. This permission is used exclusively for speech-to-text translation (allowing you to dictate voice commands to our chat feature) and is processed securely.
- Subscription and Billing Data: Payment processing is handled by third-party processors (such as Stripe and RevenueCat). We do not store your full credit card details on our servers.

2. How We Use Your Information
We use the collected information for the following purposes:
- To authenticate your identity and secure your restaurant account.
- To generate tailored AI menu recommendations and calculate sales analytics.
- To manage your subscription plans and handle transactions securely.
- To send push notifications and email updates regarding low-stock alerts or sales summaries (if enabled in settings).

3. Data Sharing and Third Parties
We do not sell your personal data. We only share information with trusted third-party providers required to run the service:
- Stripe: For secure payment gateway operations.
- RevenueCat: For tracking app subscriptions and subscription states across Android and iOS devices.
- Database & Cloud Hosting: To securely store user details and restaurant data.

4. Device Permissions
To provide specific features, our app requests the following native permissions on your mobile device:
- Audio / Microphone Access: Required to capture voice inputs and transcribe them into text for the AI chat assistant.
- Notifications: Used to send alerts, low-stock warnings, and daily summary statistics.

5. Data Security and Deletion
We implement industry-standard security measures to safeguard your information from unauthorized access, loss, or alteration. If you wish to delete your account or request the removal of all personal data, you can contact us at support@ristoai.com, and we will process your request within 30 days.

6. Contact Us
If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out to us:
Email: support@ristoai.com`;

export default function PrivacyPolicy() {
  const [data, setData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPolicy() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${baseUrl}/api/v1/settings/privacy-policy`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        console.error("Failed to load privacy policy from API", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPolicy();
  }, []);

  const title = data?.title || "Privacy Policy";
  const rawContent = data?.content || STATIC_FALLBACK_CONTENT;

  // Clean date parsing
  let updatedAtStr = "July 19, 2026";
  if (data?.updated_at) {
    try {
      updatedAtStr = new Date(data.updated_at).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    } catch (e) {
      updatedAtStr = data.updated_at;
    }
  }

  // Parse paragraphs by double newlines or single newlines with list items
  const paragraphs = rawContent.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

  return (
    <div className={styles.wrapper}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={`${styles.navContainer} container`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>R</div>
            <span>RistoAI</span>
          </div>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.contentSection}>
        <div className="container">
          <article className={`${styles.articleCard} glass-card`}>
            {loading ? (
              <div style={{ textAlign: "center", padding: "4rem 0" }}>
                <div className={styles.spinner}></div>
                <p style={{ marginTop: "1rem", color: "var(--text-muted)" }}>Loading Privacy Policy...</p>
              </div>
            ) : (
              <>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.lastUpdated}>Effective Date: {updatedAtStr}</span>

                <div className={styles.articleBody}>
                  {paragraphs.map((para, i) => {
                    // Check if it's a numbered section header like "1. Information We Collect"
                    if (/^\d+\./.test(para)) {
                      const lines = para.split("\n");
                      const sectionHeader = lines[0];
                      const sectionBody = lines.slice(1);
                      return (
                        <div key={i} style={{ marginBottom: "2.5rem" }}>
                          <h2>{sectionHeader}</h2>
                          {sectionBody.map((line, idx) => {
                            const trimmedLine = line.trim();
                            if (trimmedLine.startsWith("-")) {
                              return (
                                <li key={idx} style={{ marginLeft: "1.5rem", marginBottom: "0.5rem", listStyleType: "square" }}>
                                  {trimmedLine.replace(/^-/, "").trim()}
                                </li>
                              );
                            }
                            return <p key={idx}>{trimmedLine}</p>;
                          })}
                        </div>
                      );
                    }

                    // Regular paragraph
                    return <p key={i}>{para}</p>;
                  })}
                </div>
              </>
            )}
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} RistoAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
