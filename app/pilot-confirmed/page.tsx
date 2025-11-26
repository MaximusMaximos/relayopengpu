export default function PilotConfirmed() {
  return (
    <html lang="en">
      <head>
        <title>OGPU | Pilot Request Confirmed</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #001F4E 0%, #00C6FF 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 40px 20px;
          }
          .ogpu-card {
            background: #ffffff;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            max-width: 760px;
            width: 100%;
            padding: 60px 50px;
            text-align: center;
            animation: fadeIn 0.6s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .ogpu-logo {
            width: 120px;
            margin-bottom: 32px;
          }
          h1 {
            font-size: 32px;
            font-weight: 700;
            color: #0F172A;
            margin-bottom: 16px;
          }
          p {
            font-size: 17px;
            color: #4B5563;
            line-height: 1.7;
            margin-bottom: 36px;
          }
          a.ogpu-btn {
            display: inline-block;
            background: linear-gradient(90deg, #001F4E 0%, #00C6FF 100%);
            color: #fff;
            padding: 14px 28px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            transition: opacity 0.25s, transform 0.2s;
            margin-bottom: 40px;
          }
          a.ogpu-btn:hover {
            opacity: 0.9;
            transform: translateY(-1px);
          }
          .ogpu-next {
            background: #F8FAFC;
            border: 1px solid #E5E7EB;
            border-radius: 14px;
            padding: 32px;
            text-align: left;
          }
          .ogpu-next h3 {
            font-size: 20px;
            font-weight: 600;
            color: #0F172A;
            margin-bottom: 12px;
          }
          .ogpu-next p {
            font-size: 15px;
            color: #475569;
            margin: 0;
            line-height: 1.6;
          }
          @media (max-width: 640px) {
            .ogpu-card { padding: 40px 24px; }
            h1 { font-size: 26px; }
          }
        `}</style>
      </head>

      <body>
        <div className="ogpu-card">
          <img src="/Images/OGPU-LOGO-Main-black.png" alt="OGPU Logo" className="ogpu-logo" />

          <h1>✅ Pilot Request Received</h1>
          <p>
            Thank you for submitting your pilot request.<br />
            Our engineering team is now reviewing your workload.<br />
            You will receive next steps within <strong>24–48 hours</strong>.
          </p>

          <a href="https://t.me/opengpuportal" target="_blank" className="ogpu-btn">
            Join the OGPU Telegram →
          </a>

          <div className="ogpu-next">
            <h3>What Happens Next?</h3>
            <p>
              • We assess your compute and scaling requirements<br />
              • We route your workload to optimal regions<br />
              • You receive pricing benchmarks and pilot onboarding<br />
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
