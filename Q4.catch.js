async function ping() { 
    try {
      undefined();
        return 'pong';
      }   catch (error) {
            console.log('Erro na funcao ping:', error);
      throw error;
    }
  }
  
  async function chamar() {
     try {
       const resultado = await ping();
          console.log(resultado);

    } catch (error) {
         console.log('Erro na funcao chamar:', error);
    }
  }
  chamar();  