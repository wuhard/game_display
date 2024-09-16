(function anonymous(context
) {
/*
	Index: 336
	Path:  Box2D/Dynamics/b2Body::m_Split
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2Body
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Split(local1 /* Function */) {
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
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetLinearVelocity();
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
                                    stack0 = stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetAngularVelocity();
                        stack0 = +stack0;
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetWorldCenter();
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        stack0 = this;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(this) : this;
                        }
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_world
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2World  */ 
                        stack0 = this.$Bgm_world;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BgGetDefinition();
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.CreateBody(stack1);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack0;
                                const m = t.$BgCreateBody || (t = sec.box(stack0), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgCreateBody (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [stack1], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        //Possible type:7 0:Box2D.Dynamics::b2World
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_fixtureList'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_fixtureList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                        { p = 212; continue; };
                    case 75:
                        // JIT: potential type:7 0::Function
                        stack0 = local1;
                        stack1 = context.savedScope.global.object;
//                        stack2 = local8;// JIT: redundant assigment, value unused
                        stack0 = context.call(stack0, stack1, [local8], scope0);
                        if (!stack0) { p = 197; continue; };
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['m_next'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local13 = stack0;
                        stack0 = local7;
                        if (!local7) { p = 112; continue; };
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
                            local7.m_next = local13;
                        } else {
                            context.setproperty($names[6], local13, local7);
                        }
                        { p = 119; continue; };
                    case 112:
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.m_fixtureList = local13;
                        } else {
                            context.setproperty($names[4], local13, local5);
                        }
                    case 119:
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        stack1 = local5;
                        local14 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['m_fixtureCount'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgm_fixtureCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 = (stack0 | 0) - 1;
                        local15 = stack0;
//                        stack0 = local14;// JIT: redundant assigment, value unused
//                        stack1 = local15;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])){
                            local14.m_fixtureCount = local15;
                        } else {
                            context.setproperty($names[7], local15, local14);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack1 = local6['m_fixtureList'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack1 = temp.$Bgm_fixtureList;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.m_next = stack1;
                        } else {
                            context.setproperty($names[6], stack1, local8);
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureList
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.m_fixtureList = local8;
                        } else {
                            context.setproperty($names[4], local8, local6);
                        }
                        stack0 = local6;
                        stack1 = local6;
                        local14 = stack1;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_fixtureCount'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_fixtureCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local15 = stack0;
//                        stack0 = local14;// JIT: redundant assigment, value unused
//                        stack1 = local15;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_fixtureCount
                        if (!(local14 != undefined && local14[AX_CLASS_SYMBOL])){
                            local14.m_fixtureCount = local15;
                        } else {
                            context.setproperty($names[7], local15, local14);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_body
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.m_body = local6;
                        } else {
                            context.setproperty($names[8], local6, local8);
                        }
                        stack0 = local13;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(local13) : local13;
                        }
                        local8 = stack0;
                        { p = 212; continue; };
                    case 197:
                        stack0 = local8;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(local8) : local8;
                        }
                        local7 = stack0;
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['m_next'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                    case 212:
                        stack0 = local8;
                        if (local8) { p = 75; continue; };
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.ResetMassData();
                        } else {
                            // 7 0::ResetMassData
                            {
                                let t = local5;
                                const m = t.$BgResetMassData || (t = sec.box(local5), t.$BgResetMassData);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local5.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                            local6.ResetMassData();
                        } else {
                            // 7 0::ResetMassData
                            {
                                let t = local6;
                                const m = t.$BgResetMassData || (t = sec.box(local6), t.$BgResetMassData);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local6.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                           stack0 = local5.GetWorldCenter();
                        } else {
                            // 7 0::GetWorldCenter
                            {
                                let t = local5;
                                const m = t.$BgGetWorldCenter || (t = sec.box(local5), t.$BgGetWorldCenter);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetWorldCenter ();
                                } else { 
                                    stack0 = local5.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack0 = local6.GetWorldCenter();
                        } else {
                            // 7 0::GetWorldCenter
                            {
                                let t = local6;
                                const m = t.$BgGetWorldCenter || (t = sec.box(local6), t.$BgGetWorldCenter);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetWorldCenter ();
                                } else { 
                                    stack0 = local6.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local10 = stack0;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[11]);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[11]);
                        }
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack4 = temp.$Bgb2Math;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[11]);
                        }
//                        stack5 = local9;// JIT: redundant assigment, value unused
//                        stack6 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.SubtractVV(local9, local4);
                        } else {
                            // 7 0::SubtractVV
                            {
                                let t = stack4;
                                const m = t.$BgSubtractVV || (t = sec.box(stack4), t.$BgSubtractVV);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgSubtractVV (local9, local4);
                                } else { 
                                    stack4 = stack4.axCallProperty($names[12], [local9, local4], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.CrossFV(local3, stack4);
                        } else {
                            // 7 0::CrossFV
                            {
                                let t = stack2;
                                const m = t.$BgCrossFV || (t = sec.box(stack2), t.$BgCrossFV);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgCrossFV (local3, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[13], [local3, stack4], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.AddVV(local2, stack2);
                        } else {
                            // 7 0::AddVV
                            {
                                let t = stack0;
                                const m = t.$BgAddVV || (t = sec.box(stack0), t.$BgAddVV);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgAddVV (local2, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[14], [local2, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[11]);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack2 = temp.$Bgb2Math;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[11]);
                        }
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack4 = temp.$Bgb2Math;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[11]);
                        }
//                        stack5 = local10;// JIT: redundant assigment, value unused
//                        stack6 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.SubtractVV(local10, local4);
                        } else {
                            // 7 0::SubtractVV
                            {
                                let t = stack4;
                                const m = t.$BgSubtractVV || (t = sec.box(stack4), t.$BgSubtractVV);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgSubtractVV (local10, local4);
                                } else { 
                                    stack4 = stack4.axCallProperty($names[12], [local10, local4], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.CrossFV(local3, stack4);
                        } else {
                            // 7 0::CrossFV
                            {
                                let t = stack2;
                                const m = t.$BgCrossFV || (t = sec.box(stack2), t.$BgCrossFV);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgCrossFV (local3, stack4);
                                } else { 
                                    stack2 = stack2.axCallProperty($names[13], [local3, stack4], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.AddVV(local2, stack2);
                        } else {
                            // 7 0::AddVV
                            {
                                let t = stack0;
                                const m = t.$BgAddVV || (t = sec.box(stack0), t.$BgAddVV);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgAddVV (local2, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[14], [local2, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_Split] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local12 = stack0;
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.SetLinearVelocity(local11);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = local5;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(local5), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, local11);
                                } else { 
                                   local5.axCallProperty($names[15], [local11], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                            local6.SetLinearVelocity(local12);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = local6;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(local6), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, local12);
                                } else { 
                                   local6.axCallProperty($names[15], [local12], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.SetAngularVelocity(local3);
                        } else {
                            // 7 0::SetAngularVelocity
                            {
                                let t = local5;
                                const m = t.$BgSetAngularVelocity || (t = sec.box(local5), t.$BgSetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   local5.axCallProperty($names[16], [local3], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                            local6.SetAngularVelocity(local3);
                        } else {
                            // 7 0::SetAngularVelocity
                            {
                                let t = local6;
                                const m = t.$BgSetAngularVelocity || (t = sec.box(local6), t.$BgSetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   local6.axCallProperty($names[16], [local3], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.SynchronizeFixtures();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::SynchronizeFixtures
                            {
                                let t = local5;
                                const m = t.$BgSynchronizeFixtures || (t = sec.box(local5), t.$BgSynchronizeFixtures);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local5.axCallProperty($names[17], [], false);
                                }
                            }
                        }
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                            local6.SynchronizeFixtures();
                        } else {
                            // 7 0:http://www.box2d.org/ns/b2internal::SynchronizeFixtures
                            {
                                let t = local6;
                                const m = t.$BgSynchronizeFixtures || (t = sec.box(local6), t.$BgSynchronizeFixtures);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local6.axCallProperty($names[17], [], false);
                                }
                            }
                        }
                        stack0 = local6;
                        return local6;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_Split.js
})