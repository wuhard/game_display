(function anonymous(context
) {
/*
	Index: 784
	Path:  game_utils/Easings.easeOutSine
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_easeOutSine(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // JIT: potential type:7 0::Number
        stack0 = local3;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
        // JIT: potential type:7 0::Number
        stack2 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local4;
        stack2 /= local4;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack3 = __Math;// JIT: redundant assigment, value unused
        // 7 0::PI
        //Possible type:7 0::Math
        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
            stack3 = __Math['PI'];
        } else {
            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
            stack3 = temp.$BgPI;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[1]);
            }
        }
        stack2 *= stack3;
//        stack3 = 0.5;// JIT: redundant assigment, value unused
        stack2 *= 0.5;
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.sin(stack2);
        } else {
            // 7 0::sin
            {
                let t = __Math;
                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgsin (stack2);
                } else { 
                    stack1 = __Math.axCallProperty($names[2], [stack2], false);
                }
            }
        }
        stack0 *= stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        stack0 += local2;
        return (+stack0);
    }
//# sourceURL=http://jit/game_utils/Easings/easeOutSine.js
})