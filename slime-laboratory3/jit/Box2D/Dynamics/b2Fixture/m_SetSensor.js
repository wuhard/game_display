(function anonymous(context
) {
/*
	Index: 210
	Path:  Box2D/Dynamics/b2Fixture::m_SetSensor
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetSensor(local1 /* Boolean */) {
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
                        local3 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_isSensor
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgm_isSensor;
                        // JIT: potential type:7 0::Boolean
                        stack1 = local1;
                        if (local1 != stack0) { p = 26; continue; };
                        return;
                    case 26:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_isSensor
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgm_isSensor = (!!local1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_body;
                        stack1 = null;
                        if (null != stack0) { p = 41; continue; };
                        return;
                    case 41:
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
                                    stack0 = stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_SetSensor] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 132; continue; };
                    case 56:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['contact'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_SetSensor] Coerce Type not found:', "b2Contact")
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
                                    stack0 = local3.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_SetSensor] Coerce Type not found:', "b2Fixture")
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
                                    stack0 = local3.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_SetSensor] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        stack0 = local4;
                        stack1 = this;
                        stack0 = local4 == this;
                        stack1 = stack0;
                        if (stack1) { p = 96; continue; };
                        stack0 = local5;
                        stack1 = this;
                        stack0 = local5 == this;
                    case 96:
                        if (!stack0) { p = 125; continue; };
                        stack0 = local3;
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack1 = local4.IsSensor();
                        } else {
                            // 7 0::IsSensor
                            {
                                let t = local4;
                                const m = t.$BgIsSensor || (t = sec.box(local4), t.$BgIsSensor);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgIsSensor ();
                                } else { 
                                    stack1 = local4.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        stack1 = !!stack1;
                        stack2 = stack1;
                        if (stack2) { p = 121; continue; };
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                           stack1 = local5.IsSensor();
                        } else {
                            // 7 0::IsSensor
                            {
                                let t = local5;
                                const m = t.$BgIsSensor || (t = sec.box(local5), t.$BgIsSensor);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgIsSensor ();
                                } else { 
                                    stack1 = local5.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        stack1 = !!stack1;
                    case 121:
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetSensor(stack1);
                        } else {
                            // 7 0::SetSensor
                            {
                                let t = stack0;
                                const m = t.$BgSetSensor || (t = sec.box(stack0), t.$BgSetSensor);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[8], [stack1], false);
                                }
                            }
                        }
                    case 125:
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
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_SetSensor] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 132:
                        stack0 = local2;
                        if (local2) { p = 56; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_SetSensor.js
})