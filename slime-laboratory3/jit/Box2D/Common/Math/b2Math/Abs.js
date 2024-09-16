(function anonymous(context
) {
/*
	Index: 569
	Path:  Box2D/Common/Math/b2Math.Abs
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Abs(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 0;
                        stack0 = local1 > 0;
                        if (!stack0) { p = 16; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack0 = +local1;
                        { p = 19; continue; };
                    case 16:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack0 = -local1;
                        stack0 = +stack0;
                    case 19:
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/Abs.js
})