import banoffie_pie from "./food/banoffie_pie.jpg";
import carob from  "./food/carob_+_dulce_de_leche_cheesecake.jpg";
import raspberry from  "./food/raspberry_&_vanilla.jpg";
import pistachio_scoop from "./food/pistachio_scoop-brest.jpg";
import panna_cotta from "./food/panna_cotta_&_blueberry.jpg";
import lemon_poppyseed from "./food/lemon_poppyseed.jpg";
import chocolate_tart from "./food/chocolate_tart.jpg";
import chocolate_hazelnut from "./food/chocolate_hazelnut_.jpg";


function cardLoader(title, price, image, ingredients) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.ingredients = ingredients;
}


const data = [
new cardLoader("Banoffie Pie", "4,9€", banoffie_pie, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Dulce de Leche", "4,9€",carob, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Raspberry", "6.9€",raspberry, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Pistachio", "6.9€", pistachio_scoop, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Panna Cotta", "4,9€", panna_cotta, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Lemon Poppyseed", "4,9€",lemon_poppyseed, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Chocolate Tart", "4.9€", chocolate_tart, "Handmade doughnut filled with a homemade banana cream..."),
new cardLoader("Chocolate Hazelnut", "5.9€", chocolate_hazelnut, "Handmade doughnut filled with a homemade banana cream...")
]

export default data
