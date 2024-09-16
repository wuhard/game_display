(function anonymous(context
) {
/*
	Index: 359
	Path:  Box2D/Dynamics/b2Body::m_IsAwake
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_IsAwake() {
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
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack0 = this.$Bgm_flags;
        // 7 0:http://www.box2d.org/ns/b2internal::e_awakeFlag
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bge_awakeFlag;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack0 &= stack1;
        // 7 0:http://www.box2d.org/ns/b2internal::e_awakeFlag
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bge_awakeFlag;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack0 = stack0 == stack1;
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_IsAwake.js
})