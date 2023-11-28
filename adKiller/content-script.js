const removeAds = () => {
  if (document.getElementById("removeAds")) {
    return;
  }
  const temp = document.createElement("style");
  temp.id = "removeAds";
  (document.head || document.body).appendChild(temp);
  const css = `divz{display:none !important}`;
  temp.innerHTML = css;
};
removeAds();
