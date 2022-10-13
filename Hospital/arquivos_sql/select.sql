select m.crm, m.nome 'nome_medico', c.data_hora, p.nome as 'nome_paciente'
from  medico m inner join consulta c on m.crm = c.crm
inner join paciente p on c.cpf = p.cpf;