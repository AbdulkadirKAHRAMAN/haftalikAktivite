const gunler=[];
let sayac=0
  while(true){
        let gun = prompt("Günü giriniz");
        let aktivite= prompt("Aktivite giriniz");
        gunler.push({
            gun: gun || "",
            aktivite: aktivite || ""
        });
        sayac++;
            if(sayac>=7){
                break;
            }
            
            }
            
 for (let index = 0; index < gunler.length; index++) {
     console.log(gunler[index].gun);
     console.log(gunler[index].aktivite);
        
    }