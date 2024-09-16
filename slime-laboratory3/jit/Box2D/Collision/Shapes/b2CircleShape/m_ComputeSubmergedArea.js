(function anonymous(context
) {
/*
	Index: 1441
	Path:  Box2D/Collision/Shapes/b2CircleShape::m_ComputeSubmergedArea
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(7)['$BgMath']; // :Math

    return function compiled_m_ComputeSubmergedArea(local1 /* b2Vec2 */, local2 /* Number */, local3 /* b2Transform */, local4 /* b2Vec2 */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local9 = NaN;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
                        stack1 = local3;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_p
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgm_p;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.MulX(local3, stack2);
                        } else {
                            // 7 0::MulX
                            {
                                let t = stack0;
                                const m = t.$BgMulX || (t = sec.box(stack0), t.$BgMulX);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgMulX (local3, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [local3, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_ComputeSubmergedArea] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Dot(local1, local5);
                        } else {
                            // 7 0::Dot
                            {
                                let t = stack0;
                                const m = t.$BgDot || (t = sec.box(stack0), t.$BgDot);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgDot (local1, local5);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [local1, local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        stack0 -= local2;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local6 = stack1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgm_radius;
                        stack1 = -stack1;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack2 = temp.$BgNumber;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['MIN_VALUE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgMIN_VALUE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 += stack2;
                        if (!(stack1 > stack0)) { p = 55; continue; };
                        stack0 = 0;
                        return 0;
                    case 55:
                        stack0 = local6;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgm_radius;
                        if (!(stack1 < local6)) { p = 87; continue; };
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local4;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.SetV(local5);
                        } else {
                            // 7 0::SetV
                            {
                                let t = local4;
                                const m = t.$BgSetV || (t = sec.box(local4), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   local4.axCallProperty($names[6], [local5], false);
                                }
                            }
                        }
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
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgm_radius;
                        stack0 *= stack1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgm_radius;
                        stack0 *= stack1;
                        return (+stack0);
                    case 87:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgm_radius;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgm_radius;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
                        stack0 = local6;
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        stack0 *= local6;
                        stack0 = +stack0;
                        local8 = stack0;
                        stack0 = local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local6;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$Bgm_radius;
                        stack2 /= stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.asin(stack2);
                        } else {
                            // 7 0::asin
                            {
                                let t = __Math;
                                const m = t.$Bgasin || (t = sec.box(__Math), t.$Bgasin);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgasin (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[9], [stack2], false);
                                }
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack2 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack2 = temp.$BgPI;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 /= 2;
                        stack1 += stack2;
                        stack0 *= stack1;
                        stack1 = local6;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = local7;
//                        stack4 = local8;// JIT: redundant assigment, value unused
                        stack3 -= local8;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sqrt(stack3);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsqrt (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[10], [stack3], false);
                                }
                            }
                        }
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local9 = stack0;
                        stack0 = -2;
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        stack0 /= 3;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = local7;
//                        stack3 = local8;// JIT: redundant assigment, value unused
                        stack2 -= local8;
//                        stack3 = 1.5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.pow(stack2, 1.5);
                        } else {
                            // 7 0::pow
                            {
                                let t = __Math;
                                const m = t.$Bgpow || (t = sec.box(__Math), t.$Bgpow);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgpow (stack2, 1.5);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[11], [stack2, 1.5], false);
                                }
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        stack0 /= local9;
                        stack0 = +stack0;
                        local10 = stack0;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local4;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0::Math
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['x'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        stack2 *= local10;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, local4);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local4;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['y'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        stack2 *= local10;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, local4);
                        }
                        stack0 = local9;
                        return (+local9);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2CircleShape/m_ComputeSubmergedArea.js
})