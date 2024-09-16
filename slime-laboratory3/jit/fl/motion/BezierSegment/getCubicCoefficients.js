(function anonymous(context
) {
/*
	Index: 932
	Path:  fl/motion/BezierSegment.getCubicCoefficients
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Array
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_getCubicCoefficients(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
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
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        // JIT: potential type:7 0::Number
        stack0 = local1;
        stack0 = -local1;
        stack1 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        stack1 *= local2;
        stack0 += stack1;
        stack1 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local3;
        stack1 *= local3;
        stack0 -= stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local4;
        stack0 += local4;
        stack1 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local1;
        stack1 *= local1;
        stack2 = 6;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local2;
        stack2 *= local2;
        stack1 -= stack2;
        stack2 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local3;
        stack2 *= local3;
        stack1 += stack2;
        stack2 = -3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack2 *= local1;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local2;
        stack3 *= local2;
        stack2 += stack3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack0 = sec.AXArray.axBox([stack0, stack1, stack2, local1]);
        return stack0;
    }
//# sourceURL=http://jit/fl/motion/BezierSegment/getCubicCoefficients.js
})