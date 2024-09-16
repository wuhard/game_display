(function anonymous(context
) {
/*
	Index: 579
	Path:  Box2D/Common/Math/b2Math.Random
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_Random() {
        // Possible use a real "this"

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
//        stack1 = 2;// JIT: redundant assigment, value unused
        stack0 *= 2;
        stack0--;
        return (+stack0);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/Random.js
})