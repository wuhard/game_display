(function anonymous(context
) {
/*
	Index: 507
	Path:  Box2D/Collision/b2AABB::m_RayCast
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(6)['$BgMath']; // :Math

    return function compiled_m_RayCast(local1 /* b2RayCastOutput */, local2 /* b2RayCastInput */) {
        // Possible use a real "this"
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local12 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local13 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local14 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local15 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local16 = NaN;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local3 = stack0;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgNumber;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::MAX_VALUE
                        //Possible type:7 0::Number
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MAX_VALUE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMAX_VALUE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = +stack0;
                        local4 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::p1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['p1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgp1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = +stack0;
                        local5 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::p1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['p1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgp1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::p2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['p2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgp2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::p1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['p1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgp1;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::p2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['p2'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgp2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastInput// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::p1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['p1'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgp1;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local8 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.abs(local7);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgabs (local7);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[7], [local7], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local9 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.abs(local8);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgabs (local8);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[7], [local8], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local10 = stack0;
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastOutput// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::normal
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['normal'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgnormal;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[9], true, false);
                            _e || console.warn('[m_RayCast] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        stack0 = local9;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgNumber;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['MIN_VALUE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgMIN_VALUE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        if (!(stack1 > local9)) { p = 173; continue; };
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BglowerBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = local5 < stack1;
                        stack1 = stack0;
                        if (stack1) { p = 163; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = local5;
                        stack0 = stack0 < local5;
                    case 163:
                        if (!stack0) { p = 169; continue; };
                        stack0 = false;
                        return false;
                    case 169:
                        { p = 294; continue; };
                    case 173:
                        stack0 = 1;
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        stack0 /= local7;
                        stack0 = +stack0;
                        local12 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BglowerBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 -= local5;
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        stack0 *= local12;
                        stack0 = +stack0;
                        local13 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        stack0 -= local5;
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        stack0 *= local12;
                        stack0 = +stack0;
                        local14 = stack0;
                        stack0 = -1;
                        stack0 = +-1;
                        local16 = stack0;
                        stack0 = local13;
                        stack1 = local14;
                        if (!(local14 < local13)) { p = 246; continue; };
                        stack0 = local13;
                        stack0 = +local13;
                        local15 = stack0;
                        stack0 = local14;
                        stack0 = +local14;
                        local13 = stack0;
                        stack0 = local15;
                        stack0 = +local15;
                        local14 = stack0;
                        stack0 = 1;
                        stack0 = +1;
                        local16 = stack0;
                    case 246:
                        stack0 = local13;
                        stack1 = local3;
                        if (!(local3 < local13)) { p = 271; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local16;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.x = local16;
                        } else {
                            context.setproperty($names[3], local16, local11);
                        }
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.y = 0;
                        } else {
                            context.setproperty($names[4], 0, local11);
                        }
                        stack0 = local13;
                        stack0 = +local13;
                        local3 = stack0;
                    case 271:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local14;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.min(local4, local14);
                        } else {
                            // 7 0::min
                            {
                                let t = __Math;
                                const m = t.$Bgmin || (t = sec.box(__Math), t.$Bgmin);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgmin (local4, local14);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[11], [local4, local14], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local4 = stack0;
                        stack0 = local3;
                        stack1 = local4;
                        if (!(local4 < local3)) { p = 294; continue; };
                        stack0 = false;
                        return false;
                    case 294:
                        stack0 = local10;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgNumber;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['MIN_VALUE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgMIN_VALUE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        if (!(stack1 > local10)) { p = 341; continue; };
                        stack0 = local6;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BglowerBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack0 = local6 < stack1;
                        stack1 = stack0;
                        if (stack1) { p = 331; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = local6;
                        stack0 = stack0 < local6;
                    case 331:
                        if (!stack0) { p = 337; continue; };
                        stack0 = false;
                        return false;
                    case 337:
                        { p = 462; continue; };
                    case 341:
                        stack0 = 1;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        stack0 /= local8;
                        stack0 = +stack0;
                        local12 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BglowerBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 -= local6;
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        stack0 *= local12;
                        stack0 = +stack0;
                        local13 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 -= local6;
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        stack0 *= local12;
                        stack0 = +stack0;
                        local14 = stack0;
                        stack0 = -1;
                        stack0 = +-1;
                        local16 = stack0;
                        stack0 = local13;
                        stack1 = local14;
                        if (!(local14 < local13)) { p = 414; continue; };
                        stack0 = local13;
                        stack0 = +local13;
                        local15 = stack0;
                        stack0 = local14;
                        stack0 = +local14;
                        local13 = stack0;
                        stack0 = local15;
                        stack0 = +local15;
                        local14 = stack0;
                        stack0 = 1;
                        stack0 = +1;
                        local16 = stack0;
                    case 414:
                        stack0 = local13;
                        stack1 = local3;
                        if (!(local3 < local13)) { p = 439; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = local16;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.y = local16;
                        } else {
                            context.setproperty($names[4], local16, local11);
                        }
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.x = 0;
                        } else {
                            context.setproperty($names[3], 0, local11);
                        }
                        stack0 = local13;
                        stack0 = +local13;
                        local3 = stack0;
                    case 439:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local14;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.min(local4, local14);
                        } else {
                            // 7 0::min
                            {
                                let t = __Math;
                                const m = t.$Bgmin || (t = sec.box(__Math), t.$Bgmin);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgmin (local4, local14);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[11], [local4, local14], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local4 = stack0;
                        stack0 = local3;
                        stack1 = local4;
                        if (!(local4 < local3)) { p = 462; continue; };
                        stack0 = false;
                        return false;
                    case 462:
//                        // JIT: potential type:7 0:Box2D.Collision::b2RayCastOutput// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::fraction
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.fraction = local3;
                        } else {
                            context.setproperty($names[12], local3, local1);
                        }
                        stack0 = true;
                        return true;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/b2AABB/m_RayCast.js
})