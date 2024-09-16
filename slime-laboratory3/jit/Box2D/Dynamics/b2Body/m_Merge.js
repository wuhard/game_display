(function anonymous(context
) {
/*
	Index: 337
	Path:  Box2D/Dynamics/b2Body::m_Merge
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Merge(local1 /* b2Body */) {
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
        // local12 is assigned before read, skip init
        let local12 = undefined
        // local13 is assigned before read, skip init
        let local13 = undefined
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
                        local2 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local11 = null;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_fixtureList'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_fixtureList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 106; continue; };
                    case 31:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
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
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        stack1 = local1;
                        local12 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_fixtureCount'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_fixtureCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = (stack0 | 0) - 1;
                        local13 = stack0;
//                        stack0 = local12;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])){
                            local12.m_fixtureCount = local13;
                        } else {
                            context.setproperty($names[3], local13, local12);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack1 = this.$Bgm_fixtureList;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_next = stack1;
                        } else {
                            context.setproperty($names[2], stack1, local2);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        this.$Bgm_fixtureList = local2;
                        stack0 = this;
                        stack1 = this;
                        local12 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_fixtureCount'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_fixtureCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local13 = stack0;
//                        stack0 = local12;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])){
                            local12.m_fixtureCount = local13;
                        } else {
                            context.setproperty($names[3], local13, local12);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_body = local4;
                        } else {
                            context.setproperty($names[4], local4, local2);
                        }
                        stack0 = local11;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(local11) : local11;
                        }
                        local2 = stack0;
                    case 106:
                        stack0 = local2;
                        if (local2) { p = 31; continue; };
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.m_fixtureCount = 0;
                        } else {
                            context.setproperty($names[3], 0, local3);
                        }
                        stack0 = this;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(this) : this;
                        }
                        local3 = stack0;
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body
                        stack0 = local1;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(local1) : local1;
                        }
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetWorldCenter();
                        } else {
                            // 7 0::GetWorldCenter
                            {
                                let t = local3;
                                const m = t.$BgGetWorldCenter || (t = sec.box(local3), t.$BgGetWorldCenter);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetWorldCenter ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack0 = local4.GetWorldCenter();
                        } else {
                            // 7 0::GetWorldCenter
                            {
                                let t = local4;
                                const m = t.$BgGetWorldCenter || (t = sec.box(local4), t.$BgGetWorldCenter);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetWorldCenter ();
                                } else { 
                                    stack0 = local4.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = local3;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(local3), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Copy();
                        } else {
                            // 7 0::Copy
                            {
                                let t = stack0;
                                const m = t.$BgCopy || (t = sec.box(stack0), t.$BgCopy);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgCopy ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack0 = local4.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = local4;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(local4), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = local4.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Copy();
                        } else {
                            // 7 0::Copy
                            {
                                let t = stack0;
                                const m = t.$BgCopy || (t = sec.box(stack0), t.$BgCopy);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgCopy ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_Merge] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetAngularVelocity();
                        } else {
                            // 7 0::GetAngularVelocity
                            {
                                let t = local3;
                                const m = t.$BgGetAngularVelocity || (t = sec.box(local3), t.$BgGetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAngularVelocity ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local9 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack0 = local4.GetAngularVelocity();
                        } else {
                            // 7 0::GetAngularVelocity
                            {
                                let t = local4;
                                const m = t.$BgGetAngularVelocity || (t = sec.box(local4), t.$BgGetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAngularVelocity ();
                                } else { 
                                    stack0 = local4.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local10 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.ResetMassData();
                        } else {
                            // 7 0::ResetMassData
                            {
                                let t = local3;
                                const m = t.$BgResetMassData || (t = sec.box(local3), t.$BgResetMassData);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local3.axCallProperty($names[11], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSynchronizeFixtures();
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_Merge.js
})