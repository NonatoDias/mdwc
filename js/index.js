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

    countries_.sort();

    /* =============  model ============= */

    var model = {
        user: '',
        countries: countries_
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


    var controller = {
        init: function(){
            viewSelectCountries.init();
        }
    }

    controller.init();

})(jQuery);