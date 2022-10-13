CREATE table if not exists paciente(
cpf bigint primary key,
nome VARCHAR(200) not null,
idade smallint not null
);