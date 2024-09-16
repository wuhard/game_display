(function anonymous(context
) {
/*
	Index: 316
	Path:  Box2D/Dynamics/b2Body::m_CreateFixture
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2Fixture
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_CreateFixture(local1 /* b2FixtureDef */) {
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
                        local3 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack0 = this.$Bgm_world;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsLocked();
                        } else {
                            // 7 0::IsLocked
                            {
                                let t = stack0;
                                const m = t.$BgIsLocked || (t = sec.box(stack0), t.$BgIsLocked);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsLocked ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        stack1 = true;
                        if (true != stack0) { p = 21; continue; };
                        stack0 = null;
                        return null;
                    case 21:
                        // 7 0:Box2D.Dynamics::b2Fixture
                        stack0 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:b2Fixture/Object
                        stack0 = context.constructFast(stack0, [], $names[1]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Transform  */ 
                        stack2 = this.$Bgm_xf;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
                        stack3 = local1;
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.Create(this, stack2, local1);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Create
                            {
                                let t = local2;
                                const m = t.$BgCreate || (t = sec.box(local2), t.$BgCreate);
                                if( typeof m === "function" ) { 
                                    m.call(t, this, stack2, local1);
                                } else { 
                                   local2.axCallProperty($names[2], [this, stack2, local1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
                        stack0 = this.$Bgm_flags;
                        // 7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$Bge_activeFlag;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 75; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:7 0::uint
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
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_broadPhase'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_broadPhase;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_CreateFixture] Coerce Type not found:', "IBroadPhase")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        //Possible type:7 0:Box2D.Common.Math::b2Transform
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Transform  */ 
                        stack2 = this.$Bgm_xf;
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.CreateProxy(local3, stack2);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::CreateProxy
                            {
                                let t = local2;
                                const m = t.$BgCreateProxy || (t = sec.box(local2), t.$BgCreateProxy);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3, stack2);
                                } else { 
                                   local2.axCallProperty($names[7], [local3, stack2], false);
                                }
                            }
                        }
                    case 75:
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        //Possible type:7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack1 = this.$Bgm_fixtureList;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_next = stack1;
                        } else {
                            context.setproperty($names[8], stack1, local2);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        this.$Bgm_fixtureList = local2;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local4 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_fixtureCount;
                        stack0 = (stack0 | 0) + 1;
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.m_fixtureCount = local5;
                        } else {
                            context.setproperty($names[9], local5, local4);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_body = this;
                        } else {
                            context.setproperty($names[10], this, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_density
                        //Possible type:7 0::int
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_density'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_density;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 129; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgResetMassData();
                    case 129:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack0 = this.$Bgm_world;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack1 = this.$Bgm_world;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0:Box2D.Dynamics::b2World
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_flags'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2World
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$Bgb2World;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::e_newFixture
                        //Possible type:7 0:Box2D.Dynamics::b2World
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_newFixture'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_newFixture;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_flags = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
                        stack0 = local2;
                        return local2;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_CreateFixture.js
})