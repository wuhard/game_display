(function anonymous(context
) {
/*
	Index: 113
	Path:  Box2D/Dynamics/b2World::m_DestroyBody
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DestroyBody(local1 /* b2Body */) {
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
        // local8 is assigned before read, skip init
        let local8 = undefined
        // local9 is assigned before read, skip init
        let local9 = undefined
        // local10 is assigned before read, skip init
        let local10 = undefined
        // local11 is assigned before read, skip init
        let local11 = undefined
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local8 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgIsLocked();
                        stack1 = true;
                        if (true != stack0) { p = 33; continue; };
                        return;
                    case 33:
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_jointList'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 88; continue; };
                    case 44:
                        stack0 = local2;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(local2) : local2;
                        }
                        local6 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['next'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_destructionListener
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DestructionListener  */ 
                        stack0 = this.$Bgm_destructionListener;
                        if (!stack0) { p = 78; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_destructionListener
                        //Possible type:7 0:Box2D.Dynamics::b2DestructionListener
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DestructionListener  */ 
                        stack0 = this.$Bgm_destructionListener;
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        //Possible type:undefined
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack1 = local6['joint'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack1 = temp.$Bgjoint;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SayGoodbyeJoint(stack1);
                        } else {
                            // 7 0::SayGoodbyeJoint
                            {
                                let t = stack0;
                                const m = t.$BgSayGoodbyeJoint || (t = sec.box(stack0), t.$BgSayGoodbyeJoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                    case 78:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack1 = local6['joint'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack1 = temp.$Bgjoint;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDestroyJoint(stack1);
                    case 88:
                        stack0 = local2;
                        if (local2) { p = 44; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_controllerList
                        //Possible type:7 0:Box2D.Dynamics::b2DestructionListener
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_controllerList'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_controllerList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2ControllerEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 127; continue; };
                    case 104:
                        stack0 = local3;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2ControllerEdge")
                            stack0 = _e ? _e.axCoerce(local3) : local3;
                        }
                        local7 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0::nextController
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['nextController'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$BgnextController;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2ControllerEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::controller
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['controller'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontroller;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.RemoveBody(local1);
                        } else {
                            // 7 0::RemoveBody
                            {
                                let t = stack0;
                                const m = t.$BgRemoveBody || (t = sec.box(stack0), t.$BgRemoveBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1);
                                } else { 
                                   stack0.axCallProperty($names[9], [local1], false);
                                }
                            }
                        }
                    case 127:
                        stack0 = local3;
                        if (local3) { p = 104; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_contactList'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_contactList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        { p = 173; continue; };
                    case 144:
                        stack0 = local4;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(local4) : local4;
                        }
                        local8 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['next'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack0 = this.$Bgm_contactManager;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack1 = local8['contact'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Destroy(stack1);
                        } else {
                            // 7 0::Destroy
                            {
                                let t = stack0;
                                const m = t.$BgDestroy || (t = sec.box(stack0), t.$BgDestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
                    case 173:
                        stack0 = local4;
                        if (local4) { p = 144; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.m_contactList = null;
                        } else {
                            context.setproperty($names[10], null, local1);
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_fixtureList'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_fixtureList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[15], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        { p = 249; continue; };
                    case 196:
                        stack0 = local5;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[15], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(local5) : local5;
                        }
                        local9 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_next'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[15], true, false);
                            _e || console.warn('[m_DestroyBody] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_destructionListener
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DestructionListener  */ 
                        stack0 = this.$Bgm_destructionListener;
                        if (!stack0) { p = 230; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_destructionListener
                        //Possible type:7 0:Box2D.Dynamics::b2DestructionListener
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DestructionListener  */ 
                        stack0 = this.$Bgm_destructionListener;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SayGoodbyeFixture(local9);
                        } else {
                            // 7 0::SayGoodbyeFixture
                            {
                                let t = stack0;
                                const m = t.$BgSayGoodbyeFixture || (t = sec.box(stack0), t.$BgSayGoodbyeFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   stack0.axCallProperty($names[17], [local9], false);
                                }
                            }
                        }
                    case 230:
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
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
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.DestroyProxy(stack1);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::DestroyProxy
                            {
                                let t = local9;
                                const m = t.$BgDestroyProxy || (t = sec.box(local9), t.$BgDestroyProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local9.axCallProperty($names[19], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.Destroy();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Destroy
                            {
                                let t = local9;
                                const m = t.$BgDestroy || (t = sec.box(local9), t.$BgDestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local9.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                    case 249:
                        stack0 = local5;
                        if (local5) { p = 196; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.m_fixtureList = null;
                        } else {
                            context.setproperty($names[14], null, local1);
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.m_fixtureCount = 0;
                        } else {
                            context.setproperty($names[21], 0, local1);
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        //Possible type:7 0:Box2D.Dynamics::b2DestructionListener
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_prev'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_prev;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        if (!stack0) { p = 285; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_prev'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_prev;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_next;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_next = stack1;
                        } else {
                            context.setproperty($names[16], stack1, stack0);
                        }
                    case 285:
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (!stack0) { p = 304; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_prev'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_prev;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_prev = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
                    case 304:
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgm_bodyList;
                        if (stack1 != local1) { p = 321; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_next;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgm_bodyList = stack1;
                    case 321:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local10 = stack1;
                        // 7 3::m_bodyCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_bodyCount;
                        stack0 = (stack0 | 0) - 1;
                        local11 = stack0;
//                        stack0 = local10;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        // 7 3::m_bodyCount
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])){
                            local10.m_bodyCount = local11;
                        } else {
                            context.setproperty($names[23], local11, local10);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_DestroyBody.js
})