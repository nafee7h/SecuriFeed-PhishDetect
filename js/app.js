window.addEventListener("DOMContentLoaded", () => {

  /* START SYSTEMS */

  startClock();

  generateFeed();

  loadNews();

  /* ANALYZE BUTTON */

  document
    .getElementById("analyzeBtn")
    .addEventListener("click", () => {

      const url =
        document
          .getElementById("urlInput")
          .value
          .trim();

      /* EMPTY INPUT */

      if(!url){

        alert("Enter a URL");

        return;

      }

      /* ANALYZE URL */

      const result =
        analyzeURL(url);

      /* UPDATE UI */

      updateUI(result);

      /* UPDATE STATS */

      incrementValue("scanCount");

      if(result.level === "DANGEROUS"){

        incrementValue("dangerCount");

      }

    });

});
