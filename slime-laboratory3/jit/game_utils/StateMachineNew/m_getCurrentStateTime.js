(function anonymous(context
) {
/*
	Index: 536
	Path:  game_utils/StateMachineNew::m_getCurrentStateTime
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::int
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const flash_utils__getTimer_def = context.getTopLevel(0); // flash.utils:getTimer

    return function compiled_m_getCurrentStateTime() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:flash.utils::getTimer
        /* GenerateLexImports */
//        stack0 = flash_utils__getTimer_def;// JIT: redundant assigment, value unused
        if (!(_a = typeof flash_utils__getTimer_def, ((_a !== 'object' && _a !== 'function' ) || flash_utils__getTimer_def == null || flash_utils__getTimer_def[AX_CLASS_SYMBOL]))) {
           stack0 = flash_utils__getTimer_def.getTimer();
        } else {
            // 7 0:flash.utils::getTimer
            {
                let t = flash_utils__getTimer_def;
                const m = t.$BggetTimer || (t = sec.box(flash_utils__getTimer_def), t.$BggetTimer);
                if( typeof m === "function" ) { 
                    stack0 = t.$BggetTimer ();
                } else { 
                    stack0 = flash_utils__getTimer_def.axCallProperty($names[0], [], false);
                }
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::stateTimeCounter
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$BgstateTimeCounter;
        stack0 -= stack1;
        return (stack0|0);
    }
//# sourceURL=http://jit/game_utils/StateMachineNew/m_getCurrentStateTime.js
})