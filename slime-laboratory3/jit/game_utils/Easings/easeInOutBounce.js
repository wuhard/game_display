(function anonymous(context
) {
/*
	Index: 809
	Path:  game_utils/Easings.easeInOutBounce
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_easeInOutBounce(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
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

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        // JIT: potential type:7 0::Number
                        stack1 = local4;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
                        if (!(stack1 > local1)) { p = 34; continue; };
                        // 7 0::easeInBounce
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack1 = local1;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 *= 2;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local4;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgeaseInBounce(stack1, 0, local3, local4);
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    case 34:
                        // 7 0::easeOutBounce
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack1 = local1;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 *= 2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local4;
                        stack1 -= local4;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local4;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgeaseOutBounce(stack1, 0, local3, local4);
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
                        // JIT: potential type:7 0::Number
                        stack1 = local3;
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
                        stack1 *= 0.5;
                        stack0 += stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 += local2;
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/game_utils/Easings/easeInOutBounce.js
})