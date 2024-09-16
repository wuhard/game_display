(function anonymous(context
) {
/*
	Index: 808
	Path:  game_utils/Easings.easeOutBounce
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_easeOutBounce(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        // local5 is assigned before read, skip init
        let local5 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local4;
                        stack0 /= local4;
                        stack1 = stack0;
                        local5 = stack1;
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = local5;
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 1;
//                        stack2 = 2.75;// JIT: redundant assigment, value unused
                        stack1 /= 2.75;
                        if (!(stack1 > local5)) { p = 35; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack1 = 7.5625;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 35:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 2;
//                        stack2 = 2.75;// JIT: redundant assigment, value unused
                        stack1 /= 2.75;
                        if (!(stack1 > local1)) { p = 74; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack1 = 7.5625;
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
                        stack3 = 1.5;
//                        stack4 = 2.75;// JIT: redundant assigment, value unused
                        stack3 /= 2.75;
                        stack2 -= stack3;
                        stack3 = stack2;
                        local5 = stack3;
                        stack2 = +stack2;
                        local1 = stack2;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 *= local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
//                        stack2 = 0.75;// JIT: redundant assigment, value unused
                        stack1 += 0.75;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 74:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 2.5;
//                        stack2 = 2.75;// JIT: redundant assigment, value unused
                        stack1 /= 2.75;
                        if (!(stack1 > local1)) { p = 113; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack1 = 7.5625;
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
                        stack3 = 2.25;
//                        stack4 = 2.75;// JIT: redundant assigment, value unused
                        stack3 /= 2.75;
                        stack2 -= stack3;
                        stack3 = stack2;
                        local5 = stack3;
                        stack2 = +stack2;
                        local1 = stack2;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 *= local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
//                        stack2 = 0.9375;// JIT: redundant assigment, value unused
                        stack1 += 0.9375;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 113:
                        // JIT: potential type:7 0::Number
                        stack0 = local3;
                        stack1 = 7.5625;
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
                        stack3 = 2.625;
//                        stack4 = 2.75;// JIT: redundant assigment, value unused
                        stack3 /= 2.75;
                        stack2 -= stack3;
                        stack3 = stack2;
                        local5 = stack3;
                        stack2 = +stack2;
                        local1 = stack2;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 *= local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
//                        stack2 = 0.984375;// JIT: redundant assigment, value unused
                        stack1 += 0.984375;
                        stack0 *= stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/game_utils/Easings/easeOutBounce.js
})