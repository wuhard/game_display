(function anonymous(context
) {
/*
	Index: 1511
	Path:  levels/ContactListener::constructor
	Type:  Public
	Kind:  null
	Super: Box2D/Dynamics/b2ContactListener
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::level
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
        this.$Bglevel = local1;
        return;
    }
//# sourceURL=http://jit/levels/ContactListener/constructor.js
})