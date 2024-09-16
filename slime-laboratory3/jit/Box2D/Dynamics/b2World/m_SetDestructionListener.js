(function anonymous(context
) {
/*
	Index: 105
	Path:  Box2D/Dynamics/b2World::m_SetDestructionListener
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetDestructionListener(local1 /* b2DestructionListener */) {
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
//        // JIT: potential type:7 0:Box2D.Dynamics::b2DestructionListener// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 3::m_destructionListener
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2DestructionListener  */ 
        this.$Bgm_destructionListener = local1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_SetDestructionListener.js
})