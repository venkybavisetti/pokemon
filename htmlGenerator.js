const content = require('./pokemonData.json');
const {writeFileSync} = require('fs');
const html = [
  '<div class="pokemonCardSize">\n<div class="pokemonInner">\n<div class="pokemonFront">\n<h3 class="frontHeader">',
  // Bulbasaur,
  '</h3>\n<img src=',
  // http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  'alt=',
  // Bulbasaur"
  'height="250"/>\n<div class="powerTypes">\n',
  //  typeCode
  '</div>\n<div class="pokemonBack"><table><tr><th>name</th><td>',
  // name
  '</td></tr><tr><th>id</th><td>',
  // id
  '</td></tr><tr><th>height</th><td>',
  // height
  '</td></tr><tr><th>weight</th><td>',
  // weight
  '</td></tr></table></div></div></div>'
];

const getTypeCode = types => {
  return types.reduce((code, type) => {
    code += `<div class="type"><div class="${type}"></div>\n<span>${type}</span>\n</div>`;
    return code;
  }, '');
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
      pokemon.id +
      html[6] +
      pokemon.height +
      html[7] +
      pokemon.weight +
      html[8];
    htmlCode.push(code);
  });
  writeFileSync('./htmlCode.html', htmlCode.join('\n'), 'utf8');
};

getHtml(content.slice(0, 2));
