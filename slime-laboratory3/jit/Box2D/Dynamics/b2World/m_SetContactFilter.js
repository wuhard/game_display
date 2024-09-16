(function anonymous(context
) {
/*
	Index: 106
	Path:  Box2D/Dynamics/b2World::m_SetContactFilter
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetContactFilter(local1 /* b2ContactFilter */) {
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
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
        stack0 = this.$Bgm_contactManager;
//        // JIT: potential type:7 0:Box2D.Dynamics::b2ContactFilter// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactFilter
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_contactFilter = local1;
        } else {
            context.setproperty($names[0], local1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_SetContactFilter.js
})