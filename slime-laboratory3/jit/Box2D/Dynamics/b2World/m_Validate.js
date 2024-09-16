(function anonymous(context
) {
/*
	Index: 110
	Path:  Box2D/Dynamics/b2World::m_Validate
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Validate() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
        stack0 = this.$Bgm_contactManager;
        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['m_broadPhase'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgm_broadPhase;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Validate();
        } else {
            // 7 0:Box2D.Collision:IBroadPhase::Validate
            {
                let t = stack0;
                const m = t.$BgValidate || (t = sec.box(stack0), t.$BgValidate);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_Validate.js
})