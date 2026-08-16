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

export default function PrivacyPolicy() {
  const [data, setData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPolicy() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://ristoai.onrender.com";
        const res = await fetch(`${baseUrl}/api/v1/settings/privacy-policy`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
        } else {
          setError("Privacy Policy is currently unavailable. Please check back shortly.");
        }
      } catch (err) {
        console.error("Failed to load privacy policy from API", err);
        setError("Privacy Policy is currently unavailable. Please check back shortly.");
      } finally {
        setLoading(false);
      }
    }
    fetchPolicy();
  }, []);

  const title = data?.title || "Privacy Policy";
  const rawContent = data?.content || "";

  // Clean date parsing
  let updatedAtStr = "";
  if (data?.updated_at) {
    try {
      updatedAtStr = new Date(data.updated_at).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (e) {
      updatedAtStr = data.updated_at;
    }
  }

  // Parse paragraphs by double newlines or single newlines with list items
  const paragraphs = rawContent.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

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
                <p style={{ marginTop: "1rem", color: "var(--text-muted)" }}>
                  Loading Privacy Policy...
                </p>
              </div>
            ) : error || !data ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
                  {error || "No content found."}
                </p>
              </div>
            ) : (
              <>
                <h1 className={styles.title}>{title}</h1>
                {updatedAtStr ? (
                  <span className={styles.lastUpdated}>Effective Date: {updatedAtStr}</span>
                ) : null}

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
                            if (trimmedLine.startsWith("-") || trimmedLine.startsWith("•")) {
                              return (
                                <li
                                  key={idx}
                                  style={{
                                    marginLeft: "1.5rem",
                                    marginBottom: "0.5rem",
                                    listStyleType: "square",
                                  }}
                                >
                                  {trimmedLine.replace(/^[-•]\s*/, "").trim()}
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
