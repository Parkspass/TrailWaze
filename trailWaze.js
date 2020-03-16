 /*jshint esversion: 6 */

 var app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        
    }
 });

// THIS SECTION NEEDED TO REGISTER SERVICE WORKER //
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./sw.js');
    }
};