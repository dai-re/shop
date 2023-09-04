// data bucket
var data_d = [
  "Bike Type BMX",
  "Age Range (Description) Adult",
  "Brand Elite BMX",
  "Number of Speeds1",
  "Color Black Blue",
  "Frame Material Alloy Steel",
  "Special Feature Sealed Bearing Hubs",
  "Included Components A set of pegs",
  "Size 20",
  "Brake Style U Brake",
];

var dess = `Introducing the Elite BMX Bicycle, the ultimate freestyle bike for boys/girls who love to ride and perform amazing tricks!
Designed by Elite BMX, a trusted brand in the world of BMX bikes, this 20" trick bike is built to provide an exhilarating riding experience like no other. We understand that safety is a top priority for parents, which is why this Elite BMX Bicycle is designed with their peace of mind in mind. It is equipped with high-quality components that ensure a safe and reliable ride every time.
Not only is this BMX bike designed for performance, but it also offers a comfortable and adjustable ride. The ergonomic handlebars and padded seat ensure a comfortable riding position, while the adjustable seat height allows for growth and extended use. This means your child can enjoy this amazing BMX bike for years to come. With its sleek design and durable construction, this BMX bicycle is perfect for boys/girls who are passionate about BMX bikes and want to take their skills to the next level. Whether they're mastering flick tricks, exploring new tricks, or simply enjoying the thrill of riding, this BMX bike will not disappoint.`;

var features = [
  `BMX Bicycles 20" Frame: Hi-Tensile Steel (20 inch Top-Tube) FORK: Hi-tensile steel 1 1/8`,
  `HEADSET: 1 1/8" standard unsealed`,
  `SPROCKET: 25T HUB: F 3/8 & R 14mm`,
  `PEDALS: 1/2 " Threads Plastic Platform`,
  `BARS: Hi-Tensile steel (8.75" Rise)`,
  `STEM: Alloy (50 mm reach) top load`,
  `TIRES: 20 x 2.4" (20" Bike) 16x 2.4" for (16"Bike) DRIVER: 9T PEGS: Pair Included`,
  `CRANKS: 170 mm Chromoly 1-pc`,
  `BOTTOM BRACKET: Unsealed American 19 mm`,
];
// end data bucend

// lets bitch
let details = document.getElementById("d_list");
let des = document.getElementById("des");
let fea = document.getElementById("f_list");
let img = document.getElementById("img");
// end lets bitch

// ungly code :) sorry, but this works
function next(id) {
  img.src = `./img/${id}.png`;
}
des.innerHTML = dess;
var li = "";
for (let i = 0; i < data_d.length; i++) {
  li += `<li>${data_d[i]}</li>`;
}
details.innerHTML = li;

var feature = "";
for (let i = 0; i < features.length; i++) {
  feature += `<li>${features[i]}</li>`;
}
fea.innerHTML = feature;
