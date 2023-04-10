export function generatePassword(tamanho: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let pass = '';
  
    // Função auxiliar para gerar um caractere aleatório
    function caractereAleatorio(): string {
      return chars[Math.floor(Math.random() * chars.length)];
    }
  
    // Gera a senha com caracteres aleatórios
    for (let i = 0; i < tamanho; i++) {
        pass += caractereAleatorio();
    }
  
    return pass;
  }
  
  
  