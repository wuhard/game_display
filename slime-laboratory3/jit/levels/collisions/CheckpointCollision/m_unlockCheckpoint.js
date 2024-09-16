(function anonymous(context
) {
/*
	Index: 1579
	Path:  levels/collisions/CheckpointCollision::m_unlockCheckpoint
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_unlockCheckpoint() {
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
                        // 7 0::alreadyCollided
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgalreadyCollided;
                        //JIT: Emit inline return
                        if (stack0) { return; }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREE_CHECKPOINT_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREE_CHECKPOINT_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_SECONDS
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['FREE_CHECKPOINT_SECONDS'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgFREE_CHECKPOINT_SECONDS;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        stack1 *= 30;
                        if (!(stack1 <= stack0)) { p = 37; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREE_CHECKPOINT_COUNTER = 0;
                        } else {
                            context.setproperty($names[1], 0, stack0);
                        }
                    case 37:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hud
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hud'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghud;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showCheckpointButton(false, this);
                        } else {
                            // 7 0::showCheckpointButton
                            {
                                let t = stack0;
                                const m = t.$BgshowCheckpointButton || (t = sec.box(stack0), t.$BgshowCheckpointButton);
                                if( typeof m === "function" ) { 
                                    m.call(t, false, this);
                                } else { 
                                   stack0.axCallProperty($names[4], [false, this], false);
                                }
                            }
                        }
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
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateLastCheckpoint(this);
                        } else {
                            // 7 0::updateLastCheckpoint
                            {
                                let t = stack0;
                                const m = t.$BgupdateLastCheckpoint || (t = sec.box(stack0), t.$BgupdateLastCheckpoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, this);
                                } else { 
                                   stack0.axCallProperty($names[6], [this], false);
                                }
                            }
                        }
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
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lightUpCheckpoint();
                        } else {
                            // 7 0::lightUpCheckpoint
                            {
                                let t = stack0;
                                const m = t.$BglightUpCheckpoint || (t = sec.box(stack0), t.$BglightUpCheckpoint);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::DEATHS_AMOUNT
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.DEATHS_AMOUNT = 0;
                        } else {
                            context.setproperty($names[8], 0, stack0);
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
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = 105;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndPlay(105);
                        } else {
                            // 9 {3, 0, 1:levels.collisions:CheckpointCollision, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 5:levels.collisions:CheckpointCollision, 5:levels.collisions:LevelCollision}::gotoAndPlay
                            {
                                let t = stack0;
                                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                                if( typeof m === "function" ) { 
                                    m.call(t, 105);
                                } else { 
                                   stack0.axCallProperty($names[10], [105], false);
                                }
                            }
                        }
                    case 100:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CheckpointCollision/m_unlockCheckpoint.js
})