(function anonymous(context
) {
/*
	Index: 345
	Path:  Box2D/Dynamics/b2Body::m_GetLocalPoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetLocalPoint(local1 /* b2Vec2 */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Transform  */ 
        stack1 = this.$Bgm_xf;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.MulXT(stack1, local1);
        } else {
            // 7 0::MulXT
            {
                let t = stack0;
                const m = t.$BgMulXT || (t = sec.box(stack0), t.$BgMulXT);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgMulXT (stack1, local1);
                } else { 
                    stack0 = stack0.axCallProperty($names[1], [stack1, local1], false);
                }
            }
        }
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_GetLocalPoint.js
})