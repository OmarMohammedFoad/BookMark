var namesite = document.getElementById('siteName');
var url = document.getElementById('siteUrl');
var table = document.getElementById('mytable');
var btn_sub = document.getElementById('subbtn');
var warning = document.getElementById('warning');
var closeBtn = document.getElementById('closeBtn');
// console.log(warning);
let sites =[]; 






if(localStorage.getItem('sites')){
    sites = JSON.parse(localStorage.getItem('sites'));
    displaySites();

}


btn_sub.addEventListener('click',function(){
    console.log(validate()) ;
    if(validate()){
        let site = {
            name: namesite.value,
            url: url.value
        }
        sites.push(site);
        localStorage.setItem('sites',JSON.stringify(sites));
        displaySites();
        clear();
    }
    else{
        warning.classList.remove('d-none');
    
    }
});



closeBtn.addEventListener('click',(e)=>{
    warning.classList.add('d-none');
})

function displaySites(){

    table.innerHTML='';


    for (let i = 0; i < sites.length; i++) {
        table.innerHTML += `<tr>
        <td>${i}</td>
        <td>${sites[i].name}</td>
        <a href="${sites[i].url}"></a>
        <td>  <a href="${sites[i].url}"><button class="btn btn-success" onclick="view(${i})"><i class="fa-solid fa-eye pe-2"></i>   visit</button></a></td>
        <td><button class="btn btn-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i>   Delete</button></td>
        </tr>`;
    }
    



}


"asd"


function deleteSite(index){
    sites.splice(index,1);
    localStorage.setItem('sites',JSON.stringify(sites));
    displaySites();
}





function validateNameSite(){
    let regex = /^[a-zA-Z]{3,10}$/;

    
    
    if(regex.test(namesite.value)){
        namesite.classList.add('is-valid');
        namesite.classList.remove('is-invalid');
    return true;
    }else{
        namesite.classList.add('is-invalid');
        namesite.classList.remove('is-valid');
        return false;
    }
}


function valideUrl(){
  
    let regex = /^https?:\/\/(www\.)?[a-z0-9]+\.[a-z]{2,5}$/;
    if(regex.test(url.value)){
        url.classList.add('is-valid');
        url.classList.remove('is-invalid');
        return true;
    }else{
        url.classList.add('is-invalid');
        url.classList.remove('is-valid');
        return false;
    }

}


function validate(){
    return validateNameSite() && valideUrl();
}

function clear(){
    namesite.value = '';
    url.value='';
}