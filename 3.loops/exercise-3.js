const placesToTravel = [{id: 5,
     name: 'Japan'}, 
{id: 11, 
    name: 'Venecia'},
 {id: 23, 
    name: 'Murcia'}, 
 {id: 40, 
    name: 'Santander'}, 
 {id: 44,
     name: 'Filipinas'}, 
 {id: 59, 
    name: 'Madagascar'}]

    for (let i = 0; i < placesToTravel.length; i++) {
        const element = placesToTravel[i];
        if (element.id === 11 || element.id === 40) {
            placesToTravel.splice(i, 1);
            i--; /* esto es porque al borrar se regueneran los indices asi aun reguenerandose pasa por todos */
        }
    }
    /* condiciones del for normal y luego hago una condición si el id= o es id= hago un splice que borra el elemento*/
    console.log(placesToTravel);