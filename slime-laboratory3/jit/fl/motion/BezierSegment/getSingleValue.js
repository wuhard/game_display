(function anonymous(context
) {
/*
	Index: 931
	Path:  fl/motion/BezierSegment.getSingleValue
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_getSingleValue(local1 /* Number */, local2 /* Number */ = 0, local3 /* Number */ = 0, local4 /* Number */ = 0, local5 /* Number */ = 0) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        // JIT: potential type:7 0::Number
        stack0 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
        // JIT: potential type:7 0::Number
        stack1 = local5;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        stack1 -= local2;
        stack0 *= stack1;
        stack1 = 3;
        stack2 = 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack2 -= local1;
        stack1 *= stack2;
        // JIT: potential type:7 0::Number
        stack2 = local1;
        // JIT: potential type:7 0::Number
        stack3 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local2;
        stack3 -= local2;
        stack2 *= stack3;
        stack3 = 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local1;
        stack3 -= local1;
        // JIT: potential type:7 0::Number
        stack4 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack5 = local2;
        stack4 -= local2;
        stack3 *= stack4;
        stack2 += stack3;
        stack1 *= stack2;
        stack0 += stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        stack0 += local2;
        return (+stack0);
    }
//# sourceURL=http://jit/fl/motion/BezierSegment/getSingleValue.js
})