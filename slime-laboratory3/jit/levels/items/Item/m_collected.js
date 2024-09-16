(function anonymous(context
) {
/*
	Index: 99
	Path:  levels/items/Item::m_collected
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_collected(local1 /* Level */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::collect
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgcollect = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::destroy
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgdestroy = true;
        return;
    }
//# sourceURL=http://jit/levels/items/Item/m_collected.js
})