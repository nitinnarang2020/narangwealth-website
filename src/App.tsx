/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, ShieldCheck, Landmark, Globe } from "lucide-react";
import logoImg from "./assets/images/narang_wealth_hero_logo_1782642565046.jpg";

export default function App() {
  const emailAddress = "info@narangwealth.in";
  const emailSubject = "Inquiry - Narang Wealth";
  const emailBody = "Hello Nitin,\n\nI am interested in learning more about Narang Wealth.\n\nBest regards,";
  
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1A17] flex flex-col justify-between selection:bg-[#EAE6DF] selection:text-[#1C1A17] font-sans antialiased relative overflow-hidden">
      {/* Decorative ambient background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle top-right warm glow */}
        <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-[#EFECE3] opacity-60 blur-[120px]" />
        {/* Subtle bottom-left warm glow */}
        <div className="absolute -bottom-[30%] -left-[20%] w-[80%] h-[80%] rounded-full bg-[#F4F1EA] opacity-50 blur-[120px]" />
        
        {/* Minimalist modern grid line overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header / Brand bar */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-end items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-1.5 text-xs font-medium text-[#78716C] tracking-wide"
          id="status-indicator"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
          </span>
          SECURE ENCRYPTED
        </motion.div>
      </header>

      {/* Main Showcase Card Area */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-2xl text-center">
          {/* Main Card with elegant subtle shadows & borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md border border-[#EAE6DF] rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden"
            id="landing-card"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200" />

            {/* Centered Brand Logo */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex justify-center mb-8"
              id="brand-logo"
            >
              <img 
                src={logoImg} 
                alt="Narang Wealth" 
                className="w-[250px] h-[250px] object-contain mix-blend-multiply filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Small subtle pre-heading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display font-semibold tracking-[0.25em] text-xs text-[#B45309] uppercase mb-10"
              id="sub-heading"
            >
              narangwealth.in
            </motion.p>

            {/* Primary Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              id="cta-container"
            >
              {/* Highlighted Portal Link */}
              <a
                href="/onboard-creso"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1C1A17] hover:bg-[#2E2A25] text-white text-sm font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-98"
                id="portal-redirect-link"
              >
                Start Your Investment Journey
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              {/* Unhighlighted Email Inquiry */}
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent hover:bg-[#F5F2EB] text-[#57534E] hover:text-[#1C1A17] text-sm font-medium rounded-xl border border-[#EAE6DF] transition-all duration-300"
                id="email-inquire-button"
              >
                <Mail className="w-4 h-4" />
                Inquire via Email
              </a>
            </motion.div>

            {/* Regulatory and Disclaimer Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 pt-8 border-t border-[#F5F2EB] text-xs text-[#78716C] flex flex-col items-center justify-center gap-2 text-center"
              id="regulatory-disclaimer-info"
            >
              <div className="font-medium text-[#1C1A17] flex items-center gap-1.5 justify-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                AMFI-registered Mutual Fund Distributor (ARN-362761)
              </div>
              <div className="font-medium text-[#1C1A17] max-w-lg leading-normal">
                Mutual Fund investments are subject to market risks, read all scheme related documents carefully
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer containing copyrights and regulatory mention */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#EAE6DF]/60 relative z-10" id="landing-footer">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#78716C] font-medium tracking-wide">
          <div>
            © {new Date().getFullYear()} Narang Wealth. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[#A8A29E]">
            Empowering private wealth.
          </div>
        </div>
      </footer>
    </div>
  );
}
