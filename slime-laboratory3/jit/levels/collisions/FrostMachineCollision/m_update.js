(function anonymous(context
) {
/*
	Index: 1789
	Path:  levels/collisions/FrostMachineCollision::m_update
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(4)['$BgMath']; // :Math

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
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local1 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local2 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local3 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::camera
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['camera'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcamera;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgaabb;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        if (!stack0) { p = 51; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_INSIDE_SCREEN
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_INSIDE_SCREEN = true;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[2], true, stack0);
                        }
                        { p = 63; continue; };
                    case 51:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_INSIDE_SCREEN
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_INSIDE_SCREEN = false;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[2], false, stack0);
                        }
                    case 63:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_INSIDE_SCREEN
                        //Possible type:7 0::levelCollisionSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_INSIDE_SCREEN;
                        if (stack0) { p = 72; continue; };
                        return;
                    case 72:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 1:levels.collisions:FrostMachineCollision::counter_1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgcounter_1;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) - 1;
                        local7 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::counter_1
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.counter_1 = local7;
                        } else {
                            context.setproperty($names[3], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 406; continue; };
                        stack0 = 0.8;
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
                                    stack1 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack2 = 0.4;// JIT: redundant assigment, value unused
                        stack1 *= 0.4;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local2 = stack0;
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
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack0 = -stack0;
//                        stack1 = 0.125;// JIT: redundant assigment, value unused
                        stack0 *= 0.125;
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
                                    stack1 = __Math.axCallProperty($names[5], [], false);
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
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = 0.25;// JIT: redundant assigment, value unused
                        stack1 *= 0.25;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local3 = stack0;
                        stack0 = 2;
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
                                    stack1 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 *= 2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local4 = stack0;
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
                                    stack1 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack2 = 3;// JIT: redundant assigment, value unused
                        stack1 *= 3;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 += 2;
                        // 7 1:levels.collisions:FrostMachineCollision::counter_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgcounter_1 = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_FROST
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 200; continue; };
                        // 7 0::IceSmokeParticleSprite2
                        stack0 = scope0.findScopeProperty($names[7], true, false);
                        stack0 = context.constructprop($names[7], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_update] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local1 = stack0;
                        { p = 250; continue; };
                    case 200:
                        // 7 0::SteamSmokeSprite
                        stack0 = scope0.findScopeProperty($names[9], true, false);
                        stack0 = context.constructprop($names[9], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_update] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local1 = stack0;
                        stack0 = local4;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
                        stack0 = +stack0;
                        local4 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
                        stack1 = 0.2;
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
                                    stack2 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 += stack2;
                        // 7 0::alpha
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.alpha = stack1;
                        } else {
                            context.setproperty($names[10], stack1, local1);
                        }
                        stack0 = 0.8;
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
                                    stack1 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack2 = 0.4;// JIT: redundant assigment, value unused
                        stack1 *= 0.4;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local2 = stack0;
                    case 250:
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        stack3 = local2;
                        local6 = stack3;
                        // 7 0::scaleY
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.scaleY = local2;
                        } else {
                            context.setproperty($names[11], local2, local1);
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.scaleX = local6;
                        } else {
                            context.setproperty($names[12], local6, local1);
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
                                    stack0 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 293; continue; };
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['scaleX'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack2 = -1;// JIT: redundant assigment, value unused
                        stack1 *= -1;
                        // 7 0::scaleX
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.scaleX = stack1;
                        } else {
                            context.setproperty($names[12], stack1, local1);
                        }
                    case 293:
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
                                    stack0 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 320; continue; };
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::scaleY
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['scaleY'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgscaleY;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = -1;// JIT: redundant assigment, value unused
                        stack1 *= -1;
                        // 7 0::scaleY
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.scaleY = stack1;
                        } else {
                            context.setproperty($names[11], stack1, local1);
                        }
                    case 320:
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
//                        stack3 = 16;// JIT: redundant assigment, value unused
                        stack2 += 16;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
//                        stack4 = 72;// JIT: redundant assigment, value unused
                        stack3 += 72;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.sin(local3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgsin (local3);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[14], [local3], false);
                                }
                            }
                        }
//                        stack5 = local4;// JIT: redundant assigment, value unused
                        stack4 *= local4;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.cos(local3);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgcos (local3);
                                } else { 
                                    stack5 = __Math.axCallProperty($names[15], [local3], false);
                                }
                            }
                        }
//                        stack6 = local4;// JIT: redundant assigment, value unused
                        stack5 *= local4;
//                        stack6 = 1;// JIT: redundant assigment, value unused
//                        stack7 = false;// JIT: redundant assigment, value unused
//                        stack8 = 0;// JIT: redundant assigment, value unused
                        stack9 = 30;
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
                                    stack10 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack11 = 30;// JIT: redundant assigment, value unused
                        stack10 *= 30;
                        stack9 += stack10;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local1, stack2, stack3, stack4, stack5, 1, false, 0, stack9);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1, stack2, stack3, stack4, stack5, 1, false, 0, stack9);
                                } else { 
                                   stack0.axCallProperty($names[16], [local1, stack2, stack3, stack4, stack5, 1, false, 0, stack9], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[17]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BglevelCollisionSprite;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[17]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['world'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgworld;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[19]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], [stack1, stack2], false);
                                }
                            }
                        }
                    case 406:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 515; continue; };
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
                                    stack0 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 511; continue; };
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
                        // 7 0::TinyIceParticleSprite
                        stack1 = scope0.findScopeProperty($names[21], true, false);
                        stack1 = context.constructprop($names[21], stack1, []);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxPos;
//                        stack3 = 16;// JIT: redundant assigment, value unused
                        stack2 += 16;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 -= 4;
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
                                    stack3 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 *= 8;
                        stack2 += stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
//                        stack4 = 64;// JIT: redundant assigment, value unused
                        stack3 += 64;
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
                                    stack4 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack5 = 48;// JIT: redundant assigment, value unused
                        stack4 *= 48;
                        stack3 += stack4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        stack5 = 1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack6 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack6 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack6 = t.$Bgrandom ();
                                } else { 
                                    stack6 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack7 = 2;// JIT: redundant assigment, value unused
                        stack6 *= 2;
                        stack5 += stack6;
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack7 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack7 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack7 = t.$Bgrandom ();
                                } else { 
                                    stack7 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack8 = 10;// JIT: redundant assigment, value unused
                        stack7 *= 10;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(stack1, stack2, stack3, 0, stack5, 1, stack7);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, 0, stack5, 1, stack7);
                                } else { 
                                   stack0.axCallProperty($names[16], [stack1, stack2, stack3, 0, stack5, 1, stack7], false);
                                }
                            }
                        }
                    case 511:
                        //JIT: Emit inline return
                        return;
                    case 515:
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
                                    stack0 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
                        stack1 = 97;
                        //JIT: Emit inline return
                        if (!(97 < stack0)) { return; }
                        // 7 0::WaterParticleSprite
                        stack0 = scope0.findScopeProperty($names[22], true, false);
                        stack0 = context.constructprop($names[22], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[8], true, false);
                            _e || console.warn('[m_update] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        stack2 = stack1;
                        local5 = stack2;
                        stack2 = 0.8;
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
                                    stack3 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack4 = 0.4;// JIT: redundant assigment, value unused
                        stack3 *= 0.4;
                        stack2 += stack3;
                        stack3 = stack2;
                        local6 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[11], stack2, stack1);
                        }
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local6;
                        } else {
                            context.setproperty($names[12], local6, stack0);
                        }
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
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxPos;
//                        stack3 = 16;// JIT: redundant assigment, value unused
                        stack2 += 16;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 -= 4;
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
                                    stack3 = __Math.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 *= 8;
                        stack2 += stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
//                        stack4 = 64;// JIT: redundant assigment, value unused
                        stack3 += 64;
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 += 4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
//                        stack5 = 0.1;// JIT: redundant assigment, value unused
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local5, stack2, stack3, 0, 0.1, 1);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5, stack2, stack3, 0, 0.1, 1);
                                } else { 
                                   stack0.axCallProperty($names[16], [local5, stack2, stack3, 0, 0.1, 1], false);
                                }
                            }
                        }
                    case 617:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/FrostMachineCollision/m_update.js
})