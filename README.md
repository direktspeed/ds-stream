# dspeed-kefir
Adds some comune functionality for our Applications to Famouse Kefir lib

Should Inhire https://github.com/geigerzaehler/kefir-extra
```
/**
 * D3 with FRP (kefir) and transducers
 */

var scan = dspeed-kefir.scan
var frp = Kefir;
var t = transducers;
var clock = frp.interval(1000, null);

// Use transducers for the actual logic

var counter = scan(function(prev, next) {
  return prev + 1;
}, 0);

frpClock = clock.transduce(counter);

frpClock.onValue(function(count) {console.log(count)});

frpClock.onValue(function(count) {console.log(-count)});


```
