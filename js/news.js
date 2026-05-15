async function loadNews(){

  const container =
    document.getElementById("newsContainer");

  container.innerHTML = "";

  /* DEMO CYBER NEWS */

  const news = [

    {
      title:
        "Massive Phishing Campaign Targets Banking Users",

      description:
        "Researchers discovered large-scale phishing attacks using fake banking portals."
    },

    {
      title:
        "Critical Browser Vulnerability Patched",

      description:
        "Security experts urge users to update browsers immediately."
    },

    {
      title:
        "Fake Crypto Wallet Sites Increasing",

      description:
        "Attackers are using typo-squatting domains to steal crypto assets."
    },

    {
      title:
        "New Malware Variant Detected",

      description:
        "Cybersecurity firms report rapid malware distribution through phishing emails."
    }

  ];

  news.forEach(item => {

    const card =
      document.createElement("div");

    card.className = "news-card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    container.appendChild(card);

  });

}
