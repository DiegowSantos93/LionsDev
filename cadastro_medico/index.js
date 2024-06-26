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

    if (opcao > 0 && opcao <= 5) {
        switch (opcao) {
            case 1:
                let nome = prompt('Qual o nome do paciente? ');
                let medico = prompt('Qual o nome do médico que gostaria de marcar a consulta? ');
                let data = prompt('Qual a data da consulta? ');
                let horario = prompt('Qual o horário da consulta? ');
                consultas.push({ nome, medico, data, horario });
                console.log('Consulta agendada com sucesso!');
                break;
            case 2:
                if (consultas.length <= 0) {
                    console.log('Nenhuma consulta agendada. Tente novamente.');
                } else {
                    console.log('Aqui está a lista de consultas agendadas: ');
                    consultas.forEach((consulta, index) => {
                        console.log(`${index + 1}. Paciente: ${consulta.nome} - Médico: Dr. ${consulta.medico} - Data da consulta: ${consulta.data} - Horário da consulta: ${consulta.horario}.`);
                    });
                }
                break;
            case 3:
                if (consultas.length <= 0) {
                    console.log('Nenhuma consulta agendada para atualizar.');
                    break;
                }

                console.log('Estas são as consultas agendadas:');
                consultas.forEach((consulta, index) => {
                    console.log(`${index + 1}. Paciente: ${consulta.nome} - Médico: Dr. ${consulta.medico} - Data da consulta: ${consulta.data} - Horário da consulta: ${consulta.horario}.`);
                });

                let edicao = Number(prompt('Digite o número da consulta que deseja alterar: '));

                if (edicao > 0 && edicao <= consultas.length) {
                    let consultaSelecionada = consultas[edicao - 1];
                    
        let edicaoDados = Number(prompt(`
    Qual informação deseja alterar na consulta do(a) ${consultaSelecionada.nome}? 
    Digite o número da opção desejada:
    1. Nome do paciente
    2. Médico responsável
    3. Data da consulta
    4. Horário da consulta
    `));

                if (edicaoDados > 0 && edicaoDados <= 4) {
                    switch (edicaoDados) {
                        case 1:
                            let novoNome = prompt('Qual o nome do paciente? ');
                            consultaSelecionada.nome = novoNome;
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
                        console.log('Consulta alterada com sucesso! Estas são as consultas agendadas:');
                        consultas.forEach((consulta, index) => {
                            console.log(`${index + 1}. Paciente: ${consulta.nome} - Médico: Dr. ${consulta.medico} - Data da consulta: ${consulta.data} - Horário da consulta: ${consulta.horario}.`);
                        });
                    } else {
                        console.log('Opção inválida, tente novamente.');
                    }
                } else {
                    console.log('Opção inválida, tente novamente.');
                }
                break;
            case 4:
                if (consultas.length <= 0) {
                    console.log('Nenhuma consulta agendada para cancelar.');
                    break;
                }

                console.log('Estas são as consultas agendadas:');
                consultas.forEach((consulta, index) => {
                    console.log(`${index + 1}. Paciente: ${consulta.nome} - Médico: Dr. ${consulta.medico} - Data da consulta: ${consulta.data} - Horário da consulta: ${consulta.horario}.`);
                });

                let delecao = Number(prompt('Digite o número da consulta que deseja cancelar: '));
                
                if (delecao > 0 && delecao <= consultas.length) {
                    consultas.splice(delecao - 1, 1);
                    console.log('Consulta cancelada com sucesso! Estas são as consultas restantes e que seguem agendadas:');
                    consultas.forEach((consulta, index) => {
                        console.log(`${index + 1}. Paciente: ${consulta.nome} - Médico: Dr. ${consulta.medico} - Data da consulta: ${consulta.data} - Horário da consulta: ${consulta.horario}.`);
                    });
                } else {
                    console.log('Opção inválida, tente novamente.');
                }
                break;
            case 5:
                console.log('Saindo do sistema, até logo!');
                process.exit();
                break;
        }
        console.log(consultas)
    } else {
        console.log('Opção inválida, tente novamente.');
    }
}
