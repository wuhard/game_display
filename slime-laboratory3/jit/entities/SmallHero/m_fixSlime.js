(function anonymous(context
) {
/*
	Index: 1071
	Path:  entities/SmallHero::m_fixSlime
	Type:  Protected
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_m_fixSlime() {
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local3 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local8 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BggetMidPosition();
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[m_fixSlime] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local1 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack0 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack0 = temp.$BgPI;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 *= 2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local2 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 170; continue; };
                    case 61:
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_scale'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_scale;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack0 /= stack1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local5;
//                        stack3 = local2;// JIT: redundant assigment, value unused
                        stack2 *= local2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.sin(stack2);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgsin (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[7], [stack2], false);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgheroRadius;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgmagnitude;
                        stack2 *= stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack2 /= stack3;
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local3 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_scale'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_scale;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack0 /= stack1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local5;
//                        stack3 = local2;// JIT: redundant assigment, value unused
                        stack2 *= local2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.cos(stack2);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgcos (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[9], [stack2], false);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgheroRadius;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgmagnitude;
                        stack2 *= stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack2 /= stack3;
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[0], true, false);
//                        stack2 = local3;// JIT: redundant assigment, value unused
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local3, local4], $names[0]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetPosition(stack1);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetPosition
                            {
                                let t = stack0;
                                const m = t.$BgSetPosition || (t = sec.box(stack0), t.$BgSetPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[11], [stack1], false);
                                }
                            }
                        }
                        local5 = (local5 | 0) + 1;
                    case 170:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (stack1 > local5) { p = 61; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 294; continue; };
                    case 191:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkinJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBodyA();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetBodyA
                            {
                                let t = stack0;
                                const m = t.$BgGetBodyA || (t = sec.box(stack0), t.$BgGetBodyA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBodyA ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[13], true, false);
                            _e || console.warn('[m_fixSlime] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkinJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBodyB();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetBodyB
                            {
                                let t = stack0;
                                const m = t.$BgGetBodyB || (t = sec.box(stack0), t.$BgGetBodyB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBodyB ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[13], true, false);
                            _e || console.warn('[m_fixSlime] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local7, ((_a !== 'object' && _a !== 'function' ) || local7 == null || local7[AX_CLASS_SYMBOL]))) {
                           stack1 = local7.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local7;
                                const m = t.$BgGetPosition || (t = sec.box(local7), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = local7.axCallProperty($names[15], [], false);
                                }
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
                        if (!(_a = typeof local8, ((_a !== 'object' && _a !== 'function' ) || local8 == null || local8[AX_CLASS_SYMBOL]))) {
                           stack2 = local8.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local8;
                                const m = t.$BgGetPosition || (t = sec.box(local8), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = local8.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0::int
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
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local7, ((_a !== 'object' && _a !== 'function' ) || local7 == null || local7[AX_CLASS_SYMBOL]))) {
                           stack2 = local7.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local7;
                                const m = t.$BgGetPosition || (t = sec.box(local7), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = local7.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack3 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local8, ((_a !== 'object' && _a !== 'function' ) || local8 == null || local8[AX_CLASS_SYMBOL]))) {
                           stack3 = local8.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local8;
                                const m = t.$BgGetPosition || (t = sec.box(local8), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = local8.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack2 -= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local6 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkinJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack1 = local6.Length();
                        } else {
                            // 7 0::Length
                            {
                                let t = local6;
                                const m = t.$BgLength || (t = sec.box(local6), t.$BgLength);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgLength ();
                                } else { 
                                    stack1 = local6.axCallProperty($names[16], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLength(stack1);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetLength
                            {
                                let t = stack0;
                                const m = t.$BgSetLength || (t = sec.box(stack0), t.$BgSetLength);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                        local5 = (local5 | 0) + 1;
                    case 294:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroSkinJoints;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (stack1 > local5) { p = 191; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 418; continue; };
                    case 315:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkeletonJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBodyA();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetBodyA
                            {
                                let t = stack0;
                                const m = t.$BgGetBodyA || (t = sec.box(stack0), t.$BgGetBodyA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBodyA ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[13], true, false);
                            _e || console.warn('[m_fixSlime] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkeletonJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBodyB();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetBodyB
                            {
                                let t = stack0;
                                const m = t.$BgGetBodyB || (t = sec.box(stack0), t.$BgGetBodyB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBodyB ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[13], true, false);
                            _e || console.warn('[m_fixSlime] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local8 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local7, ((_a !== 'object' && _a !== 'function' ) || local7 == null || local7[AX_CLASS_SYMBOL]))) {
                           stack1 = local7.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local7;
                                const m = t.$BgGetPosition || (t = sec.box(local7), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = local7.axCallProperty($names[15], [], false);
                                }
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
                        if (!(_a = typeof local8, ((_a !== 'object' && _a !== 'function' ) || local8 == null || local8[AX_CLASS_SYMBOL]))) {
                           stack2 = local8.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local8;
                                const m = t.$BgGetPosition || (t = sec.box(local8), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = local8.axCallProperty($names[15], [], false);
                                }
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
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local7, ((_a !== 'object' && _a !== 'function' ) || local7 == null || local7[AX_CLASS_SYMBOL]))) {
                           stack2 = local7.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local7;
                                const m = t.$BgGetPosition || (t = sec.box(local7), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = local7.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack3 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local8, ((_a !== 'object' && _a !== 'function' ) || local8 == null || local8[AX_CLASS_SYMBOL]))) {
                           stack3 = local8.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local8;
                                const m = t.$BgGetPosition || (t = sec.box(local8), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = local8.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack2 -= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local6 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkeletonJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack1 = local6.Length();
                        } else {
                            // 7 0::Length
                            {
                                let t = local6;
                                const m = t.$BgLength || (t = sec.box(local6), t.$BgLength);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgLength ();
                                } else { 
                                    stack1 = local6.axCallProperty($names[16], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLength(stack1);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetLength
                            {
                                let t = stack0;
                                const m = t.$BgSetLength || (t = sec.box(stack0), t.$BgSetLength);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                        local5 = (local5 | 0) + 1;
                    case 418:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroSkeletonJoints;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (stack1 > local5) { p = 315; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 469; continue; };
                    case 439:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroEyeJoints
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroEyeJoints;
                        stack1 = local5;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[10], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 12.206;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 /= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgmagnitude;
                        stack1 *= stack2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLength(stack1);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetLength
                            {
                                let t = stack0;
                                const m = t.$BgSetLength || (t = sec.box(stack0), t.$BgSetLength);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                        local5 = (local5 | 0) + 1;
                    case 469:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroEyeJoints
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroEyeJoints;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (stack1 > local5) { p = 439; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/m_fixSlime.js
})