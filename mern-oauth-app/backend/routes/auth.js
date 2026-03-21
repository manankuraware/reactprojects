import express from "express";
import passport from "passport";

const router = express.Router();

// Start Google login
router.get("/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback
router.get("/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/"
    }),
    (req, res) => {
        res.redirect("http://localhost:5173/dashboard");
    }
);

// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.send("Logged out");
    });
});

// Get current user
router.get("/user", (req, res) => {
    res.send(req.user);
});

export default router;