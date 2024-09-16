(function anonymous(context
) {
/*
	Index: 674
	Path:  entities/particles/ParticlesManager::m_fanParticle
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(3)['$BgMath']; // :Math

    return function compiled_m_fanParticle(local1 /* Number */, local2 /* Number */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
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
                        // JIT: potential type:7 0::Number
                        stack0 = local2;
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        stack0 -= 10;
                        stack0 = +stack0;
                        local2 = stack0;
                        // 7 0::FanParticle
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        stack0 = context.constructprop($names[0], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        stack2 = stack1;
                        local4 = stack2;
                        // JIT: potential type:7 0::Number
                        stack2 = local3;
//                        stack3 = 18;// JIT: redundant assigment, value unused
                        stack2 /= 18;
                        stack3 = stack2;
                        local5 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[1], stack2, stack1);
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local5;
                        } else {
                            context.setproperty($names[2], local5, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        //Possible type:7 0::FanParticle
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['scaleX'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$BgscaleX;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 0.8;
                        if (!(0.8 < stack0)) { p = 73; continue; };
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        stack1 = local4;
//                        stack2 = 0.8;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0.8;// JIT: redundant assigment, value unused
                        local5 = 0.8;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = 0.8;
                        } else {
                            context.setproperty($names[1], 0.8, stack1);
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleX = local5;
                        } else {
                            context.setproperty($names[2], local5, local4);
                        }
                        { p = 103; continue; };
                    case 73:
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['scaleX'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$BgscaleX;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 0.5;
                        if (!(0.5 > stack0)) { p = 103; continue; };
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        local5 = 0.5;
                        // 7 0::scaleY
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleY = 0.5;
                        } else {
                            context.setproperty($names[1], 0.5, local4);
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleX = local5;
                        } else {
                            context.setproperty($names[2], local5, local4);
                        }
                    case 103:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
//                        stack3 = 5;// JIT: redundant assigment, value unused
                        stack2 += 5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local2;
//                        stack4 = 0;// JIT: redundant assigment, value unused
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
//                        stack6 = 5;// JIT: redundant assigment, value unused
                        stack5 *= 5;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 += 2;
                        stack5 = -stack5;
//                        stack6 = 0.8;// JIT: redundant assigment, value unused
//                        stack7 = false;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgpushParticle(local4, stack2, local2, 0, stack5, 0.8, false);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_fanParticle.js
})