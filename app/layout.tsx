import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitLog — Auto-generate changelogs from git commits",
  description: "Connect your GitHub or GitLab repo, let AI analyze your commits, and publish beautiful customer-facing changelogs automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7509101b-d5b1-44f3-9649-6a1020963ecc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen antialiased">{children}</body>
    </html>
  );
}
