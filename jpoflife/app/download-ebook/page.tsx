export default function DownloadEbookPage() {
  return (
    <main style={{ maxWidth: "640px", margin: "6rem auto", padding: "1.5rem" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Thank you
      </h1>

      <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Your payment was successful.  
        You can download your ebook below.
      </p>

      <a
        href="/ebook01.pdf"
        download
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          backgroundColor: "#16a34a",
          color: "#ffffff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Download ebook
      </a>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.8 }}>
        If you experience any issue, contact: boluwatifegbede@gmail.com
      </p>
    </main>
  );
}