(function anonymous(context
) {
/*
	Index: 1316
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::m_GetDampingRatio
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetDampingRatio() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::m_dampingRatio
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack0 = this.$Bgm_dampingRatio;
        return (+stack0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/m_GetDampingRatio.js
})