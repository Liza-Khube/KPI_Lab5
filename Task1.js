const seq = function(seqArg){

    const inner = function (innerArg) {
        if (typeof innerArg === "function") {
            return seq(x => seqArg(innerArg(x)));
        } else {
            return seqArg(innerArg);
        };
    };
    return inner;
    
};