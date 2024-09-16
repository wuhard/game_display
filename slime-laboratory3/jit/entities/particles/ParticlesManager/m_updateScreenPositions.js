(function anonymous(context
) {
/*
	Index: 664
	Path:  entities/particles/ParticlesManager::m_updateScreenPositions
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateScreenPositions(local1 /* Rectangle */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 44; continue; };
                    case 12:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local2;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
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
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 42; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        stack1 = local2;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(local1);
                        } else {
                            // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1);
                                } else { 
                                   stack0.axCallProperty($names[2], [local1], false);
                                }
                            }
                        }
                    case 42:
                        local2 = (local2 | 0) + 1;
                    case 44:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesAmount
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgparticlesAmount;
                        if (stack1 > local2) { p = 12; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_updateScreenPositions.js
})