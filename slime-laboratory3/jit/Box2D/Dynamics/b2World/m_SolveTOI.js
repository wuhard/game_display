(function anonymous(context
) {
/*
	Index: 148
	Path:  Box2D/Dynamics/b2World::m_SolveTOI
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SolveTOI(local1 /* b2TimeStep */) {
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
        // local20 is assigned before read, skip init
        let local20 = undefined
        // local21 is assigned before read, skip init
        let local21 = undefined
        // local22 is assigned before read, skip init
        let local22 = undefined
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local8 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local11 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local13 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local14 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local15 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local16 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local17 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local18 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local19 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local20 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local21 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local22 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_island
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Island  */ 
                        stack0 = this.$Bgm_island;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Island")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local9 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_bodyCount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_bodyCount;
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$Bgb2Settings;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::b2_maxTOIContactsPerIsland
                        //Possible type:7 0:Box2D.Common::b2Settings
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['b2_maxTOIContactsPerIsland'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgb2_maxTOIContactsPerIsland;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$Bgb2Settings;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::b2_maxTOIJointsPerIsland
                        //Possible type:7 0:Box2D.Common::b2Settings
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['b2_maxTOIJointsPerIsland'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgb2_maxTOIJointsPerIsland;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
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
                        // 7 3::s_queue
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$Bgs_queue;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[7], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "Vector")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local10 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 3::s_queue
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        { p = 179; continue; };
                    case 147:
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
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_sweep'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::t0
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.t0 = 0;
                        } else {
                            context.setproperty($names[12], 0, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_next'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 179:
                        stack0 = local2;
                        if (local2) { p = 147; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Contacts::b2Contact  */ 
                        stack0 = this.$Bgm_contactList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        { p = 229; continue; };
                    case 196:
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:undefined
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack1 = local11['m_flags'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_toiFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_toiFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_toiFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack3 = temp.$Bgb2Contact;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['e_islandFlag'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bge_islandFlag;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 |= stack3;
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local11);
                        }
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['m_next'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                    case 229:
                        stack0 = local11;
                        if (local11) { p = 196; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        stack0 = this.$Bgm_jointList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[16], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                        { p = 263; continue; };
                    case 247:
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.m_islandFlag = false;
                        } else {
                            context.setproperty($names[17], false, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['m_next'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[16], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                    case 263:
                        stack0 = local8;
                        if (local8) { p = 247; continue; };
                        { p = 1839; continue; };
                    case 273:
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
                        stack0 = 1;
                        stack0 = +1;
                        local13 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Contacts::b2Contact  */ 
                        stack0 = this.$Bgm_contactList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        { p = 728; continue; };
                    case 296:
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local11, ((_a !== 'object' && _a !== 'function' ) || local11 == null || local11[AX_CLASS_SYMBOL]))) {
                           stack0 = local11.IsSensor();
                        } else {
                            // 7 0::IsSensor
                            {
                                let t = local11;
                                const m = t.$BgIsSensor || (t = sec.box(local11), t.$BgIsSensor);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsSensor ();
                                } else { 
                                    stack0 = local11.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        stack1 = true;
                        stack0 = stack0 == true;
                        stack1 = stack0;
                        if (stack1) { p = 319; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local11, ((_a !== 'object' && _a !== 'function' ) || local11 == null || local11[AX_CLASS_SYMBOL]))) {
                           stack0 = local11.IsEnabled();
                        } else {
                            // 7 0::IsEnabled
                            {
                                let t = local11;
                                const m = t.$BgIsEnabled || (t = sec.box(local11), t.$BgIsEnabled);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsEnabled ();
                                } else { 
                                    stack0 = local11.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 319:
                        stack1 = stack0;
                        if (stack1) { p = 333; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local11, ((_a !== 'object' && _a !== 'function' ) || local11 == null || local11[AX_CLASS_SYMBOL]))) {
                           stack0 = local11.IsContinuous();
                        } else {
                            // 7 0::IsContinuous
                            {
                                let t = local11;
                                const m = t.$BgIsContinuous || (t = sec.box(local11), t.$BgIsContinuous);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsContinuous ();
                                } else { 
                                    stack0 = local11.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 333:
                        if (!stack0) { p = 341; continue; };
                        { p = 719; continue; };
                    case 341:
                        stack0 = 1;
                        stack0 = +1;
                        local19 = stack0;
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:undefined
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['m_flags'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack1 = temp.$Bgb2Contact;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_toiFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_toiFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_toiFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 373; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_toi
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['m_toi'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgm_toi;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        stack0 = +stack0;
                        local19 = stack0;
                        { p = 685; continue; };
                    case 373:
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureA
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['m_fixtureA'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgm_fixtureA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[23], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureB
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['m_fixtureB'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgm_fixtureB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[23], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_body'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_body;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[25]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_body'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_body;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[25]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                           stack0 = local5.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local5;
                                const m = t.$BgGetType || (t = sec.box(local5), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local5.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        stack0 = stack0 == stack1;
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (stack1) { p = 434; continue; };
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                           stack0 = local5.IsAwake();
                        } else {
                            // 7 0::IsAwake
                            {
                                let t = local5;
                                const m = t.$BgIsAwake || (t = sec.box(local5), t.$BgIsAwake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsAwake ();
                                } else { 
                                    stack0 = local5.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 434:
                        stack1 = stack0;
                        if (!stack1) { p = 467; continue; };
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack0 = local6.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local6;
                                const m = t.$BgGetType || (t = sec.box(local6), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local6.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        stack0 = stack0 == stack1;
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (stack1) { p = 467; continue; };
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack0 = local6.IsAwake();
                        } else {
                            // 7 0::IsAwake
                            {
                                let t = local6;
                                const m = t.$BgIsAwake || (t = sec.box(local6), t.$BgIsAwake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsAwake ();
                                } else { 
                                    stack0 = local6.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 467:
                        if (!stack0) { p = 475; continue; };
                        { p = 719; continue; };
                    case 475:
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['t0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgt0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack0 = +stack0;
                        local20 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['t0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgt0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:undefined
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack1 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['t0'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgt0;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        if (!(stack1 > stack0)) { p = 532; continue; };
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack0 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['t0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgt0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack0 = +stack0;
                        local20 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = local20;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Advance(local20);
                        } else {
                            // 7 0::Advance
                            {
                                let t = stack0;
                                const m = t.$BgAdvance || (t = sec.box(stack0), t.$BgAdvance);
                                if( typeof m === "function" ) { 
                                    m.call(t, local20);
                                } else { 
                                   stack0.axCallProperty($names[29], [local20], false);
                                }
                            }
                        }
                        { p = 574; continue; };
                    case 532:
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack0 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['t0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgt0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
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
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['t0'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgt0;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        if (!(stack1 > stack0)) { p = 574; continue; };
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::t0
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['t0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgt0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack0 = +stack0;
                        local20 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack0 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = local20;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Advance(local20);
                        } else {
                            // 7 0::Advance
                            {
                                let t = stack0;
                                const m = t.$BgAdvance || (t = sec.box(stack0), t.$BgAdvance);
                                if( typeof m === "function" ) { 
                                    m.call(t, local20);
                                } else { 
                                   stack0.axCallProperty($names[29], [local20], false);
                                }
                            }
                        }
                    case 574:
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack2 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack2 = temp.$Bgm_sweep;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!(_a = typeof local11, ((_a !== 'object' && _a !== 'function' ) || local11 == null || local11[AX_CLASS_SYMBOL]))) {
                           stack0 = local11.ComputeTOI(stack1, stack2);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::ComputeTOI
                            {
                                let t = local11;
                                const m = t.$BgComputeTOI || (t = sec.box(local11), t.$BgComputeTOI);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgComputeTOI (stack1, stack2);
                                } else { 
                                    stack0 = local11.axCallProperty($names[30], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local19 = stack0;
                        // 7 0:Box2D.Common::b2Settings
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$Bgb2Settings;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        stack1 = 0;
                        stack2 = local19;
                        stack1 = 0 <= local19;
                        stack2 = stack1;
                        if (!stack2) { p = 612; continue; };
                        stack1 = local19;
                        stack2 = 1;
                        stack1 = local19 <= 1;
                    case 612:
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
                                   stack0.axCallProperty($names[31], [stack1], false);
                                }
                            }
                        }
                        stack0 = local19;
                        stack1 = 0;
                        stack0 = local19 > 0;
                        stack1 = stack0;
                        if (!stack1) { p = 632; continue; };
                        stack0 = local19;
                        stack1 = 1;
                        stack0 = local19 < 1;
                    case 632:
                        if (!stack0) { p = 662; continue; };
                        stack0 = 1;
//                        stack1 = local19;// JIT: redundant assigment, value unused
                        stack0 -= local19;
//                        stack1 = local20;// JIT: redundant assigment, value unused
                        stack0 *= local20;
//                        stack1 = local19;// JIT: redundant assigment, value unused
                        stack0 += local19;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local19 = stack1;
                        stack1 = 1;
                        if (!(1 < stack0)) { p = 662; continue; };
                        stack0 = 1;
                        stack0 = +1;
                        local19 = stack0;
                    case 662:
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local19;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_toi
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.m_toi = local19;
                        } else {
                            context.setproperty($names[21], local19, local11);
                        }
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:undefined
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack1 = local11['m_flags'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_toiFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_toiFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_toiFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local11);
                        }
                    case 685:
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[32], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[32]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MIN_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMIN_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[33]);
                            }
                        }
                        stack1 = local19;
                        stack0 = stack0 < local19;
                        stack1 = stack0;
                        if (!stack1) { p = 704; continue; };
                        stack0 = local19;
                        stack1 = local13;
                        stack0 = local19 < local13;
                    case 704:
                        if (!stack0) { p = 719; continue; };
                        stack0 = local11;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(local11) : local11;
                        }
                        local12 = stack0;
                        stack0 = local19;
                        stack0 = +local19;
                        local13 = stack0;
                    case 719:
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['m_next'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                    case 728:
                        stack0 = local11;
                        if (local11) { p = 296; continue; };
                        stack0 = local12;
                        stack1 = null;
                        stack0 = local12 == null;
                        stack1 = stack0;
                        if (stack1) { p = 758; continue; };
                        stack0 = 1;
                        stack1 = 100;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[32], true, false);
                        stack2 = temp.$BgNumber;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[32]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['MIN_VALUE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgMIN_VALUE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[33]);
                            }
                        }
                        stack1 *= stack2;
                        stack0 -= stack1;
                        stack1 = local13;
                        stack0 = stack0 < local13;
                    case 758:
                        if (!stack0) { p = 766; continue; };
                        //JIT: Emit inline return
                        return;
                    case 766:
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureA
                        //Possible type:undefined
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack0 = local12['m_fixtureA'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack0 = temp.$Bgm_fixtureA;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[23], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureB
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack0 = local12['m_fixtureB'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack0 = temp.$Bgm_fixtureB;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[23], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_body'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_body;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[25]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_body'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_body;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[25]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                        // 7 3::s_backupA
                        temp = scope0.findScopeProperty($names[34], true, false);
                        stack0 = temp.$Bgs_backupA;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[34]);
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:undefined
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
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
                                   stack0.axCallProperty($names[35], [stack1], false);
                                }
                            }
                        }
                        // 7 3::s_backupB
                        temp = scope0.findScopeProperty($names[36], true, false);
                        stack0 = temp.$Bgs_backupB;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[36]);
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack1 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack1 = temp.$Bgm_sweep;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
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
                                   stack0.axCallProperty($names[35], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.Advance(local13);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Advance
                            {
                                let t = local5;
                                const m = t.$BgAdvance || (t = sec.box(local5), t.$BgAdvance);
                                if( typeof m === "function" ) { 
                                    m.call(t, local13);
                                } else { 
                                   local5.axCallProperty($names[37], [local13], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                            local6.Advance(local13);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Advance
                            {
                                let t = local6;
                                const m = t.$BgAdvance || (t = sec.box(local6), t.$BgAdvance);
                                if( typeof m === "function" ) { 
                                    m.call(t, local13);
                                } else { 
                                   local6.axCallProperty($names[37], [local13], false);
                                }
                            }
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack1 = this.$Bgm_contactManager;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactListener
                        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_contactListener'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_contactListener;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                            local12.Update(stack1);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Update
                            {
                                let t = local12;
                                const m = t.$BgUpdate || (t = sec.box(local12), t.$BgUpdate);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local12.axCallProperty($names[38], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack1 = local12['m_flags'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_toiFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_toiFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_toiFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])){
                            local12.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local12);
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                           stack0 = local12.IsSensor();
                        } else {
                            // 7 0::IsSensor
                            {
                                let t = local12;
                                const m = t.$BgIsSensor || (t = sec.box(local12), t.$BgIsSensor);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsSensor ();
                                } else { 
                                    stack0 = local12.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        stack1 = true;
                        stack0 = stack0 == true;
                        stack1 = stack0;
                        if (stack1) { p = 892; continue; };
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                           stack0 = local12.IsEnabled();
                        } else {
                            // 7 0::IsEnabled
                            {
                                let t = local12;
                                const m = t.$BgIsEnabled || (t = sec.box(local12), t.$BgIsEnabled);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsEnabled ();
                                } else { 
                                    stack0 = local12.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 892:
                        if (!stack0) { p = 936; continue; };
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        //Possible type:7 3::s_backupB
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_sweep'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 3::s_backupA
                        temp = scope0.findScopeProperty($names[34], true, false);
                        stack1 = temp.$Bgs_backupA;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[34]);
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
                                   stack0.axCallProperty($names[35], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack0 = local6['m_sweep'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack0 = temp.$Bgm_sweep;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 3::s_backupB
                        temp = scope0.findScopeProperty($names[36], true, false);
                        stack1 = temp.$Bgs_backupB;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[36]);
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
                                   stack0.axCallProperty($names[35], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.SynchronizeTransform();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::SynchronizeTransform
                            {
                                let t = local5;
                                const m = t.$BgSynchronizeTransform || (t = sec.box(local5), t.$BgSynchronizeTransform);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local5.axCallProperty($names[39], [], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                            local6.SynchronizeTransform();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::SynchronizeTransform
                            {
                                let t = local6;
                                const m = t.$BgSynchronizeTransform || (t = sec.box(local6), t.$BgSynchronizeTransform);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local6.axCallProperty($names[39], [], false);
                                }
                            }
                        }
                        { p = 1839; continue; };
                    case 936:
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                           stack0 = local12.IsTouching();
                        } else {
                            // 7 0::IsTouching
                            {
                                let t = local12;
                                const m = t.$BgIsTouching || (t = sec.box(local12), t.$BgIsTouching);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsTouching ();
                                } else { 
                                    stack0 = local12.axCallProperty($names[40], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 951; continue; };
                        { p = 1839; continue; };
                    case 951:
                        stack0 = local5;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(local5) : local5;
                        }
                        stack1 = stack0;
                        local14 = stack1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = stack0;
                                const m = t.$BgGetType || (t = sec.box(stack0), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        if (stack1 == stack0) { p = 977; continue; };
                        stack0 = local6;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(local6) : local6;
                        }
                        local14 = stack0;
                    case 977:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.Clear();
                        } else {
                            // 7 0::Clear
                            {
                                let t = local9;
                                const m = t.$BgClear || (t = sec.box(local9), t.$BgClear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local9.axCallProperty($names[41], [], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local15 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local16 = 0;
                        stack0 = local10;
                        stack1 = local15;
                        stack2 = local16;
                        stack3 = local16;
                        stack3 = (stack3 | 0) + 1;
                        local16 = stack3;
                        stack1 += stack2;
                        stack2 = local14;
                        context.setproperty(context.runtimename($names[42], stack1), local14, local10);
//                        stack0 = local14;// JIT: redundant assigment, value unused
//                        stack1 = local14;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])) {
                            stack1 = local14['m_flags'];
                        } else {
                            temp = local14[AX_CLASS_SYMBOL] ? local14 : sec.box(local14);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])){
                            local14.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local14);
                        }
                        { p = 1514; continue; };
                    case 1027:
                        stack0 = local10;
                        stack1 = local15;
                        stack2 = local15;
                        stack2 = (stack2 | 0) + 1;
                        local15 = stack2;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[42], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        stack0 = local16;
                        stack0 = (stack0 | 0) - 1;
                        local16 = stack0;
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.AddBody(local2);
                        } else {
                            // 7 0::AddBody
                            {
                                let t = local9;
                                const m = t.$BgAddBody || (t = sec.box(local9), t.$BgAddBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   local9.axCallProperty($names[43], [local2], false);
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
                                    stack0 = local2.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 1070; continue; };
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
                                   local2.axCallProperty($names[44], [true], false);
                                }
                            }
                        }
                    case 1070:
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
                                    stack0 = local2.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        if (stack1 == stack0) { p = 1088; continue; };
                        { p = 1514; continue; };
                    case 1088:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_contactList'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_contactList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[45]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[46], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
                        { p = 1323; continue; };
                    case 1100:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactCount
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_contactCount'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_contactCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[47]);
                            }
                        }
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactCapacity
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['m_contactCapacity'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgm_contactCapacity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[48]);
                            }
                        }
                        if (stack1 != stack0) { p = 1119; continue; };
                        { p = 1329; continue; };
                    case 1119:
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_flags'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack1 = temp.$Bgb2Contact;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 1141; continue; };
                        { p = 1314; continue; };
                    case 1141:
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
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
                                    stack0 = stack0.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        stack1 = true;
                        stack0 = stack0 == true;
                        stack1 = stack0;
                        if (stack1) { p = 1169; continue; };
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
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
                                    stack0 = stack0.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 1169:
                        stack1 = stack0;
                        if (stack1) { p = 1186; continue; };
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
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
                                    stack0 = stack0.axCallProperty($names[40], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 1186:
                        if (!stack0) { p = 1194; continue; };
                        { p = 1314; continue; };
                    case 1194:
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        //Possible type:undefined
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[49]);
                            }
                        }
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.AddContact(stack1);
                        } else {
                            // 7 0::AddContact
                            {
                                let t = local9;
                                const m = t.$BgAddContact || (t = sec.box(local9), t.$BgAddContact);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local9.axCallProperty($names[50], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_flags'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::other
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['other'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgother;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local22 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_flags'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 1254; continue; };
                        { p = 1314; continue; };
                    case 1254:
//                        stack0 = local22;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local22, ((_a !== 'object' && _a !== 'function' ) || local22 == null || local22[AX_CLASS_SYMBOL]))) {
                           stack0 = local22.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local22;
                                const m = t.$BgGetType || (t = sec.box(local22), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local22.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[52]);
                            }
                        }
                        if (stack1 == stack0) { p = 1284; continue; };
//                        stack0 = local22;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local22, ((_a !== 'object' && _a !== 'function' ) || local22 == null || local22[AX_CLASS_SYMBOL]))) {
                            local22.Advance(local13);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Advance
                            {
                                let t = local22;
                                const m = t.$BgAdvance || (t = sec.box(local22), t.$BgAdvance);
                                if( typeof m === "function" ) { 
                                    m.call(t, local13);
                                } else { 
                                   local22.axCallProperty($names[37], [local13], false);
                                }
                            }
                        }
//                        stack0 = local22;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local22, ((_a !== 'object' && _a !== 'function' ) || local22 == null || local22[AX_CLASS_SYMBOL]))) {
                            local22.SetAwake(true);
                        } else {
                            // 7 0::SetAwake
                            {
                                let t = local22;
                                const m = t.$BgSetAwake || (t = sec.box(local22), t.$BgSetAwake);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   local22.axCallProperty($names[44], [true], false);
                                }
                            }
                        }
                    case 1284:
                        stack0 = local10;
                        stack1 = local15;
//                        stack2 = local16;// JIT: redundant assigment, value unused
                        stack1 += local16;
                        stack2 = local22;
                        context.setproperty(context.runtimename($names[42], stack1), local22, local10);
                        local16 = (local16 | 0) + 1;
//                        stack0 = local22;// JIT: redundant assigment, value unused
//                        stack1 = local22;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:undefined
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack1 = local22['m_flags'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])){
                            local22.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local22);
                        }
                    case 1314:
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['next'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[46], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
                    case 1323:
                        stack0 = local7;
                        if (local7) { p = 1100; continue; };
                    case 1329:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointList
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_jointList'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_jointList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[54]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[55], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local21 = stack0;
                        { p = 1508; continue; };
                    case 1341:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointCount
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_jointCount'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_jointCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[56]);
                            }
                        }
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointCapacity
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['m_jointCapacity'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgm_jointCapacity;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[57]);
                            }
                        }
                        if (stack1 != stack0) { p = 1360; continue; };
                        { p = 1499; continue; };
                    case 1360:
//                        stack0 = local21;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack0 = local21['joint'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack0 = temp.$Bgjoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[58]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_islandFlag'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_islandFlag;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = true;
                        if (true != stack0) { p = 1377; continue; };
                        { p = 1499; continue; };
                    case 1377:
//                        stack0 = local21;// JIT: redundant assigment, value unused
                        // 7 0::other
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack0 = local21['other'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack0 = temp.$Bgother;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local22 = stack1;
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
                                    stack0 = stack0.axCallProperty($names[59], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 1400; continue; };
                        { p = 1499; continue; };
                    case 1400:
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = local21;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        //Possible type:undefined
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack1 = local21['joint'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack1 = temp.$Bgjoint;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[58]);
                            }
                        }
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.AddJoint(stack1);
                        } else {
                            // 7 0::AddJoint
                            {
                                let t = local9;
                                const m = t.$BgAddJoint || (t = sec.box(local9), t.$BgAddJoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local9.axCallProperty($names[60], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local21;// JIT: redundant assigment, value unused
                        // 7 0::joint
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack0 = local21['joint'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack0 = temp.$Bgjoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[58]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_islandFlag = true;
                        } else {
                            context.setproperty($names[17], true, stack0);
                        }
//                        stack0 = local22;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack0 = local22['m_flags'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack0 = temp.$Bgm_flags;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_islandFlag'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_islandFlag;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 1439; continue; };
                        { p = 1499; continue; };
                    case 1439:
//                        stack0 = local22;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local22, ((_a !== 'object' && _a !== 'function' ) || local22 == null || local22[AX_CLASS_SYMBOL]))) {
                           stack0 = local22.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local22;
                                const m = t.$BgGetType || (t = sec.box(local22), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local22.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[52]);
                            }
                        }
                        if (stack1 == stack0) { p = 1469; continue; };
//                        stack0 = local22;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local22, ((_a !== 'object' && _a !== 'function' ) || local22 == null || local22[AX_CLASS_SYMBOL]))) {
                            local22.Advance(local13);
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::Advance
                            {
                                let t = local22;
                                const m = t.$BgAdvance || (t = sec.box(local22), t.$BgAdvance);
                                if( typeof m === "function" ) { 
                                    m.call(t, local13);
                                } else { 
                                   local22.axCallProperty($names[37], [local13], false);
                                }
                            }
                        }
//                        stack0 = local22;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local22, ((_a !== 'object' && _a !== 'function' ) || local22 == null || local22[AX_CLASS_SYMBOL]))) {
                            local22.SetAwake(true);
                        } else {
                            // 7 0::SetAwake
                            {
                                let t = local22;
                                const m = t.$BgSetAwake || (t = sec.box(local22), t.$BgSetAwake);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   local22.axCallProperty($names[44], [true], false);
                                }
                            }
                        }
                    case 1469:
                        stack0 = local10;
                        stack1 = local15;
//                        stack2 = local16;// JIT: redundant assigment, value unused
                        stack1 += local16;
                        stack2 = local22;
                        context.setproperty(context.runtimename($names[42], stack1), local22, local10);
                        local16 = (local16 | 0) + 1;
//                        stack0 = local22;// JIT: redundant assigment, value unused
//                        stack1 = local22;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        //Possible type:undefined
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack1 = local22['m_flags'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 |= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])){
                            local22.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local22);
                        }
                    case 1499:
