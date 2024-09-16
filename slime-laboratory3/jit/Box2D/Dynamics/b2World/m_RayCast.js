(function anonymous(context
) {
/*
	Index: 138
	Path:  Box2D/Dynamics/b2World::m_RayCast
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_RayCast(local1 /* Function */, local2 /* b2Vec2 */, local3 /* b2Vec2 */) {
        // Possible use a real "this"
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let scope1 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = sec.createActivation(context.mi, scope0);
        stack1 = stack0;
        local4 = stack1;
        scope1 = scope0.extend(stack0);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(4, null);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(5, null);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(6, null);
        stack0 = scope1.object;
        // JIT: potential type:7 0::Function
        stack1 = local1;
        stack0.axSetSlot(1, local1);
        stack0 = scope1.object;
        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
        stack1 = local2;
        stack0.axSetSlot(2, local2);
        stack0 = scope1.object;
        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
        stack1 = local3;
        stack0.axSetSlot(3, local3);
        stack0 = scope1.object;
        // anonymous (?: b2RayCastInput, ?): Number
        stack1 = context.createFunction(137, scope1, true, 138);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_RayCast] Coerce Type not found:', "Function")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(6, stack1);
        stack0 = scope1.object;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
        stack1 = this.$Bgm_contactManager;
        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['m_broadPhase'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgm_broadPhase;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[2], true, false);
            _e || console.warn('[m_RayCast] Coerce Type not found:', "IBroadPhase")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(4, stack1);
        stack0 = scope1.object;
        // 7 0:Box2D.Collision::b2RayCastOutput
        stack1 = scope1.findScopeProperty($names[3], true, false);
        //JIT: Support fast construct:b2RayCastOutput/Object
        stack1 = context.constructFast(stack1, [], $names[3]);
        //IR: Drop coerce, reason: redundant
        stack0.axSetSlot(5, stack1);
        stack0 = scope1.object;
        // 7 0:Box2D.Collision::b2RayCastInput
        stack1 = scope1.findScopeProperty($names[4], true, false);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(2);
        stack3 = scope1.object;
        stack3 = stack3.axGetSlot(3);
        //JIT: Support fast construct:b2RayCastInput/Object
        stack1 = context.constructFast(stack1, [stack2, stack3], $names[4]);
        //IR: Drop coerce, reason: redundant
        stack0.axSetSlot(7, stack1);
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(4);
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(6);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(7);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.RayCast(stack1, stack2);
        } else {
            // 7 0:Box2D.Collision:IBroadPhase::RayCast
            {
                let t = stack0;
                const m = t.$BgRayCast || (t = sec.box(stack0), t.$BgRayCast);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_RayCast.js
})