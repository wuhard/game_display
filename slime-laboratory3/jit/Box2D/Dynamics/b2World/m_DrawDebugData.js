(function anonymous(context
) {
/*
	Index: 130
	Path:  Box2D/Dynamics/b2World::m_DrawDebugData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_DrawDebugData() {
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
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
                        local11 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local16 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local17 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local18 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local19 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local20 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local21 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local22 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
                        stack1 = null;
                        if (null != stack0) { p = 79; continue; };
                        return;
                    case 79:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sprite
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_sprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_sprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.clear();
                        } else {
                            // 7 0::clear
                            {
                                let t = stack0;
                                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetFlags();
                        } else {
                            // 7 0::GetFlags
                            {
                                let t = stack0;
                                const m = t.$BgGetFlags || (t = sec.box(stack0), t.$BgGetFlags);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFlags ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                        stack0 >>>= 0;
                        local1 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local9 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local10 = stack0;
                        // 7 0:Box2D.Collision::b2AABB
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:b2AABB/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        local12 = stack0;
                        // 7 0:Box2D.Collision::b2AABB
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:b2AABB/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        local13 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [], $names[4]);
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack2 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack2 = context.constructFast(stack2, [], $names[4]);
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack3 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack3 = context.constructFast(stack3, [], $names[4]);
                        stack0 = sec.AXArray.axBox([stack0, stack1, stack2, stack3]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local14 = stack0;
                        // 7 0:Box2D.Common::b2Color
                        stack0 = scope0.findScopeProperty($names[7], true, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Color/Object
                        stack0 = context.constructFast(stack0, [0, 0, 0], $names[7]);
                        //IR: Drop coerce, reason: redundant
                        local15 = stack0;
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics::b2DebugDraw
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2DebugDraw;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::e_shapeBit
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_shapeBit'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_shapeBit;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 448; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 0:Box2D.Common::b2Color
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 443; continue; };
                    case 209:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_xf'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_xf;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[12], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Transform")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetFixtureList();
                        } else {
                            // 7 0::GetFixtureList
                            {
                                let t = local3;
                                const m = t.$BgGetFixtureList || (t = sec.box(local3), t.$BgGetFixtureList);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureList ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        { p = 430; continue; };
                    case 231:
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack0 = local4.GetShape();
                        } else {
                            // 7 0::GetShape
                            {
                                let t = local4;
                                const m = t.$BgGetShape || (t = sec.box(local4), t.$BgGetShape);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetShape ();
                                } else { 
                                    stack0 = local4.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[16], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Shape")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = local3;
                                const m = t.$BgIsActive || (t = sec.box(local3), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[17], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 279; continue; };
//                        stack0 = local15;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
//                        stack3 = 0.3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local15, ((_a !== 'object' && _a !== 'function' ) || local15 == null || local15[AX_CLASS_SYMBOL]))) {
                            local15.Set(0.5, 0.5, 0.3);
                        } else {
                            // 7 0::Set
                            {
                                let t = local15;
                                const m = t.$BgSet || (t = sec.box(local15), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.5, 0.5, 0.3);
                                } else { 
                                   local15.axCallProperty($names[18], [0.5, 0.5, 0.3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDrawShape(local5, local11, local15);
                        { p = 421; continue; };
                    case 279:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local3;
                                const m = t.$BgGetType || (t = sec.box(local3), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        if (stack1 != stack0) { p = 320; continue; };
//                        stack0 = local15;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
//                        stack2 = 0.9;// JIT: redundant assigment, value unused
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local15, ((_a !== 'object' && _a !== 'function' ) || local15 == null || local15[AX_CLASS_SYMBOL]))) {
                            local15.Set(0.5, 0.9, 0.5);
                        } else {
                            // 7 0::Set
                            {
                                let t = local15;
                                const m = t.$BgSet || (t = sec.box(local15), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.5, 0.9, 0.5);
                                } else { 
                                   local15.axCallProperty($names[18], [0.5, 0.9, 0.5], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDrawShape(local5, local11, local15);
                        { p = 421; continue; };
                    case 320:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetType();
                        } else {
                            // 7 0::GetType
                            {
                                let t = local3;
                                const m = t.$BgGetType || (t = sec.box(local3), t.$BgGetType);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetType ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::b2_kinematicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_kinematicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_kinematicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        if (stack1 != stack0) { p = 361; continue; };
//                        stack0 = local15;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
//                        stack3 = 0.9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local15, ((_a !== 'object' && _a !== 'function' ) || local15 == null || local15[AX_CLASS_SYMBOL]))) {
                            local15.Set(0.5, 0.5, 0.9);
                        } else {
                            // 7 0::Set
                            {
                                let t = local15;
                                const m = t.$BgSet || (t = sec.box(local15), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.5, 0.5, 0.9);
                                } else { 
                                   local15.axCallProperty($names[18], [0.5, 0.5, 0.9], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDrawShape(local5, local11, local15);
                        { p = 421; continue; };
                    case 361:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.IsAwake();
                        } else {
                            // 7 0::IsAwake
                            {
                                let t = local3;
                                const m = t.$BgIsAwake || (t = sec.box(local3), t.$BgIsAwake);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsAwake ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[22], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 398; continue; };
//                        stack0 = local15;// JIT: redundant assigment, value unused
//                        stack1 = 0.6;// JIT: redundant assigment, value unused
//                        stack2 = 0.6;// JIT: redundant assigment, value unused
//                        stack3 = 0.6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local15, ((_a !== 'object' && _a !== 'function' ) || local15 == null || local15[AX_CLASS_SYMBOL]))) {
                            local15.Set(0.6, 0.6, 0.6);
                        } else {
                            // 7 0::Set
                            {
                                let t = local15;
                                const m = t.$BgSet || (t = sec.box(local15), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.6, 0.6, 0.6);
                                } else { 
                                   local15.axCallProperty($names[18], [0.6, 0.6, 0.6], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDrawShape(local5, local11, local15);
                        { p = 421; continue; };
                    case 398:
//                        stack0 = local15;// JIT: redundant assigment, value unused
//                        stack1 = 0.9;// JIT: redundant assigment, value unused
//                        stack2 = 0.7;// JIT: redundant assigment, value unused
//                        stack3 = 0.7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local15, ((_a !== 'object' && _a !== 'function' ) || local15 == null || local15[AX_CLASS_SYMBOL]))) {
                            local15.Set(0.9, 0.7, 0.7);
                        } else {
                            // 7 0::Set
                            {
                                let t = local15;
                                const m = t.$BgSet || (t = sec.box(local15), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.9, 0.7, 0.7);
                                } else { 
                                   local15.axCallProperty($names[18], [0.9, 0.7, 0.7], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDrawShape(local5, local11, local15);
                    case 421:
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['m_next'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                    case 430:
                        stack0 = local4;
                        if (local4) { p = 231; continue; };
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_next'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 443:
                        stack0 = local3;
                        if (local3) { p = 209; continue; };
                    case 448:
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics::b2DebugDraw
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2DebugDraw;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::e_jointBit
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_jointBit'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_jointBit;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[24]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 494; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_jointList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
                        stack0 = this.$Bgm_jointList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[25], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                        { p = 488; continue; };
                    case 471:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgDrawJoint(local6);
//                        stack0 = local6;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack0 = local6['m_next'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[25], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                    case 488:
                        stack0 = local6;
                        if (local6) { p = 471; continue; };
                    case 494:
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics::b2DebugDraw
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2DebugDraw;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::e_controllerBit
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_controllerBit'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_controllerBit;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[26]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 543; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_controllerList
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
                        stack0 = this.$Bgm_controllerList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[27], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Controller")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local16 = stack0;
                        { p = 537; continue; };
                    case 517:
//                        stack0 = local16;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack1 = this.$Bgm_debugDraw;
                        if (!(_a = typeof local16, ((_a !== 'object' && _a !== 'function' ) || local16 == null || local16[AX_CLASS_SYMBOL]))) {
                            local16.Draw(stack1);
                        } else {
                            // 7 0::Draw
                            {
                                let t = local16;
                                const m = t.$BgDraw || (t = sec.box(local16), t.$BgDraw);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local16.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local16;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics.Controllers::b2Controller
                        if (!(local16 != undefined && local16[AX_CLASS_SYMBOL])) {
                            stack0 = local16['m_next'];
                        } else {
                            temp = local16[AX_CLASS_SYMBOL] ? local16 : sec.box(local16);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[27], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Controller")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local16 = stack0;
                    case 537:
                        stack0 = local16;
                        if (local16) { p = 517; continue; };
                    case 543:
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics::b2DebugDraw
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2DebugDraw;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::e_pairBit
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_pairBit'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_pairBit;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 660; continue; };
//                        stack0 = local15;// JIT: redundant assigment, value unused
//                        stack1 = 0.3;// JIT: redundant assigment, value unused
//                        stack2 = 0.9;// JIT: redundant assigment, value unused
//                        stack3 = 0.9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local15, ((_a !== 'object' && _a !== 'function' ) || local15 == null || local15[AX_CLASS_SYMBOL]))) {
                            local15.Set(0.3, 0.9, 0.9);
                        } else {
                            // 7 0::Set
                            {
                                let t = local15;
                                const m = t.$BgSet || (t = sec.box(local15), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.3, 0.9, 0.9);
                                } else { 
                                   local15.axCallProperty($names[18], [0.3, 0.9, 0.9], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack0 = this.$Bgm_contactManager;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
                        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_contactList'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_contactList;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[30]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[31], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local17 = stack0;
                        { p = 654; continue; };
                    case 581:
//                        stack0 = local17;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local17, ((_a !== 'object' && _a !== 'function' ) || local17 == null || local17[AX_CLASS_SYMBOL]))) {
                           stack0 = local17.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local17;
                                const m = t.$BgGetFixtureA || (t = sec.box(local17), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local17.axCallProperty($names[32], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local18 = stack0;
//                        stack0 = local17;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local17, ((_a !== 'object' && _a !== 'function' ) || local17 == null || local17[AX_CLASS_SYMBOL]))) {
                           stack0 = local17.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local17;
                                const m = t.$BgGetFixtureB || (t = sec.box(local17), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local17.axCallProperty($names[33], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local19 = stack0;
//                        stack0 = local18;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local18, ((_a !== 'object' && _a !== 'function' ) || local18 == null || local18[AX_CLASS_SYMBOL]))) {
                           stack0 = local18.GetAABB();
                        } else {
                            // 7 0::GetAABB
                            {
                                let t = local18;
                                const m = t.$BgGetAABB || (t = sec.box(local18), t.$BgGetAABB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAABB ();
                                } else { 
                                    stack0 = local18.axCallProperty($names[34], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetCenter();
                        } else {
                            // 7 0::GetCenter
                            {
                                let t = stack0;
                                const m = t.$BgGetCenter || (t = sec.box(stack0), t.$BgGetCenter);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetCenter ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[35], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local20 = stack0;
//                        stack0 = local19;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local19, ((_a !== 'object' && _a !== 'function' ) || local19 == null || local19[AX_CLASS_SYMBOL]))) {
                           stack0 = local19.GetAABB();
                        } else {
                            // 7 0::GetAABB
                            {
                                let t = local19;
                                const m = t.$BgGetAABB || (t = sec.box(local19), t.$BgGetAABB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAABB ();
                                } else { 
                                    stack0 = local19.axCallProperty($names[34], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetCenter();
                        } else {
                            // 7 0::GetCenter
                            {
                                let t = stack0;
                                const m = t.$BgGetCenter || (t = sec.box(stack0), t.$BgGetCenter);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetCenter ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[35], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local21 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local20;// JIT: redundant assigment, value unused
//                        stack2 = local21;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawSegment(local20, local21, local15);
                        } else {
                            // 7 0::DrawSegment
                            {
                                let t = stack0;
                                const m = t.$BgDrawSegment || (t = sec.box(stack0), t.$BgDrawSegment);
                                if( typeof m === "function" ) { 
                                    m.call(t, local20, local21, local15);
                                } else { 
                                   stack0.axCallProperty($names[36], [local20, local21, local15], false);
                                }
                            }
                        }
//                        stack0 = local17;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local17, ((_a !== 'object' && _a !== 'function' ) || local17 == null || local17[AX_CLASS_SYMBOL]))) {
                           stack0 = local17.GetNext();
                        } else {
                            // 7 0::GetNext
                            {
                                let t = local17;
                                const m = t.$BgGetNext || (t = sec.box(local17), t.$BgGetNext);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetNext ();
                                } else { 
                                    stack0 = local17.axCallProperty($names[37], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[31], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Contact")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local17 = stack0;
                    case 654:
                        stack0 = local17;
                        if (local17) { p = 581; continue; };
                    case 660:
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics::b2DebugDraw
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2DebugDraw;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::e_aabbBit
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_aabbBit'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_aabbBit;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[38]);
                            }
                        }
                        stack0 &= stack1;
                        if (!stack0) { p = 914; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
                        stack0 = this.$Bgm_contactManager;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_broadPhase
                        //Possible type:7 0:Box2D.Dynamics::b2ContactManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_broadPhase'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_broadPhase;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[39]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[40], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "IBroadPhase")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [], $names[4]);
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack2 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack2 = context.constructFast(stack2, [], $names[4]);
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack3 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack3 = context.constructFast(stack3, [], $names[4]);
                        stack0 = sec.AXArray.axBox([stack0, stack1, stack2, stack3]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local14 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 909; continue; };
                    case 719:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.IsActive();
                        } else {
                            // 7 0::IsActive
                            {
                                let t = local3;
                                const m = t.$BgIsActive || (t = sec.box(local3), t.$BgIsActive);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsActive ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[17], [], false);
                                }
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 734; continue; };
                        { p = 901; continue; };
                    case 734:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetFixtureList();
                        } else {
                            // 7 0::GetFixtureList
                            {
                                let t = local3;
                                const m = t.$BgGetFixtureList || (t = sec.box(local3), t.$BgGetFixtureList);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureList ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        { p = 895; continue; };
                    case 747:
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_proxy
                        //Possible type:undefined
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['m_proxy'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgm_proxy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[41]);
                            }
                        }
                        if (!(_a = typeof local7, ((_a !== 'object' && _a !== 'function' ) || local7 == null || local7[AX_CLASS_SYMBOL]))) {
                           stack0 = local7.GetFatAABB(stack1);
                        } else {
                            // 7 0:Box2D.Collision:IBroadPhase::GetFatAABB
                            {
                                let t = local7;
                                const m = t.$BgGetFatAABB || (t = sec.box(local7), t.$BgGetFatAABB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFatAABB (stack1);
                                } else { 
                                    stack0 = local7.axCallProperty($names[42], [stack1], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[5], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2AABB")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local22 = stack0;
                        stack0 = local14;
                        stack1 = 0;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[43], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local22;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        //Possible type:undefined
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack1 = local22['lowerBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack1 = temp.$BglowerBound;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[44]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[45]);
                            }
                        }
//                        stack2 = local22;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack2 = local22['lowerBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack2 = temp.$BglowerBound;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[44]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[46]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(stack1, stack2);
                        } else {
                            // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[47], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = local14;
                        stack1 = 1;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = 1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[43], 1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local22;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        //Possible type:undefined
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack1 = local22['upperBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack1 = temp.$BgupperBound;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[48]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[45]);
                            }
                        }
//                        stack2 = local22;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack2 = local22['lowerBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack2 = temp.$BglowerBound;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[44]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[46]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(stack1, stack2);
                        } else {
                            // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[47], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = local14;
                        stack1 = 2;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = 2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[43], 2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local22;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        //Possible type:undefined
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack1 = local22['upperBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack1 = temp.$BgupperBound;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[48]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[45]);
                            }
                        }
//                        stack2 = local22;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack2 = local22['upperBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack2 = temp.$BgupperBound;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[48]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[46]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(stack1, stack2);
                        } else {
                            // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[47], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = local14;
                        stack1 = 3;
                        // 27 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::*
                        {
                            let simple = 3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[43], 3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local22;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        //Possible type:undefined
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack1 = local22['lowerBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack1 = temp.$BglowerBound;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[44]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[45]);
                            }
                        }
//                        stack2 = local22;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        if (!(local22 != undefined && local22[AX_CLASS_SYMBOL])) {
                            stack2 = local22['upperBound'];
                        } else {
                            temp = local22[AX_CLASS_SYMBOL] ? local22 : sec.box(local22);
                            stack2 = temp.$BgupperBound;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[48]);
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[46]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(stack1, stack2);
                        } else {
                            // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World}::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[47], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local14;// JIT: redundant assigment, value unused
//                        stack2 = 4;// JIT: redundant assigment, value unused
//                        stack3 = local15;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawPolygon(local14, 4, local15);
                        } else {
                            // 7 0::DrawPolygon
                            {
                                let t = stack0;
                                const m = t.$BgDrawPolygon || (t = sec.box(stack0), t.$BgDrawPolygon);
                                if( typeof m === "function" ) { 
                                    m.call(t, local14, 4, local15);
                                } else { 
                                   stack0.axCallProperty($names[49], [local14, 4, local15], false);
                                }
                            }
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                           stack0 = local4.GetNext();
                        } else {
                            // 7 0::GetNext
                            {
                                let t = local4;
                                const m = t.$BgGetNext || (t = sec.box(local4), t.$BgGetNext);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetNext ();
                                } else { 
                                    stack0 = local4.axCallProperty($names[37], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[14], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                    case 895:
                        stack0 = local4;
                        if (local4) { p = 747; continue; };
                    case 901:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.GetNext();
                        } else {
                            // 7 0::GetNext
                            {
                                let t = local3;
                                const m = t.$BgGetNext || (t = sec.box(local3), t.$BgGetNext);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetNext ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[37], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 909:
                        stack0 = local3;
                        if (local3) { p = 719; continue; };
                    case 914:
                        stack0 = local1;
                        // 7 0:Box2D.Dynamics::b2DebugDraw
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgb2DebugDraw;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::e_centerOfMassBit
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['e_centerOfMassBit'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bge_centerOfMassBit;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[50]);
                            }
                        }
                        stack0 &= stack1;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgm_bodyList;
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 982; continue; };
                    case 936:
                        // 7 3::s_xf
                        temp = scope0.findScopeProperty($names[51], true, false);
                        stack0 = temp.$Bgs_xf;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[51]);
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[12], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Transform")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local11 = stack1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_xf
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['m_xf'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgm_xf;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::R
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['R'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgR;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[52]);
                            }
                        }
                        // 7 0::R
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.R = stack1;
                        } else {
                            context.setproperty($names[52], stack1, stack0);
                        }
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack1 = local3.GetWorldCenter();
                        } else {
                            // 7 0::GetWorldCenter
                            {
                                let t = local3;
                                const m = t.$BgGetWorldCenter || (t = sec.box(local3), t.$BgGetWorldCenter);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetWorldCenter ();
                                } else { 
                                    stack1 = local3.axCallProperty($names[53], [], false);
                                }
                            }
                        }
                        // 7 0::position
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.position = stack1;
                        } else {
                            context.setproperty($names[54], stack1, local11);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::m_debugDraw
                        //Possible type:7 3::s_xf
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
                        stack0 = this.$Bgm_debugDraw;
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DrawTransform(local11);
                        } else {
                            // 7 0::DrawTransform
                            {
                                let t = stack0;
                                const m = t.$BgDrawTransform || (t = sec.box(stack0), t.$BgDrawTransform);
                                if( typeof m === "function" ) { 
                                    m.call(t, local11);
                                } else { 
                                   stack0.axCallProperty($names[55], [local11], false);
                                }
                            }
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_next
                        //Possible type:7 0:Box2D.Dynamics::b2DebugDraw
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['m_next'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bgm_next;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[10], true, false);
                            _e || console.warn('[m_DrawDebugData] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 982:
                        stack0 = local3;
                        if (local3) { p = 936; continue; };
                    case 987:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_DrawDebugData.js
})