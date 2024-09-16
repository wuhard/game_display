(function anonymous(context
) {
/*
	Index: 374
	Path:  Box2D/Dynamics/b2Body::m_SynchronizeFixtures
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SynchronizeFixtures() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
        let stack3 = undefined;
        let stack4 = undefined;
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
                        local4 = null;
                        // 7 3::s_xf1
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgs_xf1;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_SynchronizeFixtures] Coerce Type not found:', "b2Transform")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local1 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        // 7 0::R
                        //Possible type:7 3::s_xf1
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack1 = this.$Bgm_sweep;
                        // 7 0::a0
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['a0'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bga0;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(stack1);
                        } else {
                            // 7 0::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        // 7 0::R
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['R'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_SynchronizeFixtures] Coerce Type not found:', "b2Mat22")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack0 = this.$Bgm_sweep;
                        // 7 0::localCenter
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['localCenter'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglocalCenter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_SynchronizeFixtures] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['position'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack1 = this.$Bgm_sweep;
                        // 7 0::c0
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['c0'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgc0;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['col1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgcol1;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack3 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 *= stack3;
//                        stack3 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack3 = local2['col2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack3 = temp.$Bgcol2;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::x
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack4 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 += stack3;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['position'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack1 = this.$Bgm_sweep;
                        // 7 0::c0
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['c0'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgc0;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['col1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgcol1;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack3 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 *= stack3;
//                        stack3 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack3 = local2['col2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack3 = temp.$Bgcol2;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack4 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 += stack3;
                        stack1 -= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
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
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_broadPhase'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_broadPhase;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[16], true, false);
                            _e || console.warn('[m_SynchronizeFixtures] Coerce Type not found:', "IBroadPhase")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$Bgm_fixtureList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[17], true, false);
                            _e || console.warn('[m_SynchronizeFixtures] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        { p = 180; continue; };
                    case 157:
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local1;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Transform  */ 
                        stack3 = this.$Bgm_xf;
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.Synchronize(local5, local1, stack3);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Synchronize
                            {
                                let t = local4;
                                const m = t.$BgSynchronize || (t = sec.box(local4), t.$BgSynchronize);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5, local1, stack3);
                                } else { 
                                   local4.axCallProperty($names[18], [local5, local1, stack3], false);
                                }
                            }
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_next'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[17], true, false);
                            _e || console.warn('[m_SynchronizeFixtures] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                    case 180:
                        stack0 = local4;
                        if (local4) { p = 157; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SynchronizeFixtures.js
})