
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                 
    el.addEventListener(event, callback, false);  
  } else {                                       
    el['e' + event + callback] = callback;        
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]); 
  }  
}


function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {                      
    el.removeEventListener(event, callback, false);      
  } else {                                                
    el.detachEvent('on' + event, el[event + callback]);  
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}

