(function anonymous(context
) {
/*
	Index: 1065
	Path:  states/fading/BlackFadeState::m_exitState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_exitState(local1 /* Game */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootMovie
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootMovie'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootMovie;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::fader
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BlackPanel  */ 
        stack1 = this.$Bgfader;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::fader
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::BlackPanel  */ 
        this.$Bgfader = null;
        return;
    }
//# sourceURL=http://jit/states/fading/BlackFadeState/m_exitState.js
})