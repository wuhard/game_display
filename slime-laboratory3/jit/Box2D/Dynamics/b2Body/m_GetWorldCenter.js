(function anonymous(context
) {
/*
	Index: 326
	Path:  Box2D/Dynamics/b2Body::m_GetWorldCenter
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetWorldCenter() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
        stack0 = this.$Bgm_sweep;
        // 7 0::c
        //Possible type:7 0:Box2D.Common.Math::b2Sweep
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['c'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgc;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_GetWorldCenter.js
})