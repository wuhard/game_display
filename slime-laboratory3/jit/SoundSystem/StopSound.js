(function anonymous(context
) {
/*
	Index: 56
	Path:  SoundSystem.StopSound
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_StopSound() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$BgsoundChannel;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.stop();
        } else {
            // 7 0::stop
            {
                let t = stack0;
                const m = t.$Bgstop || (t = sec.box(stack0), t.$Bgstop);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[0], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/SoundSystem/StopSound.js
})