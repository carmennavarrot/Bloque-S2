const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const key in alien) {
    console.log(key + " valor " + alien[key]);
} /* utilizamos for in porque es objetos */
/*para sacar las propiedades de dentro hay que hacer nombre[key]*/