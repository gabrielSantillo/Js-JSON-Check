let selection_json = Cookies.get(`user_selection`);
let selection_data = JSON.parse(selection_json);

document.body.insertAdjacentHTML(`beforeend`, 
`<section>
    <img src="${selection_data[`image_url`]}">
    <h1>${selection_data[`title`]}</h1>
    <p>${selection_data[`description`]}</p>
    <h4>${selection_data[`price`]}</h4>
</section>`);