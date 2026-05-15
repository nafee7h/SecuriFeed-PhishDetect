function updateUI(result){

  /* RISK SCORE */

  document.getElementById("riskCircle").innerText =
    result.score;

  /* RISK LEVEL */

  document.getElementById("riskLevel").innerText =
    result.level;

  /* THREATS */

  const threatList =
    document.getElementById("threatList");

  threatList.innerHTML = "";

  if(result.threats.length === 0){

    threatList.innerHTML =
      "<li>No threats detected</li>";

  } else {

    result.threats.forEach(threat => {

      const li = document.createElement("li");

      li.innerText = threat;

      threatList.appendChild(li);

    });

  }

  /* RECOMMENDATIONS */

  const recommendations =
    document.getElementById("recommendations");

  recommendations.innerHTML = "";

  result.recommendations.forEach(rec => {

    const li = document.createElement("li");

    li.innerText = rec;

    recommendations.appendChild(li);

  });

  /* RISK COLORS */

  const riskCircle =
    document.getElementById("riskCircle");

  if(result.score >= 80){

    riskCircle.style.borderColor = "red";
    riskCircle.style.boxShadow =
      "0 0 25px red";

  }

  else if(result.score >= 50){

    riskCircle.style.borderColor = "orange";
    riskCircle.style.boxShadow =
      "0 0 25px orange";

  }

  else{

    riskCircle.style.borderColor = "cyan";
    riskCircle.style.boxShadow =
      "0 0 25px cyan";

  }

}
