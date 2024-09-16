(function anonymous(context
) {
/*
	Index: 219
	Path:  Box2D/Dynamics/b2Fixture::m_RayCast
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_RayCast(local1 /* b2RayCastOutput */, local2 /* b2RayCastInput */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
//        // JIT: potential type:7 0:Box2D.Collision::b2RayCastOutput// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
        stack2 = local2;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_body
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
        stack3 = this.$Bgm_body;
        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
           stack3 = stack3.GetTransform();
        } else {
            // 7 0::GetTransform
            {
                let t = stack3;
                const m = t.$BgGetTransform || (t = sec.box(stack3), t.$BgGetTransform);
                if( typeof m === "function" ) { 
                    stack3 = t.$BgGetTransform ();
                } else { 
                    stack3 = stack3.axCallProperty($names[0], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.RayCast(local1, local2, stack3);
        } else {
            // 7 0::RayCast
            {
                let t = stack0;
                const m = t.$BgRayCast || (t = sec.box(stack0), t.$BgRayCast);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgRayCast (local1, local2, stack3);
                } else { 
                    stack0 = stack0.axCallProperty($names[1], [local1, local2, stack3], false);
                }
            }
        }
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_RayCast.js
})