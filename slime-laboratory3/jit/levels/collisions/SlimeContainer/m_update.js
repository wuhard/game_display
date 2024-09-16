(function anonymous(context
) {
/*
	Index: 1660
	Path:  levels/collisions/SlimeContainer::m_update
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(8)['$BgMath']; // :Math

    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
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
        let stack7 = undefined;
        let stack8 = undefined;
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
                        local1 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dropDelay
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgdropDelay;
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 44; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local4 = stack1;
                        // 7 0::dropDelay
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgdropDelay;
                        stack0 = (stack0 | 0) - 1;
                        local5 = stack0;
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::dropDelay
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.dropDelay = local5;
                        } else {
                            context.setproperty($names[0], local5, local4);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                    case 44:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::slimeDropRequest
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgslimeDropRequest;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 62; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dropDelay
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgdropDelay;
                        stack1 = 0;
                        stack0 = stack0 <= 0;
                    case 62:
                        if (!stack0) { p = 133; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::slimeDropRequest
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgslimeDropRequest = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels.collisions::SlimeCollision
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$Bglevel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgxPos;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack4 = this.$BglevelCollisionSprite;
                        // 7 0::width
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        stack3 += stack4;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack4 = this.$BgyPos;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack5 = this.$BglevelCollisionSprite;
                        // 7 0::height
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
                        stack4 += stack5;
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack7 = 0;// JIT: redundant assigment, value unused
//                        stack8 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:SlimeCollision/LevelCollision/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3, stack4, 0, 0, 0, this], $names[1]);
                        // 7 0::slimeCollision
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::SlimeCollision  */ 
                        this.$BgslimeCollision = stack1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::levelCollisions
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelCollisions'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelCollisions;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::slimeCollision
                        //Possible type:7 0:levels.collisions::SlimeCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::SlimeCollision  */ 
                        stack1 = this.$BgslimeCollision;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[6], [stack1], false);
                                }
                            }
                        }
                    case 133:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local4 = stack1;
                        // 7 0::fizzleCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgfizzleCounter;
                        stack0 = (stack0 | 0) - 1;
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        // 7 0::fizzleCounter
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.fizzleCounter = local5;
                        } else {
                            context.setproperty($names[7], local5, local4);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        //JIT: Emit inline return
                        if (!(0 > stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
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
                                    stack1 = __Math.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack2 = 20;// JIT: redundant assigment, value unused
                        stack1 *= 20;
                        // 7 0::fizzleCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgfizzleCounter = (stack1|0);
                        // 7 0::FizzleParticle
                        stack0 = scope0.findScopeProperty($names[10], true, false);
                        stack0 = context.constructprop($names[10], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local1 = stack0;
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
                                    stack0 = __Math.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 *= 2;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
                        stack0 |= 0;
                        local2 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.gotoAndStop(local2);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = local1;
                                const m = t.$BggotoAndStop || (t = sec.box(local1), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   local1.axCallProperty($names[11], [local2], false);
                                }
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[12]);
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
                                    stack2 = __Math.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BglevelCollisionSprite;
                        // 7 0::width
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['width'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgwidth;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 -= 2;
//                        stack4 = local1;// JIT: redundant assigment, value unused
                        // 7 0::width
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['width'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack3 -= stack4;
                        stack2 *= stack3;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        local3 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxPos;
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 += 2;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        stack2 += local3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
//                        stack4 = local1;// JIT: redundant assigment, value unused
                        // 7 0::height
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['height'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$Bgheight;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 -= stack4;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack4 = this.$BglevelCollisionSprite;
                        // 7 0::height
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['height'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgheight;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 += stack4;
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 -= 4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
//                        stack6 = 0.89;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local1, stack2, stack3, 0, 0, 0.89);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1, stack2, stack3, 0, 0, 0.89);
                                } else { 
                                   stack0.axCallProperty($names[14], [local1, stack2, stack3, 0, 0, 0.89], false);
                                }
                            }
                        }
                    case 278:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/SlimeContainer/m_update.js
})