(function anonymous(context
) {
/*
	Index: 669
	Path:  entities/particles/ParticlesManager::m_bigPinkBlockExplosion
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(2)['$BgMath']; // :Math

    return function compiled_m_bigPinkBlockExplosion(local1 /* int */, local2 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);
        /* Force int coerce */
        local2 = (local2|0);
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
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
                        local3 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        { p = 235; continue; };
                    case 15:
                        // 7 0::PinkBigParticle
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        stack0 = context.constructprop($names[0], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        stack1 = local4;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.gotoAndStop(stack1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = local3;
                                const m = t.$BggotoAndStop || (t = sec.box(local3), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local3.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        stack0 = local4;
                        stack1 = 0;
                        if (0 != local4) { p = 86; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
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
                                    stack4 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack5 = 6;// JIT: redundant assigment, value unused
                        stack4 *= 6;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 -= 3;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgrandom ();
                                } else { 
                                    stack5 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack6 = 5;// JIT: redundant assigment, value unused
                        stack5 *= 5;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 += 2;
                        stack5 = -stack5;
//                        stack6 = 0.98;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushPointParticle(local3, local1, local2, stack4, stack5, 0.98);
                        { p = 233; continue; };
                    case 86:
                        stack0 = local4;
                        stack1 = 1;
                        if (1 != local4) { p = 138; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::int
                        stack2 = local1;
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 += 8;
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
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
                                    stack4 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack5 = 6;// JIT: redundant assigment, value unused
                        stack4 *= 6;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 -= 3;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgrandom ();
                                } else { 
                                    stack5 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack6 = 5;// JIT: redundant assigment, value unused
                        stack5 *= 5;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 += 2;
                        stack5 = -stack5;
//                        stack6 = 0.98;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushPointParticle(local3, stack2, local2, stack4, stack5, 0.98);
                        { p = 233; continue; };
                    case 138:
                        stack0 = local4;
                        stack1 = 2;
                        if (2 != local4) { p = 190; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // JIT: potential type:7 0::int
                        stack3 = local2;
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 += 8;
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
                                    stack4 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack5 = 6;// JIT: redundant assigment, value unused
                        stack4 *= 6;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 -= 3;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgrandom ();
                                } else { 
                                    stack5 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack6 = 5;// JIT: redundant assigment, value unused
                        stack5 *= 5;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 += 2;
                        stack5 = -stack5;
//                        stack6 = 0.98;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushPointParticle(local3, local1, stack3, stack4, stack5, 0.98);
                        { p = 233; continue; };
                    case 190:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::int
                        stack2 = local1;
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 += 8;
                        // JIT: potential type:7 0::int
                        stack3 = local2;
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 += 8;
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
                                    stack4 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack5 = 6;// JIT: redundant assigment, value unused
                        stack4 *= 6;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 -= 3;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgrandom ();
                                } else { 
                                    stack5 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack6 = 5;// JIT: redundant assigment, value unused
                        stack5 *= 5;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 += 2;
                        stack5 = -stack5;
//                        stack6 = 0.98;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushPointParticle(local3, stack2, stack3, stack4, stack5, 0.98);
                    case 233:
                        local4 = (local4 | 0) + 1;
                    case 235:
                        stack0 = local4;
                        stack1 = 4;
                        if (4 > local4) { p = 15; continue; };
                        // 7 0::SmokeExplosionSprite
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        stack0 = context.constructprop($names[4], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0::SmokeExplosionSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::int
                        stack2 = local1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::TILE_WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['TILE_WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgTILE_WIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack2 += stack3;
                        // JIT: potential type:7 0::int
                        stack3 = local2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::TILE_HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['TILE_HEIGHT'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$BgTILE_HEIGHT;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack3 += stack4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
//                        stack6 = 0.75;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local5, stack2, stack3, 0, 0, 0.75);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5, stack2, stack3, 0, 0, 0.75);
                                } else { 
                                   stack0.axCallProperty($names[9], [local5, stack2, stack3, 0, 0, 0.75], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_bigPinkBlockExplosion.js
})