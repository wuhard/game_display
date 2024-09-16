(function anonymous(context
) {
/*
	Index: 792
	Path:  game_utils/Easings.easeInQuad
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_easeInQuad(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
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
        local5 = stack2;
        stack1 = +stack1;
        local1 = stack1;
//        stack1 = local5;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        stack0 *= local5;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        stack0 += local2;
        return (+stack0);
    }
//# sourceURL=http://jit/game_utils/Easings/easeInQuad.js
})