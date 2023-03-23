let trait_arr = ['good', 'evil', 'fun', 'silent'];

//what way can I iterate through this array?
//1. LOOP - forloop

for (let i = 0; i < trait_arr.length(); i++)
{
    console.log(trait_arr[i]);
}

//es6 .filte, .map, .indexOf

trait_arr.map((trait) => console.log(trait))