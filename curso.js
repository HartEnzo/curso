const prompt = require("prompt-sync")();

const cursos = [];

const modelo = () => {
   const nome = prompt ("Digite o nome do curso: ");
   const duracao = prompt ("Digite  a duração do  curso: ");

   const professor = [];
   while(true) {
      const Nprofessor = prompt("Digite o nome do professor, ou digite 'F' para sair: ")

      if(Nprofessor == "F") {
        break;
      }
    professor.push(Nprofessor);
    }
    
    const alunos = [];
    while(true) {
       const Naluno = prompt("Digite o nome do aluno, ou digite 'F' para sair: ")
 
       if(Naluno == "F") {
         break;
       }
     alunos.push(Naluno);
     }
     const materias = [];
     while(true) {
        const materia = prompt("Digite o nome da materia, ou digite 'F' para sair: ")
  
        if(materia == "F") {
          break;
        }
     materias.push(materia);
    }
   if (nome != "" && duracao > 0 && professor.length > 0 && alunos.length > 0 && materias.length > 0) {
    return {
        nome,
        duracao,
        professor,
        alunos,
        materias
    }
   }
console.log("Dados inválidos! ")
};

const criar = () => {
    const novo = modelo();

    if(novo) {
        cursos.push(novo)
        console.log("Curso criado com sucesso! ")
    }
}

const listar = () => {
    cursos.forEach((el, i) => {
         console.log(`${i + 1}.
           Nome: ${el.nome},
           Duração: ${el.duracao},
           Professores: ${el.professor},
           Alunos: ${el.alunos},
           Materias: ${el.materia}`);
    })
};

const atualizar = () => {
    listar();

    const indice = prompt("Qual o indice que deseja atualizar: ") - 1
    const novo = modelo();
    if(novo && indice >= 0 && indice < cursos.length) {
        cursos[indice] = novo;
        console.log("Cursos atualizados com sucesso! ");
    } else {
        console.log("Indice inválido ");
    }
    
    
    const remover = () => {
        listar();
        
        const indice = prompt("Qual indice deseja remover? ") - 1;
        
        if(indice >= 0 && indice < cursos. length) {
            cursos.splice(indice, 1);
            console.log("Registro removido com sucesso! ");
        } else {
            console.log("Indice inválido ");
        }
    };
module.exports = {
    criar,
    atualizar,
    remover,
    listar,
}    


};