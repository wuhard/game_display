(function anonymous(context
) {
/*
	Index: 1577
	Path:  levels/collisions/CheckpointCollision::m_update
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
                        // 7 0::startingCheckpointFlag
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgstartingCheckpointFlag;
                        if (!stack0) { p = 32; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::alreadyCollided
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgalreadyCollided = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::startingCheckpointFlag
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgstartingCheckpointFlag = false;
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateLastCheckpoint(this, true);
                        } else {
                            // 7 0::updateLastCheckpoint
                            {
                                let t = stack0;
                                const m = t.$BgupdateLastCheckpoint || (t = sec.box(stack0), t.$BgupdateLastCheckpoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, this, true);
                                } else { 
                                   stack0.axCallProperty($names[1], [this, true], false);
                                }
                            }
                        }
                    case 32:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lightUp
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BglightUp;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::lightAnim
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['lightAnim'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglightAnim;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::lightAnim
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['lightAnim'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglightAnim;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::lightAnim
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['lightAnim'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglightAnim;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = 1;
                        //JIT: Emit inline return
                        if (!(1 <= stack0)) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::lightAnim
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['lightAnim'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglightAnim;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[3], 1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::lightUp
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglightUp = false;
                    case 92:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CheckpointCollision/m_update.js
})