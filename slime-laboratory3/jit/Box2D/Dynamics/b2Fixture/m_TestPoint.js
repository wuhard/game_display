(function anonymous(context
) {
/*
	Index: 218
	Path:  Box2D/Dynamics/b2Fixture::m_TestPoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_TestPoint(local1 /* b2Vec2 */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
        stack0 = this.$Bgm_shape;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_body
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
        stack1 = this.$Bgm_body;
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.GetTransform();
        } else {
            // 7 0::GetTransform
            {
                let t = stack1;
                const m = t.$BgGetTransform || (t = sec.box(stack1), t.$BgGetTransform);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgGetTransform ();
                } else { 
                    stack1 = stack1.axCallProperty($names[0], [], false);
                }
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.TestPoint(stack1, local1);
        } else {
            // 7 0::TestPoint
            {
                let t = stack0;
                const m = t.$BgTestPoint || (t = sec.box(stack0), t.$BgTestPoint);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgTestPoint (stack1, local1);
                } else { 
                    stack0 = stack0.axCallProperty($names[1], [stack1, local1], false);
                }
            }
        }
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_TestPoint.js
})