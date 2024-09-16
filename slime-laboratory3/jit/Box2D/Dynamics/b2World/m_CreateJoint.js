(function anonymous(context
) {
/*
	Index: 114
	Path:  Box2D/Dynamics/b2World::m_CreateJoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics.Joints::b2Joint
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_CreateJoint(local1 /* b2JointDef */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
                        // 7 0:Box2D.Dynamics.Joints::b2Joint
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgb2Joint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        stack2 = null;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Create(local1, null);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Create
                            {
                                let t = stack0;
                                const m = t.$BgCreate || (t = sec.box(stack0), t.$BgCreate);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgCreate (local1, null);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [local1, null], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_CreateJoint] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_prev = null;
                        } else {
                            context.setproperty($names[2], null, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        stack1 = this.$Bgm_jointList;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_next = stack1;
                        } else {
                            context.setproperty($names[3], stack1, local2);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        stack0 = this.$Bgm_jointList;
                        if (!stack0) { p = 47; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        stack0 = this.$Bgm_jointList;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_prev = local2;
                        } else {
                            context.setproperty($names[2], local2, stack0);
                        }
                    case 47:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        this.$Bgm_jointList = local2;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 3::m_jointCount
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_jointCount;
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 3::m_jointCount
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.m_jointCount = local7;
                        } else {
                            context.setproperty($names[4], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
                        //Possible type:7 0::int
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.joint = local2;
                        } else {
                            context.setproperty($names[6], local2, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_bodyB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_bodyB;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::other
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.other = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.prev = null;
                        } else {
                            context.setproperty($names[9], null, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_bodyA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_bodyA;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_jointList'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_jointList;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::next
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.next = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_bodyA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_bodyA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_jointList'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!stack0) { p = 139; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_bodyA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_bodyA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_jointList'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_edgeA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_edgeA;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.prev = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
                    case 139:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_bodyA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_bodyA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_edgeA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_edgeA;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_jointList = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.joint = local2;
                        } else {
                            context.setproperty($names[6], local2, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_bodyA'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_bodyA;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::other
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.other = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.prev = null;
                        } else {
                            context.setproperty($names[9], null, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_edgeB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_edgeB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_bodyB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_bodyB;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_jointList'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_jointList;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::next
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.next = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_bodyB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_bodyB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_jointList'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!stack0) { p = 216; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_bodyB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_bodyB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_jointList'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_edgeB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_edgeB;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0::prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.prev = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
                    case 216:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_bodyB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_bodyB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_edgeB'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_edgeB;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_jointList = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::bodyA
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['bodyA'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgbodyA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[15], true, false);
                            _e || console.warn('[m_CreateJoint] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::bodyB
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['bodyB'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgbodyB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[15], true, false);
                            _e || console.warn('[m_CreateJoint] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::collideConnected
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['collideConnected'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgcollideConnected;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 300; continue; };
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack0 = local4.GetContactList();
                        } else {
                            // 7 0::GetContactList
                            {
                                let t = local4;
                                const m = t.$BgGetContactList || (t = sec.box(local4), t.$BgGetContactList);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetContactList ();
                                } else { 
                                    stack0 = local4.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[19], true, false);
                            _e || console.warn('[m_CreateJoint] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        { p = 294; continue; };
                    case 265:
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::other
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['other'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgother;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local3;
                        if (local3 != stack0) { p = 285; continue; };
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['contact'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.FlagForFiltering();
                        } else {
                            // 7 0::FlagForFiltering
                            {
                                let t = stack0;
                                const m = t.$BgFlagForFiltering || (t = sec.box(stack0), t.$BgFlagForFiltering);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[21], [], false);
                                }
                            }
                        }
                    case 285:
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['next'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[19], true, false);
                            _e || console.warn('[m_CreateJoint] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                    case 294:
                        stack0 = local5;
                        if (local5) { p = 265; continue; };
                    case 300:
                        stack0 = local2;
                        return local2;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_CreateJoint.js
})