(function anonymous(context
) {
/*
	Index: 227
	Path:  Box2D/Dynamics/b2Fixture::m_GetAABB
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Collision::b2AABB
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetAABB() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_aabb
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision::b2AABB  */ 
        stack0 = this.$Bgm_aabb;
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_GetAABB.js
})