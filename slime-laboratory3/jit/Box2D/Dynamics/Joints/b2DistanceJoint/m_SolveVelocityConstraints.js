(function anonymous(context
) {
/*
	Index: 1320
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::m_SolveVelocityConstraints
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SolveVelocityConstraints(local1 /* b2TimeStep */) {
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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local2 = null;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$Bgm_bodyA;
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_SolveVelocityConstraints] Coerce Type not found:', "b2Body")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$Bgm_bodyB;
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[0], true, false);
            _e || console.warn('[m_SolveVelocityConstraints] Coerce Type not found:', "b2Body")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local4 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
        //Possible type:7 0:http://www.box2d.org/ns/b2internal::m_bodyB
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack0 = local3['m_xf'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
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
            _e || console.warn('[m_SolveVelocityConstraints] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local2 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
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
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_sweep'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
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
        local5 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
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
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_sweep'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
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
        local6 = stack0;
//        stack0 = local2;// JIT: redundant assigment, value unused
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
//        stack1 = local5;// JIT: redundant assigment, value unused
        stack0 *= local5;
//        stack1 = local2;// JIT: redundant assigment, value unused
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
//        stack2 = local6;// JIT: redundant assigment, value unused
        stack1 *= local6;
        stack0 += stack1;
        stack0 = +stack0;
        local7 = stack0;
//        stack0 = local2;// JIT: redundant assigment, value unused
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
//        stack1 = local5;// JIT: redundant assigment, value unused
        stack0 *= local5;
//        stack1 = local2;// JIT: redundant assigment, value unused
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
//        stack2 = local6;// JIT: redundant assigment, value unused
        stack1 *= local6;
        stack0 += stack1;
        stack0 = +stack0;
        local6 = stack0;
        stack0 = local7;
        stack0 = +local7;
        local5 = stack0;
//        stack0 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
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
            _e || console.warn('[m_SolveVelocityConstraints] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local2 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
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
//        stack1 = local4;// JIT: redundant assigment, value unused
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
        local8 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
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
//        stack1 = local4;// JIT: redundant assigment, value unused
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
        local9 = stack0;
//        stack0 = local2;// JIT: redundant assigment, value unused
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
//        stack1 = local8;// JIT: redundant assigment, value unused
        stack0 *= local8;
//        stack1 = local2;// JIT: redundant assigment, value unused
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
//        stack2 = local9;// JIT: redundant assigment, value unused
        stack1 *= local9;
        stack0 += stack1;
        stack0 = +stack0;
        local7 = stack0;
//        stack0 = local2;// JIT: redundant assigment, value unused
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
//        stack1 = local8;// JIT: redundant assigment, value unused
        stack0 *= local8;
//        stack1 = local2;// JIT: redundant assigment, value unused
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
//        stack2 = local9;// JIT: redundant assigment, value unused
        stack1 *= local9;
        stack0 += stack1;
        stack0 = +stack0;
        local9 = stack0;
        stack0 = local7;
        stack0 = +local7;
        local8 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack0 = local3['m_linearVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
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
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_angularVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgm_angularVelocity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[11]);
            }
        }
        stack1 = -stack1;
//        stack2 = local6;// JIT: redundant assigment, value unused
        stack1 *= local6;
        stack0 += stack1;
        stack0 = +stack0;
        local10 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack0 = local3['m_linearVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
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
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_angularVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgm_angularVelocity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[11]);
            }
        }
//        stack2 = local5;// JIT: redundant assigment, value unused
        stack1 *= local5;
        stack0 += stack1;
        stack0 = +stack0;
        local11 = stack0;
//        stack0 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack0 = local4['m_linearVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
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
//        stack1 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack1 = local4['m_angularVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack1 = temp.$Bgm_angularVelocity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[11]);
            }
        }
        stack1 = -stack1;
//        stack2 = local9;// JIT: redundant assigment, value unused
        stack1 *= local9;
        stack0 += stack1;
        stack0 = +stack0;
        local12 = stack0;
//        stack0 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack0 = local4['m_linearVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
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
//        stack1 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack1 = local4['m_angularVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack1 = temp.$Bgm_angularVelocity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[11]);
            }
        }
//        stack2 = local8;// JIT: redundant assigment, value unused
        stack1 *= local8;
        stack0 += stack1;
        stack0 = +stack0;
        local13 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::m_u
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgm_u;
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
        stack1 = local12;
