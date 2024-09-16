(function anonymous(context
) {
/*
	Index: 601
	Path:  interfaces/VirtualDPad::m_updateTutorial
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateTutorial(local1 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgTUTORIAL_ID = (local1|0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 5;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::tutorial_counter_1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgtutorial_counter_1 = 5;
        return;
    }
//# sourceURL=http://jit/interfaces/VirtualDPad/m_updateTutorial.js
})