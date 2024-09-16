(function anonymous(context
) {
/*
	Index: 136
	Path:  Box2D/Dynamics/b2World::m_QueryPoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_QueryPoint(local1 /* Function */, local2 /* b2Vec2 */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
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
        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
        stack1 = local2;
        stack0.axSetSlot(2, local2);
        stack0 = scope1.object;
        // anonymous (?): Boolean
        stack1 = context.createFunction(135, scope1, true, 136);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_QueryPoint] Coerce Type not found:', "Function")
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
            _e || console.warn('[m_QueryPoint] Coerce Type not found:', "IBroadPhase")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(3, stack1);
        stack0 = scope1.object;
        // 7 0:Box2D.Collision::b2AABB
        stack1 = scope1.findScopeProperty($names[3], true, false);
        //JIT: Support fast construct:b2AABB/Object
        stack1 = context.constructFast(stack1, [], $names[3]);
        //IR: Drop coerce, reason: redundant
        stack0.axSetSlot(5, stack1);
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(5);
        // 7 0::lowerBound
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['lowerBound'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BglowerBound;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[4]);
            }
        }
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(2);
        // 7 0::x
        //Possible type:7 0:Box2D.Collision::b2AABB
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0:Box2D.Common::b2Settings
        temp = scope1.findScopeProperty($names[6], true, false);
        stack2 = temp.$Bgb2Settings;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[6]);
        }
        // 7 0::b2_linearSlop
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['b2_linearSlop'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgb2_linearSlop;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[7]);
            }
        }
        stack1 -= stack2;
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(2);
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[8]);
            }
        }
        // 7 0:Box2D.Common::b2Settings
        temp = scope1.findScopeProperty($names[6], true, false);
        stack3 = temp.$Bgb2Settings;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[6]);
        }
        // 7 0::b2_linearSlop
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['b2_linearSlop'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgb2_linearSlop;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[7]);
            }
        }
        stack2 -= stack3;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(stack1, stack2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                }
            }
        }
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(5);
        // 7 0::upperBound
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['upperBound'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgupperBound;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(2);
        // 7 0::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0:Box2D.Common::b2Settings
        temp = scope1.findScopeProperty($names[6], true, false);
        stack2 = temp.$Bgb2Settings;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[6]);
        }
        // 7 0::b2_linearSlop
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['b2_linearSlop'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgb2_linearSlop;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[7]);
            }
        }
        stack1 += stack2;
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(2);
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[8]);
            }
        }
        // 7 0:Box2D.Common::b2Settings
        temp = scope1.findScopeProperty($names[6], true, false);
        stack3 = temp.$Bgb2Settings;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[6]);
        }
        // 7 0::b2_linearSlop
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['b2_linearSlop'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgb2_linearSlop;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[7]);
            }
        }
        stack2 += stack3;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(stack1, stack2);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                }
            }
        }
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(3);
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(4);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(5);
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
                   stack0.axCallProperty($names[11], [stack1, stack2], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_QueryPoint.js
})