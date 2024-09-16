(function anonymous(context
) {
/*
	Index: 352
	Path:  Box2D/Dynamics/b2Body::m_SetAngularDamping
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAngularDamping(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularDamping
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_angularDamping = (+local1);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SetAngularDamping.js
})