(function anonymous(context
) {
/*
	Index: 1681
	Path:  levels/collisions/LevelCompleteCollision::m_checkCollision
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_checkCollision(local1 /* Hero */) {
        // Possible use a real "this"

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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::alreadyCollided
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgalreadyCollided;
                        //JIT: Emit inline return
                        if (stack0) { return; }
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::aabb
                        //Possible type:7 0::Boolean
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['aabb'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgaabb;
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
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::alreadyCollided
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgalreadyCollided = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::lightUp
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglightUp = true;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::dots
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dots'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdots;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[3], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::levelEndDelay
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglevelEndDelay = 0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_ALREADY_WON
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.LEVEL_ALREADY_WON = true;
                        } else {
                            context.setproperty($names[4], true, stack0);
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
//                        stack1 = "checkpoint";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("checkpoint");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "checkpoint");
                                } else { 
                                   stack0.axCallProperty($names[6], ["checkpoint"], false);
                                }
                            }
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
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::LightParticleSprite
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        stack1 = context.constructprop($names[8], stack1, []);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxPos;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(stack1, stack2, stack3, 0, 0, 0);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, 0, 0, 0);
                                } else { 
                                   stack0.axCallProperty($names[9], [stack1, stack2, stack3, 0, 0, 0], false);
                                }
                            }
                        }
                    case 95:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/LevelCompleteCollision/m_checkCollision.js
})