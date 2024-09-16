(function anonymous(context
) {
/*
	Index: 625
	Path:  levels/collisions/CollisionsManager::m_lightUpCheckpoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_lightUpCheckpoint() {
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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::SoundSystem
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgSoundSystem;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = "checkpoint";// JIT: redundant assigment, value unused
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
                   stack0.axCallProperty($names[1], ["checkpoint"], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:levels.collisions:CollisionsManager::level
        //Possible type:7 0::SoundSystem
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
                stack0 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0::LightParticleSprite
        stack1 = scope0.findScopeProperty($names[3], true, false);
        stack1 = context.constructprop($names[3], stack1, []);
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::currentCheckpoint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CheckpointCollision  */ 
        stack2 = this.$BgcurrentCheckpoint;
        // 7 0::xPos
        //Possible type:7 0:levels.collisions::CheckpointCollision
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['xPos'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgxPos;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[4]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::currentCheckpoint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CheckpointCollision  */ 
        stack3 = this.$BgcurrentCheckpoint;
        // 7 0::yPos
        //Possible type:7 0:levels.collisions::CheckpointCollision
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['yPos'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$BgyPos;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[5]);
            }
        }
//        stack4 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack5 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack6 = 0;// JIT: redundant assigment, value unused
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
                   stack0.axCallProperty($names[6], [stack1, stack2, stack3, 0, 0, 0], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_lightUpCheckpoint.js
})