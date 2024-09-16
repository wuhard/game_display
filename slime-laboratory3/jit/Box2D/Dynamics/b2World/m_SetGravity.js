(function anonymous(context
) {
/*
	Index: 125
	Path:  Box2D/Dynamics/b2World::m_SetGravity
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetGravity(local1 /* b2Vec2 */) {
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 3::m_gravity
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_gravity = local1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_SetGravity.js
})