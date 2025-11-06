const destinations = [
  { name: "Istanbul", img: "https://www.mondotravel.hr/assets/images/54/54f5d2_Depositphotos_77297078_xl-2015.jpg" },
  { name: "Rim", img: "https://avioexpress.ba/wp-content/uploads/2024/12/Rim.webp" },
  { name: "Pariz", img: "https://piovariations.cdn.podravka.net/c4fed0ec-610d-11eb-93a3-0242ac12004d/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp" },
  { name: "Tokyo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxd4PB9JV0WSats3ZUL1bYTmfqsES93UsvQ&s" },
  { name: "Barcelona", img: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt98aab8678ac3bce7/663907b78447cbf1b69ca84f/logan-armstrong-hVhfqhDYciU-unsplash-edited-MOBILE-HEADER.jpg" },
  { name: "Dubai", img: "https://res.cloudinary.com/dtljonz0f/image/upload/v1/shutterstock_2414539851_ss_non-editorial_dcx0bm" },
  { name: "Budimpešta", img: "https://mcdn.pro/data/objects/images/45287/budimpesta-5-adgmft-l-ntwxsx.jpg" },
  { name: "New York", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bd/6f/17.jpg" },
  { name: "London", img: "https://cdn.deal.dk/media/f0/07/71/1759480751/LondonBigBenRodTelefonboksByGetty.jpg?width=1920" }
];

const container = document.getElementById("destinations");

destinations.forEach(dest => {
  const col = document.createElement("div");
  col.className = "col-md-4";
  col.innerHTML = `
    <div class="card">
      <img src="${dest.img}" alt="${dest.name}">
      <div class="card-body text-center">
        <h5>${dest.name}</h5>
      </div>
    </div>
  `;
  container.appendChild(col);
});
