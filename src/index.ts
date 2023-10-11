import { PessoaFisica } from "./model/pessoaFisica";
import { PessoaJuridica } from "./model/PessoaJuridica";


const p1 = new PessoaFisica('gael', '111113333');
p1.setNome(`Sandra`);
p1.setCpf(`707070`);
console.log(`Nome: ${p1.getNome()}, Cpf: ${p1.getCpf()}`);
console.log(`documentoIdentificador: ${p1.documentoIdentificador()}`);

const j1 = new PessoaJuridica('Lilia', '66666');
j1.setNome(`Cesar`);
j1.setCnpj(`6060606`);
console.log(`Nome: ${j1.getNome()}, Cnpj: ${j1.getCnpj()}`);
console.log(`documentoIdentificador: ${j1.documentoIdentificador()}`);




