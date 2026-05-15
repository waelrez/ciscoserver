const workspace = document.getElementById("workspace");

let devices = [];

function addDevice(type){

  const device = document.createElement("div");

  device.classList.add("device");

  device.innerText = deviceTypes[type].name;

  device.style.left = "200px";
  device.style.top = "150px";

  workspace.appendChild(device);

  makeDraggable(device);

  devices.push({
    type:type,
    x:200,
    y:150
  });

}

function makeDraggable(element){

  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;

  element.addEventListener("mousedown",(e)=>{

    dragging = true;

    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

  });

  document.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    element.style.left = (e.clientX - offsetX) + "px";
    element.style.top = (e.clientY - offsetY) + "px";

  });

  document.addEventListener("mouseup",()=>{

    dragging = false;

  });

}
