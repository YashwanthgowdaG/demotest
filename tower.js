const towers = {
  tower: ['tower7', 'tower8', 'tower9'],
   tower: [],
   tower: [],
 };

 let selectedTower = null;

 function selectTower(tower) {
   if (selectedTower === null) {
     selectedTower = tower;
   } else {
     moveDisk(selectedTower, tower);
     selectedTower = null;
   }

   updateView();
 }

 function moveDisk(from, to) {
   const disk = towers[from].pop();
   towers[to].push(disk);
 }

 function updateView() {
   const towersElement = document.querySelectorAll('.tower');

   towersElement.forEach((tower, index) => {
     const disks = towers[String.fromCharCode(65 + index)];

     tower.innerHTML = '';

     disks.forEach((diskId, i) => {
       const diskElement = document.createElement('div');
       diskElement.className = 'disk';
       diskElement.id = diskId;

       tower.appendChild(diskElement);
     });
   });
 }

 updateView();*/
