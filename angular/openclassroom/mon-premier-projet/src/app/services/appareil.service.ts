export class AppareilService {
    appareils = [
        {
          name:'Machine à laver',
          status:'éteint'
        },
        {
          name:'Frigo',
          status:'allumé'
        },
        {
          name:'Ordinateur',
          status:'éteint'
        }
    ]

    switchOnAll() {
        this.appareils.forEach(element => {
          element.status = 'allumé';  
        });
    }

    switchOffAll() {
        this.appareils.forEach(element => {
          element.status = 'éteint';  
        });
    }

    switchOnOne(i:number) {
        this.appareils[i].status = "allumé";
    }

    switchOffOne(i:number) {
        this.appareils[i].status = "éteint";
    }
}