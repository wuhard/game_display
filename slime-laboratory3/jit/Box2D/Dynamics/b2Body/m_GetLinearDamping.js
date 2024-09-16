(function anonymous(context
) {
/*
	Index: 349
	Path:  Box2D/Dynamics/b2Body::m_GetLinearDamping
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetLinearDamping() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearDamping
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack0 = this.$Bgm_linearDamping;
        return (+stack0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_GetLinearDamping.js
})