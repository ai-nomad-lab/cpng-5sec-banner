  var cpngDiv = document.createElement("div");
  cpngDiv.id = "cpngDiv";
  cpngDiv.style.position = "fixed";
  cpngDiv.style.width = "100%";
  cpngDiv.style.height = "autopx";
  cpngDiv.style.bottom = "0";
  cpngDiv.style.left = "50%";
  cpngDiv.style.transform = "translateX(-50%)";
  cpngDiv.style.display = "flex";
  cpngDiv.style.flexDirection = "column";
  cpngDiv.style.justifyContent = "center";
  cpngDiv.style.alignItems = "center";
  cpngDiv.style.textAlign = "center";
  cpngDiv.style.zIndex = "9999";
  cpngDiv.style.background = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)";

  var cpngArea = document.createElement("div");
  cpngArea.id = "cpngArea";
  cpngArea.style.backgroundColor = "width: auto";
  cpngArea.style.height = "auto";
  cpngArea.style.textAlign = "center";
  cpngArea.style.display = "flex";
  cpngArea.style.flexDirection = "column";
  cpngArea.style.justifyContent = "center";
  cpngArea.style.alignItems = "center";

  var tempSpaceDivTop = document.createElement("div");
  tempSpaceDivTop.id = "tempSpaceDivTop";
  tempSpaceDivTop.style.width = "auto";
  tempSpaceDivTop.style.height = "120px";

  var cpngText1 = document.createElement("div");
  cpngText1.id = "cpngText1";
  cpngText1.style.width = "auto";
  cpngText1.style.height = "120px";
  cpngText1.style.display = "flex";
  cpngText1.style.justifyContent = "center";
  cpngText1.style.alignItems = "center";
  cpngText1.innerHTML = "<br><br>"+customCpngText1;

  var cpngBanner = document.createElement("div");
  cpngBanner.id = "cpngBanner";
  cpngBanner.style.width = "100%";
  cpngBanner.style.height = "80px";
  cpngBanner.style.background = "linear-gradient(to bottom, #1DCAB9, #11888B)";
  cpngBanner.style.borderRadius = "10px";
  cpngBanner.style.position = "relative";
  cpngBanner.style.display = "flex";
  cpngBanner.style.flexDirection = "column";
  cpngBanner.style.justifyContent = "center";
  cpngBanner.style.alignItems = "center";
  cpngBanner.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";

  var countdown = document.createElement("div");
  countdown.id = "countdown";
  countdown.style.position = "absolute";
  countdown.style.top = "0";
  countdown.style.right = "0";
  countdown.style.width = "20px";
  countdown.style.height = "20px";
  countdown.style.backgroundColor = "white";
  countdown.style.justifyContent = "center";
  countdown.style.alignItems = "center";
  countdown.style.margin = "5px 5px 0 0";
  countdown.style.fontSize = "1.1em";
  countdown.style.color = "#3C81F6";
  countdown.style.textAlign = "center";
  countdown.style.cursor = "pointer";
  countdown.style.borderRadius = "20%";
  countdown.innerText = "5";

  var cpngAdsClick = document.createElement("a");
  cpngAdsClick.id = "cpngAdsClick";
  cpngAdsClick.href = customCpngLink;
  cpngAdsClick.target = "_blank";

  var cpngText2 = document.createElement("div");
  cpngText2.id = "cpngText2";
  cpngText2.style.width = "300px";
  cpngText2.style.height = "80px";
  cpngText2.style.display = "flex";
  cpngText2.style.flexDirection = "column";
  cpngText2.style.justifyContent = "center";
  cpngText2.style.alignItems = "center";
  cpngText2.innerHTML = customCpngText2;

  var cpngText3 = document.createElement("div");
  cpngText3.id = "cpngText3";
  cpngText3.style.width = "auto";
  cpngText3.style.height = "30px";
  cpngText3.style.display = "flex";
  cpngText3.style.justifyContent = "center";
  cpngText3.style.alignItems = "center";
  cpngText3.innerHTML = customCpngText3;

  var tempSpaceDivBottom = document.createElement("div");
  tempSpaceDivBottom.id = "tempSpaceDivBottom";
  tempSpaceDivBottom.style.width = "auto";
  tempSpaceDivBottom.style.height = "10px";

  cpngBanner.appendChild(countdown);
  cpngAdsClick.appendChild(cpngText2);
  cpngBanner.appendChild(cpngAdsClick);

  cpngArea.appendChild(tempSpaceDivTop);
  cpngArea.appendChild(cpngText1);
  cpngArea.appendChild(cpngBanner);
  cpngArea.appendChild(cpngText3);
  cpngArea.appendChild(tempSpaceDivBottom);

  cpngDiv.appendChild(cpngArea);

  document.body.appendChild(cpngDiv);
