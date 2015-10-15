/*
git remote add origin https://github.com/hollowdoor/dom_attr.git
git push -u origin master
*/
function domAttr(el, obj, value){
    var type, result;
    if(typeof obj === 'string'){
        if(value === undefined)
            return el.getAttribute(obj);
        else
            el.setAttribute(obj, value);
        return null;
    }else{
        type = Object.prototype.toString.call(obj);
        if(type === '[object Object]'){
            for(var n in obj){
                el.setAttribute(n, obj[n]);
            }
            return null;
        }else if(type === '[object Array]'){
            result = {};
            for(var i=0; i<obj.length; i++){
                result[obj[i]] = el.getAttribute(obj[i]);
            }
            return result;
        }
    }
    return null;
}

module.exports = domAttr;