//        stack2 = local10;// JIT: redundant assigment, value unused
        stack1 -= local10;
        stack0 *= stack1;
//        stack1 = this;// JIT: redundant assigment, value unused
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
        stack2 = local13;
//        stack3 = local11;// JIT: redundant assigment, value unused
        stack2 -= local11;
        stack1 *= stack2;
        stack0 += stack1;
        stack0 = +stack0;
        local14 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::m_mass
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack0 = this.$Bgm_mass;
        stack0 = -stack0;
        stack1 = local14;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 3::m_bias
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgm_bias;
        stack1 += stack2;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 3::m_gamma
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgm_gamma;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 3::m_impulse
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$Bgm_impulse;
        stack2 *= stack3;
        stack1 += stack2;
        stack0 *= stack1;
        stack0 = +stack0;
        local15 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::m_impulse
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgm_impulse;
//        stack2 = local15;// JIT: redundant assigment, value unused
        stack1 += local15;
        // 7 3::m_impulse
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_impulse = (+stack1);
        stack0 = local15;
//        stack1 = this;// JIT: redundant assigment, value unused
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
        local16 = stack0;
        stack0 = local15;
//        stack1 = this;// JIT: redundant assigment, value unused
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
        local17 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        //Possible type:7 0::Number
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack0 = local3['m_linearVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_linearVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgm_linearVelocity;
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
//        stack2 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
        //Possible type:7 0::Number
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack2 = local3['m_invMass'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack2 = temp.$Bgm_invMass;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[12]);
            }
        }
//        stack3 = local16;// JIT: redundant assigment, value unused
        stack2 *= local16;
        stack1 -= stack2;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
//        stack0 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack0 = local3['m_linearVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_linearVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgm_linearVelocity;
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
//        stack2 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack2 = local3['m_invMass'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack2 = temp.$Bgm_invMass;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[12]);
            }
        }
//        stack3 = local17;// JIT: redundant assigment, value unused
        stack2 *= local17;
        stack1 -= stack2;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[7], stack1, stack0);
        }
//        stack0 = local3;// JIT: redundant assigment, value unused
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['m_angularVelocity'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgm_angularVelocity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[11]);
            }
        }
//        stack2 = local3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack2 = local3['m_invI'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack2 = temp.$Bgm_invI;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[13]);
            }
        }
        stack3 = local5;
//        stack4 = local17;// JIT: redundant assigment, value unused
        stack3 *= local17;
        stack4 = local6;
//        stack5 = local16;// JIT: redundant assigment, value unused
        stack4 *= local16;
        stack3 -= stack4;
        stack2 *= stack3;
        stack1 -= stack2;
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.m_angularVelocity = stack1;
        } else {
            context.setproperty($names[11], stack1, local3);
        }
//        stack0 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack0 = local4['m_linearVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
//        stack1 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack1 = local4['m_linearVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack1 = temp.$Bgm_linearVelocity;
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
//        stack2 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack2 = local4['m_invMass'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack2 = temp.$Bgm_invMass;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[12]);
            }
        }
//        stack3 = local16;// JIT: redundant assigment, value unused
        stack2 *= local16;
        stack1 += stack2;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
//        stack0 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack0 = local4['m_linearVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack0 = temp.$Bgm_linearVelocity;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
//        stack1 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack1 = local4['m_linearVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack1 = temp.$Bgm_linearVelocity;
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
//        stack2 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack2 = local4['m_invMass'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack2 = temp.$Bgm_invMass;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[12]);
            }
        }
//        stack3 = local17;// JIT: redundant assigment, value unused
        stack2 *= local17;
        stack1 += stack2;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[7], stack1, stack0);
        }
//        stack0 = local4;// JIT: redundant assigment, value unused
//        stack1 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack1 = local4['m_angularVelocity'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack1 = temp.$Bgm_angularVelocity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[11]);
            }
        }
//        stack2 = local4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack2 = local4['m_invI'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack2 = temp.$Bgm_invI;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[13]);
            }
        }
        stack3 = local8;
//        stack4 = local17;// JIT: redundant assigment, value unused
        stack3 *= local17;
        stack4 = local9;
//        stack5 = local16;// JIT: redundant assigment, value unused
        stack4 *= local16;
        stack3 -= stack4;
        stack2 *= stack3;
        stack1 += stack2;
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
            local4.m_angularVelocity = stack1;
        } else {
            context.setproperty($names[11], stack1, local4);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/m_SolveVelocityConstraints.js
})