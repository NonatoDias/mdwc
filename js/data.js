/**
 * Estrutura de dados utilizado
 */


/* =============  consts ============= */
var countries_ = [
    'França', 
    'Austrália', 
    'Argentina', 
    'Islândia', 
    'Peru', 
    'Dinamarca', 
    'Croácia', 
    'Nigéria', 
    'Costa Rica', 
    'Sérvia', 
    'Alemanha', 
    'México', 
    'Rússia', 
    'Arábia Saudita', 
    'Egito', 
    'Uruguai', 
    'Marrocos', 
    'Irã', 
    'Portugal', 
    'Espanha', 
    'Brasil', 
    'Suíça', 
    'Suécia', 
    'Coreia do Sul', 
    'Bélgica', 
    'Panamá', 
    'Tunísia', 
    'Inglaterra', 
    'Colômbia', 
    'Japão', 
    'Polônia', 
    'Senegal'
]

var opt_itens_ = ['a)', 'b)', 'c)', 'd)'];
var opt_phases_ = [
    'Fase de Grupo - partida 1', 
    'Fase de Grupo - partida 2', 
    'Fase de Grupo - partida 3',
    'Oitavas de final',
    'quartas de final',
    'semifinal',
    'final'
];
var questions_ = [
    {
        q: 'Em que ano foi realizada a primeira copa do mundo em?',
        a: 2,
        options:['1934', '1935', '1930', '1895']
    },
    {
        q: 'Depois do Brasil, que participou de todas as copas até hoje, qual o país com mais participações?',
        a: 0,
        options:['Alemanha', 'Uruguai', 'Inglaterra', 'Itália']
    },
    {
        q: 'Em quais anos o Brasil foi campeão do Mundo?',
        a: 3,
        options:['1966, 1980, 2002, 2006 e 2010', '1950, 1954, 1986, 1990 e 2006', '1938, 1970, 1982, 2002 e 1994', '1958, 1962, 1970, 1994 e 2002']
    }
    ,
    {
        q: 'Em quais anos a Argentina foi campã do Mundo?',
        a: 3,
        options:['1990 e 1994', '1978 e 1986', ' 1970 e 1990', '1979 e 1996']
    }
    ,
    {
        q: '',
        a: 3,
        options:['', '', '', '']
    }
    ,
    {
        q: '',
        a: 3,
        options:['', '', '', '']
    },
    {
        q: '',
        a: 3,
        options:['', '', '', '']
    }
]

countries_.sort();