let selection = {
    title: `Nike`,
    price: 1000,
    image_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-rWtqPn.png`,
    description: `The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.`
}

let selection_json = JSON.stringify(selection);

Cookies.set(`user_selection`, selection_json);