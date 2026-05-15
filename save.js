function saveProject(){

  localStorage.setItem(
    "ciscoProject",
    JSON.stringify(devices)
  );

  alert("Project Saved");

}

function loadProject(){

  const data = JSON.parse(
    localStorage.getItem("ciscoProject")
  );

  if(!data) return;

  document.querySelectorAll(".device").forEach(d=>d.remove());

  data.forEach(dev=>{

    addDevice(dev.type);

  });

}
