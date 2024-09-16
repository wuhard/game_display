(function anonymous(context
) {
/*
	Index: 806
	Path:  game_utils/Easings.easeInOutBack
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_easeInOutBack(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */ = 1.70158) {
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
        let stack3 = undefined;
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
                        stack1 = local4;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
                        stack0 /= stack1;
                        stack1 = stack0;
                        local6 = stack1;
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = local6;
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 1;
                        if (!(1 > local6)) { p = 59; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        // JIT: potential type:7 0::Number
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
                        // JIT: potential type:7 0::Number
                        stack2 = local5;
//                        stack3 = 1.525;// JIT: redundant assigment, value unused
                        stack2 *= 1.525;
                        stack3 = stack2;
                        local6 = stack3;
                        stack2 = +stack2;
                        local5 = stack2;
                        stack2 = local6;
                        //IR: KILL removed, reason: prevent optimisation
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        stack2 += 1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local1;
                        stack2 *= local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local5;
                        stack2 -= local5;
                        stack1 *= stack2;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 59:
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        // JIT: potential type:7 0::Number
                        stack1 = local1;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 -= 2;
                        stack2 = stack1;
                        local6 = stack2;
                        stack1 = +stack1;
                        local1 = stack1;
                        stack1 = local6;
                        //IR: KILL removed, reason: prevent optimisation
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
                        // JIT: potential type:7 0::Number
                        stack2 = local5;
//                        stack3 = 1.525;// JIT: redundant assigment, value unused
                        stack2 *= 1.525;
                        stack3 = stack2;
                        local6 = stack3;
                        stack2 = +stack2;
                        local5 = stack2;
                        stack2 = local6;
                        //IR: KILL removed, reason: prevent optimisation
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        stack2 += 1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local1;
                        stack2 *= local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local5;
                        stack2 += local5;
                        stack1 *= stack2;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 += 2;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/game_utils/Easings/easeInOutBack.js
})