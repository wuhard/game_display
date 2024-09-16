(function anonymous(context
) {
/*
	Index: 1043
	Path:  states/SplashState::m_exitPanelState
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_exitPanelState() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
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
//        stack1 = "select";// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.PlaySound("select");
        } else {
            // 7 0::PlaySound
            {
                let t = stack0;
                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                if( typeof m === "function" ) { 
                    m.call(t, "select");
                } else { 
                   stack0.axCallProperty($names[1], ["select"], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/states/SplashState/m_exitPanelState.js
})