(function anonymous(context
) {
/*
	Index: 171
	Path:  levels/Level::m_shake
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_shake(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
//        stack2 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack3 = 0;// JIT: redundant assigment, value unused
        local2 = 0;
        // 7 1:levels:Level::shake_counter_2
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_counter_2 = 0;
//        stack1 = local2;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 1:levels:Level::shake_counter_1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_counter_1 = (+local2);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 1:levels:Level::shake_power
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_power = (+local1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 1:levels:Level::IS_SHAKING
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgIS_SHAKING = true;
        return;
    }
//# sourceURL=http://jit/levels/Level/m_shake.js
})