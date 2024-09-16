(function anonymous(context
) {
/*
	Index: 517
	Path:  interfaces/SoundHud::m_keyDownPausePanel
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_keyDownPausePanel(local1 /* KeyboardEvent */) {
        // Possible use a real "this"

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
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:SoundHud::canPause
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgcanPause;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        //Possible type:7 0::Boolean
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = 112;
                        stack0 = stack0 == 112;
                        stack1 = stack0;
                        if (stack1) { p = 30; continue; };
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = 80;
                        stack0 = stack0 == 80;
                    case 30:
                        stack1 = stack0;
                        if (stack1) { p = 43; continue; };
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = 27;
                        stack0 = stack0 == 27;
                    case 43:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::PauseOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PauseOn = true;
                        } else {
                            context.setproperty($names[2], true, stack0);
                        }
                    case 54:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/SoundHud/m_keyDownPausePanel.js
})