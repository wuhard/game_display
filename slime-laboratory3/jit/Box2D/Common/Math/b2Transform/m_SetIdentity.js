(function anonymous(context
) {
/*
	Index: 282
	Path:  Box2D/Common/Math/b2Transform::m_SetIdentity
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetIdentity() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::position
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgposition;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetZero();
        } else {
            // 7 0::SetZero
            {
                let t = stack0;
                const m = t.$BgSetZero || (t = sec.box(stack0), t.$BgSetZero);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[0], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::R
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Mat22  */ 
        stack0 = this.$BgR;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetIdentity();
        } else {
            // 7 0::SetIdentity
            {
                let t = stack0;
                const m = t.$BgSetIdentity || (t = sec.box(stack0), t.$BgSetIdentity);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Transform/m_SetIdentity.js
})