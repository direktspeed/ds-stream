 const extras = {
   debStream(a) {
     let args = arguments.length && Array.prototype.slice.call(arguments, 1);
     this.debug(a)(args);
     return args;
   },
  /**
  * A scanning transducer for Use with Kefir
  */
   scan(handler, seed) {
     var prevValue = seed;
     return function(xf) {
       return {
         '@@transducer/init': function() {
           return xf['@@transducer/init']();
         },
         '@@transducer/result': function(result) {
           return xf['@@transducer/result'](result);
         },
         '@@transducer/step': function(result, input) {
           var newValue = handler(prevValue, input);
           prevValue = newValue;
           return xf['@@transducer/step'](result, newValue);
         }
       };
     };
   }
 };
 const ke = require('kefir');
 Object.keys(extras).map((k) => ke[k]=extras[k]);
 module.exports = ke;
