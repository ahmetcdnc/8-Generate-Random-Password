//input kısmına ulaşıyoruz
const passwordInput = document.querySelector("#password");
//butona ulaşıyoruz
const generatePassword = document.querySelector("button")
//copy img ulaşıyoruz
const copyPassword = document.querySelector("img");


//Şifre içinde olmasını istediğimiz karakterleri veriyoruz.

//Büyük harfler
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z"]
//Küçük harfler
const lowerCase = ["a","b","c","d","e","f","g","h","ı","i","j","k","l","m","n","o","p","r","s","t","u","v","y","z"]
//Sayılar
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
//Semboller
const symbols = ["^","+","%","&","/","(",")","=","?","_","-",">","<","#","$","{","[","]","}","*","|","@","#","~"]

const createPassword = () =>{
    // boş bir şifre tutucu oluşturduk
    let password ="";
    //3 defa döngü içinde dönecek, her dönüşte 4 karakter eklenecek toplam 12 karakterli bir şifre oluşacak. Fakat böyle bıraktığımızda düzenli bir sıra olur ve şifre mantığına uymaz o yüzden karıştırmalıyız.
    for(let i=0; i<3; i++){
    //Büyük harflerden bir eleman seçiyoruz
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    //Küçük harflerden bir eleman seçiyoruz
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    //sayılardan bir eleman seçiyoruz
    password += numbers[Math.floor(Math.random()*numbers.length)];
    //sembollerden bir eleman seçiyoruz
    password += symbols[Math.floor(Math.random()*symbols.length)];
    }

    //Şifreyi karakterlere ayırıyoruz.
    let passwordArray = password.split("");
    //Oluşturduğumuz bu ayrımmı karıştırıyoruz//-----FISHER AND YATES YÖNTEMİ----- //sort() ile de yapılabilir.
    for(let i=passwordArray.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }

    let mixPassword = passwordArray.join("");

    //Oluşturduğumuz passwordu ekranda gösteriyoruz. Input için ekleme yapmak için "value" kullanıyoruz.
    passwordInput.value = mixPassword;
    //Yeni şifre oluşturduğumuzda resim değişiyor
    copyPassword.src = "img/copy.png";

}

//Şifre oluşturmak için oluşturduğum butona event ekliyorum. "createPassword" function burada çağrılıyor.
generatePassword.addEventListener("click",createPassword);

//Oluşturduğum şifreyi kopyalamak için event oluşturuyorum
copyPassword.addEventListener("click",function(){
    //input içindeki değeri seçiyoruz.
    passwordInput.select();
    //Değeri kopyalıyoruz
    document.execCommand("copy");
    //Şifreyi kopyalayınca resim değişiyor
    copyPassword.src = "img/chechk.jpg";
    
})


