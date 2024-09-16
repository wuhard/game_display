(function anonymous(context
) {
/*
	Index: 147
	Path:  Box2D/Dynamics/b2World::m_Solve
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Solve(local1 /* b2TimeStep */) {
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
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local11 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local14 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_controllerList
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
                        stack0 = this.$Bgm_controllerList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Controller")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 54; continue; };
                    case 40:
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.Step(local1);
                        } else {
                            // 7 0::Step
                            {
                                let t = local3;
                                const m = t.$BgStep || (t = sec.box(local3), t.$BgStep);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1);
                                } else { 
                                   local3.axCallProperty($names[1], [local1], false);
                                }
                            }
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Controllers::b2Controller
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_next'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Controller")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 54:
                        stack0 = local3;
                        if (local3) { p = 40; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_island
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Island  */ 
                        stack0 = this.$Bgm_island;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Island")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local4 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_bodyCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_bodyCount;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgm_contactCount;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$Bgm_jointCount;
//                        stack4 = null;// JIT: redundant assigment, value unused
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack5 = this.$Bgm_contactManager;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactListener
                        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['m_contactListener'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgm_contactListener;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_contactSolver
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Contacts::b2ContactSolver  */ 
                        stack6 = this.$Bgm_contactSolver;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Initialize(stack1, stack2, stack3, null, stack5, stack6);
                        } else {
                            // 7 0::Initialize
                            {
                                let t = stack0;
                                const m = t.$BgInitialize || (t = sec.box(stack0), t.$BgInitialize);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, null, stack5, stack6);
                                } else { 
                                   stack0.axCallProperty($names[5], [stack1, stack2, stack3, null, stack5, stack6], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 0:Box2D.Dynamics::b2Island
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 131; continue; };
                    case 108:
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0::int
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_flags'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2Body
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
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 131:
                        stack0 = local2;
                        if (local2) { p = 108; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Contacts::b2Contact  */ 
                        stack0 = this.$Bgm_contactList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[9], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        { p = 175; continue; };
                    case 148:
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_flags'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[9]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_next'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[9], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                    case 175:
                        stack0 = local5;
                        if (local5) { p = 148; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        stack0 = this.$Bgm_jointList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                        { p = 209; continue; };
                    case 193:
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.m_islandFlag = false;
                        } else {
                            context.setproperty($names[11], false, local6);
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack0 = local6['m_next'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                    case 209:
                        stack0 = local6;
                        if (local6) { p = 193; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_bodyCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_bodyCount;
                        stack0 |= 0;
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::s_stack
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Dynamics::b2Body>  */ 
                        stack0 = this.$Bgs_stack;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[12], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Dynamics::b2Body>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
                        { p = 851; continue; };
                    case 243:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_flags'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 263; continue; };
                        { p = 842; continue; };
                    case 263:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                           stack0 = local9.IsAwake();
                        } else {
                            // 7 0::IsAwake
                            {
                                let t = local9;
                                const m = t.$BgIsAwake || (t = sec.box(local9), t.$BgIsAwake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsAwake ();
                                } else { 
                                    stack0 = local9.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                        stack1 = stack0;
                        if (stack1) { p = 285; continue; };
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                           stack0 = local9.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = local9;
                                const m = t.$BgIsActive || (t = sec.box(local9), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = local9.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 285:
                        if (!stack0) { p = 293; continue; };
                        { p = 842; continue; };
                    case 293:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                           stack0 = local9.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local9;
                                const m = t.$BgGetType || (t = sec.box(local9), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local9.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (stack1 != stack0) { p = 312; continue; };
                        { p = 842; continue; };
                    case 312:
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.Clear();
                        } else {
                            // 7 0::Clear
                            {
                                let t = local4;
                                const m = t.$BgClear || (t = sec.box(local4), t.$BgClear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local4.axCallProperty($names[17], [], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
                        stack0 = local8;
                        stack1 = local10;
                        stack2 = local10;
                        stack2 = (stack2 | 0) + 1;
                        local10 = stack2;
                        stack2 = stack1;
                        local15 = stack2;
                        stack2 = local9;
                        context.setproperty(context.runtimename($names[18], stack1), local9, local8);
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['m_flags'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])){
                            local9.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, local9);
                        }
                        { p = 753; continue; };
                    case 358:
                        stack0 = local8;
                        stack1 = local10;
                        stack1 = (stack1 | 0) - 1;
                        stack2 = stack1;
                        stack2 |= 0;
                        local10 = stack2;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[18], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.AddBody(local2);
                        } else {
                            // 7 0::AddBody
                            {
                                let t = local4;
                                const m = t.$BgAddBody || (t = sec.box(local4), t.$BgAddBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   local4.axCallProperty($names[19], [local2], false);
                                }
                            }
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.IsAwake();
                        } else {
                            // 7 0::IsAwake
                            {
                                let t = local2;
                                const m = t.$BgIsAwake || (t = sec.box(local2), t.$BgIsAwake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsAwake ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 397; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.SetAwake(true);
                        } else {
                            // 7 0::SetAwake
                            {
                                let t = local2;
                                const m = t.$BgSetAwake || (t = sec.box(local2), t.$BgSetAwake);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   local2.axCallProperty($names[20], [true], false);
                                }
                            }
                        }
                    case 397:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local2;
                                const m = t.$BgGetType || (t = sec.box(local2), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (stack1 != stack0) { p = 415; continue; };
                        { p = 753; continue; };
                    case 415:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_contactList'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_contactList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[22], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local13 = stack0;
                        { p = 606; continue; };
                    case 427:
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_flags'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$Bgb2Contact;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 450; continue; };
                        { p = 597; continue; };
                    case 450:
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsSensor();
                        } else {
                            // 7 0::IsSensor
                            {
                                let t = stack0;
                                const m = t.$BgIsSensor || (t = sec.box(stack0), t.$BgIsSensor);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsSensor ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[24], [], false);
                                }
                            }
                        }
                        stack1 = true;
                        stack0 = stack0 == true;
                        stack1 = stack0;
                        if (stack1) { p = 478; continue; };
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsEnabled();
                        } else {
                            // 7 0::IsEnabled
                            {
                                let t = stack0;
                                const m = t.$BgIsEnabled || (t = sec.box(stack0), t.$BgIsEnabled);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsEnabled ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[25], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 478:
                        stack1 = stack0;
                        if (stack1) { p = 495; continue; };
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsTouching();
                        } else {
                            // 7 0::IsTouching
                            {
                                let t = stack0;
                                const m = t.$BgIsTouching || (t = sec.box(stack0), t.$BgIsTouching);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsTouching ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 495:
                        if (!stack0) { p = 503; continue; };
                        { p = 597; continue; };
                    case 503:
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        //Possible type:undefined
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack1 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.AddContact(stack1);
                        } else {
                            // 7 0::AddContact
                            {
                                let t = local4;
                                const m = t.$BgAddContact || (t = sec.box(local4), t.$BgAddContact);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local4.axCallProperty($names[27], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack1 = local13['contact'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_flags'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[9]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::other
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['other'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgother;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[28]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local12 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_flags'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 563; continue; };
                        { p = 597; continue; };
                    case 563:
                        stack0 = local8;
                        stack1 = local10;
                        stack2 = local10;
                        stack2 = (stack2 | 0) + 1;
                        local10 = stack2;
                        stack2 = stack1;
                        local16 = stack2;
                        stack2 = local12;
                        context.setproperty(context.runtimename($names[18], stack1), local12, local8);
//                        stack0 = local12;// JIT: redundant assigment, value unused
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack1 = local12['m_flags'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])){
                            local12.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, local12);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                    case 597:
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])) {
                            stack0 = local13['next'];
                        } else {
                            temp = local13[AX_CLASS_SYMBOL] ? local13 : sec.box(local13);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[22], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local13 = stack0;
                    case 606:
                        stack0 = local13;
                        if (local13) { p = 427; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_jointList'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[30]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[31], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local14 = stack0;
                        { p = 747; continue; };
                    case 624:
//                        stack0 = local14;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])) {
                            stack0 = local14['joint'];
                        } else {
                            temp = local14[AX_CLASS_SYMBOL] ? local14 : sec.box(local14);
                            stack0 = temp.$Bgjoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[32]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_islandFlag'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_islandFlag;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 = true;
                        if (true != stack0) { p = 642; continue; };
                        { p = 738; continue; };
                    case 642:
//                        stack0 = local14;// JIT: redundant assigment, value unused
                        // 7 0::other
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])) {
                            stack0 = local14['other'];
                        } else {
                            temp = local14[AX_CLASS_SYMBOL] ? local14 : sec.box(local14);
                            stack0 = temp.$Bgother;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[28]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local12 = stack1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = stack0;
                                const m = t.$BgIsActive || (t = sec.box(stack0), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 665; continue; };
                        { p = 738; continue; };
                    case 665:
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local14;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        //Possible type:undefined
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])) {
                            stack1 = local14['joint'];
                        } else {
                            temp = local14[AX_CLASS_SYMBOL] ? local14 : sec.box(local14);
                            stack1 = temp.$Bgjoint;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[32]);
                            }
                        }
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.AddJoint(stack1);
                        } else {
                            // 7 0::AddJoint
                            {
                                let t = local4;
                                const m = t.$BgAddJoint || (t = sec.box(local4), t.$BgAddJoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local4.axCallProperty($names[33], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local14;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])) {
                            stack0 = local14['joint'];
                        } else {
                            temp = local14[AX_CLASS_SYMBOL] ? local14 : sec.box(local14);
                            stack0 = temp.$Bgjoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[32]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_islandFlag = true;
                        } else {
                            context.setproperty($names[11], true, stack0);
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack0 = local12['m_flags'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 704; continue; };
                        { p = 738; continue; };
                    case 704:
                        stack0 = local8;
                        stack1 = local10;
                        stack2 = local10;
                        stack2 = (stack2 | 0) + 1;
                        local10 = stack2;
                        stack2 = stack1;
                        local16 = stack2;
                        stack2 = local12;
                        context.setproperty(context.runtimename($names[18], stack1), local12, local8);
//                        stack0 = local12;// JIT: redundant assigment, value unused
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack1 = local12['m_flags'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])){
                            local12.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, local12);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                    case 738:
//                        stack0 = local14;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])) {
                            stack0 = local14['next'];
                        } else {
                            temp = local14[AX_CLASS_SYMBOL] ? local14 : sec.box(local14);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[31], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local14 = stack0;
                    case 747:
                        stack0 = local14;
                        if (local14) { p = 624; continue; };
                    case 753:
                        stack0 = local10;
                        stack1 = 0;
                        if (0 < local10) { p = 358; continue; };
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_gravity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgm_gravity;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_allowSleep
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack3 = this.$Bgm_allowSleep;
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.Solve(local1, stack2, stack3);
                        } else {
                            // 7 0::Solve
                            {
                                let t = local4;
                                const m = t.$BgSolve || (t = sec.box(local4), t.$BgSolve);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1, stack2, stack3);
                                } else { 
                                   local4.axCallProperty($names[34], [local1, stack2, stack3], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local11 = 0;
                        { p = 829; continue; };
                    case 784:
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodies
                        //Possible type:undefined
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_bodies'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_bodies;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[35]);
                            }
                        }
                        stack1 = local11;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = local11;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[18], local11);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local2;
                                const m = t.$BgGetType || (t = sec.box(local2), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (stack1 != stack0) { p = 827; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_flags'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_flags = stack1;
                        } else {
                            context.setproperty($names[7], stack1, local2);
                        }
                    case 827:
                        local11 = (local11 | 0) + 1;
                    case 829:
                        stack0 = local11;
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyCount
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_bodyCount'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_bodyCount;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[36]);
                            }
                        }
                        if (stack1 > local11) { p = 784; continue; };
                        //IR: KILL removed, reason: prevent optimisation
                    case 842:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_next'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
                    case 851:
                        stack0 = local9;
                        if (local9) { p = 243; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local11 = 0;
                        { p = 891; continue; };
                    case 865:
                        stack0 = local8;
                        stack1 = local11;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = local11;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[18], local11);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 881; continue; };
                        { p = 902; continue; };
                    case 881:
                        stack0 = local8;
                        stack1 = local11;
                        stack2 = null;
                        context.setproperty(context.runtimename($names[18], local11), null, local8);
                        local11 = (local11 | 0) + 1;
                    case 891:
                        stack0 = local11;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::length
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack1 = local8['length'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[37]);
                            }
                        }
                        if (stack1 > local11) { p = 865; continue; };
                    case 902:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 972; continue; };
                    case 913:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.IsAwake();
                        } else {
                            // 7 0::IsAwake
                            {
                                let t = local2;
                                const m = t.$BgIsAwake || (t = sec.box(local2), t.$BgIsAwake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsAwake ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                        stack1 = stack0;
                        if (stack1) { p = 934; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = local2;
                                const m = t.$BgIsActive || (t = sec.box(local2), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 934:
                        if (!stack0) { p = 942; continue; };
                        { p = 965; continue; };
                    case 942:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local2;
                                const m = t.$BgGetType || (t = sec.box(local2), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (stack1 != stack0) { p = 960; continue; };
                        { p = 965; continue; };
                    case 960:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.SynchronizeFixtures();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::SynchronizeFixtures
                            {
                                let t = local2;
                                const m = t.$BgSynchronizeFixtures || (t = sec.box(local2), t.$BgSynchronizeFixtures);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local2.axCallProperty($names[38], [], false);
                                }
                            }
                        }
                    case 965:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2Body
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
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_Solve] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 972:
                        stack0 = local2;
                        if (local2) { p = 913; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
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
                                   stack0.axCallProperty($names[39], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_Solve.js
})