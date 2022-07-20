// ,,,,,,,,,,,,,,.redirect from logo to main pageXOffset.toExponential....

let logo = document.querySelector("#redirect");
logo.style.cursor = "pointer";
logo.addEventListener("click", () => {
  alert("Faketube by SHIVAM");
  window.location.href = "yt.html";
});

// ...................................................................

let search2 = document.getElementById("search");

search2.addEventListener("keydown", async function (event) {
  if (event.code == "Enter") {
    let inp = search.value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inp}&key=AIzaSyAMCX5XR8DDTq3pMPKJk23F9T_GrJK2FDU`
    );
    let data = await res.json();
    console.log(data.items);
    append2(data.items);
  }
});

let append2 = (data) => {
  let box = document.getElementById("result");
  box.innerHTML = null;

  data.map((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "op");
    div.onclick = () => {
      savevideo(el);
    };
    let img = document.createElement("img");
    img.src = el.snippet.thumbnails.medium.url;
    let name = document.createElement("h4");
    name.innerText = el.snippet.title;
    div.append(img, name);
    box.append(div);
  });
};
let savevideo = (data) => {
  localStorage.setItem("video", JSON.stringify(data));
  window.location.href = "vid.html";
};

let getdata = async () => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=rating&key=AIzaSyAMCX5XR8DDTq3pMPKJk23F9T_GrJK2FDU`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.items);
  append(data.items);
};
getdata();

let append = (data) => {
  let box = document.getElementById("result");
  box.innerHTML = null;
  data.map((el) => {
    let img = document.createElement("img");
    img.src = el.snippet.thumbnails.medium.url;
    let h2 = document.createElement("h4");
    h2.innerText = el.snippet.title;
    let div = document.createElement("div");
    div.style.cursor = "pointer";
    div.onclick = () => {
      savevideo2(el);
    };
    div.append(img, h2);
    box.append(div);
  });
};
let savevideo2 = (data) => {
  localStorage.setItem("video2", JSON.stringify(data));
  window.location.href = "vid2.html";
};
