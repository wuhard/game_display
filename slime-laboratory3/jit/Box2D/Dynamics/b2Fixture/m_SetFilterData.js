(function anonymous(context
) {
/*
	Index: 212
	Path:  Box2D/Dynamics/b2Fixture::m_SetFilterData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetFilterData(local1 /* b2FilterData */) {
        // Possible use a real "this"
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
                        local3 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2FilterData// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.Copy();
                        } else {
                            // 7 0::Copy
                            {
                                let t = local1;
                                const m = t.$BgCopy || (t = sec.box(local1), t.$BgCopy);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCopy ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_filter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2FilterData  */ 
                        this.$Bgm_filter = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_body;
                        if (!stack0) { p = 34; continue; };
                        return;
                    case 34:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_body;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetContactList();
                        } else {
                            // 7 0::GetContactList
                            {
                                let t = stack0;
                                const m = t.$BgGetContactList || (t = sec.box(stack0), t.$BgGetContactList);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetContactList ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_SetFilterData] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 105; continue; };
                    case 49:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['contact'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_SetFilterData] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local3;
                                const m = t.$BgGetFixtureA || (t = sec.box(local3), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[5], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_SetFilterData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local3;
                                const m = t.$BgGetFixtureB || (t = sec.box(local3), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_SetFilterData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        stack0 = local4;
                        stack1 = this;
                        stack0 = local4 == this;
                        stack1 = stack0;
                        if (stack1) { p = 89; continue; };
                        stack0 = local5;
                        stack1 = this;
                        stack0 = local5 == this;
                    case 89:
                        if (!stack0) { p = 98; continue; };
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.FlagForFiltering();
                        } else {
                            // 7 0::FlagForFiltering
                            {
                                let t = local3;
                                const m = t.$BgFlagForFiltering || (t = sec.box(local3), t.$BgFlagForFiltering);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local3.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                    case 98:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['next'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_SetFilterData] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 105:
                        stack0 = local2;
                        if (local2) { p = 49; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_SetFilterData.js
})