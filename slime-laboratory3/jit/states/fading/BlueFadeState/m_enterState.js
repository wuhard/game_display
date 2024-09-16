(function anonymous(context
) {
/*
	Index: 1057
	Path:  states/fading/BlueFadeState::m_enterState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_enterState(local1 /* Game */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::fadingOut
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['fadingOut'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgfadingOut;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!stack0) { p = 101; continue; };
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FADE_IN_FLAG
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.FADE_IN_FLAG = false;
                        } else {
                            context.setproperty($names[1], false, local1);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::BluePanel
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack1 = context.constructprop($names[2], stack1, []);
                        // 7 3::fader
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::BluePanel  */ 
                        this.$Bgfader = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack1 = this.$Bgfader;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[5], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = 0;
                        } else {
                            context.setproperty($names[6], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 0;
                        } else {
                            context.setproperty($names[7], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::SCREEN_WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['SCREEN_WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgSCREEN_WIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 += 2;
                        // 7 0::width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.width = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::SCREEN_HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['SCREEN_HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgSCREEN_HEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 += 2;
                        // 7 0::height
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.height = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:7 0::BluePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0;
                        } else {
                            context.setproperty($names[12], 0, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 101:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 3::delayCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgdelayCounter = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack1 = this.$Bgfader;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['rootMovie'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgrootMovie;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[14], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::fader
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::BluePanel  */ 
                        stack0 = this.$Bgfader;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[12], 1, stack0);
                        }
                    case 140:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/fading/BlueFadeState/m_enterState.js
})