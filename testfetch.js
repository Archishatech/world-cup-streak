(async () => {
  try {
    const res = await fetch("https://api.football-data.org/v4/matches", {
      headers: { "X-Auth-Token": "ff8fb7f5d23b475591e9a186ae9518fe" }
    });
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Matches length:", data.matches.length);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
})();
