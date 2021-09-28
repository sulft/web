export class AppareilService {
  appareils = [
      {
        id:1,
        name:'Machine à laver',
        status:'éteint'
      },
      {
        id:2,
        name:'Frigo',
        status:'allumé'
      },
      {
        id:3,
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

  getAppareilById(id:number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}