(function anonymous(context
) {
/*
	Index: 179
	Path:  levels/Level::m_cameraRoutine
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_cameraRoutine() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::camera
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
        stack0 = this.$Bgcamera;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::camera
        //Possible type:7 0:flash.geom::Rectangle
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
        stack0 = this.$Bgcamera;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
        return;
    }
//# sourceURL=http://jit/levels/Level/m_cameraRoutine.js
})