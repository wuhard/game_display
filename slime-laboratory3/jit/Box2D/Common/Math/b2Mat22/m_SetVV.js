(function anonymous(context
) {
/*
	Index: 694
	Path:  Box2D/Common/Math/b2Mat22::m_SetVV
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetVV(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
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
        // 7 0::col1
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol1;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(local1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, local1);
                } else { 
                   stack0.axCallProperty($names[0], [local1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(local2);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, local2);
                } else { 
                   stack0.axCallProperty($names[0], [local2], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/m_SetVV.js
})