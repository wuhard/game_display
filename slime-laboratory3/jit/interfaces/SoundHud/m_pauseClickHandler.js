(function anonymous(context
) {
/*
	Index: 527
	Path:  interfaces/SoundHud::m_pauseClickHandler
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_pauseClickHandler(local1 /* MouseEvent */) {
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::PauseOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PauseOn = true;
                        } else {
                            context.setproperty($names[1], true, stack0);
                        }
                    case 17:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/SoundHud/m_pauseClickHandler.js
})