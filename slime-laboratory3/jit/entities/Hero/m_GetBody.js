(function anonymous(context
) {
/*
	Index: 1123
	Path:  entities/Hero::m_GetBody
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0:Box2D.Dynamics::b2Body
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetBody(local1 /* Number */, local2 /* Number */, local3 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Boolean coerce */
        local3 = (!!local3);
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
        stack0.axSetSlot(7, null);
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(8, null);
        stack0 = scope1.object;
        // JIT: potential type:7 0::Number
        stack1 = local1;
        stack0.axSetSlot(1, local1);
        stack0 = scope1.object;
        // JIT: potential type:7 0::Number
        stack1 = local2;
        stack0.axSetSlot(2, local2);
        stack0 = scope1.object;
        // JIT: potential type:7 0::Boolean
        stack1 = local3;
        stack0.axSetSlot(3, local3);
        stack0 = scope1.object;
        // anonymous (?: b2Fixture): Boolean
        stack1 = context.createFunction(1122, scope1, true, 1123);
        if ((stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            var _e = scope1.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_GetBody] Coerce Type not found:', "Function")
            stack1 = _e ? _e.axCoerce(stack1) : stack1;
        }
        stack0.axSetSlot(8, stack1);
        stack0 = scope1.object;
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope1.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        //IR: Drop coerce, reason: redundant
        stack0.axSetSlot(4, stack1);
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(4);
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(1);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(2);
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
                   stack0.axCallProperty($names[2], [stack1, stack2], false);
                }
            }
        }
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
        stack1 = stack1.axGetSlot(4);
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
        stack2 = 1;
        // 7 0::Utils
        temp = scope1.findScopeProperty($names[6], true, false);
        stack3 = temp.$BgUtils;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[6]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['m_scale'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgm_scale;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[7]);
            }
        }
        stack2 /= stack3;
        stack1 -= stack2;
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(4);
        // 7 0::y
        //Possible type:undefined
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[8]);
            }
        }
        stack3 = 1;
        // 7 0::Utils
        temp = scope1.findScopeProperty($names[6], true, false);
        stack4 = temp.$BgUtils;
        if (stack4 === undefined || typeof stack4 === 'function') {
            stack4 = temp.axGetProperty($names[6]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['m_scale'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$Bgm_scale;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[7]);
            }
        }
        stack3 /= stack4;
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
                   stack0.axCallProperty($names[2], [stack1, stack2], false);
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
                stack0 = temp.axGetProperty($names[9]);
            }
        }
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(4);
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
        stack2 = 1;
        // 7 0::Utils
        temp = scope1.findScopeProperty($names[6], true, false);
        stack3 = temp.$BgUtils;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[6]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['m_scale'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgm_scale;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[7]);
            }
        }
        stack2 /= stack3;
        stack1 += stack2;
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(4);
        // 7 0::y
        //Possible type:undefined
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[8]);
            }
        }
        stack3 = 1;
        // 7 0::Utils
        temp = scope1.findScopeProperty($names[6], true, false);
        stack4 = temp.$BgUtils;
        if (stack4 === undefined || typeof stack4 === 'function') {
            stack4 = temp.axGetProperty($names[6]);
        }
        // 7 0::m_scale
        //Possible type:7 0::Utils
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['m_scale'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$Bgm_scale;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[7]);
            }
        }
        stack3 /= stack4;
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
                   stack0.axCallProperty($names[2], [stack1, stack2], false);
                }
            }
        }
        stack0 = scope1.object;
        stack1 = null;
        //JIT: SKIP_NULL_COERCE
        stack0.axSetSlot(6, null);
        // 7 0::Utils
        temp = scope1.findScopeProperty($names[6], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
        // 7 0::m_world
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['m_world'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgm_world;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
        stack1 = scope1.object;
        stack1 = stack1.axGetSlot(8);
        stack2 = scope1.object;
        stack2 = stack2.axGetSlot(5);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.QueryAABB(stack1, stack2);
        } else {
            // 7 0::QueryAABB
            {
                let t = stack0;
                const m = t.$BgQueryAABB || (t = sec.box(stack0), t.$BgQueryAABB);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[11], [stack1, stack2], false);
                }
            }
        }
        stack0 = scope1.object;
        stack0 = stack0.axGetSlot(6);
        return stack0;
    }
//# sourceURL=http://jit/entities/Hero/m_GetBody.js
})