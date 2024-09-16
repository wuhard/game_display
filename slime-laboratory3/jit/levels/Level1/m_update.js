(function anonymous(context
) {
/*
	Index: 1225
	Path:  levels/Level1::m_update
	Type:  Public
	Kind:  Method
	Super: levels/Level
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
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
                        stack0 = this;
                        sec.box(this).axCallSuper($names[0], context.savedScope, []);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0::hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1424;
                        stack0 = stack0 > 1424;
                        stack1 = stack0;
                        if (!stack1) { p = 40; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0::hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = 208;
                        stack0 = stack0 >= 208;
                    case 40:
                        stack1 = stack0;
                        if (stack1) { p = 60; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0::hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = 256;
                        stack0 = stack0 >= 256;
                    case 60:
                        if (!stack0) { p = 76; continue; };
                        // 7 0::cameraYOffset
                        stack0 = scope0.findScopeProperty($names[4], false, false);
//                        stack1 = 48;// JIT: redundant assigment, value unused
                        // 7 0::cameraYOffset
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.cameraYOffset = 48;
                        } else {
                            context.setproperty($names[4], 48, stack0);
                        }
                        { p = 84; continue; };
                    case 76:
                        // 7 0::cameraYOffset
                        stack0 = scope0.findScopeProperty($names[4], false, false);
//                        stack1 = -48;// JIT: redundant assigment, value unused
                        // 7 0::cameraYOffset
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.cameraYOffset = -48;
                        } else {
                            context.setproperty($names[4], -48, stack0);
                        }
                    case 84:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0::hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack0 = +stack0;
                        local1 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgdPad;
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null == stack0) { return; }
                        stack0 = local1;
                        stack1 = 270;
                        if (!(270 >= local1)) { p = 125; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgdPad;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateTutorial(1);
                        } else {
                            // 7 0::updateTutorial
                            {
                                let t = stack0;
                                const m = t.$BgupdateTutorial || (t = sec.box(stack0), t.$BgupdateTutorial);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[5], [1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 125:
                        stack0 = local1;
                        stack1 = 500;
                        stack0 = local1 >= 500;
                        stack1 = stack0;
                        if (!stack1) { p = 141; continue; };
                        stack0 = local1;
                        stack1 = 675;
                        stack0 = local1 <= 675;
                    case 141:
                        if (!stack0) { p = 158; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgdPad;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateTutorial(2);
                        } else {
                            // 7 0::updateTutorial
                            {
                                let t = stack0;
                                const m = t.$BgupdateTutorial || (t = sec.box(stack0), t.$BgupdateTutorial);
                                if( typeof m === "function" ) { 
                                    m.call(t, 2);
                                } else { 
                                   stack0.axCallProperty($names[5], [2], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 158:
                        stack0 = local1;
                        stack1 = 740;
                        stack0 = local1 >= 740;
                        stack1 = stack0;
                        if (!stack1) { p = 174; continue; };
                        stack0 = local1;
                        stack1 = 900;
                        stack0 = local1 <= 900;
                    case 174:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgdPad;
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateTutorial(4);
                        } else {
                            // 7 0::updateTutorial
                            {
                                let t = stack0;
                                const m = t.$BgupdateTutorial || (t = sec.box(stack0), t.$BgupdateTutorial);
                                if( typeof m === "function" ) { 
                                    m.call(t, 4);
                                } else { 
                                   stack0.axCallProperty($names[5], [4], false);
                                }
                            }
                        }
                    case 187:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level1/m_update.js
})