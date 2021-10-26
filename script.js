let edu, networth, caste, skill, skills, age, res_age, reputation;
skills = [];
reputations = [];
let start = 100;
function calc(){
    edu = document.getElementById("education").value;
    networth = document.getElementById("networth").value;
    caste = document.getElementById("caste").value;
    age = document.getElementsByName("age");
    skill = document.getElementsByName("skill");
    reputation = document.getElementsByName("reputation");
    for(let i = 0; i < age.length; i++) {
        if(age[i].checked){
            res_age = age[i].value;
            break;
        }
    }
    let j = 0;
    for(let i = 0; i < skill.length; i++) {
        if (skill[i].checked){
            skills[j] = skill[i].value;
            j++;
        }
    }
    let k = 0;
    for (let i = 0; i < reputation.length; i++) {
        if (reputation[i].checked){
            reputations[k] = reputation[i].value;
            k++;
        }
    }
    start *= edu;
    console.log(start);

    start *= networth;
    console.log(start);

    if (caste !== 'varna'){
        caste = parseInt(caste);
        console.log(caste);
        start += caste;
    }else {
        start -= 50;
    }
    for (let i = 0; i < skills.length; i++){
        console.log(start);
        start += parseInt(skills[i]);
    }
    console.log(start);

    start *= res_age;
    console.log(start);

    let coef = 1;
    if (!reputations){
        for (let i = 0; i < reputations.length; i++){
            coef *= reputations[i];
        }
    }
    start *= coef;
    console.log(start);
}
