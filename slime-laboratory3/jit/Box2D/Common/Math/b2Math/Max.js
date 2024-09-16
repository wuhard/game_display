(function anonymous(context
) {
/*
	Index: 574
	Path:  Box2D/Common/Math/b2Math.Max
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Max(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);

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
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
                        stack0 = local1 > local2;
                        if (!stack0) { p = 15; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack0 = +local1;
                        { p = 17; continue; };
                    case 15:
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
                        stack0 = +local2;
                    case 17:
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/Max.js
})