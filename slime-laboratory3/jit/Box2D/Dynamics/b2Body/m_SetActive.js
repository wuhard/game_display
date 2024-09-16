(function anonymous(context
) {
/*
	Index: 362
	Path:  Box2D/Dynamics/b2Body::m_SetActive
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetActive(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
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
                        local2 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BgIsActive();
                        if (stack1 != local1) { p = 31; continue; };
                        return;
                    case 31:
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 99; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$Bge_activeFlag;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
                        this.$Bgm_flags = (stack1>>>0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:undefined
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
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_broadPhase'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_broadPhase;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "IBroadPhase")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$Bgm_fixtureList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 90; continue; };
                    case 72:
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        //Possible type:7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Transform  */ 
                        stack2 = this.$Bgm_xf;
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.CreateProxy(local2, stack2);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::CreateProxy
                            {
                                let t = local3;
                                const m = t.$BgCreateProxy || (t = sec.box(local3), t.$BgCreateProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2, stack2);
                                } else { 
                                   local3.axCallProperty($names[5], [local2, stack2], false);
                                }
                            }
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_next'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 90:
                        stack0 = local3;
                        if (local3) { p = 72; continue; };
                        //JIT: Emit inline return
                        return;
                    case 99:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0::uint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$Bge_activeFlag;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
                        this.$Bgm_flags = (stack1>>>0);
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
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_broadPhase'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_broadPhase;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "IBroadPhase")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$Bgm_fixtureList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 150; continue; };
                    case 136:
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.DestroyProxy(local2);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::DestroyProxy
                            {
                                let t = local3;
                                const m = t.$BgDestroyProxy || (t = sec.box(local3), t.$BgDestroyProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   local3.axCallProperty($names[7], [local2], false);
                                }
                            }
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_next'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 150:
                        stack0 = local3;
                        if (local3) { p = 136; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Contacts::b2ContactEdge  */ 
                        stack0 = this.$Bgm_contactList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        { p = 199; continue; };
                    case 167:
                        stack0 = local4;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(local4) : local4;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::next
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2ContactEdge
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['next'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SetActive] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
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
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        //Possible type:7 0::uint
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['contact'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
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
                                   stack0.axCallProperty($names[11], [stack1], false);
                                }
                            }
                        }
                    case 199:
                        stack0 = local4;
                        if (local4) { p = 167; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Contacts::b2ContactEdge  */ 
                        this.$Bgm_contactList = null;
                    case 210:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SetActive.js
})