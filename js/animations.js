function startClock(){

  setInterval(() => {

    const now = new Date();

    document.getElementById("clock")
      .innerText = now.toLocaleTimeString();

  },1000);

}

/* LIVE THREAT FEED */

function generateFeed(){

  const feed =
    document.getElementById("activityFeed");

  const messages = [

    "Blocked suspicious login attempt",

    "Detected phishing domain activity",

    "High risk URL quarantined",

    "SSL mismatch detected",

    "Suspicious network traffic identified",

    "Threat intelligence database updated",

    "Potential malware delivery URL blocked",

    "Monitoring suspicious subdomain traffic"

  ];

  setInterval(() => {

    const div =
      document.createElement("div");

    div.className = "feed-item";

    div.innerText =
      messages[
        Math.floor(
          Math.random() * messages.length
        )
      ];

    feed.prepend(div);

    /* LIMIT FEED ITEMS */

    if(feed.children.length > 8){

      feed.removeChild(
        feed.lastChild
      );

    }

  },3000);

}
