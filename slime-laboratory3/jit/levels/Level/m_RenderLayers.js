(function anonymous(context
) {
/*
	Index: 175
	Path:  levels/Level::m_RenderLayers
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_RenderLayers() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local1 = null;
//        stack0 = 0;// JIT: redundant assigment, value unused
        local2 = 0;
//        stack0 = 0;// JIT: redundant assigment, value unused
        local3 = 0;
        // 7 0:flash.display::BitmapData
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::levelStage
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BglevelStage;
        // 7 0::width
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['width'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgwidth;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::levelStage
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack2 = this.$BglevelStage;
        // 7 0::height
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['height'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgheight;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        stack3 = true;// JIT: redundant assigment, value unused
//        stack4 = 0;// JIT: redundant assigment, value unused
        stack0 = context.constructprop($names[0], stack0, [stack1, stack2, true, 0]);
        //IR: Drop coerce, reason: redundant
        local1 = stack0;
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::levelStage
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BglevelStage;
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
            local1.draw(stack1);
        } else {
            // 7 0::draw
            {
                let t = local1;
                const m = t.$Bgdraw || (t = sec.box(local1), t.$Bgdraw);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   local1.axCallProperty($names[3], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:flash.display::Bitmap
        stack1 = scope0.findScopeProperty($names[4], true, false);
//        stack2 = local1;// JIT: redundant assigment, value unused
        stack1 = context.constructprop($names[4], stack1, [local1]);
        // 7 0::levelStageBitmap
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
        this.$BglevelStageBitmap = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::levelStageBitmap
        //Possible type:7 0:flash.display::BitmapData
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
        stack0 = this.$BglevelStageBitmap;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::levelStageBitmap
        //Possible type:7 0:flash.display::Bitmap
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
        stack1 = this.$BglevelStageBitmap;
//        stack2 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack3 = 0;// JIT: redundant assigment, value unused
        local4 = 0;
        // 7 0::y
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
            stack1.y = 0;
        } else {
            context.setproperty($names[5], 0, stack1);
        }
//        stack1 = local4;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = local4;
        } else {
            context.setproperty($names[6], local4, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::levelStage
        //Possible type:7 0:flash.display::Bitmap
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BglevelStage;
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::visible
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.visible = false;
        } else {
            context.setproperty($names[7], false, stack0);
        }
        return;
    }
//# sourceURL=http://jit/levels/Level/m_RenderLayers.js
})