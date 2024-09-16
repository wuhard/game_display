(function anonymous(context
) {
/*
	Index: 1319
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::m_InitVelocityConstraints
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(11)['$BgMath']; // :Math

    return function compiled_m_InitVelocityConstraints(local1 /* b2TimeStep */) {
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
        // local15 is assigned before read, skip init
        let local15 = undefined
        // local16 is assigned before read, skip init
        let local16 = undefined
        // local17 is assigned before read, skip init
        let local17 = undefined
        // local18 is assigned before read, skip init
        let local18 = undefined
        // local19 is assigned before read, skip init
        let local19 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local3 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local7 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local9 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local14 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local15 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local16 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local17 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local18 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local19 = NaN;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgm_bodyA;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_InitVelocityConstraints] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgm_bodyB;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_InitVelocityConstraints] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        //Possible type:7 0:http://www.box2d.org/ns/b2internal::m_bodyB
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_xf'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_xf;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::R
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['R'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_InitVelocityConstraints] Coerce Type not found:', "b2Mat22")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_localAnchor1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_localAnchor1;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_sweep'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::localCenter
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['localCenter'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglocalCenter;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local6 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_localAnchor1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_localAnchor1;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_sweep'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::localCenter
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['localCenter'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglocalCenter;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['col1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 *= local6;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['col2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgcol2;
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
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        stack1 *= local7;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['col1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 *= local6;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['col2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgcol2;
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
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        stack1 *= local7;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local7 = stack0;
                        stack0 = local3;
                        stack0 = +local3;
                        local6 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_xf'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_xf;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::R
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['R'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgR;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_InitVelocityConstraints] Coerce Type not found:', "b2Mat22")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_localAnchor2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_localAnchor2;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::localCenter
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['localCenter'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglocalCenter;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local8 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_localAnchor2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_localAnchor2;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::localCenter
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['localCenter'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglocalCenter;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local9 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['col1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        stack0 *= local8;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['col2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgcol2;
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
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        stack1 *= local9;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['col1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgcol1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        stack0 *= local8;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['col2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgcol2;
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
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        stack1 *= local9;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local9 = stack0;
                        stack0 = local3;
                        stack0 = +local3;
                        local8 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_u;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::c
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['c'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgc;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local8;// JIT: redundant assigment, value unused
                        stack1 += local8;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['m_sweep'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgm_sweep;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::c
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['c'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgc;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = local6;// JIT: redundant assigment, value unused
                        stack1 -= local6;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_u;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::c
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['c'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgc;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        stack1 += local9;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['m_sweep'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgm_sweep;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::c
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['c'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgc;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        stack1 -= local7;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_u;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgm_u;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgm_u;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack3 = this.$Bgm_u;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack2 *= stack3;
                        stack1 += stack2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.sqrt(stack1);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsqrt (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        stack1 = stack0;
                        local10 = stack1;
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack1 = temp.$Bgb2Settings;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::b2_linearSlop
                        //Possible type:7 0:Box2D.Common::b2Settings
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_linearSlop'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_linearSlop;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[14]);
                            }
                        }
                        if (!(stack1 < stack0)) { p = 409; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_u;
                        stack1 = 1;
//                        stack2 = local10;// JIT: redundant assigment, value unused
                        stack1 /= local10;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Multiply(stack1);
                        } else {
                            // 7 0::Multiply
                            {
                                let t = stack0;
                                const m = t.$BgMultiply || (t = sec.box(stack0), t.$BgMultiply);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1], false);
                                }
                            }
                        }
                        { p = 417; continue; };
                    case 409:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_u;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetZero();
                        } else {
                            // 7 0::SetZero
                            {
                                let t = stack0;
                                const m = t.$BgSetZero || (t = sec.box(stack0), t.$BgSetZero);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[16], [], false);
                                }
                            }
                        }
                    case 417:
                        stack0 = local6;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_u;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 *= stack1;
                        stack1 = local7;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgm_u;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local11 = stack0;
                        stack0 = local8;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_u;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 *= stack1;
                        stack1 = local9;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgm_u;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local12 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_invMass'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_invMass;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_invI'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_invI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
//                        stack2 = local11;// JIT: redundant assigment, value unused
                        stack1 *= local11;
//                        stack2 = local11;// JIT: redundant assigment, value unused
                        stack1 *= local11;
                        stack0 += stack1;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_invMass'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_invMass;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_invI'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_invI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
//                        stack2 = local12;// JIT: redundant assigment, value unused
                        stack1 *= local12;
//                        stack2 = local12;// JIT: redundant assigment, value unused
                        stack1 *= local12;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local13 = stack0;
                        stack0 = this;
                        stack1 = local13;
                        stack2 = 0;
                        if (0 == local13) { p = 522; continue; };
                        stack1 = 1;
//                        stack2 = local13;// JIT: redundant assigment, value unused
                        stack1 /= local13;
                        stack1 = +stack1;
                        { p = 525; continue; };
                    case 522:
                        stack1 = 0;
                        //IR: CONVERT_D removed, reason: arguments strictly number
                    case 525:
                        // 7 3::m_mass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_mass = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_frequencyHz
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgm_frequencyHz;
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 703; continue; };
                        stack0 = local10;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_length
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_length;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local14 = stack0;
                        stack0 = 2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_frequencyHz
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_frequencyHz;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local15 = stack0;
                        stack0 = 2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_mass
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_mass;
                        stack0 *= stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_dampingRatio
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_dampingRatio;
                        stack0 *= stack1;
//                        stack1 = local15;// JIT: redundant assigment, value unused
                        stack0 *= local15;
                        stack0 = +stack0;
                        local16 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_mass
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgm_mass;
//                        stack1 = local15;// JIT: redundant assigment, value unused
                        stack0 *= local15;
//                        stack1 = local15;// JIT: redundant assigment, value unused
                        stack0 *= local15;
                        stack0 = +stack0;
                        local17 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::dt
                        //Possible type:7 0::Number
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['dt'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgdt;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        stack2 = local16;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::dt
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['dt'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgdt;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack4 = local17;// JIT: redundant assigment, value unused
                        stack3 *= local17;
                        stack2 += stack3;
                        stack1 *= stack2;
                        // 7 3::m_gamma
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_gamma = (+stack1);
                        stack0 = this;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_gamma
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_gamma;
                        stack2 = 0;
                        if (0 == stack1) { p = 638; continue; };
                        stack1 = 1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_gamma
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_gamma;
                        stack1 /= stack2;
                        stack1 = +stack1;
                        { p = 641; continue; };
                    case 638:
                        stack1 = 0;
                        //IR: CONVERT_D removed, reason: arguments strictly number
                    case 641:
                        // 7 3::m_gamma
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_gamma = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = local14;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::dt
                        //Possible type:7 0::Number
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['dt'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgdt;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[20]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = local17;// JIT: redundant assigment, value unused
                        stack1 *= local17;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_gamma
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_gamma;
                        stack1 *= stack2;
                        // 7 3::m_bias
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_bias = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = local13;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_gamma
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_gamma;
                        stack1 += stack2;
                        // 7 3::m_mass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_mass = (+stack1);
                        stack0 = this;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_mass
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_mass;
                        stack2 = 0;
                        if (0 == stack1) { p = 697; continue; };
                        stack1 = 1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_mass
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_mass;
                        stack1 /= stack2;
                        stack1 = +stack1;
                        { p = 700; continue; };
                    case 697:
                        stack1 = 0;
                        //IR: CONVERT_D removed, reason: arguments strictly number
                    case 700:
                        // 7 3::m_mass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_mass = (+stack1);
                    case 703:
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::warmStarting
                        //Possible type:7 0::Number
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['warmStarting'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgwarmStarting;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        if (!stack0) { p = 914; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_impulse
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_impulse;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::dtRatio
                        //Possible type:7 0::Number
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['dtRatio'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$BgdtRatio;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 *= stack2;
                        // 7 3::m_impulse
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_impulse = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_impulse
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgm_impulse;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_u;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local18 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_impulse
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgm_impulse;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_u
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_u;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local19 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        //Possible type:7 0::Number
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_linearVelocity'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_linearVelocity;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_linearVelocity'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_linearVelocity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['m_invMass'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgm_invMass;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = local18;// JIT: redundant assigment, value unused
                        stack2 *= local18;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_linearVelocity'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_linearVelocity;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_linearVelocity'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_linearVelocity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['m_invMass'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgm_invMass;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = local19;// JIT: redundant assigment, value unused
                        stack2 *= local19;
                        stack1 -= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_angularVelocity'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_angularVelocity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[24]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['m_invI'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgm_invI;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack3 = local6;
//                        stack4 = local19;// JIT: redundant assigment, value unused
                        stack3 *= local19;
                        stack4 = local7;
//                        stack5 = local18;// JIT: redundant assigment, value unused
                        stack4 *= local18;
                        stack3 -= stack4;
                        stack2 *= stack3;
                        stack1 -= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.m_angularVelocity = stack1;
                        } else {
                            context.setproperty($names[24], stack1, local4);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_linearVelocity'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_linearVelocity;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_linearVelocity'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_linearVelocity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack2 = local5['m_invMass'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack2 = temp.$Bgm_invMass;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = local18;// JIT: redundant assigment, value unused
                        stack2 *= local18;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_linearVelocity'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_linearVelocity;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_linearVelocity'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_linearVelocity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack2 = local5['m_invMass'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack2 = temp.$Bgm_invMass;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = local19;// JIT: redundant assigment, value unused
                        stack2 *= local19;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_angularVelocity'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_angularVelocity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[24]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack2 = local5['m_invI'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack2 = temp.$Bgm_invI;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack3 = local8;
//                        stack4 = local19;// JIT: redundant assigment, value unused
                        stack3 *= local19;
                        stack4 = local9;
//                        stack5 = local18;// JIT: redundant assigment, value unused
                        stack4 *= local18;
                        stack3 -= stack4;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.m_angularVelocity = stack1;
                        } else {
                            context.setproperty($names[24], stack1, local5);
                        }
                        //JIT: Emit inline return
                        return;
                    case 914:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 3::m_impulse
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_impulse = 0;
                    case 920:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/m_InitVelocityConstraints.js
})