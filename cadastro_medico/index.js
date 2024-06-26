const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];

while (true) {
    console.log(`
    === Menu de consultas da DS Saúde. Digite o número de uma das opções abaixo: ===
    1. Adicionar uma nova consulta
    2. Listar consultas marcadas
    3. Atualizar uma consulta marcada
    4. Cancelar uma consulta marcada
    5. Sair
    `);

    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            let nome = prompt('Qual o nome do paciente? ')
            let medico = prompt('Qual o nome do médico que gostaria de marcar a consulta? ')
            let data = prompt('Qual a data da consulta? ')
            let horario = prompt('Qual o horário da consulta? ')
            consultas.push({nome, medico, data, horario})
            console.log('Consulta agendada com sucesso!')
            break;
        case '2':
            if (consultas.length <= 0){
                console.log('Nenhuma consulta agendada. Tente novamente.')
            } else {
                console.log('Aqui está a lista de consultas agendadas: ')
                consultas.forEach((consultas, index) => {
                    console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
                });
            }
            break;
        case '3':
            console.log(`Estas são as consultas agendadas:`)
            consultas.forEach((consultas, index) => {
                console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
            });
            let edicao = prompt('Digite o número da consulta que deseja alterar: ')
                if (edicao > consultas.length){
                    console.log('Opção inválida, tente novamente.')
                } else {
                    consultas.forEach((consultas, index) => {
                        if (edicao == index + 1){
                            console.log(`Essa é a consulta selecionada: ${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
                            }
                                let edicaoDados = prompt('Digite o número da informação que deseja editar:\n1. Nome do paciente\n2. Médico responsável\n3. Data da consulta\n4. Horário da consulta ');
                                if (edicaoDados == '1') {
                                console.log(edicaoDados)

                            //     let edicaoNome = prompt('Qual o nome do paciente? ');
                            //     consultas.splice(edicao[index + 1], 1, edicaoNome);
                            //     console.log(consultas)
                            // }
                        } 
                    });
                }
            break;
        case '4':
            console.log(`Estas são as consultas agendadas:`)
            consultas.forEach((consultas, index) => {
                console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
            });
            let delecao = prompt('Digite o número da consulta que deseja cancelar: ')
            break;
        case '5':
            console.log('Saindo do sistema, até logo!')
            process.exit();
    }
}