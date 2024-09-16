(function anonymous(context
) {
/*
	Index: 804
	Path:  game_utils/Easings.easeInBack
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_easeInBack(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */ = 1.70158) {
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
        // local6 is assigned before read, skip init
        let local6 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        // JIT: potential type:7 0::Number
        stack0 = local3;
        // JIT: potential type:7 0::Number
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local4;
        stack1 /= local4;
        stack2 = stack1;
        local6 = stack2;
        stack1 = +stack1;
        local1 = stack1;
//        stack1 = local6;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        stack0 *= local6;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
        // JIT: potential type:7 0::Number
        stack1 = local5;
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 += 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local1;
        stack1 *= local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local5;
        stack1 -= local5;
        stack0 *= stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        stack0 += local2;
        return (+stack0);
    }
//# sourceURL=http://jit/game_utils/Easings/easeInBack.js
})