/*Faça um script de javascript que gerencia uma biblioteca, o usuário pode adicionar um livro
 (o livro deve conter os atributos nome, autor, tamanho, gênero), remover um livro e listar todos os livros.

Será utilizado:
Array
Objeto
Condicionais
Laços de repetição
Entrada e Saída*/

    let biblioteca = [];
    let livro = {
        nome: "",
        autor: "",
        tamanho: "",
        genero: "",
    }; 
                console.log ("====== BIBLIOTECA ======")
                console.log("Digite o nome do livro para adicioná-lo à biblioteca: ")

                    process.stdin.on('data', function(data){
                        let input = data.toString().trim();

                           
                              if (!livro.nome) {
                                livro.nome = input
                                console.log ("Digite o nome do autor: ")
                              } else { 
                                if (!livro.autor) {
                                    livro.autor = input
                                    console.log("Digite o tamanho do livro em páginas: ")
                                } else {
                                    if (!livro.tamanho) {
                                        livro.tamanho = input
                                        console.log ("Digite o gênero do livro: ")
                                    } else {
                                        if (!livro.genero) {
                                            livro.genero = input
                                            biblioteca.push({...livro})
                                            livro = {nome: "", autor: "", tamanho: "", genero: "",}
                                            console.log ("=> Livro adicionado à biblioteca com sucesso!")
                                            console.log (biblioteca);
                                            console.log ("==>Digite 'remover' para remover um livro, ou 'sair' para deixar o script")
                                        } if (input === "sair") {
                                console.log(biblioteca)
                                process.exit();
                        } 
                                        
                                            
                                    } 
                                }
                              }
                    })  