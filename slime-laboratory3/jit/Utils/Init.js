(function anonymous(context
) {
/*
	Index: 32
	Path:  Utils.Init
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Init() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
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
                        // 7 0::CustomContextMenu
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0:flash.ui::ContextMenu
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        stack1 = context.constructprop($names[1], stack1, []);
                        // 7 0::CustomContextMenu
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.CustomContextMenu = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgCustomContextMenu;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.hideBuiltInItems();
                        } else {
                            // 7 0::hideBuiltInItems
                            {
                                let t = stack0;
                                const m = t.$BghideBuiltInItems || (t = sec.box(stack0), t.$BghideBuiltInItems);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 7 0::GFX_SCALE
                        stack0 = scope0.findScopeProperty($names[3], false, false);
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        // 7 0::GFX_SCALE
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.GFX_SCALE = 3;
                        } else {
                            context.setproperty($names[3], 3, stack0);
                        }
                        // 7 0::GFX_INV_SCALE
                        stack0 = scope0.findScopeProperty($names[4], false, false);
                        stack1 = 1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgGFX_SCALE;
                        stack1 /= stack2;
                        // 7 0::GFX_INV_SCALE
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.GFX_INV_SCALE = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                        // 7 0::__width
                        stack0 = scope0.findScopeProperty($names[5], false, false);
//                        stack1 = 1031;// JIT: redundant assigment, value unused
                        // 7 0::__width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.__width = 1031;
                        } else {
                            context.setproperty($names[5], 1031, stack0);
                        }
                        // 7 0::__height
                        stack0 = scope0.findScopeProperty($names[6], false, false);
//                        stack1 = 580;// JIT: redundant assigment, value unused
                        // 7 0::__height
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.__height = 580;
                        } else {
                            context.setproperty($names[6], 580, stack0);
                        }
                        // 7 0::SCREEN_WIDTH
                        stack0 = scope0.findScopeProperty($names[7], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg__width;
                        // 7 0::SCREEN_WIDTH
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SCREEN_WIDTH = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                        // 7 0::SCREEN_HEIGHT
                        stack0 = scope0.findScopeProperty($names[8], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg__height;
                        // 7 0::SCREEN_HEIGHT
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SCREEN_HEIGHT = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
                        // 7 0::WIDTH
                        stack0 = scope0.findScopeProperty($names[9], false, false);
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        stack2 = context.savedScope.global.object;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$Bg__width;
                        stack4 = 1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack5 = this.$BgGFX_SCALE;
                        stack4 /= stack5;
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::WIDTH
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.WIDTH = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
                        // 7 0::HEIGHT
                        stack0 = scope0.findScopeProperty($names[11], false, false);
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        stack2 = context.savedScope.global.object;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$Bg__height;
                        stack4 = 1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack5 = this.$BgGFX_SCALE;
                        stack4 /= stack5;
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::HEIGHT
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.HEIGHT = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgIS_IPHONE_X;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0::X_SCREEN_MARGIN
                        stack0 = scope0.findScopeProperty($names[12], false, false);
//                        stack1 = 24;// JIT: redundant assigment, value unused
                        // 7 0::X_SCREEN_MARGIN
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.X_SCREEN_MARGIN = 24;
                        } else {
                            context.setproperty($names[12], 24, stack0);
                        }
                    case 135:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Utils/Init.js
})