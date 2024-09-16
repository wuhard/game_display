(function anonymous(context
) {
/*
	Index: 217
	Path:  Box2D/Dynamics/b2Fixture::m_SetUserData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetUserData(local1 /* * */) {
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
//        stack1 = local1;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_userData
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$Bgm_userData = local1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_SetUserData.js
})