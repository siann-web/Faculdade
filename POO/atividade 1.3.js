class ContaBancaria {
    constructor(saldo,titular){
    this.saldo=saldo;
    this.titular=titular;
    };
    sacar() 
      {if (saldo>0){
        this.saldo=0;
      } else{}
    };
  };
  let conta1 = new ContaBancaria(1000,'Alice')
  console.log(conta1)
  
  
  
  