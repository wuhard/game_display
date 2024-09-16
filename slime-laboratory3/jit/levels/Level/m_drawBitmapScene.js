(function anonymous(context
) {
/*
	Index: 174
	Path:  levels/Level::m_drawBitmapScene
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_drawBitmapScene() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['world'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgworld;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::int
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        stack2 = context.savedScope.global.object;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::camera
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
        stack3 = this.$Bgcamera;
        // 7 0::x
        //Possible type:7 0:flash.geom::Rectangle
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['x'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[3]);
            }
        }
        stack1 = context.call(stack1, stack2, [stack3], scope0);
        stack1 = -stack1;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['world'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgworld;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::int
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        stack2 = context.savedScope.global.object;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::camera
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
        stack3 = this.$Bgcamera;
        // 7 0::y
        //Possible type:7 0:flash.geom::Rectangle
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[4]);
            }
        }
        stack1 = context.call(stack1, stack2, [stack3], scope0);
        stack1 = -stack1;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/levels/Level/m_drawBitmapScene.js
})