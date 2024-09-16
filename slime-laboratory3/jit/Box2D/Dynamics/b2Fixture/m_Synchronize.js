(function anonymous(context
) {
/*
	Index: 233
	Path:  Box2D/Dynamics/b2Fixture::m_Synchronize
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Synchronize(local1 /* IBroadPhase */, local2 /* b2Transform */, local3 /* b2Transform */) {
        // Possible use a real "this"
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack0 = this.$Bgm_proxy;
                        if (stack0) { p = 11; continue; };
                        return;
                    case 11:
                        // 7 0:Box2D.Collision::b2AABB
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:b2AABB/Object
                        stack0 = context.constructFast(stack0, [], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local4 = stack0;
                        // 7 0:Box2D.Collision::b2AABB
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:b2AABB/Object
                        stack0 = context.constructFast(stack0, [], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
                        //Possible type:7 0:Box2D.Collision::b2AABB
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
                        stack0 = this.$Bgm_shape;
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack2 = local2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ComputeAABB(local4, local2);
                        } else {
                            // 7 0::ComputeAABB
                            {
                                let t = stack0;
                                const m = t.$BgComputeAABB || (t = sec.box(stack0), t.$BgComputeAABB);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4, local2);
                                } else { 
                                   stack0.axCallProperty($names[1], [local4, local2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
                        //Possible type:7 0:Box2D.Collision.Shapes::b2Shape
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
                        stack0 = this.$Bgm_shape;
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack2 = local3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ComputeAABB(local5, local3);
                        } else {
                            // 7 0::ComputeAABB
                            {
                                let t = stack0;
                                const m = t.$BgComputeAABB || (t = sec.box(stack0), t.$BgComputeAABB);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5, local3);
                                } else { 
                                   stack0.axCallProperty($names[1], [local5, local3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_aabb
                        //Possible type:7 0:Box2D.Collision.Shapes::b2Shape
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision::b2AABB  */ 
                        stack0 = this.$Bgm_aabb;
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Combine(local4, local5);
                        } else {
                            // 7 0::Combine
                            {
                                let t = stack0;
                                const m = t.$BgCombine || (t = sec.box(stack0), t.$BgCombine);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4, local5);
                                } else { 
                                   stack0.axCallProperty($names[2], [local4, local5], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::position
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['position'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgposition;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack2 = local2;
                        // 7 0::position
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['position'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgposition;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.SubtractVV(stack1, stack2);
                        } else {
                            // 7 0::SubtractVV
                            {
                                let t = stack0;
                                const m = t.$BgSubtractVV || (t = sec.box(stack0), t.$BgSubtractVV);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgSubtractVV (stack1, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[5], [stack1, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Synchronize] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::IBroadPhase// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$Bgm_proxy;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_aabb
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Collision::b2AABB  */ 
                        stack2 = this.$Bgm_aabb;
//                        stack3 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.MoveProxy(stack1, stack2, local6);
                        } else {
                            // 7 0:Box2D.Collision:IBroadPhase::MoveProxy
                            {
                                let t = local1;
                                const m = t.$BgMoveProxy || (t = sec.box(local1), t.$BgMoveProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, local6);
                                } else { 
                                   local1.axCallProperty($names[7], [stack1, stack2, local6], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_Synchronize.js
})