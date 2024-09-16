(function anonymous(context
) {
/*
	Index: 676
	Path:  entities/particles/ParticlesManager::m_createIcycleParticles
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_m_createIcycleParticles(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
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
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
        let stack8 = undefined;
        let stack9 = undefined;
        let stack10 = undefined;
        let stack11 = undefined;
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
                        local3 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local6 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local7 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local8 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local9 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local10 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local11 = null;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = context.savedScope.global.object;
                        stack2 = 4;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgrandom ();
                                } else { 
                                    stack3 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack4 = 3;// JIT: redundant assigment, value unused
                        stack3 *= 3;
                        stack2 += stack3;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        local5 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 427; continue; };
                    case 57:
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgrandom ();
                                } else { 
                                    stack2 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 *= 3;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        local4 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgrandom ();
                                } else { 
                                    stack0 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        stack0 *= 4;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 -= 2;
                        stack0 = +stack0;
                        local8 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgrandom ();
                                } else { 
                                    stack0 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 *= 2;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 += 2;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local9 = stack0;
                        stack0 = local4;
                        stack1 = 0;
                        if (0 != local4) { p = 132; continue; };
                        // 7 0::Glass1ParticleSprite
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        stack0 = context.constructprop($names[3], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_createIcycleParticles] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        { p = 166; continue; };
                    case 132:
                        stack0 = local4;
                        stack1 = 1;
                        if (1 != local4) { p = 155; continue; };
                        // 7 0::Glass2ParticleSprite
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        stack0 = context.constructprop($names[5], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_createIcycleParticles] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                        { p = 166; continue; };
                    case 155:
                        // 7 0::Glass3ParticleSprite
                        stack0 = scope0.findScopeProperty($names[6], true, false);
                        stack0 = context.constructprop($names[6], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[m_createIcycleParticles] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local11 = stack0;
                    case 166:
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
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = 0.75;// JIT: redundant assigment, value unused
                        stack0 *= 0.75;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[2], [], false);
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
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack3 = 0.25;// JIT: redundant assigment, value unused
                        stack2 *= 0.25;
                        stack1 *= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local6 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        stack0 += 4;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 *= 8;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local10 = stack0;
                        stack0 = local3;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 %= 2;
                        stack1 = 0;
                        if (0 != stack0) { p = 250; continue; };
                        stack0 = local6;
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        stack0 *= -1;
                        stack0 = +stack0;
                        local6 = stack0;
                        // JIT: potential type:7 0::Number
                        stack0 = local1;
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        stack0 -= 4;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 *= 8;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local10 = stack0;
                    case 250:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgrandom ();
                                } else { 
                                    stack0 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack1 = 5;// JIT: redundant assigment, value unused
                        stack0 *= 5;
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        stack0 += 4;
                        stack0 = +stack0;
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local11;// JIT: redundant assigment, value unused
//                        stack2 = local10;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack3 = local2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgrandom ();
                                } else { 
                                    stack4 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack5 = 16;// JIT: redundant assigment, value unused
                        stack4 *= 16;
                        stack3 += stack4;
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 -= 8;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
//                        stack5 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.sin(local6);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgsin (local6);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[8], [local6], false);
                                }
                            }
                        }
//                        stack5 = local7;// JIT: redundant assigment, value unused
                        stack4 *= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.cos(local6);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgcos (local6);
                                } else { 
                                    stack5 = __Math.axCallProperty($names[9], [local6], false);
                                }
                            }
                        }
//                        stack6 = local7;// JIT: redundant assigment, value unused
                        stack5 *= local7;
//                        stack6 = 0.9;// JIT: redundant assigment, value unused
//                        stack7 = false;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack8 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack8 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack8 = t.$Bgrandom ();
                                } else { 
                                    stack8 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack9 = 10;// JIT: redundant assigment, value unused
                        stack8 *= 10;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack9 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack9 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack9 = t.$Bgrandom ();
                                } else { 
                                    stack9 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack10 = 100;// JIT: redundant assigment, value unused
                        stack9 *= 100;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack10 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack10 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack10 = t.$Bgrandom ();
                                } else { 
                                    stack10 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack11 = 2;// JIT: redundant assigment, value unused
                        stack10 *= 2;
//                        stack11 = 2;// JIT: redundant assigment, value unused
                        stack10 += 2;
//                        stack11 = 15;// JIT: redundant assigment, value unused
                        stack10 *= 15;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushParticle(local11, local10, stack3, stack4, stack5, 0.9, false, stack8, stack9, stack10);
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgrandom ();
                                } else { 
                                    stack2 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack3 = 3;// JIT: redundant assigment, value unused
                        stack2 *= 3;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 0;
                        if (0 != stack0) { p = 389; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = 90;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.rotation = 90;
                        } else {
                            context.setproperty($names[10], 90, local11);
                        }
                        { p = 425; continue; };
                    case 389:
                        stack0 = local4;
                        stack1 = 1;
                        if (1 != local4) { p = 409; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.rotation = 180;
                        } else {
                            context.setproperty($names[10], 180, local11);
                        }
                        { p = 425; continue; };
                    case 409:
                        stack0 = local4;
                        stack1 = 2;
                        if (2 != local4) { p = 425; continue; };
//                        stack0 = local11;// JIT: redundant assigment, value unused
//                        stack1 = 270;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(local11 != undefined && local11[AX_CLASS_SYMBOL])){
                            local11.rotation = 270;
                        } else {
                            context.setproperty($names[10], 270, local11);
                        }
                    case 425:
                        local3 = (local3 | 0) + 1;
                    case 427:
                        stack0 = local3;
                        stack1 = local5;
                        if (local5 > local3) { p = 57; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_createIcycleParticles.js
})