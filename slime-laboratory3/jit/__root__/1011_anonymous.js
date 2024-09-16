(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/1011_anonymous::anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous() {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 0::CLICK
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "click";// JIT: redundant assigment, value unused
        // 7 0::CLICK
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CLICK = "click";
        } else {
            context.setproperty($names[0], "click", stack0);
        }
        // 7 0::DOUBLE_CLICK
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "doubleClick";// JIT: redundant assigment, value unused
        // 7 0::DOUBLE_CLICK
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DOUBLE_CLICK = "doubleClick";
        } else {
            context.setproperty($names[1], "doubleClick", stack0);
        }
        // 7 0::MOUSE_DOWN
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "mouseDown";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_DOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_DOWN = "mouseDown";
        } else {
            context.setproperty($names[2], "mouseDown", stack0);
        }
        // 7 0::MOUSE_MOVE
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = "mouseMove";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_MOVE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_MOVE = "mouseMove";
        } else {
            context.setproperty($names[3], "mouseMove", stack0);
        }
        // 7 0::MOUSE_OUT
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = "mouseOut";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_OUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_OUT = "mouseOut";
        } else {
            context.setproperty($names[4], "mouseOut", stack0);
        }
        // 7 0::MOUSE_OVER
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = "mouseOver";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_OVER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_OVER = "mouseOver";
        } else {
            context.setproperty($names[5], "mouseOver", stack0);
        }
        // 7 0::MOUSE_UP
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = "mouseUp";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_UP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_UP = "mouseUp";
        } else {
            context.setproperty($names[6], "mouseUp", stack0);
        }
        // 7 0::RELEASE_OUTSIDE
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = "releaseOutside";// JIT: redundant assigment, value unused
        // 7 0::RELEASE_OUTSIDE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RELEASE_OUTSIDE = "releaseOutside";
        } else {
            context.setproperty($names[7], "releaseOutside", stack0);
        }
        // 7 0::MOUSE_WHEEL
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = "mouseWheel";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_WHEEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_WHEEL = "mouseWheel";
        } else {
            context.setproperty($names[8], "mouseWheel", stack0);
        }
        // 7 0::ROLL_OUT
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = "rollOut";// JIT: redundant assigment, value unused
        // 7 0::ROLL_OUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ROLL_OUT = "rollOut";
        } else {
            context.setproperty($names[9], "rollOut", stack0);
        }
        // 7 0::ROLL_OVER
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = "rollOver";// JIT: redundant assigment, value unused
        // 7 0::ROLL_OVER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ROLL_OVER = "rollOver";
        } else {
            context.setproperty($names[10], "rollOver", stack0);
        }
        // 7 0::MIDDLE_CLICK
        stack0 = scope0.findScopeProperty($names[11], false, false);
//        stack1 = "middleClick";// JIT: redundant assigment, value unused
        // 7 0::MIDDLE_CLICK
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MIDDLE_CLICK = "middleClick";
        } else {
            context.setproperty($names[11], "middleClick", stack0);
        }
        // 7 0::MIDDLE_MOUSE_DOWN
        stack0 = scope0.findScopeProperty($names[12], false, false);
//        stack1 = "middleMouseDown";// JIT: redundant assigment, value unused
        // 7 0::MIDDLE_MOUSE_DOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MIDDLE_MOUSE_DOWN = "middleMouseDown";
        } else {
            context.setproperty($names[12], "middleMouseDown", stack0);
        }
        // 7 0::MIDDLE_MOUSE_UP
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = "middleMouseUp";// JIT: redundant assigment, value unused
        // 7 0::MIDDLE_MOUSE_UP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MIDDLE_MOUSE_UP = "middleMouseUp";
        } else {
            context.setproperty($names[13], "middleMouseUp", stack0);
        }
        // 7 0::RIGHT_CLICK
        stack0 = scope0.findScopeProperty($names[14], false, false);
//        stack1 = "rightClick";// JIT: redundant assigment, value unused
        // 7 0::RIGHT_CLICK
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RIGHT_CLICK = "rightClick";
        } else {
            context.setproperty($names[14], "rightClick", stack0);
        }
        // 7 0::RIGHT_MOUSE_DOWN
        stack0 = scope0.findScopeProperty($names[15], false, false);
//        stack1 = "rightMouseDown";// JIT: redundant assigment, value unused
        // 7 0::RIGHT_MOUSE_DOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RIGHT_MOUSE_DOWN = "rightMouseDown";
        } else {
            context.setproperty($names[15], "rightMouseDown", stack0);
        }
        // 7 0::RIGHT_MOUSE_UP
        stack0 = scope0.findScopeProperty($names[16], false, false);
//        stack1 = "rightMouseUp";// JIT: redundant assigment, value unused
        // 7 0::RIGHT_MOUSE_UP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RIGHT_MOUSE_UP = "rightMouseUp";
        } else {
            context.setproperty($names[16], "rightMouseUp", stack0);
        }
        // 7 0::CONTEXT_MENU
        stack0 = scope0.findScopeProperty($names[17], false, false);
//        stack1 = "contextMenu";// JIT: redundant assigment, value unused
        // 7 0::CONTEXT_MENU
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CONTEXT_MENU = "contextMenu";
        } else {
            context.setproperty($names[17], "contextMenu", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1011_anonymous.js
})