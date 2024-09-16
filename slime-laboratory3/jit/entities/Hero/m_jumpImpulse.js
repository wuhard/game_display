(function anonymous(context
) {
/*
	Index: 1125
	Path:  entities/Hero::m_jumpImpulse
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_jumpImpulse() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "jump";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("jump");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "jump");
                                } else { 
                                   stack0.axCallProperty($names[1], ["jump"], false);
                                }
                            }
                        }
                        stack0 = 1;
                        stack0 = +1;
                        local1 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::NORMAL_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['NORMAL_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgNORMAL_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 31; continue; };
                        stack0 = -1;
                        stack0 = +-1;
                        local1 = stack0;
                    case 31:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::ZERO_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ZERO_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgZERO_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!stack0) { p = 55; continue; };
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[4], false, false);
                        stack1 = -1;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 *= local1;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 55:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PlayerLifes'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPlayerLifes;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 81; continue; };
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[4], false, false);
                        stack1 = -4;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 *= local1;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                        { p = 117; continue; };
                    case 81:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PlayerLifes'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPlayerLifes;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 = 2;
                        if (2 != stack0) { p = 107; continue; };
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[4], false, false);
                        stack1 = -24;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 *= local1;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                        { p = 117; continue; };
                    case 107:
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[4], false, false);
                        stack1 = -84;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 *= local1;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                    case 117:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[4], false, false);
                        stack1 = -24;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 *= local1;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                    case 135:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_jumpImpulse.js
})