//                        stack0 = local21;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local21 != undefined && local21[AX_CLASS_SYMBOL])) {
                            stack0 = local21['next'];
                        } else {
                            temp = local21[AX_CLASS_SYMBOL] ? local21 : sec.box(local21);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[55], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2JointEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local21 = stack0;
                    case 1508:
                        stack0 = local21;
                        if (local21) { p = 1341; continue; };
                    case 1514:
                        stack0 = local16;
                        stack1 = 0;
                        if (0 < local16) { p = 1027; continue; };
                        // 7 3::s_timestep
                        temp = scope0.findScopeProperty($names[61], true, false);
                        stack0 = temp.$Bgs_timestep;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[61]);
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[62], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2TimeStep")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local17 = stack1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::warmStarting
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.warmStarting = false;
                        } else {
                            context.setproperty($names[63], false, stack0);
                        }
//                        stack0 = local17;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        stack2 = local13;// JIT: redundant assigment, value unused
                        stack1 -= local13;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::dt
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['dt'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgdt;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[64]);
                            }
                        }
                        stack1 *= stack2;
                        // 7 0::dt
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])){
                            local17.dt = stack1;
                        } else {
                            context.setproperty($names[64], stack1, local17);
                        }
//                        stack0 = local17;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        stack2 = local17;// JIT: redundant assigment, value unused
                        // 7 0::dt
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])) {
                            stack2 = local17['dt'];
                        } else {
                            temp = local17[AX_CLASS_SYMBOL] ? local17 : sec.box(local17);
                            stack2 = temp.$Bgdt;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[64]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::inv_dt
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])){
                            local17.inv_dt = stack1;
                        } else {
                            context.setproperty($names[65], stack1, local17);
                        }
