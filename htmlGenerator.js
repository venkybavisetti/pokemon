const content = require("./pokemonData.json");
const { writeFileSync } = require("fs");
const html = [
  '<div class="pokemonCardSize"><div class="pokemonInner"><div class="pokemonFront"><h3 class="frontHeader">',
  // Bulbasaur,
  "</h3><img src=",
  // http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  "alt=",
  // Bulbasaur"
  'height="250"/><div class="powerTypes">',
  //  typeCode
  '</div></div><div class="pokemonBack"><h3 class="frontHeader">',

  //Bulbasaur
  "</h3><img src=",
  //http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png"------
  "alt=",
  //Bulbasaur"
  'height="150" /><center><table border="1px" class="tableDimension"><tr><th class="thProperties">id</th ><td class="tdProperties">',
  // id
  '</td></tr><tr><th class="thProperties">height</th ><td class="tdProperties">',
  // height
  '</td></tr><tr><th class="thProperties">weight</th ><td class="tdProperties">',
  // weight
  '</td></tr><tr><th class="thProperties">avg_spawns</th ><td class="tdProperties">',
  //avg_spawn
  '</td></tr><tr><th class="thProperties">weaknesses</th ><td style="font-size: small;">',
  //weaknesses
  "</td></tr></table></center></div></div></div>"
];

const getTypeCode = types => {
  return types.reduce((code, type) => {
    code += `<div class="type"><div class="${type}"></div><span>${type}</span></div>`;
    return code;
  }, "");
};

const getWeaknesses = function(weaknesses) {
  return weaknesses.join(",");
};

const getHtml = content => {
  const htmlCode = [];
  content.forEach(pokemon => {
    const code =
      html[0] +
      pokemon.name +
      html[1] +
      `"${pokemon.art_url}"` +
      html[2] +
      `"${pokemon.name}"` +
      html[3] +
      getTypeCode(pokemon.type) +
      html[4] +
      pokemon.name +
      html[5] +
      `"${pokemon.art_url}"` +
      html[6] +
      `"${pokemon.name}"` +
      html[7] +
      pokemon.id +
      html[8] +
      pokemon.height +
      html[9] +
      pokemon.weight +
      html[10] +
      pokemon.avg_spawns +
      html[11] +
      getWeaknesses(pokemon.weaknesses) +
      html[12];
    //
    htmlCode.push(code);
  });
  writeFileSync("./htmlCode.html", htmlCode.join(""), "utf8");
};

getHtml(content);
