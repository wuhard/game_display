(function anonymous(context
) {
/*
	Index: 1313
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::m_SetLength
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetLength(local1 /* Number */) {
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
        // 7 3::m_length
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_length = (+local1);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/m_SetLength.js
})