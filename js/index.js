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
        questions: questions_,
        question_index: 0
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
                dialog.show();dialog.show();
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
            var ask = model.questions[index];
            var max_questions = 7;//model.questions.length;
            this.$el.hide().html(
            '<div id="id-card-quiz-1" class="card-quiz mdc-card margin-bottom padding-content">'+
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
                if(index < max_questions-1){
                    viewCardsQuiz.setQuestion(index+1);
                }else{
                    viewCardsQuiz.setQuestion(0);
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
            viewHelp.init();
        }
    }

    controller.init();

})(jQuery);