function show(){
document.getElementById('sidebar').classList.toggle('active');
}

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".ab" , "ef" , "zx" , "vb" , "m," , "as" , "fg" , "jk" , "qw" , "rt" , "ui" , "po" , "uy" , "re" , "ql") 
    const pname = document.getElementsByTagName("h2")
}

for (var i=0; i < pname.length; i++){
    let match = product =[i].getElementsByTagName('h2')[0];
    if(match){
        let textvalue = match.textContent || match.innerHTML
        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.diplay= "";
        }else{
            product[i].style.diplay= "none";
        }
    }
}