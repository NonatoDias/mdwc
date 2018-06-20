/**
 * Js 
 * @author Nonato Dias
 */

var MDCTextField = mdc.textField.MDCTextField;
var MDCSelect = mdc.select.MDCSelect;
var MDCDialog = mdc.dialog.MDCDialog;



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

    /* =============  model ============= */

    var model = {
        user: '',
        countries: countries_,
        opponents: opponents_,
        questions: questions_,
        current_question: null
    }


    /* ============ views ================ */ 

    var viewHelp = {
        init: function(){
            var $el = document.querySelector('#my-mdc-dialog');
            if(!$el) return null;


            var dialog = new MDCDialog(document.querySelector('#my-mdc-dialog'));

            dialog.listen('MDCDialog:accept', function() {
                console.log('accepted');
            })
            
            dialog.listen('MDCDialog:cancel', function() {
                console.log('canceled');
            })

            $('#id-btn-help').click(function(){
                dialog.show();
                $('#my-mdc-dialog-description').html(model.current_question.tipp);
            })
            
        }
    }

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
            model.current_question = model.questions[index];
            var ask = model.current_question;
            var opponent = model.opponents[index];
            var max_questions = 7;//model.questions.length;
            this.$el.hide().html(
            '<div id="id-card-quiz-1" class="card-quiz mdc-card margin-bottom padding-content">'+
                '<h3 class="mdc-typography--headline6" style="text-align: center;">'+opt_phases_[index]+'</h3>'+
                '<div class="div-container-versus">'+
                    '<div class="div-item-versus">'+
                        '<img src="img/logos/brasil.png" alt=""> '+
                        '<span style="display: block;">Brasil</span>'+
                    '</div>'+
                    '<span class="span-item-versus">vs</span>'+
                    '<div class="div-item-versus">'+
                        '<img src="img/logos/'+opponent.id+'.png" alt=""> '+
                        '<span style="display: block;">'+opponent.text+'</span>'+
                    '</div>'+
                '</div>'+

                '<h3 class="mdc-typography--headline6">'+(index+1+') ') +ask.q+'</h3>'+
                '<ul class="mdc-list demo-list">'+
                    ask.options.reduce(function(p, c, i){
                        return p +  '<li class="ask-li-option mdc-list-item mdc-ripple-upgraded" data-key="'+i+'">'+
                                        '<span class="mdc-list-item__graphic" aria-hidden="true">'+opt_itens_[i]+'</span>'+
                                        '<span class="mdc-list-item__text">'+c+'</span>'+
                                    '</li>';
                    }, '')+
                '</ul>'+
            '</div>').fadeIn(400);

            $('.ask-li-option').click(function(){
                if(index < max_questions-1){
                    var key = $(this).attr('data-key');
                    if(ask.a == key){
                        viewCardsQuiz.setQuestion(index+1);
                    }else{
                        viewResult.render(false);
                    }


                }else{
                    //viewCardsQuiz.setQuestion(0);
                    viewResult.render(true);
                }
            })
        },

        render: function(){
            this.setQuestion(0);
            
        }
    }

    var viewResult = {
        init: function(){
            this.$el = $('#id-container-questions');
        },

        render: function(won){
            if(won == true){
                this.$el.hide().html(
                    '<div id="id-card-quiz-1" class="mdc-card margin-bottom padding-content">'+
                        '<div style="text-align: center; margin-top: 15px;">'+
                            '<img src="img/win.jpg" alt="" width="240px">'+
                        '</div>'+
                        '<h3 class="mdc-typography--headline5" style="text-align: center;">Você Ganhou!</h3>'+
                        '<div class="mdc-card__actions">'+
                            '<div class="mdc-card__action-buttons">'+
                                '<button id="ib-btn-tryagain" class= mdc-button mdc-card__action mdc-card__action--button"><i class="material-icons" style="margin-right: 15px;">'+
                                'autorenew'+
                                '</i> TENTAR NOVAMENTE</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                ).fadeIn(400);
            }else{
                this.$el.hide().html(
                    '<div id="id-card-quiz-1" class="mdc-card margin-bottom padding-content">'+
                        '<div style="text-align: center; margin-top: 15px;">'+
                            '<img src="img/lose.jpg" alt="" width="200px">'+
                        '</div>'+
                        '<h3 class="mdc-typography--headline5" style="text-align: center;">Você Perdeu!</h3>'+
                        '<div class="mdc-card__actions">'+
                            '<div class="mdc-card__action-buttons">'+
                                '<button  id="ib-btn-tryagain" class="mdc-button mdc-card__action mdc-card__action--button"><i class="material-icons" style="margin-right: 15px;">'+
                                'autorenew'+
                                '</i> TENTAR NOVAMENTE</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                ).fadeIn(400);

                $('#ib-btn-tryagain').click(function(){
                    location.reload();
                })
            }
        }
    }

    var controller = {
        init: function(){
            
            viewResult.init();
            viewSelectCountries.init();
            viewCardsQuiz.init();
            viewHelp.init();
        }
    }

    controller.init();

})(jQuery);