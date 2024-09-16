(function anonymous(context
) {
/*
	Index: 342
	Path:  Box2D/Dynamics/b2Body::m_ResetMassData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_ResetMassData() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
                        local4 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_mass = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_invMass = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_I = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_invI = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:undefined
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
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
                                   stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_type;
                        // 7 0::b2_staticBody
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$Bgb2_staticBody;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        stack0 = stack0 == stack1;
                        stack1 = stack0;
                        if (stack1) { p = 64; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_type;
                        // 7 0::b2_kinematicBody
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$Bgb2_kinematicBody;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack0 = stack0 == stack1;
                    case 64:
                        if (!stack0) { p = 69; continue; };
                        return;
                    case 69:
                        // 7 0:Box2D.Common.Math::b2Vec2
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$Bgb2Vec2;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Make(0, 0);
                        } else {
                            // 7 0::Make
                            {
                                let t = stack0;
                                const m = t.$BgMake || (t = sec.box(stack0), t.$BgMake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgMake (0, 0);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[5], [0, 0], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_ResetMassData] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$Bgm_fixtureList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_ResetMassData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 197; continue; };
                    case 92:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_density
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_density'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_density;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = 0;
                        if (0 != stack0) { p = 107; continue; };
                        { p = 190; continue; };
                    case 107:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.GetMassData();
                        } else {
                            // 7 0::GetMassData
                            {
                                let t = local2;
                                const m = t.$BgGetMassData || (t = sec.box(local2), t.$BgGetMassData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetMassData ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[8], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[9], true, false);
                            _e || console.warn('[m_ResetMassData] Coerce Type not found:', "b2MassData")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_mass;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::mass
                        //Possible type:undefined
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['mass'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgmass;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_mass = (+stack1);
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0::Number
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::center
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['center'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgcenter;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        // 7 0::mass
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack3 = local4['mass'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack3 = temp.$Bgmass;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, local1);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::center
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['center'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgcenter;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[12]);
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
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        // 7 0::mass
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack3 = local4['mass'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack3 = temp.$Bgmass;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, local1);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_I;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::I
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['I'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$BgI;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_I = (+stack1);
                    case 190:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_next'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_ResetMassData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 197:
                        stack0 = local2;
                        if (local2) { p = 92; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgm_mass;
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 253; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_mass;
                        stack1 /= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_invMass = (+stack1);
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_invMass;
                        stack1 *= stack2;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, local1);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_invMass;
                        stack1 *= stack2;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, local1);
                        }
                        { p = 265; continue; };
                    case 253:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_mass = 1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invMass
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_invMass = 1;
                    case 265:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgm_I;
                        stack1 = 0;
                        stack0 = stack0 > 0;
                        stack1 = stack0;
                        if (!stack1) { p = 289; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack0 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_fixedRotationFlag
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack1 = temp.$Bge_fixedRotationFlag;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[16]);
                        }
                        stack0 &= stack1;
                        stack1 = 0;
                        stack0 = stack0 == 0;
                    case 289:
                        if (!stack0) { p = 368; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_I;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_mass;
//                        stack3 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack4 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack3 *= stack4;
//                        stack4 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack5 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack5 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack5 = temp.$Bgy;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack4 *= stack5;
                        stack3 += stack4;
                        stack2 *= stack3;
                        stack1 -= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_I = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_I;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_inertiaScale
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_inertiaScale;
                        stack1 *= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_I = (+stack1);
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack0 = temp.$Bgb2Settings;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[17]);
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_I;
                        stack2 = 0;
                        stack1 = stack1 > 0;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.b2Assert(stack1);
                        } else {
                            // 7 0::b2Assert
                            {
                                let t = stack0;
                                const m = t.$Bgb2Assert || (t = sec.box(stack0), t.$Bgb2Assert);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[18], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_I;
                        stack1 /= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_invI = (+stack1);
                        { p = 380; continue; };
                    case 368:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_I
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_I = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_invI
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_invI = 0;
                    case 380:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:7 0:Box2D.Common::b2Settings
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack0 = this.$Bgm_sweep;
                        // 7 0::c
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['c'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgc;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
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
                                    stack0 = stack0.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_ResetMassData] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetV(local1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = stack0;
                                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1);
                                } else { 
                                   stack0.axCallProperty($names[21], [local1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack0 = this.$Bgm_sweep;
                        // 7 0::c0
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['c0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgc0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[23], true, false);
                        stack1 = temp.$Bgb2Math;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[23]);
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Transform  */ 
                        stack2 = this.$Bgm_xf;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack3 = this.$Bgm_sweep;
                        // 7 0::localCenter
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['localCenter'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BglocalCenter;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.MulX(stack2, stack3);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack1;
                                const m = t.$BgMulX || (t = sec.box(stack1), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgMulX (stack2, stack3);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[24], [stack2, stack3], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetV(stack1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = stack0;
                                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[21], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack0 = this.$Bgm_sweep;
                        // 7 0::c
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['c'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgc;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:7 0:Box2D.Common.Math::b2Math
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
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetV(stack1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = stack0;
                                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[21], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_linearVelocity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_linearVelocity;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
                        //Possible type:7 0:Box2D.Common.Math::b2Transform
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_angularVelocity;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack3 = this.$Bgm_sweep;
                        // 7 0::c
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['c'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgc;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
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
                        stack3 -= stack4;
                        stack3 = -stack3;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_linearVelocity;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_linearVelocity;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgm_angularVelocity;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack3 = this.$Bgm_sweep;
                        // 7 0::c
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['c'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgc;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0::x
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack4 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack3 -= stack4;
                        stack3 = +stack3;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_ResetMassData.js
})