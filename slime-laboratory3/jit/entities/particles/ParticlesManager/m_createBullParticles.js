(function anonymous(context
) {
/*
	Index: 677
	Path:  entities/particles/ParticlesManager::m_createBullParticles
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(3)['$BgMath']; // :Math

    return function compiled_m_createBullParticles(local1 /* Entity */, local2 /* int */) {
        // Possible use a real "this"
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        // JIT: potential type:7 0::int
                        stack0 = local2;
                        stack1 = 3;
                        if (3 == local2) { p = 35; continue; };
                        // 7 0::WhiteBallParticle
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        stack0 = context.constructprop($names[0], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_createBullParticles] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 45; continue; };
                    case 35:
                        // 7 0::WhiteBallVerticalParticle
                        stack0 = scope0.findScopeProperty($names[2], true, false);
                        stack0 = context.constructprop($names[2], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_createBullParticles] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                    case 45:
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
                                    stack0 = __Math.axCallProperty($names[4], [], false);
                                }
                            }
                        }
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        stack0 *= 3;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
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
                                    stack0 = __Math.axCallProperty($names[4], [], false);
                                }
                            }
                        }
//                        stack1 = 6;// JIT: redundant assigment, value unused
                        stack0 *= 6;
                        stack0 |= 0;
                        local5 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.gotoAndPlay(local5);
                        } else {
                            // 7 0::gotoAndPlay
                            {
                                let t = local3;
                                const m = t.$BggotoAndPlay || (t = sec.box(local3), t.$BggotoAndPlay);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   local3.axCallProperty($names[5], [local5], false);
                                }
                            }
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::gfxHandle
                        //Possible type:7 0::Math
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack0 = local3['gfxHandle'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(local4);
                        } else {
                            // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   stack0.axCallProperty($names[7], [local4], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::xPos
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['xPos'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$BgxPos;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::yPos
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['yPos'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$BgyPos;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
                        stack4 = local1;
                        // 7 0::HEIGHT
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['HEIGHT'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$BgHEIGHT;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        stack3 += stack4;
//                        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
                        stack4 = local1;
                        // 7 0::xVel
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['xVel'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$BgxVel;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack4 = -stack4;
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
                                    stack5 = __Math.axCallProperty($names[4], [], false);
                                }
                            }
                        }
//                        stack6 = 3;// JIT: redundant assigment, value unused
                        stack5 *= 3;
                        stack5 = -stack5;
//                        stack6 = 0.8;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushParticle(local3, stack2, stack3, stack4, stack5, 0.8);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_createBullParticles.js
})