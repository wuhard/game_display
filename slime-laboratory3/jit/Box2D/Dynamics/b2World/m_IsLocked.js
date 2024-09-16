(function anonymous(context
) {
/*
	Index: 146
	Path:  Box2D/Dynamics/b2World::m_IsLocked
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_IsLocked() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
        stack0 = this.$Bgm_flags;
        // 7 0::e_locked
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bge_locked;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack0 &= stack1;
        stack1 = 0;
        stack0 = stack0 > 0;
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_IsLocked.js
})