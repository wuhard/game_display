(function anonymous(context
) {
/*
	Index: 231
	Path:  Box2D/Dynamics/b2Fixture::m_CreateProxy
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_CreateProxy(local1 /* IBroadPhase */, local2 /* b2Transform */) {
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
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_aabb
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision::b2AABB  */ 
        stack1 = this.$Bgm_aabb;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.ComputeAABB(stack1, local2);
        } else {
            // 7 0::ComputeAABB
            {
                let t = stack0;
                const m = t.$BgComputeAABB || (t = sec.box(stack0), t.$BgComputeAABB);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, local2);
                } else { 
                   stack0.axCallProperty($names[0], [stack1, local2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision::IBroadPhase// JIT: redundant assigment, value unused
        stack1 = local1;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_aabb
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision::b2AABB  */ 
        stack2 = this.$Bgm_aabb;
//        stack3 = this;// JIT: redundant assigment, value unused
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
           stack1 = local1.CreateProxy(stack2, this);
        } else {
            // 7 0:Box2D.Collision:IBroadPhase::CreateProxy
            {
                let t = local1;
                const m = t.$BgCreateProxy || (t = sec.box(local1), t.$BgCreateProxy);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgCreateProxy (stack2, this);
                } else { 
                    stack1 = local1.axCallProperty($names[1], [stack2, this], false);
                }
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$Bgm_proxy = stack1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_CreateProxy.js
})