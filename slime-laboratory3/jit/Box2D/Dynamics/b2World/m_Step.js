(function anonymous(context
) {
/*
	Index: 128
	Path:  Box2D/Dynamics/b2World::m_Step
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Step(local1 /* Number */, local2 /* int */, local3 /* int */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force int coerce */
        local2 = (local2|0);
        /* Force int coerce */
        local3 = (local3|0);
        // local4 is assigned before read, skip init
        let local4 = undefined
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_flags;
                        // 7 0::e_newFixture
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bge_newFixture;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 35; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack0 = this.$Bgm_contactManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.FindNewContacts();
                        } else {
                            // 7 0::FindNewContacts
                            {
                                let t = stack0;
                                const m = t.$BgFindNewContacts || (t = sec.box(stack0), t.$BgFindNewContacts);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0::e_newFixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0::e_newFixture
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$Bge_newFixture;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgm_flags = (stack1|0);
                    case 35:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0::e_locked
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack2 = temp.$Bge_locked;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[2]);
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgm_flags = (stack1|0);
                        // 7 3::s_timestep2
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$Bgs_timestep2;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_Step] Coerce Type not found:', "b2TimeStep")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local4 = stack1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::dt
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.dt = local1;
                        } else {
                            context.setproperty($names[5], local1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::velocityIterations
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.velocityIterations = local2;
                        } else {
                            context.setproperty($names[6], local2, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::positionIterations
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.positionIterations = local3;
                        } else {
                            context.setproperty($names[7], local3, local4);
                        }
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
                        stack1 = 0;
                        if (!(0 < local1)) { p = 91; continue; };
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 /= local1;
                        // 7 0::inv_dt
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.inv_dt = stack1;
                        } else {
                            context.setproperty($names[8], stack1, local4);
                        }
                        { p = 98; continue; };
                    case 91:
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::inv_dt
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.inv_dt = 0;
                        } else {
                            context.setproperty($names[8], 0, local4);
                        }
                    case 98:
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_inv_dt0
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_inv_dt0;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 *= local1;
                        // 7 0::dtRatio
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.dtRatio = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 3::m_warmStarting
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$Bgm_warmStarting;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::warmStarting
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.warmStarting = stack1;
                        } else {
                            context.setproperty($names[11], stack1, local4);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        //Possible type:7 3::s_timestep2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack0 = this.$Bgm_contactManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Collide();
                        } else {
                            // 7 0::Collide
                            {
                                let t = stack0;
                                const m = t.$BgCollide || (t = sec.box(stack0), t.$BgCollide);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::dt
                        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['dt'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgdt;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 143; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSolve(local4);
                    case 143:
                        // 7 3::m_continuousPhysics
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack0 = temp.$Bgm_continuousPhysics;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[13]);
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 161; continue; };
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::dt
                        //Possible type:7 3::m_continuousPhysics
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['dt'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgdt;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = 0;
                        stack0 = stack0 > 0;
                    case 161:
                        if (!stack0) { p = 172; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSolveTOI(local4);
                    case 172:
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::dt
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['dt'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgdt;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 192; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::inv_dt
                        //Possible type:undefined
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['inv_dt'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bginv_dt;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 3::m_inv_dt0
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_inv_dt0 = (+stack1);
                    case 192:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_flags;
                        // 7 0::e_locked
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack2 = temp.$Bge_locked;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[2]);
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgm_flags = (stack1|0);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_Step.js
})