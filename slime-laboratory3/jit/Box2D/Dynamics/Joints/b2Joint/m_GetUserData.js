(function anonymous(context
) {
/*
	Index: 270
	Path:  Box2D/Dynamics/Joints/b2Joint::m_GetUserData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetUserData() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::m_userData
        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
        stack0 = this.$Bgm_userData;
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2Joint/m_GetUserData.js
})