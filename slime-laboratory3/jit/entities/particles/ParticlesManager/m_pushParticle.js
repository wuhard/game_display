(function anonymous(context
) {
/*
	Index: 665
	Path:  entities/particles/ParticlesManager::m_pushParticle
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_pushParticle(local1 /* MovieClip */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */, local6 /* Number */, local7 /* Boolean */ = false, local8 /* Number */ = 0, local9 /* Number */ = 0, local10 /* Number */ = 0, local11 /* Number */ = 0) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force Number coerce */
        local6 = (+local6);
        /* Force Boolean coerce */
        local7 = (!!local7);
        /* Force Number coerce */
        local8 = (+local8);
        /* Force Number coerce */
        local9 = (+local9);
        /* Force Number coerce */
        local10 = (+local10);
        /* Force Number coerce */
        local11 = (+local11);
        // local12 is assigned before read, skip init
        let local12 = undefined
        // local13 is assigned before read, skip init
        let local13 = undefined
        // local14 is assigned before read, skip init
        let local14 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local12 = 0;
                        { p = 11; continue; };
                    case 10:
                    case 11:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local13 = stack1;
                        // 7 0::lastUsedParticle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglastUsedParticle;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) + 1;
                        local14 = stack1;
//                        stack1 = local13;// JIT: redundant assigment, value unused
//                        stack2 = local14;// JIT: redundant assigment, value unused
                        // 7 0::lastUsedParticle
                        if (!(local13 != undefined && local13[AX_CLASS_SYMBOL])){
                            local13.lastUsedParticle = local14;
                        } else {
                            context.setproperty($names[0], local14, local13);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesAmount
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgparticlesAmount;
                        stack0 %= stack1;
                        stack0 |= 0;
                        local12 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lastUsedParticle
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglastUsedParticle;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesAmount
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgparticlesAmount;
                        if (!(stack1 <= stack0)) { p = 59; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::lastUsedParticle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglastUsedParticle = 0;
                    case 59:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::particleSprite
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particleSprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticleSprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::ResquedFriendParticle
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgResquedFriendParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (!stack1) { p = 95; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::dead
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 95:
                        stack1 = stack0;
                        if (stack1) { p = 137; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::particleSprite
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particleSprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticleSprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::PointStringParticle
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgPointStringParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (!stack1) { p = 137; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::dead
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 137:
                        stack1 = stack0;
                        if (stack1) { p = 179; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::particleSprite
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particleSprite'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticleSprite;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::ShieldSprite
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgShieldSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (!stack1) { p = 179; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::dead
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 179:
                        if (stack0) { p = 10; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local4;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack5 = local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack6 = local6;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.assignNewValues(local1, local2, local3, local4, local5, local6);
                        } else {
                            // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::assignNewValues
                            {
                                let t = stack0;
                                const m = t.$BgassignNewValues || (t = sec.box(stack0), t.$BgassignNewValues);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1, local2, local3, local4, local5, local6);
                                } else { 
                                   stack0.axCallProperty($names[7], [local1, local2, local3, local4, local5, local6], false);
                                }
                            }
                        }
                        // JIT: potential type:7 0:flash.display::MovieClip
                        stack0 = local1;
                        // 7 0::LifeParticle
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$BgLifeParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack0 = stack1.axIsType(local1);
                        if (!stack0) { p = 266; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::scaleX
                        //Possible type:7 0::LifeParticle
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['scaleX'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::scaleX
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['scaleX'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$BgscaleX;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = 10;// JIT: redundant assigment, value unused
                        stack1 *= 10;
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::counter
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.counter = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::scaleX
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['scaleX'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::scaleX
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['scaleX'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$BgscaleX;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = 10;// JIT: redundant assigment, value unused
                        stack1 /= 10;
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::foo
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.foo = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
                        { p = 289; continue; };
                    case 266:
                        // JIT: potential type:7 0:flash.display::MovieClip
                        stack0 = local1;
                        // 7 0::FizzleParticle
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack1 = temp.$BgFizzleParticle;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[12]);
                        }
                        stack0 = stack1.axIsType(local1);
                        if (!stack0) { p = 289; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local8;
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::foo
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.foo = local8;
                        } else {
                            context.setproperty($names[11], local8, stack0);
                        }
                    case 289:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local9;
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::foo2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.foo2 = local9;
                        } else {
                            context.setproperty($names[13], local9, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local10;
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::foo3
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.foo3 = local10;
                        } else {
                            context.setproperty($names[14], local10, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local12;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local12;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[1], local12);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local11;
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::foo4
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.foo4 = local11;
                        } else {
                            context.setproperty($names[15], local11, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_pushParticle.js
})