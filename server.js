const express = require("express");
const path = require("path");

const app = express();

app.get("/matches", async (req, res) => {
  try {
    const resApi = await fetch("https://api.football-data.org/v4/matches", {
      headers: { "X-Auth-Token": "ff8fb7f5d23b475591e9a186ae9518fe" }
    });

    console.log("API status:", resApi.status);

    if (!resApi.ok) {
      const text = await resApi.text();
      console.error("API error response:", text);
      return res.status(resApi.status).json({ error: text });
    }

    const data = await resApi.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching matches:", err);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
