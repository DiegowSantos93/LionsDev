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

    let opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            let nome = prompt('Qual o nome do paciente? ')
            let medico = prompt('Qual o nome do médico que gostaria de marcar a consulta? ')
            let data = prompt('Qual a data da consulta? ')
            let horario = prompt('Qual o horário da consulta? ')
            consultas.push({nome, medico, data, horario})
            console.log('Consulta agendada com sucesso!')
            break;
        case 2:
            if (consultas.length <= 0){
                console.log('Nenhuma consulta agendada. Tente novamente.')
            } else {
                console.log('Aqui está a lista de consultas agendadas: ')
                consultas.forEach((consultas, index) => {
                    console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
                });
            }
            break;
        case 3:
            console.log(`Estas são as consultas agendadas:`)
            consultas.forEach((consultas, index) => {
                console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
            });

            let edicao = Number(prompt('Digite o número da consulta que deseja alterar: '));

            if (edicao > 0 && edicao <= consultas.length) {
                let consultaSelecionada = consultas[edicao - 1];
                let edicaoDados = Number(prompt(`Qual informação deseja alterar na consulta do(a) ${consultaSelecionada.nome}? Digite o número da opção desejada:\n1. Nome do paciente\n2. Médico responsável\n3. Data da consulta\n4. Horário da consulta `));                
                
                if (edicaoDados > 0 && edicaoDados <= 4){
                    switch (edicaoDados) {
                    case 1:
                        let novoNome = prompt('Qual o nome do paciente? ');
                        consultaSelecionada.nome = novoNome
                        break;
                    case 2:
                        let novoMedico = prompt('Qual o novo médico responsável? ');
                        consultaSelecionada.medico = novoMedico;
                        break;
                    case 3:
                        let novaData = prompt('Qual a nova data da consulta? ');
                        consultaSelecionada.data = novaData;
                        break;
                    case 4:
                        let novoHorario = prompt('Qual o novo horário da consulta? ');
                        consultaSelecionada.horario = novoHorario;
                        break;
                    }
                console.log(`Consulta alterada com sucesso! Estas são as consultas agendadas:`)
                consultas.forEach((consultas, index) => {
                console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
            });
                } else {
                    console.log('Opção inválida, tente novamente.')
                }
            } else {
                console.log('Opção inválida, tente novamente.');
            }
            break;
        case 4:
            console.log(`Estas são as consultas agendadas:`)
            consultas.forEach((consultas, index) => {
                console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
            });
            let delecao = Number(prompt('Digite o número da consulta que deseja cancelar: '));
                if (delecao > 0 && delecao <= consultas.length){
                    consultas.splice(delecao - 1, 1);
                    console.log(`Consulta desmarcada com sucesso! Estas são as consultas restantes e que seguem agendadas:`)
                        consultas.forEach((consultas, index) => {
                        console.log(`${index + 1}. Paciente: ${consultas.nome} - Médico: Dr. ${consultas.medico} - Data da consulta: ${consultas.data} - Horário da consulta: ${consultas.horario}.`)
                    });
                } else {
                    console.log('Opção inválida, tente novamente.');
                }
            break;
        case 5:
            console.log('Saindo do sistema, até logo!')
            process.exit();
    }
}