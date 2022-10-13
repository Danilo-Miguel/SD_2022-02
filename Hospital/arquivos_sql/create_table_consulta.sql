CREATE table if not exists consulta(
crm int not null,
cpf bigint not null,
data_hora datetime not null,
primary key(crm, cpf, data_hora),
constraint fk_medico foreign key(crm)references medico(crm),
constraint fk_paciente foreign key(cpf)references paciente(cpf)
);