//                        stack0 = local17;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::dtRatio
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])){
                            local17.dtRatio = 0;
                        } else {
                            context.setproperty($names[66], 0, local17);
                        }
//                        stack0 = local17;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::velocityIterations
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['velocityIterations'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgvelocityIterations;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[67]);
                            }
                        }
                        // 7 0::velocityIterations
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])){
                            local17.velocityIterations = stack1;
                        } else {
                            context.setproperty($names[67], stack1, local17);
                        }
//                        stack0 = local17;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::positionIterations
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['positionIterations'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgpositionIterations;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[68]);
                            }
                        }
                        // 7 0::positionIterations
                        if (!(local17 != undefined && local17[AX_CLASS_SYMBOL])){
                            local17.positionIterations = stack1;
                        } else {
                            context.setproperty($names[68], stack1, local17);
                        }
//                        stack0 = local9;// JIT: redundant assigment, value unused
//                        stack1 = local17;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local9, ((_a !== 'object' && _a !== 'function' ) || local9 == null || local9[AX_CLASS_SYMBOL]))) {
                            local9.SolveTOI(local17);
                        } else {
                            // 7 0::SolveTOI
                            {
                                let t = local9;
                                const m = t.$BgSolveTOI || (t = sec.box(local9), t.$BgSolveTOI);
                                if( typeof m === "function" ) { 
                                    m.call(t, local17);
                                } else { 
                                   local9.axCallProperty($names[69], [local17], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local18 = 0;
                        { p = 1722; continue; };
                    case 1603:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodies
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_bodies'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_bodies;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[70]);
                            }
                        }
                        stack1 = local18;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = local18;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[42], local18);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['m_flags'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$Bgb2Body;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_islandFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_islandFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local2);
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
                                    stack0 = local2.axCallProperty($names[28], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 1646; continue; };
                        { p = 1720; continue; };
                    case 1646:
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
                                    stack0 = local2.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        if (stack1 == stack0) { p = 1664; continue; };
                        { p = 1720; continue; };
                    case 1664:
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
                                   local2.axCallProperty($names[71], [], false);
                                }
                            }
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['m_contactList'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgm_contactList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[45]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[46], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
                        { p = 1714; continue; };
                    case 1681:
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgcontact;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::contact
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['contact'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgcontact;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_flags'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_toiFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_toiFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_toiFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = local7;// JIT: redundant assigment, value unused
                        // 7 0::next
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack0 = local7['next'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack0 = temp.$Bgnext;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[46], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2ContactEdge")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
                    case 1714:
                        stack0 = local7;
                        if (local7) { p = 1681; continue; };
                    case 1720:
                        local18 = (local18 | 0) + 1;
                    case 1722:
                        stack0 = local18;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyCount
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['m_bodyCount'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgm_bodyCount;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[72]);
                            }
                        }
                        if (stack1 > local18) { p = 1603; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local18 = 0;
                        { p = 1779; continue; };
                    case 1741:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contacts
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_contacts'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_contacts;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[73]);
                            }
                        }
                        stack1 = local18;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = local18;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[42], local18);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        stack2 = stack1;
                        local11 = stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_flags'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_flags;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2Contact;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_toiFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['e_toiFlag'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bge_toiFlag;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0:Box2D.Dynamics.Contacts::b2Contact
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack3 = temp.$Bgb2Contact;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[14]);
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
                        //Possible type:7 0:Box2D.Dynamics.Contacts::b2Contact
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['e_islandFlag'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bge_islandFlag;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 |= stack3;
                        stack2 = ~stack2;
                        stack1 &= stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_flags
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_flags = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
                        local18 = (local18 | 0) + 1;
                    case 1779:
                        stack0 = local18;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactCount
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['m_contactCount'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgm_contactCount;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[47]);
                            }
                        }
                        if (stack1 > local18) { p = 1741; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local18 = 0;
                        { p = 1820; continue; };
                    case 1798:
//                        stack0 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_joints
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack0 = local9['m_joints'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack0 = temp.$Bgm_joints;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[74]);
                            }
                        }
                        stack1 = local18;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = local18;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[42], local18);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[16], true, false);
                            _e || console.warn('[m_SolveTOI] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local8 = stack1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_islandFlag = false;
                        } else {
                            context.setproperty($names[17], false, stack0);
                        }
                        local18 = (local18 | 0) + 1;
                    case 1820:
                        stack0 = local18;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_jointCount
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['m_jointCount'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgm_jointCount;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[56]);
                            }
                        }
                        if (stack1 > local18) { p = 1798; continue; };
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
                                   stack0.axCallProperty($names[75], [], false);
                                }
                            }
                        }
                    case 1839:
                        { p = 273; continue; };
                    case 1843:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_SolveTOI.js
})