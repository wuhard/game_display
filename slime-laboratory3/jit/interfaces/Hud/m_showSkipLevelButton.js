(function anonymous(context
) {
/*
	Index: 653
	Path:  interfaces/Hud::m_showSkipLevelButton
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_showSkipLevelButton(local1 /* Boolean */) {
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
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 34; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
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
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
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
                    case 34:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
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
                    case 46:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/Hud/m_showSkipLevelButton.js
})