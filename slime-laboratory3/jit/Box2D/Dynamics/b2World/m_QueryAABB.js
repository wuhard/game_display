(function anonymous(context
) {
/*
	Index: 132
	Path:  Box2D/Dynamics/b2World::m_QueryAABB
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_QueryAABB(local1 /* Function */, local2 /* b2AABB */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let scope1 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = sec.createActivation(context.mi, scope0);
        stack1 = stack0;
        local3 = stack1;
        scope1 = scope0.extend(stack0);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(3, null);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(4, null);
        stack0 = scope1.object;
        // JIT: potential type:7 0::Function
        stack1 = local1;
        stack0.axSetSlot(1, local1);
        stack0 = scope1.object;
        // JIT: potential type:7 0:Box2D.Collision::b2AABB
        stack1 = local2;
        stack0.axSetSlot(2, local2);
        stack0 = scope1.object;
        // anonymous (?): Boolean
        stack1 = context.createFunction(131, scope1, true, 132);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_QueryAABB] Coerce Type not found:', "Function")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(4, stack1);
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
            _e || console.warn('[m_QueryAABB] Coerce Type not found:', "IBroadPhase")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(3, stack1);
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(3);
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(4);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(2);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Query(stack1, stack2);
        } else {
            // 7 0:Box2D.Collision:IBroadPhase::Query
            {
                let t = stack0;
                const m = t.$BgQuery || (t = sec.box(stack0), t.$BgQuery);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_QueryAABB.js
})