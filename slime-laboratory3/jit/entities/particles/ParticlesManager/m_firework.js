(function anonymous(context
) {
/*
	Index: 671
	Path:  entities/particles/ParticlesManager::m_firework
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_m_firework(local1 /* Number */, local2 /* Number */) {
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
                        // 7 0::FireworkSprite
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        stack0 = context.constructprop($names[0], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
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
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
                        stack0 |= 0;
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 7 0::gfxHandle
                        //Possible type:7 0::Math
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['gfxHandle'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(local4);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   stack0.axCallProperty($names[4], [local4], false);
                                }
                            }
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.gotoAndStop(local4);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = local3;
                                const m = t.$BggotoAndStop || (t = sec.box(local3), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   local3.axCallProperty($names[4], [local4], false);
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
                                    stack0 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack1 = 6;// JIT: redundant assigment, value unused
                        stack0 *= 6;
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        stack0 -= 3;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local5 = stack1;
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 81; continue; };
                        stack0 = local5;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 -= 2;
                        stack0 = +stack0;
                        local5 = stack0;
                        { p = 89; continue; };
                    case 81:
                        stack0 = local5;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 += 2;
                        stack0 = +stack0;
                        local5 = stack0;
                    case 89:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // JIT: potential type:7 0::Number
                        stack3 = local2;
//                        stack4 = 120;// JIT: redundant assigment, value unused
                        stack3 += 120;
//                        stack4 = local5;// JIT: redundant assigment, value unused
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
                                    stack5 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack6 = 5;// JIT: redundant assigment, value unused
                        stack5 *= 5;
//                        stack6 = 10;// JIT: redundant assigment, value unused
                        stack5 += 10;
                        stack5 = -stack5;
//                        stack6 = 0.98;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushParticle(local3, local1, stack3, local5, stack5, 0.98);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_firework.js
})