import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Verification Game",
    "one_liner": "Engage users in verifying smart contracts through gamified challenges.",
    "why_now": "With DeFi expanding, public interest in understanding smart contracts is peaking.",
    "novel_mechanism": "Combine game dynamics with AI to incentivize learning about contract security.",
    "ai_stack": [
      "Claude/GPT",
      "Agents"
    ],
    "edge_use_cases": [
      "Training future auditors",
      "Community-based bug detection"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "game mechanics",
        "AI-powered feedback",
        "basic contract samples"
      ],
      "tools": [
        "React",
        "Firebase",
        "Socket.io"
      ],
      "data_bootstrap": [
        "public smart contract examples",
        "synthetic contracts via LLM"
      ],
      "risk": [
        "user engagement may be low",
        "initial content may lack depth"
      ],
      "mitigation": [
        "target niche communities",
        "collaborate with influencers"
      ]
    },
    "go_to_market": {
      "hooks": [
        "unlock rewards for correct answers",
        "before/after scoreboard results"
      ],
      "channels": [
        "Reddit",
        "Discord",
        "Twitter"
      ],
      "pricing": {
        "free": "basic access",
        "pro": "premium challenges",
        "business": "team training packages"
      }
    },
    "moat": [
      "community building",
      "knowledge accumulation",
      "partnerships with blockchain projects"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "Transforms a traditionally dry topic into an interactive experience, appealing to a broader audience."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}