(function anonymous(context
) {
/*
	Index: 937
	Path:  fl/motion/BezierSegment::m_getYForX
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getYForX(local1 /* Number */, local2 /* Array */ = null) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local6 = NaN;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack0 = this.$Bga;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack1 = this.$Bgd;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!(stack1 > stack0)) { p = 73; continue; };
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack1 = this.$Bga;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack2 = 1e-16;// JIT: redundant assigment, value unused
                        stack1 += 1e-16;
                        if (!(stack1 >= local1)) { p = 46; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack0 = this.$Bga;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        return (+stack0);
                    case 46:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack1 = this.$Bgd;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack2 = 1e-16;// JIT: redundant assigment, value unused
                        stack1 -= 1e-16;
                        if (!(stack1 <= local1)) { p = 69; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack0 = this.$Bgd;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        return (+stack0);
                    case 69:
                        { p = 119; continue; };
                    case 73:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack1 = this.$Bga;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack2 = 1e-16;// JIT: redundant assigment, value unused
                        stack1 += 1e-16;
                        if (!(stack1 <= local1)) { p = 96; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack0 = this.$Bga;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        return (+stack0);
                    case 96:
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack1 = this.$Bgd;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack2 = 1e-16;// JIT: redundant assigment, value unused
                        stack1 -= 1e-16;
                        if (!(stack1 >= local1)) { p = 119; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack0 = this.$Bgd;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        return (+stack0);
                    case 119:
                        // JIT: potential type:7 0::Array
                        stack0 = local2;
                        if (local2) { p = 162; continue; };
                        // 7 0::getCubicCoefficients
                        stack0 = scope0.findScopeProperty($names[2], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack1 = this.$Bga;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::b
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack2 = this.$Bgb;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::c
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack3 = this.$Bgc;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack4 = this.$Bgd;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['x'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getCubicCoefficients(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::getCubicCoefficients
                            {
                                let t = stack0;
                                const m = t.$BggetCubicCoefficients || (t = sec.box(stack0), t.$BggetCubicCoefficients);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetCubicCoefficients (stack1, stack2, stack3, stack4);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[2], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_getYForX] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                    case 162:
                        // 7 0::getCubicRoots
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        // JIT: potential type:7 0::Array
                        stack1 = local2;
                        stack2 = 0;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 0;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[5], 0);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // JIT: potential type:7 0::Array
                        stack2 = local2;
                        stack3 = 1;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 1;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[5], 1);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // JIT: potential type:7 0::Array
                        stack3 = local2;
                        stack4 = 2;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 2;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[5], 2);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // JIT: potential type:7 0::Array
                        stack4 = local2;
                        stack5 = 3;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 3;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[5], 3);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack5 = local1;
                        stack4 -= local1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getCubicRoots(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::getCubicRoots
                            {
                                let t = stack0;
                                const m = t.$BggetCubicRoots || (t = sec.box(stack0), t.$BggetCubicRoots);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetCubicRoots (stack1, stack2, stack3, stack4);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[4], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_getYForX] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        // 7 0::NaN
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgNaN;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        stack0 = +stack0;
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0::length
                        //Possible type:7 0::NaN
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['length'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bglength;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = 0;
                        if (0 != stack0) { p = 223; continue; };
                        stack0 = 0;
                        stack0 = +0;
                        local4 = stack0;
                        { p = 307; continue; };
                    case 223:
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['length'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$Bglength;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 246; continue; };
                        stack0 = local3;
                        stack1 = 0;
                        // 27 {3, 0, 0:fl.motion, 3, 2:fl.motion, 0:http://adobe.com/AS3/2006/builtin, 1:fl.motion:BezierSegment, 5:fl.motion:BezierSegment, 5:Object}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[5], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local4 = stack0;
                        { p = 307; continue; };
                    case 246:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local7 = 0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        
                        local8 = local3;
                        { p = 296; continue; };
                    case 258:
                        stack0 = local8;
                        stack1 = local7;
                        stack0 = sec.box(local8).axNextValue(local7);
                        stack0 = +stack0;
                        local6 = stack0;
                        stack0 = 0;
                        stack1 = local6;
                        stack0 = 0 <= local6;
                        stack1 = stack0;
                        if (!stack1) { p = 283; continue; };
                        stack0 = local6;
                        stack1 = 1;
                        stack0 = local6 <= 1;
                    case 283:
                        if (!stack0) { p = 296; continue; };
                        stack0 = local6;
                        stack0 = +local6;
                        local4 = stack0;
                        { p = 303; continue; };
                    case 296:
                        temp = context.hasnext2(local8, local7);
                        local8 = temp[0];
                        local7 = temp[1];
                        stack0 = local7 > 0;
                        if (stack0) { p = 258; continue; };
                    case 303:
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                    case 307:
                        // 7 0::isNaN
                        stack0 = scope0.findScopeProperty($names[8], true, false);
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.isNaN(local4);
                        } else {
                            // 7 0::isNaN
                            {
                                let t = stack0;
                                const m = t.$BgisNaN || (t = sec.box(stack0), t.$BgisNaN);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgisNaN (local4);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[8], [local4], false);
                                }
                            }
                        }
                        if (!stack0) { p = 324; continue; };
                        // 7 0::NaN
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgNaN;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        return (+stack0);
                    case 324:
                        // 7 0::getSingleValue
                        stack0 = scope0.findScopeProperty($names[9], true, false);
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::a
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack2 = this.$Bga;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::b
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack3 = this.$Bgb;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::c
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack4 = this.$Bgc;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['y'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::d
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
                        stack5 = this.$Bgd;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Point
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['y'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgy;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getSingleValue(local4, stack2, stack3, stack4, stack5);
                        } else {
                            // 7 0::getSingleValue
                            {
                                let t = stack0;
                                const m = t.$BggetSingleValue || (t = sec.box(stack0), t.$BggetSingleValue);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetSingleValue (local4, stack2, stack3, stack4, stack5);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[9], [local4, stack2, stack3, stack4, stack5], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        stack1 = stack0;
                        local5 = stack1;
                        return (+stack0);
                    }
                }
            }
//# sourceURL=http://jit/fl/motion/BezierSegment/m_getYForX.js
})