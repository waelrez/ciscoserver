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

let selectedDevice = null;

workspace.addEventListener("click",(e)=>{

  if(!e.target.classList.contains("device")) return;

  if(selectedDevice == null){

    selectedDevice = e.target;

    selectedDevice.style.borderColor = "yellow";

  }else{

    createConnection(selectedDevice,e.target);

    selectedDevice.style.borderColor = "#00bfff";

    selectedDevice = null;

  }

});

function createConnection(dev1,dev2){

  const line = document.createElement("div");

  line.classList.add("connection");

  const x1 = dev1.offsetLeft + 45;
  const y1 = dev1.offsetTop + 45;

  const x2 = dev2.offsetLeft + 45;
  const y2 = dev2.offsetTop + 45;

  const length = Math.hypot(x2 - x1,y2 - y1);

  const angle = Math.atan2(y2 - y1,x2 - x1) * 180 / Math.PI;

  line.style.width = length + "px";

  line.style.left = x1 + "px";

  line.style.top = y1 + "px";

  line.style.transform = `rotate(${angle}deg)`;

  workspace.appendChild(line);

}

  });

}
