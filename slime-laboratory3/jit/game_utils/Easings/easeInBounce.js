(function anonymous(context
) {
/*
	Index: 807
	Path:  game_utils/Easings.easeInBounce
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_easeInBounce(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
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
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // JIT: potential type:7 0::Number
        stack0 = local3;
        // 7 0::easeOutBounce
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack1 = this;// JIT: redundant assigment, value unused
        // JIT: potential type:7 0::Number
        stack2 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack2 -= local1;
//        stack3 = 0;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack5 = local4;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgeaseOutBounce(stack2, 0, local3, local4);
        stack0 -= stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        stack0 += local2;
        return (+stack0);
    }
//# sourceURL=http://jit/game_utils/Easings/easeInBounce.js
})