(function anonymous(context
) {
/*
	Index: 1108
	Path:  entities/Hero.init_track
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Array
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_geom__Point_def = context.getTopLevel(2); // flash.geom:Point

    return function compiled_init_track(local1 /* Array */) {
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local8 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local10 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local11 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
                        // 7 0::Array
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack0 = context.constructFast(stack0, [], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
                        stack0 = 0;
                        stack0 = +0;
                        local3 = stack0;
                        { p = 299; continue; };
                    case 66:
                        // JIT: potential type:7 0::Array
                        stack0 = local1;
                        stack1 = local3;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[init_track] Coerce Type not found:', "Point")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        // JIT: potential type:7 0::Array
                        stack0 = local1;
                        stack1 = local3;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
//                        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['length'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bglength;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 %= stack2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
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
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[init_track] Coerce Type not found:', "Point")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        // JIT: potential type:7 0::Array
                        stack0 = local1;
                        stack1 = local3;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 += 2;
//                        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['length'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bglength;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 %= stack2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
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
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[init_track] Coerce Type not found:', "Point")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                        // JIT: potential type:7 0::Array
                        stack0 = local1;
                        stack1 = local3;
//                        stack2 = 3;// JIT: redundant assigment, value unused
                        stack1 += 3;
//                        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['length'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bglength;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 %= stack2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
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
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[init_track] Coerce Type not found:', "Point")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local7 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local8 = 0;
                        { p = 287; continue; };
                    case 136:
                        // 7 5:entities:Hero::calculate_catmull
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['x'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack3 = local5;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack3 = local5['x'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack4 = local6;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack4 = local6['x'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack5 = local7;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack5 = local7['x'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack5 = temp.$Bgx;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$Bgcalculate_catmull(local8, stack2, stack3, stack4, stack5);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[init_track] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local9 = stack0;
                        // 7 5:entities:Hero::calculate_catmull
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['y'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack3 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack3 = local5['y'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack4 = local6;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])) {
                            stack4 = local6['y'];
                        } else {
                            temp = local6[AX_CLASS_SYMBOL] ? local6 : sec.box(local6);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack5 = local7;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack5 = local7['y'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack5 = temp.$Bgy;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[5]);
                            }
                        }
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$Bgcalculate_catmull(local8, stack2, stack3, stack4, stack5);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[0], true, false);
                            _e || console.warn('[init_track] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local10 = stack0;
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
                        stack1 = local9;
                        stack2 = 0;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[1], 0);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack2 = local10;
                        stack3 = 0;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
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
                        stack0 = context.constructprop($names[2], flash_geom__Point_def, [stack1, stack2]);
                        //IR: Drop coerce, reason: redundant
                        local11 = stack0;
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
                        stack1 = local9;
                        stack2 = 1;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[1], 1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack2 = local10;
                        stack3 = 1;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 1;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[1], 1);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = context.constructprop($names[2], flash_geom__Point_def, [stack1, stack2]);
                        //IR: Drop coerce, reason: redundant
                        local12 = stack0;
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
                        stack1 = local9;
                        stack2 = 2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[1], 2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack2 = local10;
                        stack3 = 2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 2;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[1], 2);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = context.constructprop($names[2], flash_geom__Point_def, [stack1, stack2]);
                        //IR: Drop coerce, reason: redundant
                        local13 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.push(local11);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local2;
                                const m = t.$Bgpush || (t = sec.box(local2), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local11);
                                } else { 
                                   local2.axCallProperty($names[6], [local11], false);
                                }
                            }
                        }
                        stack0 = local8;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 += 0.5;
                        stack0 = +stack0;
                        local8 = stack0;
                    case 287:
                        stack0 = local8;
                        stack1 = 1;
                        if (1 > local8) { p = 136; continue; };
                        stack0 = local3;
                        stack0++;
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local3 = stack0;
                    case 299:
                        stack0 = local3;
//                        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['length'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (stack1 > local3) { p = 66; continue; };
                        stack0 = local2;
                        return local2;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/init_track.js
})