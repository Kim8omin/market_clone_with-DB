const renderData = (data) => {
    const main =document.querySelector("main");
    data.forEach((obj) => {
      const div = document.createElement("div");
      div.className = "item-list";

      const infoDiv = document.createElement("div");
      infoDiv.className = "item-list__info";

      const infoTitleDiv = document.createElement("div");
      infoTitleDiv.className = "info__title";
      infoTitleDiv.innerText=obj.title;

      const infoMetaDiv = document.createElement("div");
      infoMetaDiv.className = "info__meta";
      infoMetaDiv.innerText=obj.place;

      const infoPriceDiv = document.createElement("div");
      infoPriceDiv.className = "info__price";
      infoPriceDiv.innerText=obj.price;

      infoDiv.appendChild(infoTitleDiv);
      infoDiv.appendChild(infoMetaDiv);
      infoDiv.appendChild(infoPriceDiv);
      div.appendChild(infoDiv);
      main.appendChild(div);
    });
};
 




const fetchList = async() => {
    const res =await fetch ('/items');
    const data =await res.json ();
    renderData(data);
};

fetchList();