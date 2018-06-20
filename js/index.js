/**
 * Js 
 * @author Nonato Dias
 */

var MDCTextField = mdc.textField.MDCTextField;
var MDCSelect = mdc.select.MDCSelect;


(function(){
    for (var i = 0, all = document.querySelectorAll('.mdc-text-field'); i< all.length; i++){
        var tf = new MDCTextField(all[i]);
    }
    for (var i = 0, all = document.querySelectorAll('.mdc-select'); i< all.length; i++){
        var tf = new MDCSelect(all[i]);
    }
    /*select = );
    select.listen('change', () => {
        //alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
    });*/
})();


(function($){
    "use strict";

    var search = location.search.substring(1);


})(jQuery);



(function($){

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

    /* =============  model ============= */

    var model = {
        user: '',
        countries: countries_,
        questions: questions_
    }


    /* ============ views ================ */ 

    var viewSelectCountries = {
        init: function(){
            var $select =  $('.select-countries');
            $select.html('<option value="" disabled selected></option>');
            model.countries.forEach(function(c){
                $select.append('<option value="vegetables">'+c+'</option>');
            });
            
        },

        render: function(){

        }
    }

    var viewCardsQuiz = {
        init: function(){
            this.$el =  $('#id-container-questions');
            this.render();
        },

        setQuestion: function(index){
            var ask = model.questions[index];
            var max_questions = model.questions.length;
            this.$el.hide().html(
            '<div id="id-card-quiz-1" class="mdc-card margin-bottom padding-content">'+
                '<h3 class="mdc-typography--headline6" style="text-align: center;">'+opt_phases_[index]+'</h3>'+
                '<div class="div-container-versus">'+
                    '<div class="div-item-versus">'+
                        '<img src="img/logos/brasil.png" alt=""> '+
                        '<span style="display: block;">Brasilyyy</span>'+
                    '</div>'+
                    '<span class="span-item-versus">vs</span>'+
                    '<div class="div-item-versus">'+
                        '<img src="img/logos/colombia.png" alt=""> '+
                        '<span style="display: block;">Colombia</span>'+
                    '</div>'+
                '</div>'+

                '<h3 class="mdc-typography--headline6">'+(index+1+') ') +ask.q+'</h3>'+
                '<ul class="mdc-list demo-list">'+
                    ask.options.reduce(function(p, c, i){
                        return p +  '<li class="ask-li-option mdc-list-item mdc-ripple-upgraded">'+
                                        '<span class="mdc-list-item__graphic" aria-hidden="true">'+opt_itens_[i]+'</span>'+
                                        '<span class="mdc-list-item__text">'+c+'</span>'+
                                    '</li>';
                    }, '')+
                '</ul>'+
            '</div>').fadeIn(400);

            $('.ask-li-option').click(function(){
                if(index < max_questions){
                    viewCardsQuiz.setQuestion(index+1);
                }else{
                    index = 0;
                }
            })
        },

        render: function(){
            this.setQuestion(0);
        }
    }

    var controller = {
        init: function(){
            viewSelectCountries.init();
            viewCardsQuiz.init();
        }
    }

    controller.init();

})(jQuery);