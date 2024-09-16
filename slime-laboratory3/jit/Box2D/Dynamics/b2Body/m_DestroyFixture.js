(function anonymous(context
) {
/*
	Index: 318
	Path:  Box2D/Dynamics/b2Body::m_DestroyFixture
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DestroyFixture(local1 /* b2Fixture */) {
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
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack0 = this.$Bgm_world;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsLocked();
                        } else {
                            // 7 0::IsLocked
                            {
                                let t = stack0;
                                const m = t.$BgIsLocked || (t = sec.box(stack0), t.$BgIsLocked);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsLocked ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        stack1 = true;
                        if (true != stack0) { p = 36; continue; };
                        return;
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        //Possible type:7 0:Box2D.Dynamics::b2World
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$Bgm_fixtureList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local4 = false;
                        { p = 104; continue; };
                    case 54:
                        stack0 = local2;
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture
                        stack1 = local1;
                        if (local1 != local2) { p = 93; continue; };
                        stack0 = local3;
                        if (!local3) { p = 78; continue; };
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_next;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.m_next = stack1;
                        } else {
                            context.setproperty($names[2], stack1, local3);
                        }
                        { p = 86; continue; };
                    case 78:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['m_next'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgm_next;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        this.$Bgm_fixtureList = stack1;
                    case 86:
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local4 = true;
                        { p = 110; continue; };
                    case 93:
                        stack0 = local2;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(local2) : local2;
                        }
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_next'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 104:
                        stack0 = local2;
                        stack1 = null;
                        if (null != local2) { p = 54; continue; };
                    case 110:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Contacts::b2ContactEdge  */ 
                        stack0 = this.$Bgm_contactList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        { p = 192; continue; };
                    case 122:
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2ContactEdge
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['contact'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['next'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack0 = local6.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local6;
                                const m = t.$BgGetFixtureA || (t = sec.box(local6), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local6.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack0 = local6.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local6;
                                const m = t.$BgGetFixtureB || (t = sec.box(local6), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local6.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture
                        stack0 = local1;
                        stack1 = local7;
                        stack0 = local1 == local7;
                        stack1 = stack0;
                        if (stack1) { p = 175; continue; };
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture
                        stack0 = local1;
                        stack1 = local8;
                        stack0 = local1 == local8;
                    case 175:
                        if (!stack0) { p = 192; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack0 = this.$Bgm_world;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        //Possible type:7 0:Box2D.Dynamics::b2World
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_contactManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_contactManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Destroy(local6);
                        } else {
                            // 7 0::Destroy
                            {
                                let t = stack0;
                                const m = t.$BgDestroy || (t = sec.box(stack0), t.$BgDestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t, local6);
                                } else { 
                                   stack0.axCallProperty($names[10], [local6], false);
                                }
                            }
                        }
                    case 192:
                        stack0 = local5;
                        if (local5) { p = 122; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack0 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack1 = temp.$Bge_activeFlag;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[11]);
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 231; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:7 0::uint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack0 = this.$Bgm_world;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        //Possible type:7 0:Box2D.Dynamics::b2World
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_contactManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_contactManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_broadPhase'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_broadPhase;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[13], true, false);
                            _e || console.warn('[m_DestroyFixture] Coerce Type not found:', "IBroadPhase")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.DestroyProxy(local9);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::DestroyProxy
                            {
                                let t = local1;
                                const m = t.$BgDestroyProxy || (t = sec.box(local1), t.$BgDestroyProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   local1.axCallProperty($names[14], [local9], false);
                                }
                            }
                        }
                    case 231:
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.Destroy();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Destroy
                            {
                                let t = local1;
                                const m = t.$BgDestroy || (t = sec.box(local1), t.$BgDestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[15], [], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.m_body = null;
                        } else {
                            context.setproperty($names[16], null, local1);
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.m_next = null;
                        } else {
                            context.setproperty($names[2], null, local1);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local10 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_fixtureCount;
                        stack0 = (stack0 | 0) - 1;
                        local11 = stack0;
//                        stack0 = local10;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])){
                            local10.m_fixtureCount = local11;
                        } else {
                            context.setproperty($names[17], local11, local10);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgResetMassData();
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_DestroyFixture.js
})