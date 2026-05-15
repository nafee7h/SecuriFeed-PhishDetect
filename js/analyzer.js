function analyzeURL(url){

  let score = 0;
  let threats = [];
  let recommendations = [];

  const suspiciousKeywords = [
    "login",
    "verify",
    "secure",
    "bank",
    "update",
    "bonus",
    "free",
    "paypal",
    "crypto",
    "wallet"
  ];

  const suspiciousTlds = [
    ".xyz",
    ".tk",
    ".ru",
    ".top",
    ".gq"
  ];

  /* HTTP CHECK */

  if(url.startsWith("http://")){
    score += 20;
    threats.push("Uses insecure HTTP protocol");
  }

  /* IP ADDRESS CHECK */

  const ipRegex = /\b\d{1,3}(\.\d{1,3}){3}\b/;

  if(ipRegex.test(url)){
    score += 25;
    threats.push("Raw IP address detected");
  }

  /* SUSPICIOUS KEYWORDS */

  suspiciousKeywords.forEach(keyword => {

    if(url.toLowerCase().includes(keyword)){

      score += 15;

      threats.push(
        `Suspicious keyword found: ${keyword}`
      );
    }

  });

  /* TLD CHECK */

  suspiciousTlds.forEach(tld => {

    if(url.includes(tld)){

      score += 15;

      threats.push(
        `Suspicious domain extension: ${tld}`
      );
    }

  });

  /* URL LENGTH */

  if(url.length > 50){

    score += 10;

    threats.push(
      "Very long URL detected"
    );
  }

  /* HYPHENS */

  const hyphenCount = (url.match(/-/g) || []).length;

  if(hyphenCount > 3){

    score += 10;

    threats.push(
      "Too many hyphens"
    );
  }

  /* LOOKALIKE CHARACTERS */

  if(
    url.includes("0") ||
    url.includes("1") ||
    url.includes("@")
  ){

    score += 20;

    threats.push(
      "Possible lookalike characters detected"
    );
  }

  /* SUBDOMAIN CHECK */

  const dotCount = (url.match(/\./g) || []).length;

  if(dotCount > 3){

    score += 10;

    threats.push(
      "Excessive subdomains detected"
    );
  }

  /* FINAL RISK LEVEL */

  let level = "SAFE";

  if(score >= 20){
    level = "MEDIUM RISK";
  }

  if(score >= 50){
    level = "HIGH RISK";
  }

  if(score >= 80){
    level = "DANGEROUS";
  }

  /* RECOMMENDATIONS */

  if(score >= 50){

    recommendations.push(
      "Avoid visiting this website"
    );

    recommendations.push(
      "Do not enter passwords or payment information"
    );

    recommendations.push(
      "Verify the domain carefully"
    );

  } else {

    recommendations.push(
      "No major threats detected"
    );

  }

  return {
    score,
    level,
    threats,
    recommendations
  };

}

