(function anonymous(context
) {
/*
	Index: 1423
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_ComputeMass
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_ComputeMass(local1 /* b2MassData */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
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
        // local23 is assigned before read, skip init
        let local23 = undefined
        // local24 is assigned before read, skip init
        let local24 = undefined
        // local25 is assigned before read, skip init
        let local25 = undefined
        // local26 is assigned before read, skip init
        let local26 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
                        local11 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local13 = NaN;
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local20 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local21 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local22 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local23 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local24 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local25 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local26 = NaN;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_vertexCount;
                        stack1 = 2;
                        if (2 != stack0) { p = 147; continue; };
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::center
                        //Possible type:7 0::int
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['center'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgcenter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = 0.5;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
                        stack3 = 0;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 0;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[1], 0);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack3 = this.$Bgm_vertices;
                        stack4 = 1;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 1;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[1], 1);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 += stack3;
                        stack1 *= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::center
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['center'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgcenter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = 0.5;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack2 = this.$Bgm_vertices;
                        stack3 = 0;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 0;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[1], 0);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack3 = this.$Bgm_vertices;
                        stack4 = 1;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 1;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[1], 1);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 += stack3;
                        stack1 *= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::mass
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.mass = 0;
                        } else {
                            context.setproperty($names[4], 0, local1);
                        }
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::I
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.I = 0;
                        } else {
                            context.setproperty($names[5], 0, local1);
                        }
                        return;
                    case 147:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local3 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local4 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local5 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local6 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local7 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local8 = 0;
                        stack0 = 1;
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        stack0 /= 3;
                        stack0 = +stack0;
                        local9 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
                        { p = 522; continue; };
                    case 192:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = local10;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = local10;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local10);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_ComputeMass] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        stack0 = local10;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        stack0 = stack0 < stack1;
                        if (!stack0) { p = 243; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        // 7 0::int
                        stack1 = scope0.findScopeProperty($names[7], true, false);
                        stack2 = local10;
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        stack2 += 1;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.int(stack2);
                        } else {
                            // 7 0::int
                            {
                                let t = stack1;
                                const m = t.$Bgint || (t = sec.box(stack1), t.$Bgint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgint (stack2);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[7], [stack2], false);
                                }
                            }
                        }
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_ComputeMass] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        { p = 254; continue; };
                    case 243:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = 0;
                        // 27 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_ComputeMass] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                    case 254:
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_ComputeMass] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local12 = stack0;
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['x'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        stack0 -= local7;
                        stack0 = +stack0;
                        local13 = stack0;
//                        stack0 = local11;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack0 = local11['y'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        stack0 -= local8;
                        stack0 = +stack0;
                        local14 = stack0;
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack0 = local12['x'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        stack0 -= local7;
                        stack0 = +stack0;
                        local15 = stack0;
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack0 = local12['y'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        stack0 -= local8;
                        stack0 = +stack0;
                        local16 = stack0;
                        stack0 = local13;
//                        stack1 = local16;// JIT: redundant assigment, value unused
                        stack0 *= local16;
                        stack1 = local14;
//                        stack2 = local15;// JIT: redundant assigment, value unused
                        stack1 *= local15;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local17 = stack0;
                        stack0 = 0.5;
//                        stack1 = local17;// JIT: redundant assigment, value unused
                        stack0 *= local17;
                        stack0 = +stack0;
                        local18 = stack0;
                        stack0 = local5;
//                        stack1 = local18;// JIT: redundant assigment, value unused
                        stack0 += local18;
                        stack0 = +stack0;
                        local5 = stack0;
                        stack0 = local3;
                        stack1 = local18;
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        stack1 *= local9;
                        stack2 = local7;
//                        stack3 = local11;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack3 = local11['x'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 += stack3;
//                        stack3 = local12;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack3 = local12['x'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 += stack3;
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local3 = stack0;
                        stack0 = local4;
                        stack1 = local18;
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        stack1 *= local9;
                        stack2 = local8;
//                        stack3 = local11;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])) {
                            stack3 = local11['y'];
                        } else {
                            temp = local11[AX_CLASS_SYMBOL] ? local11 : sec.box(local11);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 += stack3;
//                        stack3 = local12;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack3 = local12['y'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 += stack3;
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local4 = stack0;
                        stack0 = local7;
                        stack0 = +local7;
                        local19 = stack0;
                        stack0 = local8;
                        stack0 = +local8;
                        local20 = stack0;
                        stack0 = local13;
                        stack0 = +local13;
                        local21 = stack0;
                        stack0 = local14;
                        stack0 = +local14;
                        local22 = stack0;
                        stack0 = local15;
                        stack0 = +local15;
                        local23 = stack0;
                        stack0 = local16;
                        stack0 = +local16;
                        local24 = stack0;
                        stack0 = local9;
                        stack1 = 0.25;
                        stack2 = local21;
//                        stack3 = local21;// JIT: redundant assigment, value unused
                        stack2 *= local21;
                        stack3 = local23;
//                        stack4 = local21;// JIT: redundant assigment, value unused
                        stack3 *= local21;
                        stack2 += stack3;
                        stack3 = local23;
//                        stack4 = local23;// JIT: redundant assigment, value unused
                        stack3 *= local23;
                        stack2 += stack3;
                        stack1 *= stack2;
                        stack2 = local19;
//                        stack3 = local21;// JIT: redundant assigment, value unused
                        stack2 *= local21;
                        stack3 = local19;
//                        stack4 = local23;// JIT: redundant assigment, value unused
                        stack3 *= local23;
                        stack2 += stack3;
                        stack1 += stack2;
                        stack0 *= stack1;
                        stack1 = 0.5;
//                        stack2 = local19;// JIT: redundant assigment, value unused
                        stack1 *= local19;
//                        stack2 = local19;// JIT: redundant assigment, value unused
                        stack1 *= local19;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local25 = stack0;
                        stack0 = local9;
                        stack1 = 0.25;
                        stack2 = local22;
//                        stack3 = local22;// JIT: redundant assigment, value unused
                        stack2 *= local22;
                        stack3 = local24;
//                        stack4 = local22;// JIT: redundant assigment, value unused
                        stack3 *= local22;
                        stack2 += stack3;
                        stack3 = local24;
//                        stack4 = local24;// JIT: redundant assigment, value unused
                        stack3 *= local24;
                        stack2 += stack3;
                        stack1 *= stack2;
                        stack2 = local20;
//                        stack3 = local22;// JIT: redundant assigment, value unused
                        stack2 *= local22;
                        stack3 = local20;
//                        stack4 = local24;// JIT: redundant assigment, value unused
                        stack3 *= local24;
                        stack2 += stack3;
                        stack1 += stack2;
                        stack0 *= stack1;
                        stack1 = 0.5;
//                        stack2 = local20;// JIT: redundant assigment, value unused
                        stack1 *= local20;
//                        stack2 = local20;// JIT: redundant assigment, value unused
                        stack1 *= local20;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local26 = stack0;
                        stack0 = local6;
                        stack1 = local17;
                        stack2 = local25;
//                        stack3 = local26;// JIT: redundant assigment, value unused
                        stack2 += local26;
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local6 = stack0;
                        local10 = (local10 | 0) + 1;
                    case 522:
                        stack0 = local10;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertexCount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgm_vertexCount;
                        if (stack1 > local10) { p = 192; continue; };
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        stack1 *= local5;
                        // 7 0::mass
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.mass = stack1;
                        } else {
                            context.setproperty($names[4], stack1, local1);
                        }
                        stack0 = local3;
                        stack1 = 1;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        stack1 /= local5;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local3 = stack0;
                        stack0 = local4;
                        stack1 = 1;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        stack1 /= local5;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local4 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::center
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['center'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgcenter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(local3, local4);
                        } else {
                            // 7 0::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3, local4);
                                } else { 
                                   stack0.axCallProperty($names[8], [local3, local4], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // JIT: potential type:7 0::Number
                        stack1 = local2;
//                        stack2 = local6;// JIT: redundant assigment, value unused
                        stack1 *= local6;
                        // 7 0::I
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.I = stack1;
                        } else {
                            context.setproperty($names[5], stack1, local1);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_ComputeMass.js
})