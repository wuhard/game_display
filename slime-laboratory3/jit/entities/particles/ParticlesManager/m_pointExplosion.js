(function anonymous(context
) {
/*
	Index: 673
	Path:  entities/particles/ParticlesManager::m_pointExplosion
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(2)['$BgMath']; // :Math

    return function compiled_m_pointExplosion(local1 /* Number */, local2 /* Number */, local3 /* int */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force int coerce */
        local3 = (local3|0);
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
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local6 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local7 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local9 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local10 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local11 = 0;
                        // JIT: potential type:7 0::int
                        stack0 = local3;
                        stack1 = 3;
                        if (3 != local3) { p = 225; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
                        { p = 213; continue; };
                    case 50:
                        // 7 0::LifeParticle
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        stack0 = context.constructprop($names[0], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local4 = stack0;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
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
                                    stack2 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        stack2 += 1;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local4, ((_a !== 'object' && _a !== 'function' ) || local4 == null || local4[AX_CLASS_SYMBOL]))) {
                            local4.gotoAndStop(local5);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = local4;
                                const m = t.$BggotoAndStop || (t = sec.box(local4), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   local4.axCallProperty($names[4], [local5], false);
                                }
                            }
                        }
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
                                    stack0 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        stack0 *= 4;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 += 2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local6 = stack1;
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
//                        stack1 = 6;// JIT: redundant assigment, value unused
                        stack0 /= 6;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local7 = stack1;
//                        stack1 = 80;// JIT: redundant assigment, value unused
                        stack0 /= 80;
                        stack0 = +stack0;
                        local7 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        stack3 = local7;
                        local12 = stack3;
                        // 7 0::scaleY
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleY = local7;
                        } else {
                            context.setproperty($names[5], local7, local4);
                        }
//                        stack1 = local12;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleX = local12;
                        } else {
                            context.setproperty($names[6], local12, local4);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 += 4;
                        // JIT: potential type:7 0::Number
                        stack3 = local2;
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 += 4;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack5 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack5 = temp.$BgPI;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack6 = 4;// JIT: redundant assigment, value unused
                        stack5 /= 4;
//                        stack6 = local8;// JIT: redundant assigment, value unused
                        stack5 *= local8;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.sin(stack5);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgsin (stack5);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[8], [stack5], false);
                                }
                            }
                        }
                        stack5 = 8;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        stack5 -= local6;
                        stack4 *= stack5;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack6 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack6 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack6 = temp.$BgPI;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack7 = 4;// JIT: redundant assigment, value unused
                        stack6 /= 4;
//                        stack7 = local8;// JIT: redundant assigment, value unused
                        stack6 *= local8;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.cos(stack6);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgcos (stack6);
                                } else { 
                                    stack5 = __Math.axCallProperty($names[9], [stack6], false);
                                }
                            }
                        }
                        stack6 = 8;
//                        stack7 = local6;// JIT: redundant assigment, value unused
                        stack6 -= local6;
                        stack5 *= stack6;
//                        stack6 = 0.75;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushParticle(local4, stack2, stack3, stack4, stack5, 0.75);
                        local8 = (local8 | 0) + 1;
                    case 213:
                        stack0 = local8;
                        stack1 = 8;
                        if (8 > local8) { p = 50; continue; };
                        //JIT: Emit inline return
                        return;
                    case 225:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local11 = 0;
                        { p = 293; continue; };
                    case 233:
                        // 7 0::PointParticle
                        stack0 = scope0.findScopeProperty($names[10], true, false);
                        stack0 = context.constructprop($names[10], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local10 = stack1;
                        stack1 = 45;
//                        stack2 = local11;// JIT: redundant assigment, value unused
                        stack1 *= local11;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = local10;// JIT: redundant assigment, value unused
                        // 7 0::gfxHandle
                        //Possible type:7 0::PointParticle
                        if (!(local10 != undefined && local10[AX_CLASS_SYMBOL])) {
                            stack0 = local10['gfxHandle'];
                        } else {
                            temp = local10[AX_CLASS_SYMBOL] ? local10 : sec.box(local10);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::gfxHandle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gfxHandle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack1 = local3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(local3);
                        } else {
                            // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[14], [local3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local10;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 += 4;
                        // JIT: potential type:7 0::Number
                        stack3 = local2;
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 += 4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
//                        stack6 = 0.75;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushParticle(local10, stack2, stack3, 0, 0, 0.75);
                        local11 = (local11 | 0) + 1;
                    case 293:
                        stack0 = local11;
                        stack1 = 8;
                        if (8 > local11) { p = 233; continue; };
                    case 301:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_pointExplosion.js
})