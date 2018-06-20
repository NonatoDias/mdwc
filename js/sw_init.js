(function(window){

    var model = {
        page: location.host || ' '
    }


    var viewMsgAvlbl = {
        init: function(){
            this.el = $("#id-vwmsgavlbl");
            this.elClick = $("#vwmsgavlbl-click");
            this.el.hide();
        },

        render: function(onclick){                                
            var that = this;

            if(model.page.indexOf("nonatodias.github.io") !== -1){
                that.elClick.off().click(function(){
                    if(onclick instanceof Function){
                        onclick();
                    }
                    that.el.hide();
                })
                that.el.show();
            }else{
                console.log("nao instalou o sw")
            }            
        }
    }

    var mainController = {
        init: function(){
            viewMsgAvlbl.init();
            this.registerSW();
        },

        registerSW: function(){
            var ctrl = this;
            if (!navigator.serviceWorker){								
                console.log("serviceWorker not supported");
                return;
            }

            window.addEventListener('load', function() {
                navigator.serviceWorker.register('sw.js').then(function(reg) {
                    
                    if (!navigator.serviceWorker.controller) {
                        return;
                    }
                
                    if (reg.waiting) {
                        ctrl._updateReady(reg.waiting);
                        return;
                    }
                
                    if (reg.installing) {
                        ctrl._trackInstalling(reg.installing);
                        return;
                    }
                
                    reg.addEventListener('updatefound', function() {
                        ctrl._trackInstalling(reg.installing);
                    });
                });

                var refreshing;
                navigator.serviceWorker.addEventListener('controllerchange', function() {
                    if (refreshing) 
                        return;
                    //window.location.reload();
                    console.log("Mudou o controller");
                    refreshing = true;
                });
            });

        },

        _trackInstalling: function(worker) {
            var ctrl = this;
            worker.addEventListener('statechange', function() {
                if (worker.state == 'installed') {
                    ctrl._updateReady(worker);
                }
            });
        },

        _updateReady: function(worker) {
            //viewMsgAvlbl.render(function(){
                worker.postMessage({actionsw: 'SKIPWAITING'});
            //})
        }
    }

    if(model.page.indexOf("nonatodias.github.io") !== -1){
        mainController.init();           
    }else{
        console.log("nao instalou o sw")
    }   

})(window);