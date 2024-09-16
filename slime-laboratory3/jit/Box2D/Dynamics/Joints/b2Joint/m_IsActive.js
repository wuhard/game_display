(function anonymous(context
) {
/*
	Index: 272
	Path:  Box2D/Dynamics/Joints/b2Joint::m_IsActive
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_IsActive() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyA;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = stack0;
                                const m = t.$BgIsActive || (t = sec.box(stack0), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 26; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyB;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = stack0;
                                const m = t.$BgIsActive || (t = sec.box(stack0), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                    case 26:
                        return (!!stack0);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2Joint/m_IsActive.js
})