(function anonymous(context
) {
/*
	Index: 149
	Path:  Box2D/Dynamics/b2World::m_DrawJoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DrawJoint(local1 /* b2Joint */) {
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
        // local14 is assigned before read, skip init
        let local14 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        local11 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2Joint// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetBodyA();
                        } else {
                            // 7 0::GetBodyA
                            {
                                let t = local1;
                                const m = t.$BgGetBodyA || (t = sec.box(local1), t.$BgGetBodyA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBodyA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2Joint// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetBodyB();
                        } else {
                            // 7 0::GetBodyB
                            {
                                let t = local1;
                                const m = t.$BgGetBodyB || (t = sec.box(local1), t.$BgGetBodyB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBodyB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_xf'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_xf;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Transform")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_xf'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_xf;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Transform")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['position'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2Joint// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetAnchorA();
                        } else {
                            // 7 0::GetAnchorA
                            {
                                let t = local1;
                                const m = t.$BgGetAnchorA || (t = sec.box(local1), t.$BgGetAnchorA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAnchorA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2Joint// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetAnchorB();
                        } else {
                            // 7 0::GetAnchorB
                            {
                                let t = local1;
                                const m = t.$BgGetAnchorB || (t = sec.box(local1), t.$BgGetAnchorB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAnchorB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
                        // 7 3::s_jointColor
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack0 = temp.$Bgs_jointColor;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[9]);
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Color")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local10 = stack0;
                        { p = 276; continue; };
                    case 97:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 3::s_jointColor
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local8;// JIT: redundant assigment, value unused
//                        stack2 = local9;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local8, local9, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8, local9, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local8, local9, local10], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 116:
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2Joint
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2PulleyJoint
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack1 = temp.$Bgb2PulleyJoint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[12]);
                        }
                        stack0 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack1.axAsType(local1) : local1;
                        //JIT: SKIP DOUBLED COERCE AFTER ASTYPELATE
                        stack1 = stack0;
                        local11 = stack1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetGroundAnchorA();
                        } else {
                            // 7 0::GetGroundAnchorA
                            {
                                let t = stack0;
                                const m = t.$BgGetGroundAnchorA || (t = sec.box(stack0), t.$BgGetGroundAnchorA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetGroundAnchorA ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local12 = stack0;
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local11, ((_a !== 'object' && _a !== 'function' ) || local11 == null || local11[AX_CLASS_SYMBOL]))) {
                           stack0 = local11.GetGroundAnchorB();
                        } else {
                            // 7 0::GetGroundAnchorB
                            {
                                let t = local11;
                                const m = t.$BgGetGroundAnchorB || (t = sec.box(local11), t.$BgGetGroundAnchorB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetGroundAnchorB ();
                                } else { 
                                    stack0 = local11.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawJoint] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local13 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local12;// JIT: redundant assigment, value unused
//                        stack2 = local8;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local12, local8, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local12, local8, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local12, local8, local10], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local13;// JIT: redundant assigment, value unused
//                        stack2 = local9;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local13, local9, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local13, local9, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local13, local9, local10], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local12;// JIT: redundant assigment, value unused
//                        stack2 = local13;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local12, local13, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local12, local13, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local12, local13, local10], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 192:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local8;// JIT: redundant assigment, value unused
//                        stack2 = local9;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local8, local9, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8, local9, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local8, local9, local10], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 211:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_groundBody
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2PulleyJoint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgm_groundBody;
                        if (stack1 == local2) { p = 235; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local8;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local6, local8, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local6, local8, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local6, local8, local10], false);
                                }
                            }
                        }
                    case 235:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local8;// JIT: redundant assigment, value unused
//                        stack2 = local9;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local8, local9, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8, local9, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local8, local9, local10], false);
                                }
                            }
                        }
                        stack0 = local3;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_groundBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgm_groundBody;
                        if (stack1 == local3) { p = 272; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local7;// JIT: redundant assigment, value unused
//                        stack2 = local9;// JIT: redundant assigment, value unused
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local7, local9, local10);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local7, local9, local10);
                                } else { 
                                   stack0.axCallProperty($names[11], [local7, local9, local10], false);
                                }
                            }
                        }
                    case 272:
                        //JIT: Emit inline return
                        return;
                    case 276:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2Joint// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['m_type'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgm_type;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        local14 = stack0;
                        // 7 0:Box2D.Dynamics.Joints::b2Joint
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack0 = temp.$Bgb2Joint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[16]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_distanceJoint
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['e_distanceJoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bge_distanceJoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = local14;
                        if (local14 !== stack0) { p = 299; continue; };
                        stack0 = 0;
                        { p = 345; continue; };
                    case 299:
                        // 7 0:Box2D.Dynamics.Joints::b2Joint
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack0 = temp.$Bgb2Joint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[16]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_pulleyJoint
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['e_pulleyJoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bge_pulleyJoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack1 = local14;
                        if (local14 !== stack0) { p = 316; continue; };
                        stack0 = 1;
                        { p = 345; continue; };
                    case 316:
                        // 7 0:Box2D.Dynamics.Joints::b2Joint
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack0 = temp.$Bgb2Joint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[16]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_mouseJoint
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['e_mouseJoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bge_mouseJoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack1 = local14;
                        if (local14 !== stack0) { p = 333; continue; };
                        stack0 = 2;
                        { p = 345; continue; };
                    case 333:
                        { p = 343; continue; };
                        // unreachable
                        // unreachable
                    case 343:
                        stack0 = 3;
                    case 345:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 4) { p = [97, 116, 192, 211][stack0]; continue; } else { p = 211; continue; };
                    case 364:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_DrawJoint.js
})