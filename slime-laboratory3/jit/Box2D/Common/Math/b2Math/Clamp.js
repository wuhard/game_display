(function anonymous(context
) {
/*
	Index: 576
	Path:  Box2D/Common/Math/b2Math.Clamp
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Clamp(local1 /* Number */, local2 /* Number */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);

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
                        stack0 = local1 < local2;
                        if (!stack0) { p = 15; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
                        stack0 = +local2;
                        { p = 30; continue; };
                    case 15:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        // JIT: potential type:7 0::Number
                        stack1 = local3;
                        stack0 = local1 > local3;
                        if (!stack0) { p = 28; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack0 = +local3;
                        { p = 30; continue; };
                    case 28:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack0 = +local1;
                    case 30:
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/Clamp.js
})