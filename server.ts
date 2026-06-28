import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Exact matching and case-insensitive redirects for onboard-creso/onborard-creso
  const redirectTarget = "https://partners.creso.in/mfd/nitin-narang";
  
  const redirectHandler = (req: express.Request, res: express.Response) => {
    console.log(`[Redirect] Routing ${req.originalUrl} to ${redirectTarget}`);
    res.redirect(302, redirectTarget);
  };

  // Support both normal spelling and the specific typo spelling requested by the user
  app.get("/onboard-creso", redirectHandler);
  app.get("/onboard-creso/", redirectHandler);
  app.get("/onborard-creso", redirectHandler);
  app.get("/onborard-creso/", redirectHandler);

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Narang Wealth Server is running." });
  });

  // Vite middleware for dev / static files for prod
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // Fallback all other routes to index.html
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
