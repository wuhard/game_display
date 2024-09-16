(function anonymous(context
) {
/*
	Index: 376
	Path:  Box2D/Dynamics/b2Body::m_ShouldCollide
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_ShouldCollide(local1 /* b2Body */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
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
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_type;
                        // 7 0::b2_dynamicBody
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2_dynamicBody;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack0 = stack0 == stack1;
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 26; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        //Possible type:7 0::int
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_type'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_type;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::b2_dynamicBody
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2_dynamicBody;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack0 = stack0 == stack1;
                        stack0 = !stack0;
                    case 26:
                        if (!stack0) { p = 32; continue; };
                        stack0 = false;
                        return false;
                    case 32:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2JointEdge  */ 
                        stack0 = this.$Bgm_jointList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_ShouldCollide] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 74; continue; };
                    case 43:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::other
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2JointEdge
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['other'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgother;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body
                        stack1 = local1;
                        if (local1 != stack0) { p = 67; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['joint'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgjoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_collideConnected
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_collideConnected'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_collideConnected;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 67; continue; };
                        stack0 = false;
                        return false;
                    case 67:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::next
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['next'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_ShouldCollide] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 74:
                        stack0 = local2;
                        if (local2) { p = 43; continue; };
                        stack0 = true;
                        return true;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_ShouldCollide.js
})