(function anonymous(context
) {
/*
	Index: 654
	Path:  interfaces/Hud::m_showCheckpointButton
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_showCheckpointButton(local1 /* Boolean */, local2 /* CheckpointCollision */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels.collisions::CheckpointCollision// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 1:interfaces:Hud::checkpointCollisionToUnlock
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::CheckpointCollision  */ 
                        this.$BgcheckpointCollisionToUnlock = local2;
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 39; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[1], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[2], 1, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 39:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = 0.98;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.98;
                        } else {
                            context.setproperty($names[2], 0.98, stack0);
                        }
                    case 51:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/Hud/m_showCheckpointButton.js
})