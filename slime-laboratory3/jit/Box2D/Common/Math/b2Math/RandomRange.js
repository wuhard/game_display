(function anonymous(context
) {
/*
	Index: 580
	Path:  Box2D/Common/Math/b2Math.RandomRange
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_RandomRange(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack0 = __Math.random();
        } else {
            // 7 0::random
            {
                let t = __Math;
                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgrandom ();
                } else { 
                    stack0 = __Math.axCallProperty($names[1], [], false);
                }
            }
        }
        stack0 = +stack0;
        local3 = stack0;
        // JIT: potential type:7 0::Number
        stack0 = local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 -= local1;
//        stack1 = local3;// JIT: redundant assigment, value unused
        stack0 *= local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 += local1;
        stack0 = +stack0;
        local3 = stack0;
        stack0 = local3;
        return (+local3);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/RandomRange.js
})